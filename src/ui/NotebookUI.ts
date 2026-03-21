import { EventBus } from '../core/EventBus'
import { NotebookEntry } from '../systems/LessonSystem'
import { uiLock, uiUnlock } from './UILock'
import { t } from '../i18n'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  red:    '#FF4D4D',
  green:  '#3FB950',
  text:   '#E6EDF3',
  muted:  '#8B949E',
  nb:     '#FFFDE7',  // notebook paper yellow
  lines:  '#DEE2A0',
}

function gradeColor(g: number): string {
  if (g >= 5) return C.green
  if (g >= 4) return C.mint
  if (g >= 3) return C.gold
  return C.red
}

export class NotebookUI {
  private overlay: HTMLElement
  private notebooks: NotebookEntry[] = []
  private currentIdx = 0
  private onGrade: ((studentId: string, grade: number) => void) | null = null
  private onFinish: (() => void) | null = null
  private bus = EventBus.getInstance()

  private selectedGrade = 3
  private gradeButtons: HTMLButtonElement[] = []
  private pageContent!: HTMLElement
  private pageInfo!: HTMLElement
  private feedbackEl!: HTMLElement

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-notebook'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:300; font-family:'Nunito',sans-serif;
      backdrop-filter:blur(4px); opacity:0; pointer-events:none; transition:opacity .25s;
    `
    document.body.appendChild(this.overlay)
    this.buildUI()
  }

  private buildUI(): void {
    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:14px;
      width:660px; max-width:96vw; padding:28px 32px; display:flex; flex-direction:column; gap:18px;
    `

    // Header
    const header = document.createElement('div')
    header.style.cssText = `display:flex; align-items:center; justify-content:space-between;`
    header.innerHTML = `<h2 style="margin:0; color:${C.text}; font-size:20px;">${t('nb.title')}</h2>`
    this.pageInfo = document.createElement('span')
    this.pageInfo.style.cssText = `color:${C.muted}; font-size:14px;`
    header.appendChild(this.pageInfo)
    card.appendChild(header)

    // Notebook page
    const nbPageWrap = document.createElement('div')
    nbPageWrap.style.cssText = `background:${C.nb}; border-radius:8px; border:2px solid ${C.lines}; overflow:hidden; position:relative;`

    // Spiral holes (decorative)
    const spire = document.createElement('div')
    spire.style.cssText = `position:absolute; left:28px; top:0; bottom:0; width:2px; background:${C.lines}; z-index:1;`
    nbPageWrap.appendChild(spire)

    this.pageContent = document.createElement('div')
    this.pageContent.style.cssText = `padding:20px 20px 20px 44px; min-height:200px; position:relative;`
    nbPageWrap.appendChild(this.pageContent)
    card.appendChild(nbPageWrap)

    // Errors list
    const errSection = document.createElement('div')
    errSection.id = 'ew2-nb-errors'
    card.appendChild(errSection)

    // Grade selector
    const gradeRow = document.createElement('div')
    gradeRow.style.cssText = `display:flex; align-items:center; gap:10px;`
    gradeRow.innerHTML = `<span style="color:${C.muted}; font-size:14px; font-weight:700;">${t('nb.grade')}</span>`

    this.gradeButtons = []
    for (let g = 2; g <= 5; g++) {
      const btn = document.createElement('button')
      btn.textContent = String(g)
      btn.dataset['grade'] = String(g)
      btn.style.cssText = `width:44px; height:44px; border-radius:8px; border:2px solid ${C.border};
        background:${C.panel}; color:${C.text}; font-size:20px; font-weight:800; cursor:pointer; transition:all .15s;`
      btn.addEventListener('click', () => this.selectGrade(g))
      gradeRow.appendChild(btn)
      this.gradeButtons.push(btn)
    }
    card.appendChild(gradeRow)

    // Feedback line
    this.feedbackEl = document.createElement('div')
    this.feedbackEl.style.cssText = `font-size:13px; color:${C.muted}; font-style:italic; min-height:18px;`
    card.appendChild(this.feedbackEl)

    // Actions
    const actions = document.createElement('div')
    actions.style.cssText = `display:flex; gap:10px; justify-content:flex-end;`

    const btnNext = document.createElement('button')
    btnNext.textContent = t('nb.submit')
    btnNext.style.cssText = `padding:10px 22px; border-radius:8px; border:none; background:${C.mint}; color:#000; font-weight:800; cursor:pointer; font-size:14px;`
    btnNext.addEventListener('click', () => this.submitAndNext())

    const btnFinish = document.createElement('button')
    btnFinish.textContent = t('nb.finish')
    btnFinish.style.cssText = `padding:10px 18px; border-radius:8px; border:1px solid ${C.border}; background:transparent; color:${C.muted}; cursor:pointer; font-size:14px;`
    btnFinish.addEventListener('click', () => this.finish())

    actions.append(btnNext, btnFinish)
    card.appendChild(actions)

    this.overlay.appendChild(card)
  }

  private selectGrade(g: number): void {
    this.selectedGrade = g
    const colors = [C.red, C.red, C.gold, C.mint, C.green]
    this.gradeButtons.forEach(btn => {
      const bg = Number(btn.dataset['grade']) === g ? gradeColor(g) : C.panel
      btn.style.background = bg
      btn.style.color = Number(btn.dataset['grade']) === g ? '#000' : C.text
      btn.style.borderColor = Number(btn.dataset['grade']) === g ? gradeColor(g) : C.border
    })
    const feedbacks: Record<number, string> = {
      2: t('nb.feedback.2'),
      3: t('nb.feedback.3'),
      4: t('nb.feedback.4'),
      5: t('nb.feedback.5'),
    }
    this.feedbackEl.textContent = feedbacks[g] ?? ''
  }

  private renderPage(): void {
    if (this.notebooks.length === 0) return
    const nb = this.notebooks[this.currentIdx]
    this.pageInfo.textContent = `${this.currentIdx + 1} / ${this.notebooks.length}`

    // Notebook page lines
    this.pageContent.innerHTML = ''
    const nameDiv = document.createElement('div')
    nameDiv.style.cssText = `font-family:'JetBrains Mono',monospace; font-size:14px; color:#333; margin-bottom:10px; border-bottom:1px solid ${C.lines}; padding-bottom:6px;`
    nameDiv.textContent = `${t('nb.student')} ${nb.studentName}`
    this.pageContent.appendChild(nameDiv)

    // Show actual written content if available, else ruled lines
    const workLines: string[] = (nb as any).content ?? []
    if (workLines.length > 0) {
      workLines.forEach(text => {
        const lineEl = document.createElement('div')
        lineEl.style.cssText = `
          font-family:'JetBrains Mono',monospace; font-size:12px; color:#2a2a2a;
          line-height:1.9; border-bottom:1px solid ${C.lines}; min-height:22px;
          padding:0 2px; white-space:pre;
        `
        lineEl.textContent = text
        this.pageContent.appendChild(lineEl)
      })
    } else {
      for (let i = 0; i < 6; i++) {
        const line = document.createElement('div')
        line.style.cssText = `height:1px; background:${C.lines}; margin:18px 0;`
        this.pageContent.appendChild(line)
      }
    }

    // Errors overlay
    const errArea = this.overlay.querySelector('#ew2-nb-errors') as HTMLElement
    errArea.innerHTML = ''
    if (nb.errors.length > 0) {
      const errTitle = document.createElement('p')
      errTitle.style.cssText = `margin:0 0 6px; font-weight:700; color:${C.red}; font-size:13px;`
      errTitle.textContent = `${t('nb.errors_title')} (${nb.errors.length}):`
      errArea.appendChild(errTitle)
      nb.errors.forEach(err => {
        const e = document.createElement('div')
        e.style.cssText = `font-size:13px; padding:4px 10px; background:${C.red}18; border-left:3px solid ${C.red}; border-radius:4px; margin:3px 0; color:${C.text};`
        e.textContent = '• ' + err
        errArea.appendChild(e)
      })
    } else {
      const ok = document.createElement('p')
      ok.style.cssText = `margin:0; font-size:13px; color:${C.green}; font-weight:700;`
      ok.textContent = t('nb.no_errors')
      errArea.appendChild(ok)
    }

    // Auto suggest grade based on errors
    const auto = nb.errors.length === 0 ? 5 : nb.errors.length === 1 ? 4 : nb.errors.length === 2 ? 3 : 2
    this.selectGrade(auto)
  }

  private submitAndNext(): void {
    if (!this.notebooks[this.currentIdx]) return
    const nb = this.notebooks[this.currentIdx]
    this.onGrade?.(nb.studentId, this.selectedGrade)
    this.currentIdx++
    if (this.currentIdx < this.notebooks.length) {
      this.renderPage()
    } else {
      this.finish()
    }
  }

  private finish(): void {
    this.hide()
    this.onFinish?.()
  }

  open(notebooks: NotebookEntry[], onGrade: (id: string, grade: number) => void, onFinish: () => void): void {
    this.notebooks = notebooks
    this.currentIdx = 0
    this.onGrade = onGrade
    this.onFinish = onFinish
    this.renderPage()
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  hide(): void {
    uiUnlock()
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
  }

  dispose(): void { this.overlay.remove() }
}
