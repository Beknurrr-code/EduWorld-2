import { uiLock, uiUnlock } from './UILock'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  purple: '#BC8CFF',
  blue:   '#58A6FF',
  text:   '#E6EDF3',
  muted:  '#8B949E',
  red:    '#FF4D4D',
}

export type TaskMode = 'board' | 'written'
export type TaskDiff = 'easy' | 'medium' | 'hard'

const DIFF_LABELS: Record<TaskDiff, string> = { easy: 'Лёгкое', medium: 'Среднее', hard: 'Сложное' }
const DIFF_COLORS: Record<TaskDiff, string> = { easy: '#4FFFB0', medium: '#FFD700', hard: '#FF4D4D' }
const DIFF_DESC: Record<TaskDiff, string> = {
  easy:   'Базовый уровень — проверка понимания. Справятся почти все.',
  medium: 'Средняя сложность — нужно подумать. Хорошие ученики справятся.',
  hard:   'Высокий уровень — только отличники. Остальные могут запутаться.',
}
const DIFF_ICON: Record<TaskDiff, string> = { easy: '🟢', medium: '🟡', hard: '🔴' }
const MODE_LABELS: Record<TaskMode, string> = { board: 'У доски', written: 'Письменно' }
const MODE_ICONS:  Record<TaskMode, string> = { board: '📋', written: '✏️' }
const MODE_DESC: Record<TaskMode, string> = {
  board:   'Вызовите ученика к доске. Повышает внимание хулиганов и лентяев.',
  written: 'Раздайте задание на бумаге. Каждый работает самостоятельно.',
}

export class TaskPanel {
  private overlay: HTMLElement
  private onConfirm: ((mode: TaskMode, diff: TaskDiff) => void) | null = null
  private selectedMode: TaskMode = 'written'
  private selectedDiff: TaskDiff = 'medium'
  private modeBtns: Map<TaskMode, HTMLElement> = new Map()
  private diffBtns: Map<TaskDiff, HTMLElement> = new Map()
  private taskTextEl!: HTMLElement
  private startBtn!: HTMLButtonElement
  private tasksByDiff: Record<TaskDiff, string> = { easy: '', medium: '', hard: '' }

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-taskpanel'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `
    document.body.appendChild(this.overlay)
  }

  open(
    tasks: { easy: string; medium: string; hard: string },
    onConfirm: (mode: TaskMode, diff: TaskDiff) => void,
  ): void {
    this.onConfirm = onConfirm
    this.tasksByDiff = tasks
    this.selectedMode = 'written'
    this.selectedDiff = 'medium'
    this.overlay.innerHTML = ''
    this.modeBtns.clear()
    this.diffBtns.clear()

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:16px;
      padding:24px 28px; width:720px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
    `

    // Header
    const header = document.createElement('div')
    header.innerHTML = `
      <div style="font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Фаза заданий</div>
      <div style="font-size:18px;font-weight:800;color:${C.text};">📝 Выберите формат задания</div>
    `
    card.appendChild(header)

    // Mode selection
    const modeLabel = document.createElement('div')
    modeLabel.style.cssText = `font-size:12px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`
    modeLabel.textContent = 'Формат:'
    card.appendChild(modeLabel)

    const modeRow = document.createElement('div')
    modeRow.style.cssText = `display:flex;gap:10px;`
    ;(['board', 'written'] as TaskMode[]).forEach(mode => {
      const btn = document.createElement('button')
      btn.style.cssText = `
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${C.border};
        background:${C.panel}; color:${C.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `
      btn.innerHTML = `
        <span style="font-size:24px;">${MODE_ICONS[mode]}</span>
        <strong style="font-size:14px;">${MODE_LABELS[mode]}</strong>
        <span style="font-size:11px;color:${C.muted};">${MODE_DESC[mode]}</span>
      `
      btn.addEventListener('click', () => { this.selectedMode = mode; this.refreshMode() })
      modeRow.appendChild(btn)
      this.modeBtns.set(mode, btn)
    })
    card.appendChild(modeRow)

    // Difficulty selection
    const diffLabel = document.createElement('div')
    diffLabel.style.cssText = `font-size:12px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`
    diffLabel.textContent = 'Сложность:'
    card.appendChild(diffLabel)

    const diffRow = document.createElement('div')
    diffRow.style.cssText = `display:flex;gap:10px;`
    ;(['easy', 'medium', 'hard'] as TaskDiff[]).forEach(diff => {
      const btn = document.createElement('button')
      btn.style.cssText = `
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${C.border};
        background:${C.panel}; color:${C.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `
      btn.innerHTML = `
        <span style="font-size:22px;">${DIFF_ICON[diff]}</span>
        <strong style="font-size:14px;color:${DIFF_COLORS[diff]};">${DIFF_LABELS[diff]}</strong>
        <span style="font-size:11px;color:${C.muted};text-align:center;">${DIFF_DESC[diff]}</span>
      `
      btn.addEventListener('click', () => { this.selectedDiff = diff; this.refreshDiff(); this.refreshTaskText() })
      diffRow.appendChild(btn)
      this.diffBtns.set(diff, btn)
    })
    card.appendChild(diffRow)

    // Task text preview
    const taskBox = document.createElement('div')
    taskBox.style.cssText = `
      background:${C.panel}; border:1px solid ${C.border}; border-radius:10px;
      padding:14px 18px; min-height:58px;
    `
    const taskBoxLabel = document.createElement('div')
    taskBoxLabel.style.cssText = `font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:700;`
    taskBoxLabel.textContent = 'Задание для класса:'
    this.taskTextEl = document.createElement('div')
    this.taskTextEl.style.cssText = `font-size:14px;color:${C.text};white-space:pre-wrap;line-height:1.6;`
    taskBox.appendChild(taskBoxLabel)
    taskBox.appendChild(this.taskTextEl)
    card.appendChild(taskBox)

    // Start button
    this.startBtn = document.createElement('button')
    this.startBtn.style.cssText = `
      padding:13px; border-radius:10px; border:none; background:${C.mint}; color:#000;
      font-size:15px; font-weight:900; cursor:pointer; font-family:inherit; transition:all .15s;
    `
    this.startBtn.textContent = '▶ Дать задание классу'
    this.startBtn.addEventListener('mouseenter', () => { this.startBtn.style.transform = 'scale(1.02)' })
    this.startBtn.addEventListener('mouseleave', () => { this.startBtn.style.transform = '' })
    this.startBtn.addEventListener('click', () => {
      this.hide()
      this.onConfirm?.(this.selectedMode, this.selectedDiff)
    })
    card.appendChild(this.startBtn)

    this.overlay.appendChild(card)
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()

    this.refreshMode()
    this.refreshDiff()
    this.refreshTaskText()
  }

  private refreshMode(): void {
    this.modeBtns.forEach((btn, mode) => {
      const sel = mode === this.selectedMode
      btn.style.borderColor = sel ? C.mint : C.border
      btn.style.background = sel ? C.mint + '18' : C.panel
    })
  }

  private refreshDiff(): void {
    this.diffBtns.forEach((btn, diff) => {
      const sel = diff === this.selectedDiff
      const col = DIFF_COLORS[diff]
      btn.style.borderColor = sel ? col : C.border
      btn.style.background = sel ? col + '22' : C.panel
    })
  }

  private refreshTaskText(): void {
    const text = this.tasksByDiff[this.selectedDiff]
    this.taskTextEl.textContent = text || '— нет данных —'
  }

  hide(): void {
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
    uiUnlock()
  }

  dispose(): void { this.overlay.remove() }
}
