import { EventBus } from '../core/EventBus'
import { TimeManager } from '../core/TimeManager'
import { t } from '../i18n'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  red:    '#FF4D4D',
  blue:   '#58A6FF',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

export class HUD {
  private root: HTMLElement
  private timeEl!: HTMLElement
  private phaseEl!: HTMLElement
  private attentionBar!: HTMLElement
  private attentionVal!: HTMLElement
  private topicEl!: HTMLElement
  private repEl!: HTMLElement
  private moneyEl!: HTMLElement
  private dayEl!: HTMLElement
  private crosshair!: HTMLElement
  private notifArea!: HTMLElement
  private bus = EventBus.getInstance()

  constructor() {
    this.root = document.createElement('div')
    this.root.id = 'ew2-hud'
    this.root.style.cssText = `
      position:fixed; inset:0; pointer-events:none;
      font-family:'Nunito',sans-serif; font-size:14px; color:${C.text};
      z-index:100; user-select:none;
    `
    document.body.appendChild(this.root)
    this.buildLayout()
    this.bindEvents()
  }

  private panel(styles: string): HTMLElement {
    const d = document.createElement('div')
    d.style.cssText = `background:${C.panel}cc; border:1px solid ${C.border}; border-radius:8px; padding:8px 12px; backdrop-filter:blur(6px); ${styles}`
    return d
  }

  private buildLayout(): void {
    // TOP BAR
    const top = document.createElement('div')
    top.style.cssText = 'position:absolute; top:12px; left:50%; transform:translateX(-50%); display:flex; gap:10px; align-items:center;'

    this.dayEl = document.createElement('span')
    this.dayEl.style.cssText = `color:${C.muted}; font-weight:700; font-size:13px;`
    this.dayEl.textContent = t('hud.day') + ' 1'

    this.timeEl = document.createElement('span')
    this.timeEl.style.cssText = `color:${C.gold}; font-weight:800; font-size:17px; font-family:'JetBrains Mono',monospace; min-width:52px; text-align:center;`
    this.timeEl.textContent = '08:30'

    this.phaseEl = document.createElement('span')
    this.phaseEl.style.cssText = `color:${C.mint}; font-weight:700; font-size:13px; padding:2px 10px; background:${C.mint}22; border-radius:20px;`
    this.phaseEl.textContent = t('hud.phase.explanation')

    const topPanel = this.panel('display:flex; gap:14px; align-items:center; padding:6px 18px;')
    topPanel.append(this.dayEl, this.timeEl, this.phaseEl)
    top.appendChild(topPanel)
    this.root.appendChild(top)

    // TOP-RIGHT: rep + money
    const tr = this.panel('position:absolute; top:12px; right:14px; display:flex; flex-direction:column; gap:4px; min-width:110px;')
    this.repEl = document.createElement('div')
    this.repEl.style.cssText = `font-size:13px;`
    this.repEl.innerHTML = `<span style="color:${C.muted}">${t('hud.reputation')} </span><span style="color:${C.blue}; font-weight:800;">50</span>`
    this.moneyEl = document.createElement('div')
    this.moneyEl.style.cssText = `font-size:13px;`
    this.moneyEl.innerHTML = `<span style="color:${C.muted}">${t('hud.salary')} </span><span style="color:${C.gold}; font-weight:800;">80 000 ₽</span>`
    tr.append(this.repEl, this.moneyEl)
    this.root.appendChild(tr)

    // BOTTOM-LEFT: topic + attention bar
    const bl = this.panel('position:absolute; bottom:14px; left:14px; min-width:220px; display:flex; flex-direction:column; gap:6px;')
    this.topicEl = document.createElement('div')
    this.topicEl.style.cssText = `font-weight:700; font-size:13px; color:${C.mint};`
    this.topicEl.textContent = t('hud.topic_prefix') + ' —'

    const attnLabel = document.createElement('div')
    attnLabel.style.cssText = `display:flex; justify-content:space-between; font-size:12px; color:${C.muted};`
    this.attentionVal = document.createElement('span')
    this.attentionVal.style.cssText = `color:${C.text}; font-weight:800;`
    this.attentionVal.textContent = '100%'
    attnLabel.innerHTML = `<span>${t('hud.attention')}</span>`
    attnLabel.appendChild(this.attentionVal)

    const barBg = document.createElement('div')
    barBg.style.cssText = `height:8px; background:${C.border}; border-radius:4px; overflow:hidden;`
    this.attentionBar = document.createElement('div')
    this.attentionBar.style.cssText = `height:100%; width:100%; background:${C.mint}; border-radius:4px; transition:width .4s, background .4s;`
    barBg.appendChild(this.attentionBar)

    bl.append(this.topicEl, attnLabel, barBg)
    this.root.appendChild(bl)

    // CROSSHAIR
    this.crosshair = document.createElement('div')
    this.crosshair.style.cssText = `position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:18px; height:18px; pointer-events:none;`
    this.crosshair.innerHTML = `<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="1.5" fill="${C.mint}"/><line x1="9" y1="2" x2="9" y2="6" stroke="${C.mint}" stroke-width="1.5"/><line x1="9" y1="12" x2="9" y2="16" stroke="${C.mint}" stroke-width="1.5"/><line x1="2" y1="9" x2="6" y2="9" stroke="${C.mint}" stroke-width="1.5"/><line x1="12" y1="9" x2="16" y2="9" stroke="${C.mint}" stroke-width="1.5"/></svg>`
    this.root.appendChild(this.crosshair)

    // NOTIFICATION AREA
    this.notifArea = document.createElement('div')
    this.notifArea.style.cssText = 'position:absolute; top:70px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:6px; pointer-events:none;'
    this.root.appendChild(this.notifArea)

    // BOTTOM HINT
    const hint = this.panel('position:absolute; bottom:14px; right:14px; font-size:12px; color:' + C.muted)
    hint.innerHTML = `<kbd style="background:${C.border};padding:1px 6px;border-radius:4px;color:${C.text}">E</kbd> ${t('hud.hint_e')} &nbsp; <kbd style="background:${C.border};padding:1px 6px;border-radius:4px;color:${C.text}">F1</kbd> ${t('hud.hint_f1')}`
    this.root.appendChild(hint)
  }

  private bindEvents(): void {
    this.bus.on('attentionChanged', (d) => { const { value } = d as { value: number }; this.setAttention(value) })
    this.bus.on('lessonStarted', (d) => { const { topic } = d as { topic: string }; this.topicEl.textContent = `${t('hud.topic_prefix')} ${topic}` })
    this.bus.on('phaseChanged', (d) => {
      const { phase } = d as { phase: string }
      const names: Record<string, string> = {
        explanation: t('hud.phase.explanation'),
        tasks: t('hud.phase.tasks'),
        grading: t('hud.phase.grading'),
        homework: t('hud.phase.homework'),
        done: t('hud.phase.done'),
      }
      this.phaseEl.textContent = names[phase] ?? phase
    })
  }

  setAttention(value: number): void {
    const pct = Math.max(0, Math.min(100, value))
    this.attentionBar.style.width = pct + '%'
    this.attentionVal.textContent = pct.toFixed(0) + '%'
    this.attentionBar.style.background = pct > 60 ? C.mint : pct > 30 ? C.gold : C.red
  }

  setTime(hhmm: string): void { this.timeEl.textContent = hhmm }
  setDay(d: number): void { this.dayEl.textContent = t('hud.day') + ' ' + d }
  setReputation(rep: number): void {
    this.repEl.innerHTML = `<span style="color:${C.muted}">${t('hud.reputation')} </span><span style="color:${C.blue}; font-weight:800;">${rep}</span>`
  }
  setMoney(amount: number): void {
    this.moneyEl.innerHTML = `<span style="color:${C.muted}">${t('hud.salary')} </span><span style="color:${C.gold}; font-weight:800;">${amount.toLocaleString('ru-RU')} ₸</span>`
  }

  showNotification(text: string, color = C.mint, duration = 2800): void {
    const el = document.createElement('div')
    el.style.cssText = `background:${C.panel}ee; border:1px solid ${color}; border-radius:8px; padding:8px 18px; color:${color}; font-weight:700; font-size:14px; animation:ew2_fadein .25s; pointer-events:none; text-align:center; max-width:360px;`
    el.textContent = text
    this.notifArea.appendChild(el)
    setTimeout(() => {
      el.style.opacity = '0'
      el.style.transition = 'opacity .4s'
      setTimeout(() => el.remove(), 420)
    }, duration)
  }

  addGlobalStyles(): void {
    if (document.getElementById('ew2-hud-style')) return
    const s = document.createElement('style')
    s.id = 'ew2-hud-style'
    s.textContent = `@keyframes ew2_fadein { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }`
    document.head.appendChild(s)
  }

  hide(): void { this.root.style.display = 'none' }
  show(): void { this.root.style.display = '' }
  dispose(): void { this.root.remove() }
}
