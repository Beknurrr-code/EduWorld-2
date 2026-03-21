import { uiLock, uiUnlock } from '../ui/UILock'

export interface SchoolStats {
  avgClassGrade: number
  attendance: number
  reputation: number
  weekNumber: number
}

export interface StaffMember {
  id: string
  name: string
  subject: string
  grade: number
  salary: number
  performance: number
  fired?: boolean
}

export interface DirectorState {
  budget: number
  income: number
  expenses: number
  staff: StaffMember[]
  stats: SchoolStats
  pendingHires: number
  ministryWarning: boolean
  schoolRating: number   // 1.0 – 5.0
  ministryWeekCounter: number  // cycles for ministry inspection
}

const DEFAULT_STAFF: StaffMember[] = [
  { id: 's1', name: 'Айгерим Сейтқали',   subject: 'Mathematics',    grade: 9,  salary: 48000, performance: 78 },
  { id: 's2', name: 'Ерлан Бекұлы',       subject: 'Physics',        grade: 10, salary: 44000, performance: 65 },
  { id: 's3', name: 'Гүлнар Қасымова',    subject: 'Kazakh Lang.',   grade: 8,  salary: 42000, performance: 82 },
  { id: 's4', name: 'Досым Нұрланов',     subject: 'Chemistry',      grade: 11, salary: 46000, performance: 70 },
  { id: 's5', name: 'Зарина Алиева',      subject: 'Biology',        grade: 7,  salary: 40000, performance: 88 },
  { id: 's6', name: 'Болатбек Сәрсенов', subject: 'Kazakh History',  grade: 9,  salary: 43000, performance: 60 },
]

const HIRE_CANDIDATES = [
  { name: 'Камила Жансерік',   subject: 'English',            salary: 45000 },
  { name: 'Нұрсұлу Байжанова', subject: 'Computer Science',   salary: 50000 },
  { name: 'Арман Сейітқали',   subject: 'Physical Education', salary: 38000 },
  { name: 'Дина Ахметова',     subject: 'Mathematics',        salary: 47000 },
  { name: 'Бекзат Омаров',     subject: 'Russian Language',   salary: 41000 },
  { name: 'Айнұр Мұхамеджан', subject: 'Music / Art',        salary: 36000 },
]

interface ParentComplaint {
  parent: string
  child: string
  text: string
  options: Array<{ label: string; repDelta: number; budgetDelta: number; color: string }>
}

const PARENT_COMPLAINTS: ParentComplaint[] = [
  {
    parent: "Artyom Lisin's mother",
    child: 'Artyom, grade 9',
    text: "The physics teacher is unfairly lowering grades. Artyom does extra studying but has a '3' for the semester.",
    options: [
      { label: '📋 Request explanation from teacher', repDelta: 4, budgetDelta: 0, color: '#1a6b48' },
      { label: '🔄 Have committee review the grade', repDelta: 2, budgetDelta: 0, color: '#2a5a8a' },
      { label: '😶 "The grade was lawfully given"', repDelta: -3, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    parent: "Dina Akhmetova's father",
    child: 'Dina, grade 10',
    text: 'Demands transfer to the top class. Claims teachers are biased against his daughter because of her nationality.',
    options: [
      { label: '🔍 Launch internal investigation', repDelta: 6, budgetDelta: 0, color: '#1a6b48' },
      { label: '📑 Offer school psychologist', repDelta: 3, budgetDelta: -5000, color: '#2a5a8a' },
      { label: '❌ Deny transfer request', repDelta: -4, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    parent: 'Parent Committee 8B',
    child: 'Class 8B',
    text: 'The class wants to replace the history teacher — too much homework, children are overloaded.',
    options: [
      { label: '⚖️ Have a talk with the teacher', repDelta: 3, budgetDelta: 0, color: '#1a6b48' },
      { label: '📅 Adjust the lesson plan', repDelta: 5, budgetDelta: 0, color: '#2a5a8a' },
      { label: '📢 "The workload is within norms"', repDelta: -2, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    parent: 'School Sponsor — LLC "Impulse"',
    child: 'Sponsorship matter',
    text: 'The company is ready to provide 200,000 ₸ for equipment, but requests placing an advertising banner in the lobby.',
    options: [
      { label: '✅ Agree — the money is needed', repDelta: -1, budgetDelta: 200000, color: '#1a6b48' },
      { label: '🤝 Agree, but without the banner', repDelta: 2, budgetDelta: 100000, color: '#2a5a8a' },
      { label: '❌ Decline the sponsorship', repDelta: 5, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    parent: 'Parent Committee 9A',
    child: 'Class 9A',
    text: 'Parents of class 9A say the teacher discriminates against students. A written complaint has been submitted.',
    options: [
      { label: '🔍 Investigate via committee', repDelta: 6, budgetDelta: 0, color: '#1a6b48' },
      { label: '🤝 Issue a formal warning to the teacher', repDelta: 3, budgetDelta: 0, color: '#2a5a8a' },
      { label: '🤷 Dismiss the complaint', repDelta: -5, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    parent: 'Deputy Seitkali',
    child: 'Influential parent',
    text: 'A local deputy asks to enroll his nephew without going through the queue. Hints at "support from his side".',
    options: [
      { label: '💼 Decline — standard queue only', repDelta: 7, budgetDelta: 0, color: '#1a6b48' },
      { label: '📄 Find a formal reason to admit', repDelta: 1, budgetDelta: 50000, color: '#2a5a8a' },
      { label: '✅ Enroll immediately — connections matter', repDelta: -6, budgetDelta: 100000, color: '#7a2a2a' },
    ],
  },
  {
    parent: "Azamat Nurlybekov's mother",
    child: 'Azamat, grade 11',
    text: 'Grade 11 student Azamat wants to enrol in UNT prep courses. His mother demands the school take responsibility.',
    options: [
      { label: '🎓 Organise free prep classes at school', repDelta: 5, budgetDelta: -15000, color: '#1a6b48' },
      { label: '📊 Provide a list of recommended courses', repDelta: 2, budgetDelta: 0, color: '#2a5a8a' },
      { label: "⏭️ This is not the school's responsibility", repDelta: -3, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
]

interface EmergencyEvent {
  icon: string
  title: string
  description: string
  options: Array<{ label: string; repDelta: number; budgetDelta: number; color: string }>
}

const EMERGENCY_EVENTS: EmergencyEvent[] = [
  {
    icon: '💧', title: 'Water Pipe Burst',
    description: 'A pipe burst in Block B. Three classrooms are flooded. Lessons will need to be relocated.',
    options: [
      { label: '🔧 Emergency repair — call workers', repDelta: 2, budgetDelta: -40000, color: '#1a6b48' },
      { label: '🏫 Temporarily move classes to the main hall', repDelta: 0, budgetDelta: 0, color: '#2a5a8a' },
      { label: '😴 It can wait until Monday', repDelta: -5, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🔥', title: 'Kitchen Fire',
    description: 'The electrical panel in the school cafeteria caught smoke. The cook put it out, but equipment is broken.',
    options: [
      { label: '🔧 Replace equipment immediately', repDelta: 3, budgetDelta: -60000, color: '#1a6b48' },
      { label: '🍽️ Temporarily order food from another school', repDelta: 0, budgetDelta: -20000, color: '#2a5a8a' },
      { label: '🥊 Skip lunches for a week', repDelta: -6, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🥴', title: 'Flu Outbreak at School',
    description: '20% of students are sick. Parents demand disinfection. The district doctor warns of quarantine.',
    options: [
      { label: '🧼 Full sanitation treatment', repDelta: 6, budgetDelta: -25000, color: '#1a6b48' },
      { label: '📰 Recommend masks, keep school open', repDelta: 1, budgetDelta: 0, color: '#2a5a8a' },
      { label: '🤷 Do nothing — it will pass on its own', repDelta: -7, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🔋', title: 'Power Outage',
    description: 'The utility company warned: planned outage on Friday 9:00–17:00. Exams are scheduled that day.',
    options: [
      { label: '📊 Reschedule exams, notify everyone', repDelta: 4, budgetDelta: 0, color: '#1a6b48' },
      { label: '🔦 Rent a generator', repDelta: 2, budgetDelta: -15000, color: '#2a5a8a' },
      { label: '⚡ Hold exams by candlelight', repDelta: -3, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '📡', title: 'District Education Inspection',
    description: 'A surprise document audit from the district education department. Some grade journals are incomplete.',
    options: [
      { label: '📝 Urgently get all documents in order', repDelta: 5, budgetDelta: 0, color: '#1a6b48' },
      { label: '🤝 Talk with inspector, explain the situation', repDelta: 2, budgetDelta: 0, color: '#2a5a8a' },
      { label: '😐 Let them check as-is', repDelta: -4, budgetDelta: 0, color: '#7a2a2a' },
    ],
  },
]

export class DirectorScreen {
  private el: HTMLElement | null = null
  state: DirectorState

  constructor() {
    this.state = {
      budget: 1_200_000,
      income: 320_000,
      expenses: DEFAULT_STAFF.reduce((s, t) => s + t.salary, 0),
      staff: [...DEFAULT_STAFF.map(s => ({ ...s }))],
      stats: { avgClassGrade: 3.8, attendance: 91, reputation: 100, weekNumber: 1 },
      pendingHires: 0,
      ministryWarning: false,
      schoolRating: 3.2,
      ministryWeekCounter: 0,
    }
  }

  updateStats(rep: number, avgGrade: number, week: number): void {
    this.state.stats.reputation = rep
    this.state.stats.avgClassGrade = Math.round(avgGrade * 10) / 10
    this.state.stats.weekNumber = week
    this.state.stats.attendance = 85 + Math.floor(Math.random() * 10)
    // School rating evolves with reputation and grades
    const targetRating = Math.min(5, Math.max(1, (rep / 100) * 2.5 + avgGrade * 0.4))
    this.state.schoolRating = Math.round(Math.min(5, Math.max(1,
      this.state.schoolRating * 0.8 + targetRating * 0.2,
    )) * 10) / 10
    // Income scales with school rating
    this.state.income = Math.round(280_000 + this.state.schoolRating * 25_000)
    // Ministry warning if budget low
    this.state.ministryWarning = this.state.budget < 200_000
    this.state.ministryWeekCounter++
  }

  show(onContinue: () => void): void {
    uiLock()
    // Ministry inspection every 3 weeks
    if (this.state.ministryWeekCounter > 0 && this.state.ministryWeekCounter % 3 === 0) {
      this._renderMinistryInspection(onContinue)
    } else if (Math.random() < 0.35) {
      // 35% chance emergency event
      this._renderEmergencyEvent(onContinue)
    } else if (Math.random() < 0.45) {
      // 45% parent complaint
      this._renderParentComplaint(onContinue)
    } else {
      this._render(onContinue)
    }
  }

  private _renderMinistryInspection(onContinue: () => void): void {
    const pass = this.state.stats.reputation >= 80 && this.state.stats.avgClassGrade >= 3.5 && this.state.budget >= 300_000
    const el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;z-index:7500;font-family:"Segoe UI",sans-serif;'

    el.innerHTML = `
<div style="background:#12202e;color:#e0e8f0;border-radius:16px;padding:40px 48px;
  max-width:540px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.8);border:1px solid ${pass ? '#2a6b4a' : '#6b2a2a'};">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">
    🏛️ Director — Ministry Inspection
  </div>
  <div style="font-size:32px;margin-bottom:8px;">${pass ? '✅' : '❌'}</div>
  <div style="font-size:24px;font-weight:800;margin-bottom:12px;color:${pass ? '#4FFFB0' : '#FF6060'};">
    ${pass ? 'Inspection passed!' : 'Inspection failed!'}
  </div>
  <div style="background:#0a1628;border-radius:10px;padding:16px 20px;margin-bottom:20px;font-size:14px;line-height:1.7;color:#bad4e8;">
    The Ministry of Education has conducted a school inspection.<br><br>
    ${pass
      ? '📊 All indicators are within norms. The school receives additional funding of +120,000 ₸ and a rating boost.'
      : '⚠️ Violations found: low budget or insufficient performance. Penalty of 80,000 ₸ and a rating reduction.'}
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:22px;font-size:13px;">
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">Reputation</div>
      <div style="font-weight:700;color:${this.state.stats.reputation >= 80 ? '#4FFFB0' : '#FF8060'};">${this.state.stats.reputation}</div>
    </div>
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">Avg Grade</div>
      <div style="font-weight:700;color:${this.state.stats.avgClassGrade >= 3.5 ? '#4FFFB0' : '#FF8060'};">${this.state.stats.avgClassGrade}</div>
    </div>
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">Budget</div>
      <div style="font-weight:700;color:${this.state.budget >= 300000 ? '#4FFFB0' : '#FF8060'};">${this.state.budget.toLocaleString('ru')} ₸</div>
    </div>
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">School Rating</div>
      <div style="font-weight:700;color:#FFD700;">${'★'.repeat(Math.ceil(this.state.schoolRating))}${'☆'.repeat(5 - Math.ceil(this.state.schoolRating))}</div>
    </div>
  </div>
  <button id="ministry-ok"
    style="width:100%;padding:14px;border:none;border-radius:10px;cursor:pointer;
      background:linear-gradient(135deg,#1a4a8a,#2a6ab0);color:#fff;font-size:16px;font-weight:700;">
    Acknowledge
  </button>
</div>`

    el.querySelector('#ministry-ok')!.addEventListener('click', () => {
      if (pass) {
        this.state.budget += 120_000
        this.state.schoolRating = Math.min(5, this.state.schoolRating + 0.3)
      } else {
        this.state.budget = Math.max(0, this.state.budget - 80_000)
        this.state.schoolRating = Math.max(1, this.state.schoolRating - 0.4)
        this.state.stats.reputation = Math.max(0, this.state.stats.reputation - 10)
      }
      el.remove()
      this._render(onContinue)
    })

    document.body.appendChild(el)
  }

  private _renderEmergencyEvent(onContinue: () => void): void {
    const event = EMERGENCY_EVENTS[Math.floor(Math.random() * EMERGENCY_EVENTS.length)]
    const dialog = document.createElement('div')
    dialog.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:7200;font-family:"Segoe UI",sans-serif;'

    dialog.innerHTML = `
<div style="background:#1a1a2a;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.8);border:1px solid #3a2a1a;">
  <div style="font-size:11px;letter-spacing:2px;color:#d08040;text-transform:uppercase;margin-bottom:8px;">
    ⚡ Director — Emergency
  </div>
  <div style="font-size:36px;margin-bottom:8px;">${event.icon}</div>
  <div style="font-size:22px;font-weight:700;margin-bottom:12px;">${event.title}</div>
  <div style="background:#0f1220;border-radius:8px;padding:16px 20px;margin-bottom:24px;font-size:14px;line-height:1.6;color:#dac8a0;">
    ${event.description}
  </div>
  <div style="font-size:13px;color:#a08060;margin-bottom:12px;">Your decision:</div>
  <div style="display:flex;flex-direction:column;gap:10px;" id="emerg-options">
    ${event.options.map((o, i) => `
      <button data-idx="${i}"
        style="padding:13px 18px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:${o.color}33;color:#e0e8f0;font-size:14px;font-weight:600;
          border:1px solid ${o.color}66;transition:filter .15s;">
        ${o.label}
        <span style="float:right;font-size:12px;opacity:.7;">
          ${o.repDelta !== 0 ? `${o.repDelta > 0 ? '+' : ''}${o.repDelta} rep` : ''}
          ${o.budgetDelta !== 0 ? ` · ${o.budgetDelta > 0 ? '+' : ''}${o.budgetDelta.toLocaleString('ru')} ₸` : ''}
        </span>
      </button>`).join('')}
  </div>
</div>`

    dialog.querySelectorAll('#emerg-options button').forEach(btn => {
      const b = btn as HTMLButtonElement
      b.addEventListener('mouseenter', () => { b.style.filter = 'brightness(1.3)' })
      b.addEventListener('mouseleave', () => { b.style.filter = '' })
      b.addEventListener('click', () => {
        const opt = event.options[parseInt(b.dataset.idx!)]
        this.state.stats.reputation = Math.max(0, this.state.stats.reputation + opt.repDelta)
        if (opt.budgetDelta) this.state.budget = Math.max(0, this.state.budget + opt.budgetDelta)
        dialog.remove()
        this._render(onContinue)
      })
    })

    document.body.appendChild(dialog)
  }

  private _renderParentComplaint(onContinue: () => void): void {
    const complaint = PARENT_COMPLAINTS[Math.floor(Math.random() * PARENT_COMPLAINTS.length)]

    const dialog = document.createElement('div')
    dialog.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;z-index:7000;font-family:"Segoe UI",sans-serif;'

    dialog.innerHTML = `
<div style="background:#15202e;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">
    👔 Director — Complaint
  </div>
  <div style="font-size:20px;font-weight:700;margin-bottom:4px;">📨 ${complaint.parent}</div>
  <div style="font-size:13px;color:#6a98b8;margin-bottom:18px;">${complaint.child}</div>
  <div style="background:#0f1a28;border-radius:8px;padding:16px 20px;margin-bottom:24px;font-size:14px;line-height:1.6;color:#bad4e8;">
    "${complaint.text}"
  </div>
  <div style="font-size:13px;color:#5a8cc0;margin-bottom:12px;">Your decision:</div>
  <div style="display:flex;flex-direction:column;gap:10px;" id="complaint-options">
    ${complaint.options.map((o, i) => `
      <button data-idx="${i}"
        style="padding:13px 18px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:${o.color}44;color:#e0e8f0;font-size:14px;font-weight:600;
          border:1px solid ${o.color}88;transition:background .15s;">
        ${o.label}
        <span style="float:right;font-size:12px;opacity:.7;">
          ${o.repDelta > 0 ? '+' : ''}${o.repDelta} rep
          ${o.budgetDelta !== 0 ? ` · ${o.budgetDelta > 0 ? '+' : ''}${o.budgetDelta.toLocaleString('ru')} ₸` : ''}
        </span>
      </button>`).join('')}
  </div>
</div>`

    dialog.querySelectorAll('#complaint-options button').forEach(btn => {
      const b = btn as HTMLButtonElement
      b.addEventListener('mouseenter', () => { b.style.filter = 'brightness(1.3)' })
      b.addEventListener('mouseleave', () => { b.style.filter = '' })
      b.addEventListener('click', () => {
        const idx = parseInt(b.dataset.idx!)
        const opt = complaint.options[idx]
        this.state.stats.reputation = Math.max(0, this.state.stats.reputation + opt.repDelta)
        if (opt.budgetDelta) this.state.budget += opt.budgetDelta
        dialog.remove()
        this._render(onContinue)
      })
    })

    document.body.appendChild(dialog)
  }

  private _render(onContinue: () => void): void {
    if (this.el) this.el.remove()

    const { budget, income, expenses, staff, stats, ministryWarning, schoolRating } = this.state
    const netBalance = income - expenses
    const activeStaff = staff.filter(s => !s.fired)
    const ratingStars = '★'.repeat(Math.ceil(schoolRating)) + '☆'.repeat(5 - Math.ceil(schoolRating))
    const ratingColor = schoolRating >= 4 ? '#FFD700' : schoolRating >= 3 ? '#e0a060' : '#e05060'

    const el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;background:#0d1520;color:#c8dce8;font-family:"Segoe UI",sans-serif;overflow-y:auto;z-index:6000;'

    el.innerHTML = `
<div style="max-width:980px;margin:0 auto;padding:36px 24px;">

  <!-- HEADER -->
  <div style="display:flex;align-items:center;justify-content:space-between;
    border-bottom:1px solid #1e3040;padding-bottom:20px;margin-bottom:${ministryWarning ? '10px' : '24px'};">
    <div>
      <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;">👔 School Director</div>
      <div style="font-size:28px;font-weight:700;color:#fff;margin-top:4px;">Secondary School No.47</div>
      <div style="margin-top:6px;">
        <span style="font-size:18px;color:${ratingColor};letter-spacing:2px;">${ratingStars}</span>
        <span style="font-size:13px;color:#6a98b8;margin-left:8px;">School Rating ${schoolRating.toFixed(1)}/5.0</span>
      </div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:12px;color:#6a98b8;">Week ${stats.weekNumber}</div>
      <div style="font-size:22px;font-weight:700;color:${netBalance >= 0 ? '#4caf84' : '#e05060'}">
        ${netBalance >= 0 ? '+' : ''}${netBalance.toLocaleString('ru')} ₸/week
      </div>
    </div>
  </div>

  ${ministryWarning ? `
  <div style="background:#5a1818;border-radius:8px;padding:14px 20px;margin-bottom:18px;
    border:1px solid #9a3030;display:flex;align-items:center;gap:12px;">
    <span style="font-size:22px;">⚠️</span>
    <span style="font-size:14px;color:#ffbbbb;">
      <strong>Ministry Warning:</strong> The school budget has dropped to a critical level.
      Within 2 weeks, if no action is taken, an inspection will be sent.
    </span>
  </div>` : ''}

  <!-- STATS ROW -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;">
    ${this._statCard('💰 Budget', budget.toLocaleString('ru') + ' ₸', budget > 500000 ? '#4caf84' : budget > 200000 ? '#e0a060' : '#e05060')}
    ${this._statCard('📊 Avg Grade', stats.avgClassGrade.toString(), stats.avgClassGrade >= 4 ? '#4caf84' : '#e0a060')}
    ${this._statCard('🎓 Attendance', stats.attendance + '%', stats.attendance >= 90 ? '#4caf84' : '#e0a060')}
    ${this._statCard('⭐ Reputation', stats.reputation.toString(), stats.reputation >= 120 ? '#4caf84' : '#6a98b8')}
  </div>

  <!-- INCOME / EXPENSES -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
    <div style="background:#0f1e30;border-radius:10px;padding:18px 22px;">
      <div style="font-size:12px;color:#5a8cc0;margin-bottom:10px;text-transform:uppercase;letter-spacing:1.5px;">Weekly Income</div>
      <div style="font-size:22px;font-weight:700;color:#4caf84;">+${income.toLocaleString('ru')} ₸</div>
      <div style="font-size:13px;color:#4a7890;margin-top:6px;">Subsidies + grants · Rating ${schoolRating.toFixed(1)}★ bonus</div>
    </div>
    <div style="background:#0f1e30;border-radius:10px;padding:18px 22px;">
      <div style="font-size:12px;color:#5a8cc0;margin-bottom:10px;text-transform:uppercase;letter-spacing:1.5px;">Weekly Expenses</div>
      <div style="font-size:22px;font-weight:700;color:#e05060;">−${expenses.toLocaleString('ru')} ₸</div>
      <div style="font-size:13px;color:#4a7890;margin-top:6px;">Salaries: ${activeStaff.length} teachers</div>
    </div>
  </div>

  <!-- STAFF TABLE -->
  <div style="background:#0f1e30;border-radius:10px;padding:20px 24px;margin-bottom:22px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <div style="font-size:14px;font-weight:600;color:#8cb8d4;">👩‍🏫 Teaching Staff (${activeStaff.length})</div>
      <button id="dir-hire"
        style="padding:8px 18px;border:none;border-radius:6px;cursor:pointer;
          background:#2a4a7a;color:#a8d0f0;font-size:13px;font-weight:600;">
        + Hire Teacher
      </button>
    </div>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead>
          <tr style="color:#4a7890;border-bottom:1px solid #1e3040;">
            <th style="text-align:left;padding:8px 12px;">Name</th>
            <th style="text-align:left;padding:8px 12px;">Subject</th>
            <th style="text-align:center;padding:8px 12px;">Grade</th>
            <th style="text-align:right;padding:8px 12px;">Salary</th>
            <th style="text-align:center;padding:8px 12px;">Performance</th>
            <th style="text-align:center;padding:8px 12px;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${activeStaff.map(t => this._staffRow(t)).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- DECISIONS -->
  <div style="background:#0f1e30;border-radius:10px;padding:20px 24px;margin-bottom:22px;">
    <div style="font-size:14px;font-weight:600;color:#8cb8d4;margin-bottom:14px;">🔧 Management Decisions</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
      ${this._actionBtn('dir-renovate', '🏗️ Renovate Classroom', '−50,000 ₸ · +5 rep', '#2a5a3a')}
      ${this._actionBtn('dir-equipment', '💻 Buy Equipment', '−30,000 ₸ · +0.1 grade', '#3a3a5a')}
      ${this._actionBtn('dir-event', '🎉 School Event', '−20,000 ₸ · +10 rep', '#4a3a2a')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${this._actionBtn('dir-parents', '👪 Parent Meeting', '−10,000 ₸ · +8 rep', '#3a2a5a')}
      ${this._actionBtn('dir-grant', '📑 Grant Application', '−5,000 ₸ · possibly +150,000 ₸', '#205020')}
      ${this._actionBtn('dir-training', '📚 Teacher Training', '−40,000 ₸ · all performance ↑', '#3a4a2a')}
    </div>
  </div>

  <!-- CONTINUE BUTTON -->
  <div style="text-align:center;padding-bottom:24px;">
    <button id="dir-continue"
      style="padding:16px 48px;border:none;border-radius:10px;cursor:pointer;
        background:linear-gradient(135deg,#1a4a8a,#2a6ab0);
        color:#fff;font-size:18px;font-weight:700;
        box-shadow:0 4px 20px rgba(30,90,170,.4);">
      ▶ Next Week
    </button>
  </div>

</div>`

    // Wire raise/lower salary + fire buttons
    activeStaff.forEach(t => {
      el.querySelector(`#fire-${t.id}`)?.addEventListener('click', () => {
        t.fired = true
        this.state.expenses -= t.salary
        this._render(onContinue)
      })
      el.querySelector(`#raise-${t.id}`)?.addEventListener('click', () => {
        t.salary += 5000
        this.state.expenses += 5000
        t.performance = Math.min(100, t.performance + 5)
        this._render(onContinue)
      })
      el.querySelector(`#lower-${t.id}`)?.addEventListener('click', () => {
        if (t.salary > 25000) {
          t.salary -= 5000
          this.state.expenses -= 5000
          t.performance = Math.max(10, t.performance - 8)
          this._render(onContinue)
        }
      })
    })

    el.querySelector('#dir-hire')?.addEventListener('click', () => this._showHireDialog(onContinue))

    el.querySelector('#dir-renovate')?.addEventListener('click', () => {
      if (this.state.budget >= 50000) {
        this.state.budget -= 50000
        this.state.stats.reputation += 5
        this.state.schoolRating = Math.min(5, this.state.schoolRating + 0.1)
        this._render(onContinue)
      }
    })
    el.querySelector('#dir-equipment')?.addEventListener('click', () => {
      if (this.state.budget >= 30000) {
        this.state.budget -= 30000
        this.state.stats.avgClassGrade = Math.min(5, this.state.stats.avgClassGrade + 0.1)
        this.state.schoolRating = Math.min(5, this.state.schoolRating + 0.05)
        this._render(onContinue)
      }
    })
    el.querySelector('#dir-event')?.addEventListener('click', () => {
      if (this.state.budget >= 20000) {
        this.state.budget -= 20000
        this.state.stats.reputation += 10
        this.state.stats.attendance = Math.min(100, this.state.stats.attendance + 3)
        this._render(onContinue)
      }
    })
    el.querySelector('#dir-parents')?.addEventListener('click', () => {
      if (this.state.budget >= 10000) {
        this.state.budget -= 10000
        this.state.stats.reputation += 8
        this.state.stats.attendance = Math.min(100, this.state.stats.attendance + 2)
        this._render(onContinue)
      }
    })
    el.querySelector('#dir-grant')?.addEventListener('click', () => {
      if (this.state.budget >= 5000) {
        this.state.budget -= 5000
        // 60% chance to win grant
        if (Math.random() < 0.6) {
          this.state.budget += 150000
          this.state.stats.reputation += 5
        }
        this._render(onContinue)
      }
    })
    el.querySelector('#dir-training')?.addEventListener('click', () => {
      if (this.state.budget >= 40000) {
        this.state.budget -= 40000
        this.state.staff.filter(s => !s.fired).forEach(t => {
          t.performance = Math.min(100, t.performance + 7)
        })
        this.state.stats.reputation += 3
        this._render(onContinue)
      }
    })

    el.querySelector('#dir-continue')?.addEventListener('click', () => {
      this.state.budget += this.state.income - this.state.expenses
      uiUnlock()
      el.remove()
      this.el = null
      onContinue()
    })

    document.body.appendChild(el)
    this.el = el
  }

  private _statCard(label: string, value: string, color: string): string {
    return `
      <div style="background:#0f1e30;border-radius:10px;padding:16px 18px;text-align:center;">
        <div style="font-size:12px;color:#4a7890;margin-bottom:6px;">${label}</div>
        <div style="font-size:22px;font-weight:700;color:${color};">${value}</div>
      </div>`
  }

  private _staffRow(t: StaffMember): string {
    const perfColor = t.performance >= 80 ? '#4caf84' : t.performance >= 60 ? '#e0a060' : '#e05060'
    const bar = `<div style="width:${t.performance}%;height:4px;background:${perfColor};border-radius:2px;"></div>`
    return `
      <tr style="border-bottom:1px solid #1e3040;">
        <td style="padding:9px 12px;">${t.name}</td>
        <td style="padding:9px 12px;color:#8ab0c8;">${t.subject}</td>
        <td style="padding:9px 12px;text-align:center;">${t.grade}</td>
        <td style="padding:9px 12px;text-align:right;">
          ${t.salary.toLocaleString('ru')} ₸
        </td>
        <td style="padding:9px 12px;min-width:70px;">
          <div style="background:#1e3040;border-radius:2px;">${bar}</div>
          <div style="font-size:11px;color:#4a7890;margin-top:2px;text-align:center;">${t.performance}%</div>
        </td>
        <td style="padding:9px 12px;text-align:center;">
          <div style="display:flex;gap:6px;justify-content:center;">
            <button id="raise-${t.id}" title="Raise salary +5,000"
              style="padding:4px 8px;border:none;border-radius:4px;cursor:pointer;
                background:#1a4a2a;color:#80d0a0;font-size:12px;">▲</button>
            <button id="lower-${t.id}" title="Lower salary −5,000"
              style="padding:4px 8px;border:none;border-radius:4px;cursor:pointer;
                background:#3a2a1a;color:#c0a060;font-size:12px;">▼</button>
            <button id="fire-${t.id}"
              style="padding:4px 10px;border:none;border-radius:4px;cursor:pointer;
                background:#5a1818;color:#f0a0a0;font-size:12px;">Fire</button>
          </div>
        </td>
      </tr>`
  }

  private _actionBtn(id: string, label: string, cost: string, bg: string): string {
    return `
      <button id="${id}"
        style="padding:14px;border:none;border-radius:8px;cursor:pointer;
          background:${bg};color:#d0e8f0;font-size:14px;font-weight:600;
          text-align:left;line-height:1.5;">
        ${label}<br>
        <span style="font-size:12px;opacity:.7;">${cost}</span>
      </button>`
  }

  private _showHireDialog(onContinue: () => void): void {
    const candidate = HIRE_CANDIDATES[Math.floor(Math.random() * HIRE_CANDIDATES.length)]
    const dialog = document.createElement('div')
    dialog.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:7000;'
    dialog.innerHTML = `
      <div style="background:#0f1e30;color:#c8dce8;border-radius:12px;padding:32px 40px;max-width:400px;width:90%;">
        <div style="font-size:20px;font-weight:700;margin-bottom:16px;">Job Candidate</div>
        <div style="font-size:15px;margin-bottom:8px;">👩‍🏫 ${candidate.name}</div>
        <div style="color:#8ab0c8;margin-bottom:8px;">Subject: ${candidate.subject}</div>
        <div style="color:#8ab0c8;margin-bottom:20px;">Salary: ${candidate.salary.toLocaleString('ru')} ₸/week</div>
        <div style="display:flex;gap:12px;">
          <button id="hire-yes" style="flex:1;padding:12px;border:none;border-radius:8px;
            background:#1a6b48;color:#fff;font-size:15px;font-weight:600;cursor:pointer;">
            ✅ Hire
          </button>
          <button id="hire-no" style="flex:1;padding:12px;border:none;border-radius:8px;
            background:#3a2a1a;color:#c89070;font-size:15px;font-weight:600;cursor:pointer;">
            ❌ Decline
          </button>
        </div>
      </div>`
    dialog.querySelector('#hire-yes')?.addEventListener('click', () => {
      const newMember: StaffMember = {
        id: `s${Date.now()}`, name: candidate.name, subject: candidate.subject,
        grade: 8 + Math.floor(Math.random() * 4), salary: candidate.salary,
        performance: 55 + Math.floor(Math.random() * 20),
      }
      this.state.staff.push(newMember)
      this.state.expenses += newMember.salary
      dialog.remove()
      this._render(onContinue)
    })
    dialog.querySelector('#hire-no')?.addEventListener('click', () => dialog.remove())
    document.body.appendChild(dialog)
  }

  isVisible(): boolean { return this.el !== null }

  hide(): void {
    if (!this.el) return
    uiUnlock()
    this.el.remove()
    this.el = null
  }
}
