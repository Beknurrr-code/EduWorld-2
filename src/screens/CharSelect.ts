import { t, setLang, getLang, type Lang } from '../i18n/index'

const C = {
  bg:     '#060a14',
  panel:  '#0D1117',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

export interface CharData {
  name: string
  subject: string
  grades: number[]  // array of class years this teacher teaches (e.g. [7, 8, 9])
  appearance: 'default' | 'strict' | 'cool'
}

const SUBJECT_IDS = [
  { id: 'math',       key: 'subj.math',       icon: '📐' },
  { id: 'physics',    key: 'subj.physics',     icon: '⚡' },
  { id: 'chemistry',  key: 'subj.chemistry',   icon: '🧪' },
  { id: 'history',    key: 'subj.history',     icon: '📜' },
  { id: 'literature', key: 'subj.literature',  icon: '📖' },
  { id: 'russian',    key: 'subj.russian',     icon: '✍️' },
]

const APPEARANCE_IDS = [
  { id: 'default', labelKey: 'app.default', descKey: 'app.default_desc', icon: '👔' },
  { id: 'strict',  labelKey: 'app.strict',  descKey: 'app.strict_desc',  icon: '🧑‍🏫' },
  { id: 'cool',    labelKey: 'app.cool',    descKey: 'app.cool_desc',    icon: '😎' },
]

export class CharSelect {
  private root: HTMLElement
  private onConfirm: ((data: CharData) => void) | null = null

  private nameInput!: HTMLInputElement
  private selectedSubject = 'math'
  private selectedGrades: Set<number> = new Set([7, 8, 9])
  private selectedAppearance: CharData['appearance'] = 'default'
  private subjectBtns: Map<string, HTMLElement> = new Map()
  private appearanceBtns: Map<string, HTMLElement> = new Map()
  private gradeBtns: Map<number, HTMLElement> = new Map()
  private card: HTMLElement | null = null
  private langToggle!: HTMLElement

  constructor() {
    this.root = document.createElement('div')
    this.root.id = 'ew2-charselect'
    this.root.style.cssText = `
      position:fixed; inset:0; background:${C.bg}; display:flex; align-items:center;
      justify-content:center; font-family:'Nunito',sans-serif; z-index:1000;
      overflow-y:auto; padding:20px;
    `
    document.body.appendChild(this.root)
    this.buildLangToggle()
    this.buildUI()
  }

  private buildLangToggle(): void {
    const toggle = document.createElement('div')
    toggle.style.cssText = `
      position:fixed; top:16px; right:20px; display:flex; gap:6px; z-index:1100;
    `
    const langs: Lang[] = ['ru', 'en']
    langs.forEach(lang => {
      const btn = document.createElement('button')
      btn.textContent = lang.toUpperCase()
      btn.style.cssText = `
        padding:5px 12px; border-radius:6px; border:1px solid ${C.border};
        background:${getLang() === lang ? C.mint : '#0D1117'};
        color:${getLang() === lang ? '#000' : C.muted};
        font-size:12px; font-weight:700; cursor:pointer; font-family:inherit; transition:all .15s;
        text-transform:uppercase; letter-spacing:1px;
      `
      btn.dataset['lang'] = lang
      btn.addEventListener('click', () => {
        setLang(lang)
        this.refreshLangToggle()
        this.rebuildCard()
      })
      toggle.appendChild(btn)
    })
    this.langToggle = toggle
    document.body.appendChild(toggle)
  }

  private refreshLangToggle(): void {
    this.langToggle.querySelectorAll('button').forEach(btn => {
      const isActive = (btn as HTMLElement).dataset['lang'] === getLang()
      ;(btn as HTMLElement).style.background = isActive ? C.mint : '#0D1117'
      ;(btn as HTMLElement).style.color = isActive ? '#000' : C.muted
    })
  }

  private rebuildCard(): void {
    const currentName = this.nameInput?.value ?? t('char.name_default')
    if (this.card) this.card.remove()
    this.subjectBtns.clear()
    this.appearanceBtns.clear()
    this.gradeBtns.clear()
    this.buildUI()
    if (this.nameInput) this.nameInput.value = currentName
  }

  private section(title: string): [HTMLElement, HTMLElement] {
    const wrap = document.createElement('div')
    wrap.style.cssText = `display:flex; flex-direction:column; gap:10px;`

    const label = document.createElement('div')
    label.style.cssText = `font-size:12px; color:${C.muted}; text-transform:uppercase; letter-spacing:1px; font-weight:700;`
    label.textContent = title
    wrap.appendChild(label)

    return [wrap, label]
  }

  private buildUI(): void {
    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.panel}; border:1px solid ${C.border}; border-radius:20px;
      padding:36px 40px; width:600px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `
    this.card = card

    // Title
    const titleRow = document.createElement('div')
    titleRow.style.cssText = `text-align:center;`
    titleRow.innerHTML = `
      <div style="font-size:13px; color:${C.mint}; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:6px;">${t('char.badge')}</div>
      <h1 style="margin:0; font-size:28px; color:${C.text}; font-weight:900;">${t('char.title')}</h1>
      <p style="margin:8px 0 0; font-size:14px; color:${C.muted};">${t('char.subtitle')}</p>
    `
    card.appendChild(titleRow)

    // Name
    const [nameWrap] = this.section(t('char.name_label'))
    this.nameInput = document.createElement('input')
    this.nameInput.placeholder = t('char.name_ph')
    this.nameInput.value = t('char.name_default')
    this.nameInput.style.cssText = `
      padding:10px 14px; border-radius:8px; border:1px solid ${C.border};
      background:#0D1117; color:${C.text}; font-size:15px; font-family:inherit; width:100%; box-sizing:border-box;
    `
    nameWrap.appendChild(this.nameInput)
    card.appendChild(nameWrap)

    // Subject
    const [subjectWrap] = this.section(t('char.subject'))
    const subjectGrid = document.createElement('div')
    subjectGrid.style.cssText = `display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;`
    SUBJECT_IDS.forEach(subj => {
      const btn = document.createElement('button')
      btn.style.cssText = `padding:10px 8px; border-radius:8px; border:1px solid ${C.border}; background:#0D1117; color:${C.text}; cursor:pointer; font-size:13px; font-family:inherit; transition:all .15s;`
      btn.innerHTML = `<span style="display:block; font-size:20px;">${subj.icon}</span>${t(subj.key)}`
      btn.addEventListener('click', () => this.selectSubject(subj.id))
      subjectGrid.appendChild(btn)
      this.subjectBtns.set(subj.id, btn)
    })
    subjectWrap.appendChild(subjectGrid)
    card.appendChild(subjectWrap)

    // Grade multi-select
    const gradeLabel = getLang() === 'ru' ? 'Классы (выберите 2–3)' : 'Grades (pick 2–3)'
    const [gradeWrap] = this.section(gradeLabel)
    const gradeRow = document.createElement('div')
    gradeRow.style.cssText = `display:flex; gap:8px; flex-wrap:wrap;`
    for (let g = 5; g <= 11; g++) {
      const btn = document.createElement('button')
      btn.textContent = `${g}`
      btn.style.cssText = `width:44px; height:44px; border-radius:8px; border:1px solid ${C.border}; background:#0D1117; color:${C.text}; cursor:pointer; font-size:14px; font-weight:700; font-family:inherit; transition:all .15s;`
      btn.addEventListener('click', () => this.toggleGrade(g))
      gradeRow.appendChild(btn)
      this.gradeBtns.set(g, btn)
    }
    gradeWrap.appendChild(gradeRow)
    card.appendChild(gradeWrap)

    // Appearance
    const [appWrap] = this.section(t('char.appearance'))
    const appRow = document.createElement('div')
    appRow.style.cssText = `display:flex; gap:10px;`
    APPEARANCE_IDS.forEach(app => {
      const btn = document.createElement('button')
      btn.style.cssText = `flex:1; padding:12px 8px; border-radius:10px; border:1px solid ${C.border}; background:#0D1117; color:${C.text}; cursor:pointer; font-size:13px; font-family:inherit; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;`
      btn.innerHTML = `<span style="font-size:26px;">${app.icon}</span><strong>${t(app.labelKey)}</strong><span style="font-size:11px; color:${C.muted};">${t(app.descKey)}</span>`
      btn.addEventListener('click', () => this.selectAppearance(app.id as CharData['appearance']))
      appRow.appendChild(btn)
      this.appearanceBtns.set(app.id, btn)
    })
    appWrap.appendChild(appRow)
    card.appendChild(appWrap)

    // Confirm button
    const confirmBtn = document.createElement('button')
    confirmBtn.textContent = t('char.start')
    confirmBtn.style.cssText = `
      padding:14px; border-radius:10px; border:none; background:${C.mint}; color:#000;
      font-size:16px; font-weight:900; cursor:pointer; font-family:inherit; transition:all .15s; margin-top:4px;
    `
    confirmBtn.addEventListener('mouseenter', () => confirmBtn.style.transform = 'scale(1.02)')
    confirmBtn.addEventListener('mouseleave', () => confirmBtn.style.transform = '')
    confirmBtn.addEventListener('click', () => this.confirm())
    card.appendChild(confirmBtn)

    this.root.appendChild(card)

    // Restore selection state
    this.selectSubject(this.selectedSubject)
    this.refreshGradeBtns()
    this.selectAppearance(this.selectedAppearance)
  }

  private toggleGrade(g: number): void {
    if (this.selectedGrades.has(g)) {
      if (this.selectedGrades.size > 1) this.selectedGrades.delete(g)
    } else {
      if (this.selectedGrades.size >= 3) {
        const first = this.selectedGrades.values().next().value as number
        this.selectedGrades.delete(first)
      }
      this.selectedGrades.add(g)
    }
    this.refreshGradeBtns()
  }

  private refreshGradeBtns(): void {
    this.gradeBtns.forEach((btn, k) => {
      const sel = this.selectedGrades.has(k)
      btn.style.borderColor = sel ? C.gold : C.border
      btn.style.background = sel ? C.gold + '22' : '#0D1117'
      btn.style.color = sel ? C.gold : C.text
    })
  }

  private selectSubject(id: string): void {
    this.selectedSubject = id
    this.subjectBtns.forEach((btn, k) => {
      btn.style.borderColor = k === id ? C.mint : C.border
      btn.style.background = k === id ? C.mint + '18' : '#0D1117'
      btn.style.color = k === id ? C.mint : C.text
    })
  }

  private selectAppearance(id: CharData['appearance']): void {
    this.selectedAppearance = id
    this.appearanceBtns.forEach((btn, k) => {
      btn.style.borderColor = k === id ? '#BC8CFF' : C.border
      btn.style.background = k === id ? '#BC8CFF18' : '#0D1117'
    })
  }

  private confirm(): void {
    const name = this.nameInput.value.trim() || t('char.name_default')
    const grades = Array.from(this.selectedGrades).sort((a, b) => a - b)
    this.onConfirm?.({ name, subject: this.selectedSubject, grades, appearance: this.selectedAppearance })
  }

  open(onConfirm: (data: CharData) => void): void {
    this.onConfirm = onConfirm
    this.root.style.display = 'flex'
  }

  close(): void {
    this.root.style.display = 'none'
    this.langToggle.style.display = 'none'
  }

  dispose(): void {
    this.root.remove()
    this.langToggle.remove()
  }
}
