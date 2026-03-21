import { uiLock, uiUnlock } from './UILock'

const C = {
  bg: '#0D1117', panel: '#161B22', border: '#30363D',
  mint: '#4FFFB0', gold: '#FFD700', text: '#E6EDF3', muted: '#8B949E',
}

export interface PrepChoice {
  id: 'topic_review' | 'hw_check' | 'energetic' | 'skip'
  icon: string
  label: string
  desc: string
  understandingBonus: number
  attentionBonus: number
}

export const PREP_CHOICES: PrepChoice[] = [
  {
    id: 'hw_check',
    icon: '📋',
    label: 'Проверить домашнее задание',
    desc: 'Открыть журнал ДЗ, выставить оценки каждому ученику',
    understandingBonus: 2,
    attentionBonus: 8,
  },
  {
    id: 'topic_review',
    icon: '📖',
    label: 'Повторить тему',
    desc: 'Освежить материал урока — первое объяснение станет точнее',
    understandingBonus: 8,
    attentionBonus: 0,
  },
  {
    id: 'energetic',
    icon: '⚡',
    label: 'Яркое начало',
    desc: 'Загадка или интригующий вопрос — класс сразу включается',
    understandingBonus: 0,
    attentionBonus: 12,
  },
  {
    id: 'skip',
    icon: '⏩',
    label: 'Сразу к уроку',
    desc: 'Без подготовки. Никаких бонусов, зато быстрее.',
    understandingBonus: 0,
    attentionBonus: 0,
  },
]

export class LessonPrepPanel {
  private overlay: HTMLElement

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-prep'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099;
      display:flex; align-items:center; justify-content:center;
      z-index:250; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s;
    `
    document.body.appendChild(this.overlay)
  }

  open(
    topic: string,
    grade: number,
    hwDoneCount: number,
    totalStudents: number,
    onChoice: (choice: PrepChoice) => void,
    onHwCheck: () => void,
    hwAlreadyChecked = false,
  ): void {
    this.overlay.innerHTML = ''

    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:16px;
      padding:24px 28px; width:640px; max-width:96vw;
      display:flex; flex-direction:column; gap:14px;
    `

    // Header
    const header = document.createElement('div')
    header.innerHTML = `
      <div style="font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">🏫 Подготовка к уроку</div>
      <div style="font-weight:800;font-size:20px;color:${C.mint};margin-bottom:2px;">${grade} класс</div>
      <div style="font-size:14px;color:${C.text};">📚 Тема: <span style="color:${C.gold}">${topic}</span></div>
      <div style="font-size:12px;color:${C.muted};margin-top:4px;">
        ДЗ сдали: <span style="color:${hwDoneCount / totalStudents > 0.7 ? C.mint : C.gold};font-weight:700;">${hwDoneCount} из ${totalStudents}</span>
        ${hwAlreadyChecked ? `<span style="color:${C.mint};margin-left:8px;">✅ Проверено</span>` : ''}
      </div>
    `
    card.appendChild(header)

    const sep = document.createElement('div')
    sep.style.cssText = `height:1px; background:${C.border};`
    card.appendChild(sep)

    // Sub-header
    const subLabel = document.createElement('div')
    subLabel.style.cssText = `font-size:12px; color:${C.muted}; font-weight:600;`
    subLabel.textContent = 'Как начнёте урок?'
    card.appendChild(subLabel)

    // Choices
    PREP_CHOICES.forEach(choice => {
      const isHwCheck = choice.id === 'hw_check'
      const hwDisabled = isHwCheck && hwAlreadyChecked

      const btn = document.createElement('button')
      btn.style.cssText = `
        background:${C.panel}; border:2px solid ${isHwCheck && !hwAlreadyChecked && hwDoneCount > 0 ? C.gold : C.border};
        border-radius:12px; padding:12px 16px; cursor:${hwDisabled ? 'not-allowed' : 'pointer'};
        text-align:left; display:flex; align-items:center; gap:12px; transition:all .15s;
        font-family:'Nunito',sans-serif; opacity:${hwDisabled ? 0.45 : 1};
      `

      const icon = document.createElement('span')
      icon.style.cssText = `font-size:26px; flex-shrink:0;`
      icon.textContent = choice.icon
      btn.appendChild(icon)

      const textDiv = document.createElement('div')
      textDiv.style.cssText = `flex:1;`
      textDiv.innerHTML = `
        <div style="font-weight:800;color:${C.text};font-size:14px;">${choice.label}</div>
        <div style="font-size:11px;color:${C.muted};margin-top:2px;">${choice.desc}</div>
      `
      btn.appendChild(textDiv)

      if (choice.understandingBonus > 0 || choice.attentionBonus > 0) {
        const bonus = document.createElement('div')
        bonus.style.cssText = `text-align:right; flex-shrink:0;`
        if (choice.understandingBonus > 0) {
          bonus.innerHTML += `<div style="font-size:11px;color:${C.mint};font-weight:700;">+${choice.understandingBonus} понимание</div>`
        }
        if (choice.attentionBonus > 0) {
          bonus.innerHTML += `<div style="font-size:11px;color:${C.gold};font-weight:700;">+${choice.attentionBonus} внимание</div>`
        }
        btn.appendChild(bonus)
      }

      if (!hwDisabled) {
        btn.addEventListener('mouseenter', () => {
          btn.style.borderColor = C.mint
          btn.style.background = C.mint + '18'
        })
        btn.addEventListener('mouseleave', () => {
          btn.style.borderColor = isHwCheck && !hwAlreadyChecked && hwDoneCount > 0 ? C.gold : C.border
          btn.style.background = C.panel
        })
        btn.addEventListener('click', () => {
          if (isHwCheck) {
            this.hide()
            onHwCheck()
          } else {
            this.hide()
            onChoice(choice)
          }
        })
      }

      card.appendChild(btn)
    })

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
