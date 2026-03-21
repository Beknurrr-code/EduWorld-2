import { uiLock, uiUnlock } from '../ui/UILock'

export type InspectionRating = 'poor' | 'good' | 'excellent'

export interface InspectionRecord {
  roomLabel: string
  teacherName: string
  rating: InspectionRating
  score: number   // poor=0, good=1, excellent=2
}

const NPC_TEACHERS = [
  { name: 'Aigerim Seitkali',  subject: 'Mathematics',  grade: 9  },
  { name: 'ErlanBekuly',      subject: 'Physics',      grade: 10 },
  { name: 'Gulnar Kasymova',   subject: 'Kazakh Lang.', grade: 8  },
  { name: 'Dosym Nurlanov',    subject: 'Chemistry',    grade: 11 },
  { name: 'Zarina Alieva',     subject: 'Biology',      grade: 7  },
  { name: 'Bolatbek Sarsenov', subject: 'Kazakh Hist.', grade: 9  },
  { name: 'Kamila Zhanserik',  subject: 'English',      grade: 10 },
  { name: 'Nursulu Baizhanova',subject: 'Computer Sci.',grade: 11 },
]

const OBSERVATION_NOTES = [
  { quality: 'excellent', notes: [
    'Teacher explains material very clearly', 'Students are fully engaged', 'Excellent discipline and learning atmosphere',
  ], hint: '👍 Model Lesson' },
  { quality: 'excellent', notes: [
    'Differentiated approach to students', 'Uses interactive methods', 'Lesson objective achieved',
  ], hint: '🌟 Excellent Lesson' },
  { quality: 'good', notes: [
    'Lesson pace slightly fast', 'Some students are distracted', 'Generally clear instruction',
  ], hint: '👌 Good Lesson' },
  { quality: 'good', notes: [
    'Topic covered but pace is high', 'A few students falling behind', 'Good classroom interaction',
  ], hint: '👌 Good Lesson' },
  { quality: 'poor', notes: [
    'Students struggling to follow explanation', 'Discipline issues observed', 'Methodology needs improvement',
  ], hint: '⚠️ Needs Improvement' },
  { quality: 'poor', notes: [
    'Lesson objective not clearly stated', 'Students are passive', 'Methodological support required',
  ], hint: '⚠️ Needs Support' },
]

interface SchoolIncident {
  icon: string
  title: string
  description: string
  options: Array<{ label: string; repDelta: number; scoreDelta: number; color: string }>
}

const SCHOOL_INCIDENTS: SchoolIncident[] = [
  {
    icon: '😤', title: 'Hallway Conflict',
    description: 'Two 9th-grade students got into a fight during break. One is trying to leave school mid-day.',
    options: [
      { label: '📞 Call both parents', repDelta: 3, scoreDelta: 2, color: '#1a6b48' },
      { label: '📋 Log in behavior journal', repDelta: 1, scoreDelta: 1, color: '#2a5a8a' },
      { label: '🚪 Let them go home', repDelta: -3, scoreDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '📱', title: 'Widespread Phone Use',
    description: 'A teacher reports: half of grade 10 is openly on phones during class. Asking for VP intervention.',
    options: [
      { label: '📢 Announce school-wide ban', repDelta: 5, scoreDelta: 2, color: '#1a6b48' },
      { label: '🤝 Go support the teacher in class', repDelta: 2, scoreDelta: 1, color: '#2a5a8a' },
      { label: '🤷 Leave it to the teacher', repDelta: -1, scoreDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '😰', title: 'Teacher Requests Unplanned Day Off',
    description: 'Erlan Bekuly is asking for a day off for family reasons. No substitute available — 3 physics lessons.',
    options: [
      { label: '✅ Approve — assign independent work', repDelta: 3, scoreDelta: 1, color: '#1a6b48' },
      { label: '📝 Ask another teacher to cover', repDelta: 1, scoreDelta: 0, color: '#2a5a8a' },
      { label: '❌ Deny — no substitute available', repDelta: -2, scoreDelta: -1, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🏆', title: 'Math Olympiad',
    description: 'District olympiad is tomorrow. Aigerim Seitkali asks to release 3 top students for preparation.',
    options: [
      { label: '🌟 Give 2 hours prep time', repDelta: 6, scoreDelta: 2, color: '#1a6b48' },
      { label: '📚 Give study list to take home', repDelta: 2, scoreDelta: 1, color: '#2a5a8a' },
      { label: '⏭️ They participate as-is', repDelta: 0, scoreDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '😢', title: 'Student Crying in Class',
    description: 'Gulnar Kasymova reports: grade 8 student Ayaulym is crying after a test. Classmates are mocking her.',
    options: [
      { label: '💬 Talk to the class about support', repDelta: 5, scoreDelta: 2, color: '#1a6b48' },
      { label: '📞 Call Ayaulym\'s parents', repDelta: 3, scoreDelta: 1, color: '#2a5a8a' },
      { label: '🙄 Let the teacher handle it', repDelta: -2, scoreDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🌐', title: 'Social Media Complaint',
    description: 'Parents posted in the WhatsApp group: history teacher allegedly gives too much homework.',
    options: [
      { label: '📊 Analyse workload from grade journal', repDelta: 4, scoreDelta: 2, color: '#1a6b48' },
      { label: '🤝 Talk with teacher and parents', repDelta: 3, scoreDelta: 1, color: '#2a5a8a' },
      { label: '🚫 Ignore social media', repDelta: -4, scoreDelta: -1, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🧹', title: 'Spill in Classroom',
    description: 'Cleaning staff reported: water was spilled in room 103 before a lesson. Students are already entering.',
    options: [
      { label: '🚪 Urgently move lesson to another room', repDelta: 4, scoreDelta: 2, color: '#1a6b48' },
      { label: '🧹 Ask to clean quickly, delay lesson', repDelta: 1, scoreDelta: 0, color: '#2a5a8a' },
      { label: '😐 Hold lesson anyway — not a big deal', repDelta: -2, scoreDelta: -1, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🎓', title: 'Mentoring a New Teacher',
    description: 'Kamila Zhanserik has only been working 2 months. A senior teacher suggests running an open lesson with a mentor.',
    options: [
      { label: '📌 Organise open lesson + feedback session', repDelta: 6, scoreDelta: 2, color: '#1a6b48' },
      { label: '📖 Give methodological literature', repDelta: 2, scoreDelta: 1, color: '#2a5a8a' },
      { label: '🤷 Let her figure it out herself', repDelta: -1, scoreDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🔥', title: 'Fire Alarm During Lesson',
    description: 'Fire alarm went off in Block A during a test. This is the 4th false alarm this month.',
    options: [
      { label: '🚨 Immediately evacuate all per protocol', repDelta: 7, scoreDelta: 2, color: '#1a6b48' },
      { label: '📋 Send duty officer to check', repDelta: 1, scoreDelta: 0, color: '#2a5a8a' },
      { label: '😒 Continue test — probably another false alarm', repDelta: -5, scoreDelta: -2, color: '#7a2a2a' },
    ],
  },
  {
    icon: '📰', title: 'Journalist at School',
    description: 'A local reporter wants to write a story about the school. Asks to tour classrooms and speak to students.',
    options: [
      { label: '🎤 Give a tour, prepare top students', repDelta: 8, scoreDelta: 2, color: '#1a6b48' },
      { label: '📄 Give official comment, restricted access', repDelta: 2, scoreDelta: 1, color: '#2a5a8a' },
      { label: '🚫 Politely decline — bad timing', repDelta: -1, scoreDelta: 0, color: '#7a2a2a' },
    ],
  },
  {
    icon: '💊', title: 'Student Fell Ill in Class',
    description: 'Nursulu Baizhanova reports: a grade 11 student became ill right during the lesson. School nurse is on sick leave.',
    options: [
      { label: '🚑 Call an ambulance immediately', repDelta: 6, scoreDelta: 2, color: '#1a6b48' },
      { label: '🛋️ Escort to medical room and call parents', repDelta: 3, scoreDelta: 1, color: '#2a5a8a' },
      { label: '💧 Give water — it will pass', repDelta: -4, scoreDelta: -1, color: '#7a2a2a' },
    ],
  },
  {
    icon: '🏅', title: 'District Certificate of Merit',
    description: 'The district education department offers to nominate one teacher for "Best Teacher of the Year."',
    options: [
      { label: '🌟 Nominate based on results', repDelta: 5, scoreDelta: 2, color: '#1a6b48' },
      { label: '🗳️ Hold a vote among teachers', repDelta: 3, scoreDelta: 1, color: '#2a5a8a' },
      { label: '⏭️ Skip nomination this year', repDelta: -1, scoreDelta: 0, color: '#7a2a2a' },
    ],
  },
]

const POST_INSPECTION_ACTIONS = [
  { label: '👏 Praise teacher in front of colleagues', repDelta: 2, hint: 'Boosts team morale' },
  { label: '📝 Give written recommendations', repDelta: 1, hint: 'Methodological support' },
  { label: '📋 File in official protocol', repDelta: 1, hint: 'Formal documentation' },
  { label: '⏭️ Take no action', repDelta: 0, hint: 'Move on' },
]

export class VPScreen {
  private el: HTMLElement | null = null
  private records: InspectionRecord[] = []
  private currentTeacherIdx = 0
  private onDoneCallback: ((records: InspectionRecord[], repDelta: number) => void) | null = null
  private _accRepDelta = 0
  /** Cumulative score from ALL previous VP days (passed in from TeacherLevel) */
  private _globalScore = 0
  private static readonly DIRECTOR_THRESHOLD = 20

  get totalScore(): number {
    return this.records.reduce((s, r) => s + r.score, 0)
  }

  get inspectCount(): number { return this.records.length }

  setGlobalScore(score: number): void { this._globalScore = score }

  show(
    roomLabel: string,
    onDone: (records: InspectionRecord[], repDelta: number) => void,
  ): void {
    this.onDoneCallback = onDone
    this._accRepDelta = 0
    uiLock()
    // Show VP morning briefing first
    this._renderBriefing(roomLabel)
  }

  private _nextTeacher(): typeof NPC_TEACHERS[0] {
    const t = NPC_TEACHERS[this.currentTeacherIdx % NPC_TEACHERS.length]
    this.currentTeacherIdx++
    return t
  }

  private _renderBriefing(roomLabel: string): void {
    if (this.el) this.el.remove()

    const score = this._globalScore
    const threshold = VPScreen.DIRECTOR_THRESHOLD
    const pct = Math.min(100, Math.round((score / threshold) * 100))
    const barColor = pct >= 80 ? '#4FFFB0' : pct >= 50 ? '#FFD700' : '#58A6FF'

    const el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;'

    el.innerHTML = `
<div style="background:#12203a;color:#e0e8f0;border-radius:16px;padding:38px 48px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);border:1px solid #1e3a5a;">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:6px;">
    🏛️ Deputy Principal — Morning Briefing
  </div>
  <div style="font-size:26px;font-weight:800;margin-bottom:4px;color:#fff;">Good morning, Deputy Principal!</div>
  <div style="color:#8ab4d4;font-size:14px;margin-bottom:22px;">
    Today you are inspecting: <strong style="color:#a8d8ff;">${roomLabel}</strong>
  </div>

  <!-- Progress to Director -->
  <div style="background:#0a1628;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div style="font-size:13px;color:#5a8cc0;font-weight:600;">📈 Progress to Director</div>
      <div style="font-size:13px;color:${barColor};font-weight:800;">${score} / ${threshold} pts</div>
    </div>
    <div style="background:#1a2a40;border-radius:4px;height:10px;overflow:hidden;">
      <div style="width:${pct}%;height:100%;background:${barColor};border-radius:4px;transition:width .4s;"></div>
    </div>
    <div style="font-size:12px;color:#4a6a8a;margin-top:6px;">
      ${pct >= 100 ? '🎉 Ready for Director appointment!' : `${threshold - score} more points until Director`}
    </div>
  </div>

  <!-- Today's focus -->
  <div style="background:#0f1e30;border-radius:8px;padding:14px 18px;margin-bottom:24px;">
    <div style="font-size:13px;color:#5a8cc0;margin-bottom:8px;">📋 Today's tasks:</div>
    <div style="font-size:13px;color:#bad4e8;line-height:1.7;">
      • Visit a lesson in <strong>${roomLabel}</strong><br>
      • Evaluate the teacher's performance<br>
      • Handle school operational issues
    </div>
  </div>

  <button id="vp-brief-start"
    style="width:100%;padding:14px;border:none;border-radius:10px;cursor:pointer;
      background:linear-gradient(135deg,#1a4a8a,#2a6ab0);color:#fff;
      font-size:16px;font-weight:700;">
    ▶ Start Working Day
  </button>
</div>`

    el.querySelector('#vp-brief-start')!.addEventListener('click', () => {
      el.remove()
      this.el = null
      // 50% chance for incident
      if (Math.random() < 0.5) {
        this._renderIncident(roomLabel)
      } else {
        this._render(roomLabel)
      }
    })

    document.body.appendChild(el)
    this.el = el
  }

  private _renderIncident(roomLabel: string): void {
    if (this.el) this.el.remove()
    const incident = SCHOOL_INCIDENTS[Math.floor(Math.random() * SCHOOL_INCIDENTS.length)]

    const el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.78);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;'

    el.innerHTML = `
<div style="background:#1a2535;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#7a9ec4;text-transform:uppercase;margin-bottom:8px;">
    🏛️ Deputy Principal — School Situation
  </div>
  <div style="font-size:36px;margin-bottom:8px;">${incident.icon}</div>
  <div style="font-size:22px;font-weight:700;margin-bottom:12px;">${incident.title}</div>
  <div style="background:#0f1a28;border-radius:8px;padding:16px 20px;margin-bottom:24px;font-size:14px;line-height:1.6;color:#bad4e8;">
    ${incident.description}
  </div>
  <div style="font-size:13px;color:#7a9ec4;margin-bottom:12px;">What will you do?</div>
  <div style="display:flex;flex-direction:column;gap:10px;" id="inc-options">
    ${incident.options.map((o, i) => `
      <button data-idx="${i}"
        style="padding:13px 18px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:${o.color}44;color:#e0e8f0;font-size:14px;font-weight:600;
          border:1px solid ${o.color}88;transition:filter .15s;">
        ${o.label}
        <span style="float:right;font-size:12px;opacity:.7;">${o.repDelta > 0 ? '+' : ''}${o.repDelta} rep</span>
      </button>`).join('')}
  </div>
</div>`

    el.querySelectorAll('#inc-options button').forEach(btn => {
      const b = btn as HTMLButtonElement
      b.addEventListener('mouseenter', () => { b.style.filter = 'brightness(1.3)' })
      b.addEventListener('mouseleave', () => { b.style.filter = '' })
      b.addEventListener('click', () => {
        const idx = parseInt(b.dataset.idx!)
        this._accRepDelta += incident.options[idx].repDelta
        el.remove()
        this.el = null
        this._render(roomLabel)
      })
    })

    document.body.appendChild(el)
    this.el = el
  }

  private _render(roomLabel: string): void {
    if (this.el) this.el.remove()

    const teacher = this._nextTeacher()
    const obs = OBSERVATION_NOTES[Math.floor(Math.random() * OBSERVATION_NOTES.length)]

    const el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;'

    el.innerHTML = `
<div style="background:#1e2a38;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:560px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.6);">

  <div style="font-size:11px;letter-spacing:2px;color:#7a9ec4;text-transform:uppercase;margin-bottom:6px;">
    🏛️ Deputy Principal — Lesson Inspection
  </div>
  <div style="font-size:22px;font-weight:700;margin-bottom:4px;">${roomLabel}</div>
  <div style="color:#8ab4d4;font-size:14px;margin-bottom:20px;">
    ${teacher.name} · ${teacher.subject} · Grade ${teacher.grade}
  </div>

  <div style="background:#162030;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
    <div style="font-size:13px;color:#7a9ec4;margin-bottom:10px;">
      🔍 Observations during the lesson:
      <span style="font-size:12px;opacity:.65;margin-left:8px;">${obs.hint}</span>
    </div>
    ${obs.notes.map(n => `<div style="margin-bottom:6px;font-size:14px;">• ${n}</div>`).join('')}
  </div>

  <div style="font-size:14px;color:#a0b8cc;margin-bottom:14px;font-weight:600;">
    Official lesson rating:
  </div>

  <div style="display:flex;gap:10px;justify-content:center;margin-bottom:26px;">
    <button id="vp-poor"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#6b1a1a;color:#ffaaaa;
        border:1px solid #8b2222;transition:filter .15s;">
      👎<br>Needs Improvement<br><span style="font-size:11px;opacity:.6;">0 pts</span>
    </button>
    <button id="vp-good"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#1a4a34;color:#80ffc0;
        border:1px solid #2a7a50;transition:filter .15s;">
      👌<br>Good<br><span style="font-size:11px;opacity:.6;">+1 pt</span>
    </button>
    <button id="vp-excellent"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#2a1a6a;color:#c0a0ff;
        border:1px solid #4a2e9a;transition:filter .15s;">
      ⭐<br>Excellent<br><span style="font-size:11px;opacity:.6;">+2 pts</span>
    </button>
  </div>

  <div style="display:flex;justify-content:space-between;align-items:center;
    border-top:1px solid #2a3a4a;padding-top:14px;">
    <div style="font-size:12px;color:#5a7a9a;">
      Inspections today: ${this.records.length}
      ${this._accRepDelta !== 0 ? ` · Rep: ${this._accRepDelta > 0 ? '+' : ''}${this._accRepDelta}` : ''}
    </div>
    <button id="vp-finish"
      style="padding:10px 20px;border:none;border-radius:7px;cursor:pointer;
        background:#1a2a3a;color:#6a9ab8;font-size:13px;border:1px solid #2a3a4a;">
      Finish Round
    </button>
  </div>
</div>`

    ;(['poor', 'good', 'excellent'] as InspectionRating[]).forEach(r => {
      const btn = el.querySelector(`#vp-${r}`) as HTMLButtonElement
      btn.addEventListener('mouseenter', () => { btn.style.filter = 'brightness(1.25)' })
      btn.addEventListener('mouseleave', () => { btn.style.filter = '' })
      btn.addEventListener('click', () => {
        const score = r === 'poor' ? 0 : r === 'good' ? 1 : 2
        this.records.push({ roomLabel, teacherName: teacher.name, rating: r, score })
        el.remove()
        this.el = null
        // Show post-inspection feedback step
        this._renderPostFeedback(teacher.name, r, roomLabel)
      })
    })

    el.querySelector('#vp-finish')!.addEventListener('click', () => {
      uiUnlock()
      el.remove()
      this.el = null
      this.onDoneCallback?.(this.records, this._accRepDelta)
    })

    document.body.appendChild(el)
    this.el = el
  }

  private _renderPostFeedback(teacherName: string, rating: InspectionRating, roomLabel: string): void {
    const ratingLabel = rating === 'excellent' ? '⭐ Excellent' : rating === 'good' ? '👌 Good' : '👎 Needs Improvement'
    const ratingColor = rating === 'excellent' ? '#c0a0ff' : rating === 'good' ? '#80ffc0' : '#ffaaaa'

    const actions = rating === 'poor'
      ? [
          { label: '📋 Schedule unplanned assessment', repDelta: 1, hint: 'Official oversight' },
          { label: '🤝 Have a personal talk with teacher', repDelta: 2, hint: 'Individual support' },
          { label: '📚 Send to professional development', repDelta: 3, hint: 'Long-term improvement' },
          { label: '⏭️ Just log in protocol', repDelta: 0, hint: 'No additional steps' },
        ]
      : rating === 'good'
      ? [
          { label: '📝 Give written recommendations', repDelta: 1, hint: 'Methodological support' },
          { label: '📊 Suggest an open lesson', repDelta: 2, hint: 'Knowledge sharing' },
          { label: '⏭️ Log in protocol and continue', repDelta: 0, hint: 'Standard procedure' },
        ]
      : [
          { label: '🏅 Nominate for school award', repDelta: 3, hint: 'Motivates colleagues' },
          { label: '👏 Praise at staff council', repDelta: 2, hint: 'Boosts morale' },
          { label: '📌 Recommend as mentor', repDelta: 2, hint: 'Spreading best practice' },
          { label: '⏭️ Leave things as they are', repDelta: 0, hint: 'No extra action' },
        ]

    const el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;'

    el.innerHTML = `
<div style="background:#1a2a3a;color:#e0e8f0;border-radius:14px;padding:34px 42px;
  max-width:500px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:10px;">
    📋 Deputy Principal — Post Inspection
  </div>
  <div style="margin-bottom:6px;">
    <span style="font-size:15px;color:#a0c0e0;">${teacherName}</span>
    <span style="margin-left:10px;font-size:13px;color:${ratingColor};font-weight:700;">${ratingLabel}</span>
  </div>
  <div style="font-size:14px;color:#7a9ab8;margin-bottom:20px;">${roomLabel}</div>

  <div style="font-size:13px;color:#5a8cc0;margin-bottom:12px;font-weight:600;">
    Your next steps:
  </div>
  <div id="post-actions" style="display:flex;flex-direction:column;gap:9px;">
    ${actions.map((a, i) => `
      <button data-idx="${i}"
        style="padding:12px 16px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:#0f1e30;color:#c8dcf0;font-size:13px;font-weight:600;
          border:1px solid #1e3040;transition:filter .15s;display:flex;justify-content:space-between;align-items:center;">
        <span>${a.label}</span>
        <span style="font-size:11px;color:#4a7a9a;">${a.hint}${a.repDelta > 0 ? ` · +${a.repDelta} rep` : ''}</span>
      </button>`).join('')}
  </div>
</div>`

    el.querySelectorAll('#post-actions button').forEach(btn => {
      const b = btn as HTMLButtonElement
      b.addEventListener('mouseenter', () => { b.style.filter = 'brightness(1.3)' })
      b.addEventListener('mouseleave', () => { b.style.filter = '' })
      b.addEventListener('click', () => {
        const a = actions[parseInt(b.dataset.idx!)]
        this._accRepDelta += a.repDelta
        el.remove()
        this.el = null
        uiUnlock()
        this.onDoneCallback?.(this.records, this._accRepDelta)
      })
    })

    document.body.appendChild(el)
    this.el = el
  }

  hide(): void {
    if (!this.el) return
    uiUnlock()
    this.el.remove()
    this.el = null
  }

  isVisible(): boolean { return this.el !== null }

  reset(): void {
    this.records = []
    this.currentTeacherIdx = 0
    this._accRepDelta = 0
  }
}
