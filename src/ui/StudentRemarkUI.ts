import { uiLock, uiUnlock } from './UILock'
import type { StudentData } from '../entities/Student'

const C = {
  bg: '#0D1117', panel: '#161B22', border: '#30363D',
  mint: '#4FFFB0', gold: '#FFD700', text: '#E6EDF3', muted: '#8B949E',
  red: '#FF4D4D', blue: '#58A6FF',
}

export type RemarkType = 'warning' | 'confiscate_phone' | 'wake_up' | 'praise' | 'dismiss'

export interface RemarkResult {
  type: RemarkType
  studentId: string
}

const REMARK_OPTIONS: Array<{ id: RemarkType; icon: string; label: string; desc: string; color: string }> = [
  { id: 'warning',          icon: '✋', label: 'Дать замечание',      desc: 'Предупредить за нарушение дисциплины',  color: '#FFD700' },
  { id: 'confiscate_phone', icon: '📵', label: 'Отобрать телефон',    desc: 'Забрать телефон до конца урока',        color: '#FF4D4D' },
  { id: 'wake_up',          icon: '👋', label: 'Разбудить',           desc: 'Разбудить спящего ученика',            color: '#58A6FF' },
  { id: 'praise',           icon: '⭐', label: 'Похвалить',           desc: 'Отметить усердие или ответ ученика',   color: '#4FFFB0' },
  { id: 'dismiss',          icon: '🚪', label: 'Выгнать из класса',   desc: 'Выгнать за серьёзное поведение (-15 дисциплина)',  color: '#FF4D4D' },
]

/** Small popup that appears when teacher walks up to a student */
export class StudentRemarkUI {
  private overlay: HTMLElement

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-remark'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000077;
      display:flex; align-items:center; justify-content:center;
      z-index:280; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .15s;
    `
    document.body.appendChild(this.overlay)
  }

  open(student: StudentData, onResult: (r: RemarkResult) => void): void {
    this.overlay.innerHTML = ''

    const TYPE_LABELS: Record<string, string> = {
      genius: '🧠 Отличник', lazy: '😴 Лентяй', bully: '😤 Хулиган',
      anxious: '😰 Тревожный', helper: '🤝 Помощник', average: '😊 Обычный',
    }

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:14px;
      padding:20px 24px; width:460px; max-width:94vw;
      display:flex; flex-direction:column; gap:10px;
    `

    card.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1px solid ${C.border};">
        <div style="font-size:26px;">${TYPE_LABELS[student.type]?.split(' ')[0] ?? '😊'}</div>
        <div>
          <div style="font-weight:800;font-size:17px;color:${C.text};">${student.name}</div>
          <div style="font-size:11px;color:${C.muted};">${TYPE_LABELS[student.type] ?? ''} · Дисциплина: ${student.stats.behavior}/100 · Внимание: ${student.stats.attention}/100</div>
        </div>
      </div>
    `

    // Filter options based on student state
    const relevant = REMARK_OPTIONS.filter(o => {
      if (o.id === 'confiscate_phone') return student.stats.attention < 35
      if (o.id === 'wake_up')          return student.stats.attention < 20
      if (o.id === 'dismiss')          return student.stats.behavior < 30
      return true
    })

    relevant.forEach(opt => {
      const btn = document.createElement('button')
      btn.style.cssText = `
        background:${C.panel}; border:1px solid ${C.border}; border-radius:10px;
        padding:10px 14px; cursor:pointer; text-align:left;
        display:flex; align-items:center; gap:10px; transition:all .12s;
        font-family:'Nunito',sans-serif; width:100%;
      `
      btn.innerHTML = `
        <span style="font-size:20px;">${opt.icon}</span>
        <div>
          <div style="font-weight:700;color:${opt.color};font-size:13px;">${opt.label}</div>
          <div style="font-size:11px;color:${C.muted};">${opt.desc}</div>
        </div>
      `
      btn.addEventListener('mouseenter', () => { btn.style.borderColor = opt.color; btn.style.background = opt.color + '18' })
      btn.addEventListener('mouseleave', () => { btn.style.borderColor = C.border; btn.style.background = C.panel })
      btn.addEventListener('click', () => {
        this.hide()
        onResult({ type: opt.id, studentId: student.id })
      })
      card.appendChild(btn)
    })

    // Cancel
    const cancel = document.createElement('button')
    cancel.style.cssText = `
      background:transparent; border:1px solid ${C.border}; border-radius:8px;
      color:${C.muted}; font-size:12px; font-weight:600; padding:8px;
      cursor:pointer; font-family:'Nunito',sans-serif; margin-top:2px;
    `
    cancel.textContent = 'Отмена'
    cancel.addEventListener('click', () => this.hide())
    card.appendChild(cancel)

    this.overlay.appendChild(card)
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  hide(): void {
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
    uiUnlock()
  }

  dispose(): void { this.overlay.remove() }
}
