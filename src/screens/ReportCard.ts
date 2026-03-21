import { LessonReport } from '../systems/LessonSystem'
import { uiLock, uiUnlock } from '../ui/UILock'
import { t } from '../i18n'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  red:    '#FF4D4D',
  green:  '#3FB950',
  blue:   '#58A6FF',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

export class ReportCard {
  private overlay: HTMLElement
  private onNext: (() => void) | null = null

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-report'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:600; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .25s; backdrop-filter:blur(4px);
      overflow-y:auto; padding:20px;
    `
    document.body.appendChild(this.overlay)
  }

  show(report: LessonReport, xpBefore: number, onNext: () => void): void {
    this.onNext = onNext
    this.overlay.innerHTML = ''

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:18px;
      padding:30px 36px; width:560px; max-width:96vw; display:flex; flex-direction:column; gap:20px;
    `

    // Header
    card.innerHTML += `
      <div style="text-align:center;">
        <div style="font-size:11px; color:${C.muted}; text-transform:uppercase; letter-spacing:1px;">${t('sched.day')} ${report.dayNumber} · ${report.subject}</div>
        <h2 style="margin:6px 0 0; font-size:22px; color:${C.text}; font-weight:900;">${t('report.title')}</h2>
        <div style="font-size:15px; color:${C.mint}; margin-top:4px; font-weight:700;">«${report.topic}»</div>
      </div>
    `

    // Stats grid
    const grid = document.createElement('div')
    grid.style.cssText = `display:grid; grid-template-columns:1fr 1fr; gap:10px;`
    const stats = [
      { label: t('report.understood'), value: `${report.understoodCount} / ${this.getTotalStudents()}`, color: C.mint },
      { label: t('report.avg_und'), value: `${report.avgUnderstanding}%`, color: C.blue },
      { label: t('report.xp'), value: `+${report.xpEarned} XP`, color: C.gold },
      { label: t('report.rep'), value: (report.repDelta >= 0 ? `+${report.repDelta}` : String(report.repDelta)), color: report.repDelta >= 0 ? C.green : C.red },
    ]
    stats.forEach(s => {
      const el = document.createElement('div')
      el.style.cssText = `background:${C.panel}; border:1px solid ${C.border}; border-radius:10px; padding:14px 16px;`
      el.innerHTML = `<div style="font-size:12px; color:${C.muted}; margin-bottom:4px;">${s.label}</div><div style="font-size:20px; font-weight:900; color:${s.color};">${s.value}</div>`
      grid.appendChild(el)
    })
    card.appendChild(grid)

    // Notebook grades (if any)
    if (report.notebookGrades.length > 0) {
      const nbSection = document.createElement('div')
      nbSection.innerHTML = `<div style="font-size:13px; font-weight:700; color:${C.muted}; margin-bottom:8px;">${t('report.nb_grades')}</div>`
      const nbList = document.createElement('div')
      nbList.style.cssText = `display:flex; flex-direction:column; gap:4px;`
      report.notebookGrades.forEach(nb => {
        const gradeColor = nb.grade === 5 ? C.green : nb.grade === 4 ? C.mint : nb.grade === 3 ? C.gold : C.red
        const row = document.createElement('div')
        row.style.cssText = `display:flex; align-items:center; justify-content:space-between; padding:6px 12px; background:${C.panel}; border-radius:6px; font-size:13px;`
        row.innerHTML = `<span style="color:${C.text};">${nb.studentName}</span><span style="color:${gradeColor}; font-weight:900; font-size:16px;">${nb.grade ?? '—'}</span>`
        nbList.appendChild(row)
      })
      nbSection.appendChild(nbList)
      card.appendChild(nbSection)
    }

    // Homework info
    const hwDiv = document.createElement('div')
    hwDiv.style.cssText = `padding:10px 14px; border-radius:8px; border-left:3px solid ${report.hwGiven ? C.blue : C.muted}; background:${C.panel};`
    hwDiv.innerHTML = report.hwGiven
      ? `<span style="color:${C.blue}; font-weight:700;">${t('report.hw_given')}</span><span style="color:${C.muted}; font-size:13px; margin-left:8px;">(${report.hwDifficulty})</span>`
      : `<span style="color:${C.muted}; font-size:13px;">${t('report.hw_none')}</span>`
    card.appendChild(hwDiv)

    // Continue button
    const btn = document.createElement('button')
    btn.textContent = t('report.next')
    btn.style.cssText = `padding:13px; border-radius:10px; border:none; background:${C.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`
    btn.addEventListener('click', () => { this.hide(); this.onNext?.() })
    card.appendChild(btn)

    this.overlay.appendChild(card)
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  private getTotalStudents(): number {
    return 15  // default class size
  }

  hide(): void {
    uiUnlock()
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
  }

  dispose(): void { this.overlay.remove() }
}
