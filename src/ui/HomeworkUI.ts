import { uiLock, uiUnlock } from './UILock'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

type HwDiff = 'easy' | 'medium' | 'hard'
const DIFF_LABELS: Record<HwDiff, string> = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }
const DIFF_COLORS: Record<HwDiff, string> = { easy: '#4FFFB0', medium: '#FFD700', hard: '#FF4D4D' }
const DIFF_ICON:   Record<HwDiff, string> = { easy: '🟢', medium: '🟡', hard: '🔴' }
const DIFF_TIP: Record<HwDiff, string> = {
  easy:   'Review — light practice. Students won\'t be overwhelmed.',
  medium: 'Material reinforcement. Requires effort but achievable.',
  hard:   'In-depth tasks. Only the most motivated will complete fully.',
}

export class HomeworkUI {
  private overlay: HTMLElement
  private onConfirm: ((give: boolean, diff: HwDiff) => void) | null = null
  private selectedDiff: HwDiff = 'medium'
  private diffBtns: Map<HwDiff, HTMLElement> = new Map()
  private hwTextEl!: HTMLElement
  private hwByDiff: Record<HwDiff, string> = { easy: '', medium: '', hard: '' }

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-homeworkui'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `
    document.body.appendChild(this.overlay)
  }

  open(
    homeworks: { easy: string; medium: string; hard: string },
    onConfirm: (give: boolean, diff: HwDiff) => void,
  ): void {
    this.onConfirm = onConfirm
    this.hwByDiff = homeworks
    this.selectedDiff = 'medium'
    this.diffBtns.clear()
    this.overlay.innerHTML = ''

    const card = this.buildCard()
    this.overlay.appendChild(card)
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()

    this.refreshDiff()
    this.refreshHwText()
  }

  private buildCard(): HTMLElement {
    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:16px;
      padding:24px 28px; width:660px; max-width:96vw; display:flex; flex-direction:column; gap:16px;
    `

    // Header
    const header = document.createElement('div')
    header.innerHTML = `
      <div style="font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">End of Lesson</div>
      <div style="font-size:18px;font-weight:800;color:${C.text};">📚 Assign Homework?</div>
    `
    card.appendChild(header)

    // Difficulty row
    const diffLabel = document.createElement('div')
    diffLabel.style.cssText = `font-size:12px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`
    diffLabel.textContent = 'Difficulty:'
    card.appendChild(diffLabel)

    const diffRow = document.createElement('div')
    diffRow.style.cssText = `display:flex;gap:10px;`
    ;(['easy', 'medium', 'hard'] as HwDiff[]).forEach(diff => {
      const btn = document.createElement('button')
      btn.style.cssText = `
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${C.border};
        background:${C.panel}; color:${C.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `
      btn.innerHTML = `
        <span style="font-size:20px;">${DIFF_ICON[diff]}</span>
        <strong style="font-size:14px;color:${DIFF_COLORS[diff]};">${DIFF_LABELS[diff]}</strong>
        <span style="font-size:11px;color:${C.muted};text-align:center;">${DIFF_TIP[diff]}</span>
      `
      btn.addEventListener('click', () => { this.selectedDiff = diff; this.refreshDiff(); this.refreshHwText() })
      diffRow.appendChild(btn)
      this.diffBtns.set(diff, btn)
    })
    card.appendChild(diffRow)

    // Homework text preview
    const hwBox = document.createElement('div')
    hwBox.style.cssText = `
      background:${C.panel}; border:1px solid ${C.border}; border-radius:10px;
      padding:14px 18px; min-height:50px;
    `
    const hwBoxLabel = document.createElement('div')
    hwBoxLabel.style.cssText = `font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:700;`
    hwBoxLabel.textContent = 'Homework assignment:'
    this.hwTextEl = document.createElement('div')
    this.hwTextEl.style.cssText = `font-size:14px;color:${C.text};white-space:pre-wrap;line-height:1.6;`
    hwBox.appendChild(hwBoxLabel)
    hwBox.appendChild(this.hwTextEl)
    card.appendChild(hwBox)

    // Buttons row
    const btnRow = document.createElement('div')
    btnRow.style.cssText = `display:flex;gap:10px;`

    const noBtn = document.createElement('button')
    noBtn.style.cssText = `
      flex:1; padding:13px; border-radius:10px; border:2px solid ${C.border};
      background:transparent; color:${C.muted}; font-size:14px; font-weight:700;
      cursor:pointer; font-family:inherit; transition:all .15s;
    `
    noBtn.textContent = '✗ Skip'
    noBtn.addEventListener('mouseenter', () => { noBtn.style.borderColor = '#FF4D4D'; noBtn.style.color = '#FF4D4D' })
    noBtn.addEventListener('mouseleave', () => { noBtn.style.borderColor = C.border; noBtn.style.color = C.muted })
    noBtn.addEventListener('click', () => { this.hide(); this.onConfirm?.(false, this.selectedDiff) })

    const yesBtn = document.createElement('button')
    yesBtn.style.cssText = `
      flex:2; padding:13px; border-radius:10px; border:none;
      background:${C.gold}; color:#000; font-size:15px; font-weight:900;
      cursor:pointer; font-family:inherit; transition:all .15s;
    `
    yesBtn.textContent = '✓ Assign to Class'
    yesBtn.addEventListener('mouseenter', () => { yesBtn.style.transform = 'scale(1.02)' })
    yesBtn.addEventListener('mouseleave', () => { yesBtn.style.transform = '' })
    yesBtn.addEventListener('click', () => { this.hide(); this.onConfirm?.(true, this.selectedDiff) })

    btnRow.appendChild(noBtn)
    btnRow.appendChild(yesBtn)
    card.appendChild(btnRow)

    return card
  }

  private refreshDiff(): void {
    this.diffBtns.forEach((btn, diff) => {
      const sel = diff === this.selectedDiff
      const col = DIFF_COLORS[diff]
      btn.style.borderColor = sel ? col : C.border
      btn.style.background = sel ? col + '22' : C.panel
    })
  }

  private refreshHwText(): void {
    const text = this.hwByDiff[this.selectedDiff]
    this.hwTextEl.textContent = text || '— no data —'
  }

  hide(): void {
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
    uiUnlock()
  }

  dispose(): void { this.overlay.remove() }
}
