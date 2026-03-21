import { ClassroomEvent } from '../systems/ClassroomEvents'
import { Student } from '../entities/Student'
import { uiLock, uiUnlock } from './UILock'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  red:    '#FF4D4D',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

const EVENT_COLORS: Record<string, string> = {
  troublemaker:     '#FF4D4D',
  fire_alarm:       '#FF6B1A',
  hw_sabotage:      '#FFD700',
  genius_question:  '#58A6FF',
  phone_ring:       '#BC8CFF',
  student_conflict: '#FF4D4D',
}

export class EventChoiceUI {
  private overlay: HTMLElement
  private onResult: ((resultText: string) => void) | null = null

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-event'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:400; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s; backdrop-filter:blur(4px);
    `
    document.body.appendChild(this.overlay)
  }

  open(event: ClassroomEvent, students: Student[], onResult: (text: string) => void): void {
    this.onResult = onResult
    this.overlay.innerHTML = ''

    const color = EVENT_COLORS[event.type] ?? C.mint

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:2px solid ${color}; border-radius:16px;
      padding:28px 32px; width:520px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
      box-shadow: 0 0 40px ${color}44;
    `

    // Header
    const hdr = document.createElement('div')
    hdr.style.cssText = `display:flex; align-items:center; gap:14px;`
    hdr.innerHTML = `
      <span style="font-size:42px;">${event.icon}</span>
      <div>
        <div style="font-size:11px; color:${color}; text-transform:uppercase; letter-spacing:1px; font-weight:700;">Событие</div>
        <div style="font-size:20px; font-weight:800; color:${C.text};">${event.title}</div>
      </div>
    `
    card.appendChild(hdr)

    const desc = document.createElement('p')
    desc.style.cssText = `margin:0; font-size:15px; color:${C.muted}; line-height:1.5;`
    desc.textContent = event.desc
    card.appendChild(desc)

    const choicesDiv = document.createElement('div')
    choicesDiv.style.cssText = `display:flex; flex-direction:column; gap:8px;`

    event.choices.forEach(choice => {
      const btn = document.createElement('button')
      btn.style.cssText = `
        display:flex; align-items:center; gap:12px; padding:12px 16px;
        background:${C.panel}; border:1px solid ${C.border}; border-radius:10px;
        cursor:pointer; text-align:left; transition:all .15s; width:100%;
      `
      btn.innerHTML = `<span style="font-size:22px;">${choice.icon}</span><span style="color:${C.text}; font-weight:700; font-size:14px;">${choice.label}</span>`

      btn.addEventListener('mouseenter', () => { btn.style.borderColor = color; btn.style.background = color + '18' })
      btn.addEventListener('mouseleave', () => { btn.style.borderColor = C.border; btn.style.background = C.panel })
      btn.addEventListener('click', () => {
        const result = choice.effect(students)
        this.showResult(result, color)
      })
      choicesDiv.appendChild(btn)
    })
    card.appendChild(choicesDiv)

    this.overlay.appendChild(card)
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  private showResult(text: string, color: string): void {
    this.overlay.innerHTML = ''
    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:2px solid ${color}; border-radius:14px;
      padding:28px 32px; width:420px; max-width:96vw;
      text-align:center; display:flex; flex-direction:column; gap:18px;
      box-shadow: 0 0 30px ${color}44;
    `
    card.innerHTML = `
      <div style="font-size:36px;">✅</div>
      <div style="font-size:16px; color:${C.text}; font-weight:700;">${text}</div>
    `
    const btn = document.createElement('button')
    btn.textContent = 'Продолжить урок'
    btn.style.cssText = `padding:10px 24px; border-radius:8px; border:none; background:${color}; color:#000; font-weight:800; cursor:pointer; font-size:14px;`
    btn.addEventListener('click', () => { this.hide(); this.onResult?.(text) })
    card.appendChild(btn)
    this.overlay.appendChild(card)
  }

  hide(): void {
    uiUnlock()
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
  }

  dispose(): void { this.overlay.remove() }
}
