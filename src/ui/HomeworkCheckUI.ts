import { uiLock, uiUnlock } from './UILock'
import type { StudentData } from '../entities/Student'

const C = {
  bg: '#0D1117', panel: '#161B22', border: '#30363D',
  mint: '#4FFFB0', gold: '#FFD700', text: '#E6EDF3', muted: '#8B949E',
  red: '#FF4D4D', blue: '#58A6FF',
}

/** Map of studentId → grade chosen by teacher (only those who did HW) */
export type HWGradeMap = Map<string, number>

export class HomeworkCheckUI {
  private overlay: HTMLElement
  private grades: HWGradeMap = new Map()

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-hwcheck'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099;
      display:flex; align-items:center; justify-content:center;
      z-index:300; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s;
    `
    document.body.appendChild(this.overlay)
  }

  open(students: StudentData[], onDone: (grades: HWGradeMap) => void): void {
    this.grades = new Map()
    this.overlay.innerHTML = ''

    const done = students.filter(s => s.hwDone)
    const notDone = students.filter(s => !s.hwDone)
    const pct = Math.round(done.length / students.length * 100)

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:16px;
      padding:24px 28px; width:700px; max-width:96vw;
      display:flex; flex-direction:column; gap:12px;
      max-height:88vh; overflow-y:auto;
    `

    // Header
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div style="font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;">📋 Проверка домашнего задания</div>
          <div style="font-weight:800;font-size:18px;color:${C.text};margin-top:2px;">Сдали: ${done.length} из ${students.length}</div>
        </div>
        <div style="text-align:right;font-size:12px;color:${C.muted};">
          <div style="color:${pct>=70?C.mint:pct>=40?C.gold:C.red};font-weight:700;font-size:22px;">${pct}%</div>
          выполнили
        </div>
      </div>
      <div style="background:${C.border};border-radius:4px;height:6px;overflow:hidden;">
        <div style="width:${pct}%;height:100%;background:${pct>=70?C.mint:pct>=40?C.gold:C.red};"></div>
      </div>
    `

    // Section: did HW
    if (done.length > 0) {
      const secTitle = document.createElement('div')
      secTitle.style.cssText = `font-size:12px;color:${C.mint};font-weight:700;padding:4px 0;`
      secTitle.textContent = '✅ Выполнили — выставите оценку:'
      card.appendChild(secTitle)

      done.forEach(s => {
        const row = this.makeStudentRow(s, true)
        card.appendChild(row)
      })
    }

    // Section: didn't do HW
    if (notDone.length > 0) {
      const secTitle2 = document.createElement('div')
      secTitle2.style.cssText = `font-size:12px;color:${C.red};font-weight:700;padding:4px 0; margin-top:6px;`
      secTitle2.textContent = `❌ Не выполнили (${notDone.length} чел.) — получат 2:`
      card.appendChild(secTitle2)

      const notDoneList = document.createElement('div')
      notDoneList.style.cssText = `display:flex; flex-wrap:wrap; gap:6px;`
      notDone.forEach(s => {
        const chip = document.createElement('div')
        chip.style.cssText = `
          background:${C.red}22; border:1px solid ${C.red}44; border-radius:6px;
          padding:4px 10px; font-size:12px; color:${C.red}; font-weight:600;
        `
        chip.textContent = s.name
        notDoneList.appendChild(chip)
      })
      card.appendChild(notDoneList)
    }

    // Footer buttons
    const footer = document.createElement('div')
    footer.style.cssText = `display:flex; justify-content:flex-end; gap:10px; margin-top:8px; padding-top:12px; border-top:1px solid ${C.border};`

    const skipBtn = document.createElement('button')
    skipBtn.style.cssText = `
      background:transparent; color:${C.muted}; font-weight:600; font-size:13px;
      padding:10px 16px; border-radius:10px; border:1px solid ${C.border}; cursor:pointer;
      font-family:'Nunito',sans-serif;
    `
    skipBtn.textContent = 'Не проверять'
    skipBtn.addEventListener('click', () => { this.hide(); onDone(new Map()) })

    const finishBtn = document.createElement('button')
    finishBtn.style.cssText = `
      background:${C.mint}; color:#000; font-weight:800; font-size:14px;
      padding:10px 24px; border-radius:10px; border:none; cursor:pointer;
      font-family:'Nunito',sans-serif;
    `
    finishBtn.textContent = '✅ Завершить проверку'
    finishBtn.addEventListener('click', () => { this.hide(); onDone(new Map(this.grades)) })

    footer.appendChild(skipBtn)
    footer.appendChild(finishBtn)
    card.appendChild(footer)

    this.overlay.appendChild(card)
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  private makeStudentRow(s: StudentData, canGrade: boolean): HTMLElement {
    const row = document.createElement('div')
    row.style.cssText = `
      display:flex; align-items:center; gap:10px; padding:8px 12px;
      background:${C.panel}; border-radius:8px; border:1px solid ${C.border};
    `

    const name = document.createElement('span')
    name.style.cssText = `flex:1; font-weight:700; color:${C.text}; font-size:13px;`
    name.textContent = s.name
    row.appendChild(name)

    const typeBadge = document.createElement('span')
    const TYPE_LABELS: Record<string, string> = {
      genius: '🧠', lazy: '😴', bully: '😤', anxious: '😰', helper: '🤝', average: '😊',
    }
    typeBadge.textContent = TYPE_LABELS[s.type] ?? '😊'
    typeBadge.style.cssText = `font-size:16px;`
    row.appendChild(typeBadge)

    if (canGrade) {
      const gradeRow = document.createElement('div')
      gradeRow.style.cssText = `display:flex; gap:4px;`
      const gColors: Record<number, string> = { 2: C.red, 3: '#FFD700', 4: C.blue, 5: C.mint }
      ;[2, 3, 4, 5].forEach(g => {
        const btn = document.createElement('button')
        btn.textContent = String(g)
        btn.style.cssText = `
          width:30px; height:30px; border-radius:6px; border:2px solid ${C.border};
          background:transparent; color:${gColors[g]}; font-weight:800; font-size:13px;
          cursor:pointer; transition:all .12s; font-family:'Nunito',sans-serif;
        `
        btn.addEventListener('click', () => {
          gradeRow.querySelectorAll('button').forEach(b => {
            (b as HTMLButtonElement).style.background = 'transparent'
            ;(b as HTMLButtonElement).style.borderColor = C.border
          })
          btn.style.background = gColors[g] + '33'
          btn.style.borderColor = gColors[g]
          this.grades.set(s.id, g)
        })
        gradeRow.appendChild(btn)
      })
      row.appendChild(gradeRow)
    }

    return row
  }

  hide(): void {
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
    uiUnlock()
  }

  dispose(): void { this.overlay.remove() }
}
