import { LessonReport } from '../systems/LessonSystem'
import { CareerSystem, CareerLevel } from '../systems/CareerSystem'
import { uiLock, uiUnlock } from '../ui/UILock'
import { t } from '../i18n'

const C = {
  bg:     '#060a14',
  panel:  '#0D1117',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  red:    '#FF4D4D',
  green:  '#3FB950',
  blue:   '#58A6FF',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

export interface WeekSummary {
  weekNumber: number
  lessonReports: LessonReport[]
  xpTotal: number
  repDelta: number
  moneyEarned: number
  careerLevel: CareerLevel
  promoted: boolean
  skillPoints: number
}

export class WeekScreen {
  private overlay: HTMLElement
  private onNext: (() => void) | null = null

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-week'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:${C.bg}; display:flex; align-items:center;
      justify-content:center; z-index:800; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .3s; overflow-y:auto; padding:20px;
    `
    document.body.appendChild(this.overlay)
  }

  show(summary: WeekSummary, onNext: () => void): void {
    this.onNext = onNext
    this.overlay.innerHTML = ''

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.panel}; border:1px solid ${C.border}; border-radius:20px;
      padding:36px 44px; width:600px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `

    // Title
    card.innerHTML = `
      <div style="text-align:center;">
        <div style="font-size:36px; margin-bottom:8px;">${summary.promoted ? '🎉' : '📅'}</div>
        <h2 style="margin:0; font-size:26px; font-weight:900; color:${C.text};">${t('week.title')} ${summary.weekNumber}</h2>
        ${summary.promoted ? `<div style="color:${C.gold}; font-weight:700; font-size:15px; margin-top:6px;">${t('week.promoted')}</div>` : ''}
      </div>
    `

    // Big numbers
    const statsGrid = document.createElement('div')
    statsGrid.style.cssText = `display:grid; grid-template-columns:repeat(2, 1fr); gap:12px;`
    const bigStats = [
      { label: t('week.xp'), val: `+${summary.xpTotal} XP`, color: C.gold },
      { label: t('week.rep'), val: (summary.repDelta >= 0 ? `+${summary.repDelta}` : String(summary.repDelta)), color: summary.repDelta >= 0 ? C.green : C.red },
      { label: t('week.money'), val: `${summary.moneyEarned.toLocaleString('ru-RU')} ₸`, color: C.mint },
      { label: t('week.sp'), val: `+${summary.skillPoints} SP`, color: C.blue },
    ]
    bigStats.forEach(s => {
      const cell = document.createElement('div')
      cell.style.cssText = `background:${C.bg}; border:1px solid ${C.border}; border-radius:12px; padding:16px 18px;`
      cell.innerHTML = `
        <div style="font-size:12px; color:${C.muted}; margin-bottom:4px;">${s.label}</div>
        <div style="font-size:22px; font-weight:900; color:${s.color};">${s.val}</div>
      `
      statsGrid.appendChild(cell)
    })
    card.appendChild(statsGrid)

    // Career level
    const careerDiv = document.createElement('div')
    careerDiv.style.cssText = `background:${C.bg}; border:1px solid ${C.border}; border-radius:10px; padding:14px 18px; display:flex; align-items:center; gap:14px;`
    careerDiv.innerHTML = `
      <span style="font-size:30px;">🎖</span>
      <div>
        <div style="font-size:12px; color:${C.muted};">${t('week.career')}</div>
        <div style="font-size:16px; font-weight:800; color:${C.gold};">${summary.careerLevel.name}</div>
        <div style="font-size:12px; color:${C.muted}; margin-top:2px;">${t('week.bonus')} ${(summary.careerLevel.salaryBonus * 100).toFixed(0)}%</div>
      </div>
    `
    card.appendChild(careerDiv)

    // Lessons summary compact
    const lessonsDiv = document.createElement('div')
    lessonsDiv.innerHTML = `<div style="font-size:13px; font-weight:700; color:${C.muted}; margin-bottom:8px;">${t('week.lessons')} ${summary.lessonReports.length}</div>`
    const lessonList = document.createElement('div')
    lessonList.style.cssText = `display:flex; flex-direction:column; gap:4px; max-height:160px; overflow-y:auto;`
    summary.lessonReports.forEach(r => {
      const row = document.createElement('div')
      row.style.cssText = `display:flex; justify-content:space-between; font-size:13px; padding:5px 10px; background:${C.bg}; border-radius:6px; color:${C.text};`
      row.innerHTML = `<span>«${r.topic}»</span><span style="color:${C.mint};">+${r.xpEarned} XP</span>`
      lessonList.appendChild(row)
    })
    lessonsDiv.appendChild(lessonList)
    card.appendChild(lessonsDiv)

    // Next week button
    const btn = document.createElement('button')
    btn.textContent = t('week.next')
    btn.style.cssText = `padding:14px; border-radius:10px; border:none; background:${C.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`
    btn.addEventListener('click', () => { this.hide(); this.onNext?.() })
    card.appendChild(btn)

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
