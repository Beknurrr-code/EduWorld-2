import { EventBus } from '../core/EventBus'
import { ExplanationOption, ExplanationRound } from '../systems/LessonSystem'
import { uiLock, uiUnlock } from './UILock'
import { t } from '../i18n'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

const TYPE_COLORS: Record<string, string> = {
  theory:   '#58A6FF',
  board:    C.mint,
  example:  C.gold,
  question: '#BC8CFF',
}

export class ExplanationPanel {
  private overlay: HTMLElement
  private bus = EventBus.getInstance()
  private onChoose: ((index: number) => void) | null = null

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-explain'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `
    document.body.appendChild(this.overlay)
  }

  open(round: ExplanationRound, roundNum: number, total: number, onChoose: (i: number) => void): void {
    this.onChoose = onChoose
    this.overlay.innerHTML = ''

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:16px;
      padding:24px 28px; width:700px; max-width:96vw; display:flex; flex-direction:column; gap:16px;
    `

    const titleRow = document.createElement('div')
    titleRow.style.cssText = `display:flex; align-items:center; justify-content:space-between;`
    const phaseKey = `expl.phase.${round.phase ?? 'intro'}` as any
    const phaseName = t(phaseKey)
    titleRow.innerHTML = `
      <div>
        <div style="font-size:11px; color:${C.muted}; text-transform:uppercase; letter-spacing:1px; margin-bottom:2px;">${t('expl.round')} ${roundNum} / ${total}</div>
        <div style="font-weight:800; font-size:20px; color:${C.mint}; margin-bottom:2px;">${phaseName}</div>
        <div style="font-weight:700; font-size:14px; color:${C.text};">📚 ${t('expl.topic')} <span style="color:${C.gold}">${round.topic}</span></div>
      </div>
      <div style="font-size:12px; color:${C.muted};">${t('expl.choose')}</div>
    `
    card.appendChild(titleRow)

    const grid = document.createElement('div')
    grid.style.cssText = `display:grid; grid-template-columns:1fr 1fr; gap:10px;`

    round.options.forEach((opt, i) => {
      const btn = this.makeOptionCard(opt, i)
      grid.appendChild(btn)
    })
    card.appendChild(grid)

    this.overlay.appendChild(card)
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  private makeOptionCard(opt: ExplanationOption, index: number): HTMLElement {
    const color = opt.isBad ? '#555566' : (TYPE_COLORS[opt.type] ?? C.mint)
    const starKey = `expl.stars.${opt.difficulty}` as any
    const starLabel = t(starKey)

    const card = document.createElement('button')
    card.style.cssText = `
      background:${C.panel}; border:2px solid ${opt.isBad ? '#333' : C.border}; border-radius:12px;
      padding:14px 16px; cursor:pointer; text-align:left; transition:all .15s;
      display:flex; flex-direction:column; gap:8px; font-family:'Nunito',sans-serif;
      opacity:${opt.isBad ? '0.75' : '1'};
    `

    // Header row: icon + label + star rating badge
    const head = document.createElement('div')
    head.style.cssText = `display:flex; align-items:flex-start; gap:8px;`
    head.innerHTML = `
      <span style="font-size:22px; flex-shrink:0;">${opt.icon}</span>
      <div style="flex:1;">
        <div style="font-weight:800; color:${opt.isBad ? C.muted : C.text}; font-size:13px; line-height:1.3;">${opt.label}</div>
        <div style="font-size:11px; margin-top:2px; color:${color}; font-weight:700;">${starLabel}</div>
      </div>
    `
    card.appendChild(head)

    // Content text (the actual explanation speech)
    if (opt.text) {
      const textEl = document.createElement('div')
      textEl.style.cssText = `
        font-size:12px; color:${C.muted}; white-space:pre-wrap; line-height:1.5;
        background:${C.bg}; border-radius:8px; padding:8px 10px;
        border-left:3px solid ${color}; font-family:'Courier New',monospace;
        max-height:90px; overflow:hidden;
      `
      textEl.textContent = opt.text
      card.appendChild(textEl)
    }

    // Stats row REMOVED — outcomes are revealed only after choice
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = color
      card.style.background = color + '18'
      card.style.transform = 'scale(1.01)'
    })
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = opt.isBad ? '#333' : C.border
      card.style.background = C.panel
      card.style.transform = ''
    })
    card.addEventListener('click', () => {
      this.hide()
      this.onChoose?.(index)
    })
    return card
  }

  hide(): void {
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
    uiUnlock()
  }

  dispose(): void { this.overlay.remove() }
}
