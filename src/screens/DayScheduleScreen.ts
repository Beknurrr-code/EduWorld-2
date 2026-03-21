import { uiLock, uiUnlock } from '../ui/UILock'
import { t } from '../i18n'

const C = {
  bg:     '#060a14',
  panel:  '#0D1117',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

export interface LessonSlot {
  index: number
  subject: string
  icon: string
  time: string
  done: boolean
  current: boolean
}

export class DayScheduleScreen {
  private overlay: HTMLElement
  private onStart: (() => void) | null = null

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-schedule'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:${C.bg}; display:flex; align-items:center;
      justify-content:center; z-index:900; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .3s;
    `
    document.body.appendChild(this.overlay)
  }

  show(dayNumber: number, slots: LessonSlot[], onStart: () => void): void {
    this.onStart = onStart
    this.overlay.innerHTML = ''

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.panel}; border:1px solid ${C.border}; border-radius:18px;
      padding:32px 40px; width:480px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
    `

    card.innerHTML = `
      <div>
        <div style="font-size:11px; color:${C.muted}; text-transform:uppercase; letter-spacing:1px;">${t('sched.label')}</div>
        <h2 style="margin:4px 0 0; font-size:22px; font-weight:900; color:${C.text};">${t('sched.day')} ${dayNumber}</h2>
      </div>
    `

    const list = document.createElement('div')
    list.style.cssText = `display:flex; flex-direction:column; gap:8px;`

    slots.forEach(slot => {
      const row = document.createElement('div')
      const isCur = slot.current
      const isDone = slot.done
      row.style.cssText = `
        display:flex; align-items:center; gap:14px; padding:12px 16px; border-radius:10px;
        border:1px solid ${isCur ? C.mint : isDone ? C.border : C.border};
        background:${isCur ? C.mint + '18' : isDone ? '#ffffff08' : C.bg};
        opacity:${isDone ? '0.5' : '1'};
      `
      row.innerHTML = `
        <span style="font-size:24px;">${slot.icon}</span>
        <div style="flex:1;">
          <div style="font-weight:700; color:${isCur ? C.mint : C.text}; font-size:14px;">${slot.subject}</div>
          <div style="font-size:12px; color:${C.muted};">${slot.time}</div>
        </div>
        <span style="font-size:18px;">${isDone ? '✅' : isCur ? '▶' : '○'}</span>
      `
      list.appendChild(row)
    })
    card.appendChild(list)

    const startBtn = document.createElement('button')
    const current = slots.find(s => s.current)
    startBtn.textContent = current ? `${t('sched.start')} ${current.index + 1}` : t('sched.continue')
    startBtn.style.cssText = `padding:13px; border-radius:10px; border:none; background:${C.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`
    startBtn.addEventListener('click', () => { this.hide(); this.onStart?.() })
    card.appendChild(startBtn)

    this.overlay.appendChild(card)
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
