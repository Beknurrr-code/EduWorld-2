import * as THREE from 'three'
import { App } from '../core/App'
import { EventBus } from '../core/EventBus'
import { TimeManager } from '../core/TimeManager'
import { SaveSystem } from '../core/SaveSystem'
import { SchoolScene } from '../scene/SchoolScene'
import { Student, makeStudentData } from '../entities/Student'
import { Player } from '../entities/Player'
import { LessonSystem } from '../systems/LessonSystem'
import { ExamSystem } from '../systems/ExamSystem'
import { ClassroomEventSystem } from '../systems/ClassroomEvents'
import { AttentionSystem } from '../systems/AttentionSystem'
import { GradeBook } from '../systems/GradeBook'
import { CareerSystem } from '../systems/CareerSystem'
import { MoneySystem } from '../systems/MoneySystem'
import { SkillTree } from '../systems/SkillTree'
import { FeatherlessAPI } from '../ai/FeatherlessAPI'
import { StudentAI } from '../ai/StudentAI'
import { HUD } from '../ui/HUD'
import { NotebookUI } from '../ui/NotebookUI'
import { ExplanationPanel } from '../ui/ExplanationPanel'
import { TaskPanel } from '../ui/TaskPanel'
import { HomeworkUI } from '../ui/HomeworkUI'
import { EventChoiceUI } from '../ui/EventChoiceUI'
import { PauseMenu } from '../ui/PauseMenu'
import { LessonPrepPanel } from '../ui/LessonPrepPanel'
import { HomeworkCheckUI } from '../ui/HomeworkCheckUI'
import { BreakSystem } from '../systems/BreakSystem'
import { StudentRemarkUI } from '../ui/StudentRemarkUI'
import { SoundManager } from '../core/SoundManager'
import { ReportCard } from '../screens/ReportCard'
import { DayScheduleScreen } from '../screens/DayScheduleScreen'
import { SkillTreeScreen } from '../screens/SkillTreeScreen'
import { WeekScreen, WeekSummary } from '../screens/WeekScreen'
import { VPScreen } from '../screens/VPScreen'
import { DirectorScreen } from '../screens/DirectorScreen'
import { GameOverScreen, FireReason } from '../screens/GameOverScreen'
import { EndingScreen } from '../screens/EndingScreen'
import { CharData } from '../screens/CharSelect'

const LESSONS_PER_DAY = 4
const DAYS_PER_WEEK = 3
const CLASS_SIZE = 15
const DEFAULT_GRADES = [7, 8, 9, 10]  // one per lesson slot — cycling classes

const SUBJECT_ICONS: Record<string, string> = {
  math: '📐', physics: '⚡', chemistry: '🧪',
  history: '📜', literature: '📖', russian: '✍️',
}

const STUDENT_NAMES = [
  'Айбек','Зарина','Данияр','Айсұлу','Нұрболат','Мадина','Ерлан','Гүлнұр','Асел','Аяулым',
  'Бекзат','Азамат','Тәңірбек','Инкар','Арузан','Сабина','Жансерік','Айгерім','Ділнәз','Мұхамеджан',
  'Кенжебек','Асыл','Даурен','Балжан','Алибек','Акмарал','Нәзім','Зұлфия','Толқын','Адем',
]
const STUDENT_TYPES: import('../entities/StudentMesh').StudentType[] = [
  'average','genius','average','anxious','average','helper','bully','average','average','lazy',
  'anxious','average','genius','average','bully',
]

export class TeacherLevel {
  private app: App
  private bus = EventBus.getInstance()
  private time = TimeManager.getInstance()
  private save = SaveSystem.getInstance()

  private school!: SchoolScene
  private player!: Player
  private students: Student[] = []

  private lessonSys = new LessonSystem()
  private eventSys = new ClassroomEventSystem()
  private attention = AttentionSystem.getInstance()
  private gradebook = GradeBook.getInstance()
  private career = new CareerSystem()
  private money = new MoneySystem()
  private skillTree = new SkillTree()
  private examSystem = new ExamSystem()
  private featherless: FeatherlessAPI
  private studentAI!: StudentAI

  private hud!: HUD
  private notebookUI!: NotebookUI
  private explPanel!: ExplanationPanel
  private taskPanel!: TaskPanel
  private hwUI!: HomeworkUI
  private eventUI!: EventChoiceUI
  private pauseMenu!: PauseMenu
  private reportCard!: ReportCard
  private scheduleScreen!: DayScheduleScreen
  private skillScreen!: SkillTreeScreen
  private weekScreen!: WeekScreen
  private vpScreen = new VPScreen()
  private directorScreen = new DirectorScreen()
  private gameOverScreen = new GameOverScreen()
  private endingScreen = new EndingScreen()
  /** Lesson preparation panel (shows before each lesson) */
  private prepPanel!: LessonPrepPanel
  /** Homework check & grading table */
  private hwCheckUI!: HomeworkCheckUI
  /** Break system - students wander during перемена */
  private breakSys = new BreakSystem()
  private remarkUI!: StudentRemarkUI
  private sound = SoundManager.getInstance()
  /** Timer for random phone/sleep events during lesson */
  private remarkTick = 0

  // Game state
  private charData!: CharData
  private dayNumber = 1
  private lessonIndex = 0  // 0-4
  private weekReports: import('../systems/LessonSystem').LessonReport[] = []
  /** Topics completed per grade: { 7: ['...'], 8: ['...'], ... } */
  private completedTopicsPerGrade: Record<number, string[]> = {}
  private experience = 0
  private reputation = 50
  private blockInput = false
  private behaviorTick = 0
  private isWednesdayQuiz = false
  /** Pending interaction action — triggered by E key near blackboard */
  private pendingAction: (() => void) | null = null
  /** VP inspection score accumulated this week */
  private vpInspectionScore = 0
  /** Consecutive weeks with avg exam grade < 2.8 */
  private badExamStreak = 0
  /** Total weeks played (for fired-screen stats) */
  private totalWeeks = 0

  constructor(app: App, apiKey = '') {
    this.app = app
    this.featherless = new FeatherlessAPI(apiKey)
  }

  async start(charData: CharData): Promise<void> {
    this.charData = charData

    // Load save if exists
    const saved = this.save.load()
    if (saved) {
      this.experience = saved.experience
      this.reputation = saved.reputation
      this.dayNumber = saved.dayNumber
      this.lessonIndex = 0
      this.career.load(saved.careerRank)
      this.skillTree.load(saved.unlockedPerks)
      // Support both old flat array and new per-grade object
      if (saved.completedTopicsPerGrade) {
        this.completedTopicsPerGrade = saved.completedTopicsPerGrade as Record<number, string[]>
      } else if (saved.completedTopics?.length) {
        const g = charData.grades?.[0] ?? (charData as any).grade ?? 9
        this.completedTopicsPerGrade[g] = saved.completedTopics
      }
    }

    this.studentAI = new StudentAI(this.featherless)

    // Build school
    this.school = new SchoolScene()
    this.app.setScene(this.school.scene)

    // Build students (start in room101)
    const room101 = this.school.rooms.get('room101')!
    for (let i = 0; i < CLASS_SIZE; i++) {
      const data = makeStudentData(String(i), STUDENT_NAMES[i] ?? `Student${i}`, STUDENT_TYPES[i] ?? 'average')
      const s = new Student(data, this.school.scene)
      const desk = room101.deskInfos[i]
      if (desk) {
        s.placeat(new THREE.Vector3(desk.position.x, 0.24, desk.position.z + 0.62))
        s.group.rotation.y = Math.PI
      }
      this.students.push(s)
    }

    // Player starts in corridor
    this.player = new Player(this.app.camera as THREE.PerspectiveCamera)
    this.player.setColliders(this.school.corridorColliders)
    this.app.camera.position.set(0, 1.7, 0)

    // UI
    this.hud = new HUD()
    this.hud.addGlobalStyles()
    this.notebookUI = new NotebookUI()
    this.explPanel = new ExplanationPanel()
    this.taskPanel = new TaskPanel()
    this.hwUI = new HomeworkUI()
    this.eventUI = new EventChoiceUI()
    this.pauseMenu = new PauseMenu()
    this.reportCard = new ReportCard()
    this.scheduleScreen = new DayScheduleScreen()
    this.skillScreen = new SkillTreeScreen(this.skillTree)
    this.weekScreen = new WeekScreen()
    this.prepPanel = new LessonPrepPanel()
    this.hwCheckUI = new HomeworkCheckUI()
    this.remarkUI = new StudentRemarkUI()
    this.hud.setReputation(this.reputation)
    this.hud.setMoney(this.money.calcWeeklySalary(this.reputation, this.career.rank.salaryBonus))
    this.hud.setDay(this.dayNumber)

    // Bind tick
    this.app.onTick((dt) => this.tick(dt))

    // Wire events
    this.wireEvents()

    // Show day schedule
    this.showSchedule()
  }

  private wireEvents(): void {
    this.bus.on('playerInteract', () => this.onInteract())
    this.bus.on('pauseToggled', () => this.togglePause())
    this.bus.on('attentionWarning', () => {
      this.hud.showNotification('⚠️ The class is losing attention!', '#FFD700')
      this.sound.playWarning()
    })
    this.bus.on('studentDisrupting', (data: unknown) => {
      const { studentName } = data as { studentName: string }
      this.hud.showNotification(`😤 ${studentName} is disrupting the class!`, '#FF4D4D')
      this.sound.playWarning()
    })
    // Init sound on first user interaction
    document.addEventListener('click', () => this.sound.init(), { once: true })
    document.addEventListener('keydown', () => this.sound.init(), { once: true })

    // Secret dev shortcuts (hidden from players)
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === '-') this._cheatPromoteToVP()
      if (e.key === '=') this._cheatPromoteToDirector()
    })
  }

  private tick(deltaMs: number): void {
    // Update time
    this.time.tick(deltaMs)
    this.hud.setTime(this.time.getHHMM())

    // Update students
    this.students.forEach(s => s.update(deltaMs))

    // Behavior AI tick every 5s real
    this.behaviorTick += deltaMs
    if (this.behaviorTick > 5000) {
      this.behaviorTick = 0
      if (!this.blockInput) this.studentAI.behaviorTick(this.students)
    }

    // Attention tick (called once per frame for minor decay)
    this.attention.tick(this.students)

    // Camera update
    this.player.update(deltaMs)

    // Break system
    if (this.breakSys.isActive()) {
      this.breakSys.update(deltaMs)
    }

    // Random phone/sleep events during lesson (every 15s)
    if (!this.blockInput && this.lessonSys.getPhase() !== 'done') {
      this.remarkTick += deltaMs
      if (this.remarkTick > 15_000) {
        this.remarkTick = 0
        this._tickStudentMisbehavior()
      }
    }
  }

  // ---- Schedule / Day flow ----

  /** Returns the grade for the given lesson slot */
  private gradeForLesson(lessonIdx: number): number {
    const grades = this.charData.grades ?? DEFAULT_GRADES
    return grades[lessonIdx % grades.length] ?? 9
  }

  /** Returns the room ID for the given lesson index. */
  private roomForLesson(lessonIdx: number): string {
    const grades = this.charData.grades ?? DEFAULT_GRADES
    const uniqueGrades = [...new Set(grades)]
    const grade = grades[lessonIdx % grades.length] ?? 9
    return uniqueGrades.indexOf(grade) % 2 === 0 ? 'room101' : 'room102'
  }

  /** Moves all students to the desks in the given room. */
  private placeStudentsIn(roomId: string): void {
    const room = this.school.rooms.get(roomId)
    if (!room || room.deskInfos.length === 0) return
    this.students.forEach((s, i) => {
      const desk = room.deskInfos[i]
      if (!desk) return
      s.placeat(new THREE.Vector3(desk.position.x, 0.24, desk.position.z + 0.62))
      s.group.rotation.y = Math.PI
    })
  }

  private showSchedule(): void {
    // Director mode
    if (this.career.isDirector()) {
      this._startDirectorWeek()
      return
    }
    // VP mode
    if (this.career.isVP()) {
      this._startVPDay()
      return
    }

    // Every 2nd day is a СОР (written assessment) day — no regular lessons
    if (this.dayNumber % 2 === 0) {
      this._startSOR()
      return
    }

    this.blockInput = true
    const grades = this.charData.grades ?? DEFAULT_GRADES
    const fmtTime = (totalMin: number) => {
      const h = Math.floor(totalMin / 60)
      const m = String(totalMin % 60).padStart(2, '0')
      return `${h}:${m}`
    }
    const slots = Array.from({ length: LESSONS_PER_DAY }, (_, i) => {
      const g = grades[i % grades.length] ?? 9
      const roomLabel = this.school.rooms.get(this.roomForLesson(i))?.label ?? 'Classroom'
      const startMin = 8 * 60 + 30 + i * 55
      const endMin   = startMin + 45
      return {
        index: i,
        subject: `${this.charData.subject} • Gr.${g} (${roomLabel})`,
        icon: SUBJECT_ICONS[this.charData.subject] ?? '📚',
        time: `${fmtTime(startMin)} – ${fmtTime(endMin)}`,
        done: i < this.lessonIndex,
        current: i === this.lessonIndex,
      }
    })
    this.scheduleScreen.show(this.dayNumber, slots, () => {
      this.blockInput = false
      this.startLesson()
    })
  }

  private startLesson(): void {
    const roomId = this.roomForLesson(this.lessonIndex)
    this.placeStudentsIn(roomId)

    this.attention.reset()
    // Minutes offset from 08:00: lesson 0 → 8:30, lesson 1 → 9:25, etc.
    this.time.reset(30 + this.lessonIndex * 55)

    // Wednesday = day 3 of the week — trigger quiz instead of regular tasks
    this.isWednesdayQuiz = (((this.dayNumber - 1) % 5) === 2)  // days 3, 8, 13...

    const currentGrade = this.gradeForLesson(this.lessonIndex)
    const completedForGrade = this.completedTopicsPerGrade[currentGrade] ?? []

    this.lessonSys.init(
      this.charData.subject,
      currentGrade,
      this.dayNumber,
      completedForGrade,
    )

    this.eventSys.init(this.charData.subject, this.lessonSys.getTopic())

    const room = this.school.rooms.get(roomId)
    room?.blackboard?.writeText([
      this.lessonSys.getTopic(),
      `${this.charData.subject.toUpperCase()} · Grade ${currentGrade}`,
    ])

    this.hud.show()
    this.students.forEach(s => s.setEmotion('neutral'))

    // Give player free movement — they must walk to blackboard and press E
    this.pendingAction = () => this.openLessonPrep()
    this.hud.showNotification(
      `🏫 ${room?.label ?? 'Classroom'} · Grade ${currentGrade} — approach the board and press E`,
      '#4FFFB0', 7000,
    )
  }

  // ---- Lesson phases ----

  /** Opens lesson preparation panel. Player chose what to do before the lesson. */
  private openLessonPrep(): void {
    this.blockInput = true
    this.time.paused = true

    const hwDoneCount = this.students.filter(s => s.data.hwDone).length
    const topic = this.lessonSys.getTopic()
    const grade = this.gradeForLesson(this.lessonIndex)
    let hwAlreadyChecked = false

    const startWithBonus = (understandingBonus: number, attentionBonus: number, notifMsg: string, notifColor: string) => {
      this.lessonSys.setPrepBonus(understandingBonus, attentionBonus)
      this.blockInput = false
      this.time.paused = false
      if (notifMsg) this.hud.showNotification(notifMsg, notifColor, 2800)
      this.openExplanationPhase()
    }

    const openHwCheck = () => {
      this.hwCheckUI.open(this.students.map(s => s.data), (grades) => {
        hwAlreadyChecked = true
        // Record grades in gradebook
        grades.forEach((hwGrade, studentId) => {
          const s = this.students.find(st => st.data.id === studentId)
          if (s) {
            this.gradebook.add({
              studentId,
              studentName: s.data.name,
              grade: hwGrade as 2 | 3 | 4 | 5,
              topic: this.lessonSys.getTopic(),
              lessonDay: this.dayNumber,
              type: 'oral',
            })
          }
        })
        // Auto-grade students who didn't do hw as 2
        this.students.forEach(s => {
          if (!s.data.hwDone && !grades.has(s.data.id)) {
            this.gradebook.add({
              studentId: s.data.id,
              studentName: s.data.name,
              grade: 2,
              topic: this.lessonSys.getTopic(),
              lessonDay: this.dayNumber,
              type: 'oral',
            })
          }
        })
        const checked = grades.size + this.students.filter(s => !s.data.hwDone).length
        this.hud.showNotification(`📋 HW checked: ${checked} students`, '#58A6FF', 2500)
        // Return to prep panel with hw already checked (so hw_check button is greyed)
        this.prepPanel.open(topic, grade, hwDoneCount, this.students.length,
          choice => startWithBonus(choice.understandingBonus, choice.attentionBonus,
            choice.id === 'topic_review'
              ? `📖 Topic reviewed! +${choice.understandingBonus} understanding`
              : choice.id === 'energetic'
                ? `⚡ Energetic start! +${choice.attentionBonus} attention`
                : '',
            choice.id === 'energetic' ? '#FFD700' : '#4FFFB0',
          ),
          openHwCheck,
          true,  // hwAlreadyChecked → disable hw_check button
        )
      })
    }

    this.prepPanel.open(topic, grade, hwDoneCount, this.students.length,
      choice => {
        if (choice.id === 'skip') {
          startWithBonus(0, 0, '', '')
        } else if (choice.id === 'topic_review') {
          startWithBonus(choice.understandingBonus, choice.attentionBonus,
            `📖 Topic reviewed! +${choice.understandingBonus} understanding`, '#4FFFB0')
        } else if (choice.id === 'energetic') {
          startWithBonus(choice.understandingBonus, choice.attentionBonus,
            `⚡ Energetic start! +${choice.attentionBonus} attention`, '#FFD700')
        }
      },
      openHwCheck,
    )
  }

  private openExplanationPhase(): void {
    this.blockInput = true
    this.time.paused = true
    const round = this.lessonSys.getCurrentRound()
    const rounds = this.lessonSys.getRounds()
    const roundNum = rounds.indexOf(round) + 1

    this.explPanel.open(round, roundNum, rounds.length, (optionIdx) => {
      this.time.paused = false
      this.lessonSys.chooseExplanationOption(optionIdx, this.students)
      const xpMult = this.skillTree.getXPMult('explain')
      this.experience += Math.round(5 * xpMult)

      const opt = round.options[optionIdx]
      this.studentAI.reactToExplanation(this.students, opt.understandingDelta, opt.attentionDelta)

      this.blockInput = false

      if (this.lessonSys.getPhase() === 'tasks') {
        // All explanations done — next step: assign tasks
        this.pendingAction = () => this.openTaskPhase()
        this.hud.showNotification('📝 Press E to assign a task to the class', '#FFD700', 7000)
      } else {
        // More explanation rounds — walk around, then E for next round
        this.tryFireEvent(() => {
          this.pendingAction = () => this.openExplanationPhase()
          this.hud.showNotification(`📌 Step ${roundNum + 1} — press E at the board`, '#4FFFB0', 6000)
        })
      }
    })
  }

  private openTaskPhase(): void {
    // Wednesday quiz: skip task panel — run special quiz routine instead
    if (this.isWednesdayQuiz) {
      this.runWednesdayQuiz()
      return
    }

    this.blockInput = true
    this.time.paused = true
    const entry = this.lessonSys.getTopicEntry()
    const tasks = entry
      ? { easy: entry.tasks.easy.text, medium: entry.tasks.medium.text, hard: entry.tasks.hard.text }
      : { easy: '— no data —', medium: '— no data —', hard: '— no data —' }

    this.taskPanel.open(tasks, (mode, diff) => {
      this.time.paused = false
      this.blockInput = false
      this.lessonSys.setTaskConfig({ difficulty: diff, quantity: 'few' }, this.students, mode)

      const modeLabel = mode === 'board' ? 'at board 📋' : 'written ✏️'
      this.hud.showNotification(
        `📝 Class working on task (${modeLabel}, ${diff})… observe`,
        '#4FFFB0', 4000,
      )

      // Students work for ~12s, then collect notebooks
      setTimeout(() => {
        this.lessonSys.finishTasks(this.students)
        this.tryFireEvent(() => {
          this.pendingAction = () => this.openGradingPhase()
          this.hud.showNotification('📓 Collect notebooks — press E', '#BC8CFF', 10000)
        })
      }, 12000)
    })
  }

  private openGradingPhase(): void {
    this.blockInput = true
    this.time.paused = true
    const notebooks = this.lessonSys.getNotebooks()
    this.notebookUI.open(
      notebooks,
      (id, grade) => { this.lessonSys.gradeNotebook(id, grade) },
      () => {
        this.time.paused = false
        this.lessonSys.finishGrading()
        this.blockInput = false
        this.openHomeworkPhase()
      },
    )
  }

  private openHomeworkPhase(): void {
    this.showHomeworkChoice()
  }

  private runWednesdayQuiz(): void {
    this.blockInput = true
    this.time.paused = true
    this.hud.showNotification('📋 Wednesday — written quiz!', '#BC8CFF', 4000)
    // All students write their quiz
    this.students.forEach(s => s.setEmotion('writing'))
    // Reuse finishTasks to generate notebooks + move to grading phase
    this.lessonSys.setPhase('tasks')
    this.lessonSys.finishTasks(this.students)
    const notebooks = this.lessonSys.getNotebooks()
    // After a short delay, show grading UI
    setTimeout(() => {
      this.notebookUI.open(
        notebooks,
        (id, grade) => { this.lessonSys.gradeNotebook(id, grade) },
        () => {
          this.time.paused = false
          this.lessonSys.finishGrading()
          this.blockInput = false
          this.lessonSys.setPhase('homework')
          this.openHomeworkPhase()
        },
      )
    }, 1800)
  }

  private showHomeworkChoice(): void {
    this.time.paused = true
    const entry = this.lessonSys.getTopicEntry()
    const homeworks = entry
      ? { easy: entry.homework.easy, medium: entry.homework.medium, hard: entry.homework.hard }
      : { easy: '— no data —', medium: '— no data —', hard: '— no data —' }

    this.hwUI.open(homeworks, (give, diff) => {
      this.time.paused = false
      this.lessonSys.setHomework(give, diff, this.students)
      if (give) {
        this.sound.playBell()
        this.hud.showNotification(`📚 Homework assigned (${diff})`, '#58A6FF', 2200)
      } else {
        this.sound.playBell()
        this.hud.showNotification('✅ Lesson finished — no homework', '#4FFFB0', 2200)
      }
      // 65% chance a student asks a question after homework
      const candidateStudents = this.students
        .filter(s => s.data.stats.understanding < 70)
        .sort(() => Math.random() - 0.5)
        .slice(0, 1)
      const questStudents = candidateStudents.length > 0
        ? candidateStudents
        : [this.students[Math.floor(Math.random() * this.students.length)]]
      if (Math.random() < 0.65) {
        setTimeout(() => this._showStudentQuestion(questStudents, () => this.finishLesson()), 600)
        return
      }
      setTimeout(() => this.finishLesson(), 2400)
    })
  }

  private finishLesson(): void {
    this.blockInput = true

    const report = this.lessonSys.buildReport(this.students)
    const xpMult = this.skillTree.getXPMult('lesson')
    const xpFinal = Math.round(report.xpEarned * xpMult)

    this.experience += xpFinal
    this.reputation = Math.max(0, Math.min(200, this.reputation + report.repDelta))
    // Track completed topic per grade
    const g = report.classGrade
    if (!this.completedTopicsPerGrade[g]) this.completedTopicsPerGrade[g] = []
    this.completedTopicsPerGrade[g].push(report.topic)
    this.weekReports.push(report)

    // Simulate HW done for next day
    if (report.hwGiven) {
      this.studentAI.simulateHWCompletion(this.students, report.hwDifficulty ?? 'medium')
    }

    // Only regular-rank promotions mid-lesson (VP/Director need exam/inspection)
    const promoted = this.career.checkPromotion(this.experience, this.lessonIndex + 1, this.reputation)
    if (promoted) {
      this.hud.showNotification(`🎉 Career promotion: ${promoted.name}!`, '#FFD700', 4000)
    }

    // Add skill point
    this.skillTree.addPoints(10)

    this.hud.setReputation(this.reputation)
    this.hud.setMoney(this.money.calcWeeklySalary(this.reputation, this.career.rank.salaryBonus))

    this.reportCard.show(report, this.experience - xpFinal, () => {
      this.blockInput = false
      this.checkStudentProgression()
      this.lessonIndex++
      if (this.lessonIndex >= LESSONS_PER_DAY) {
        this.endDay()
      } else {
        // Break between lessons (except after the last one)
        this.startBreak(() => this.showSchedule())
      }
    })
  }

  /** Between-lesson перемена: students scatter to corridor, player can wander */
  private startBreak(onEnd: () => void): void {
    const BREAK_MS = 30_000  // 30 real seconds
    this.sound.playBell()
    this.hud.showNotification('🔔 Break! Press E near the classroom door to enter early.', '#4FFFB0', 6000)

    // Place player safely in corridor center (not on wall boundary)
    this.app.camera.position.set(0, 1.7, 0)

    this.breakSys.start(this.students, BREAK_MS, () => {
      this.pendingAction = null
      onEnd()
    })

    // Allow player to press E near a classroom door to end break early
    this.pendingAction = () => {
      if (this.breakSys.isActive()) {
        this.breakSys.forceEnd()
      }
    }

    // Show a countdown in HUD every 10 seconds
    const tick10 = (remaining: number) => {
      if (!this.breakSys.isActive()) return
      if (remaining > 0) {
        this.hud.showNotification(`⏱ Break — ${Math.ceil(remaining / 1000)}s left (E at door — enter)`, '#8B949E', 2500)
        setTimeout(() => tick10(remaining - 10_000), 10_000)
      }
    }
    setTimeout(() => tick10(BREAK_MS - 10_000), 10_000)
  }

  /** Checks each student after a lesson and rewards sustained improvement */
  private checkStudentProgression(): void {
    this.students.forEach(s => {
      const { understanding, motivation, behavior, attention } = s.data.stats
      const type = s.data.type
      let goodLesson = false

      if (type === 'lazy'    && understanding > 50 && motivation > 40) goodLesson = true
      if (type === 'bully'   && behavior > 60) goodLesson = true
      if (type === 'anxious' && understanding > 60 && motivation > 55) goodLesson = true
      if (type === 'average' && understanding > 65 && attention > 60)  goodLesson = true

      if (goodLesson) {
        s.data.progressionScore++
        const threshold = type === 'bully' ? 4 : 3
        if (s.data.progressionScore >= threshold) {
          s.data.progressionScore = 0
          s.modifyStat('motivation', 15)
          s.modifyStat('behavior', 10)
          s.modifyStat('understanding', 8)
          const msgs: Record<string, string> = {
            lazy:    `✨ ${s.data.name} started trying! Noticeable progress.`,
            bully:   `🌟 ${s.data.name} has been behaving better!`,
            anxious: `💪 ${s.data.name} gained confidence!`,
            average: `📈 ${s.data.name} shows steady growth!`,
          }
          this.hud.showNotification(msgs[type] ?? `✨ ${s.data.name} improved noticeably!`, '#FFD700', 3500)
        }
      }
    })
  }

  private endDay(): void {
    this.lessonIndex = 0
    this.dayNumber++
    this._saveProgress()

    if (this.dayNumber > DAYS_PER_WEEK) {
      this.endWeek()
    } else {
      this.showSchedule()
    }
  }

  private endWeek(): void {
    const weekNum = Math.ceil(this.dayNumber / DAYS_PER_WEEK)
    this.totalWeeks = weekNum
    const weeklySalary = this.money.calcWeeklySalary(this.reputation, this.career.rank.salaryBonus)

    // ── Fired: reputation collapsed ──────────────────────────────────────
    if (this.reputation < 10 && !this.career.isVP() && !this.career.isDirector()) {
      this._fireTeacher('reputation')
      return
    }
    this.money.earn(weeklySalary)

    const totalXP = this.weekReports.reduce((s, r) => s + r.xpEarned, 0)
    const totalRep = this.weekReports.reduce((s, r) => s + r.repDelta, 0)

    const summary: WeekSummary = {
      weekNumber: weekNum,
      lessonReports: [...this.weekReports],
      xpTotal: totalXP,
      repDelta: totalRep,
      moneyEarned: weeklySalary,
      careerLevel: this.career.rank,
      promoted: false,
      skillPoints: this.skillTree.points,
    }

    this.weekReports = []
    this.dayNumber = 1
    this.lessonIndex = 0

    this.weekScreen.show(summary, () => {
      // End-of-week exam before skill tree
      this._runWeeklyExam()
    })
  }

  // ---- Weekly exam (end-of-week) ----

  private _runWeeklyExam(): void {
    const currentGrade = this.gradeForLesson(0)
    const examEntries = this.examSystem.generateExam(this.students, this.charData.subject, currentGrade)

    this.blockInput = true
    this.hud.showNotification('📋 End of week — grade student exam papers', '#BC8CFF', 4000)

    setTimeout(() => {
      this.notebookUI.open(
        examEntries,
        (id, grade) => {
          const entry = examEntries.find(e => e.studentId === id)
          if (entry) entry.grade = grade
        },
        () => {
          this.blockInput = false
          const avgGrade = this.examSystem.getAverageGrade(examEntries)
          this._afterExam(avgGrade)
        },
      )
    }, 4500)
  }

  private _afterExam(avgGrade: number): void {
    const avgStr = avgGrade.toFixed(2)

    // Track consecutive bad-grade weeks (avg < 2.8 = below satisfactory)
    if (avgGrade < 2.8) {
      this.badExamStreak++
      if (this.badExamStreak >= 3 && !this.career.isVP() && !this.career.isDirector()) {
        this._fireTeacher('bad_grades')
        return
      }
    } else {
      this.badExamStreak = 0
    }

    if (this.career.rank.id === 'honored') {
      const vpPromo = this.career.checkExamPromotion(
        this.experience, this.weekReports.length, this.reputation, avgGrade,
      )
      if (vpPromo) {
        this.hud.showNotification(
          `🏛️ Congratulations! Average grade ${avgStr} — appointed Deputy Principal!`,
          '#FFD700', 6000,
        )
        this._saveProgress()
        setTimeout(() => this.showSchedule(), 6500)
        return
      }
      if (ExamSystem.isPromotionEligible(avgGrade)) {
        this.hud.showNotification(
          `⭐ Average grade ${avgStr} — excellent result! Keep it up.`,
          '#4FFFB0', 4000,
        )
      } else {
        this.hud.showNotification(
          `📊 Average grade ${avgStr} — need ≥ 4.0 for Deputy Principal`,
          '#FF9930', 4000,
        )
      }
    } else {
      this.hud.showNotification(`📊 Average exam grade: ${avgStr}`, '#4FFFB0', 3000)
    }

    setTimeout(() => {
      this.skillScreen.open(this.skillTree.points, () => {
        this.showSchedule()
      })
    }, 4200)
  }

  // ---- Fired / Game Over ----

  private _fireTeacher(reason: FireReason): void {
    this.blockInput = true
    this.sound.playGameOver()
    const lastExam = this.weekReports.length > 0
      ? (this.weekReports.reduce((s, r) => s + r.avgUnderstanding, 0) / this.weekReports.length / 20).toFixed(1)
      : '—'
    setTimeout(() => {
      this.gameOverScreen.show(
        reason,
        { weeks: this.totalWeeks, reputation: this.reputation, avgGrade: lastExam },
        () => {
          // Full reset — go back to character select
          this.save.reset()
          window.location.reload()
        },
      )
    }, 800)
  }

  // ---- Student question after homework ----

  private _showStudentQuestion(confused: import('../entities/Student').Student[], onDone: () => void): void {
    const QUESTIONS: string[] = [
      'I didn\'t quite understand this part of the topic… Could you explain again?',
      'How do we apply this in practice? The example wasn\'t very clear.',
      'Why exactly that answer? I thought it was different…',
      'Can we go through another example? It didn\'t quite click for me.',
      'Will this be on the test? I need to re-read it.',
      'I got confused with the formula… Where did I go wrong?',
    ]

    const topic = this.lessonSys.getTopic()
    let idx = 0

    const showNext = () => {
      if (idx >= confused.length) {
        onDone()
        return
      }
      const student = confused[idx++]
      student.setEmotion('confused')
      const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]

      const el = document.createElement('div')
      el.style.cssText = `
        position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
        z-index:4000;background:#1a2535ee;
        border:1px solid #3a6aaa;border-radius:14px;
        padding:18px 28px;max-width:420px;width:90%;
        font-family:'Segoe UI',sans-serif;color:#e0e8f0;
        box-shadow:0 4px 24px rgba(0,0,0,.6);
        animation:ew2_fadein .3s ease;
      `
      el.innerHTML = `
        <div style="font-size:12px;color:#5a8cc0;margin-bottom:6px;letter-spacing:1px;text-transform:uppercase;">
          ❓ Student Question · ${topic}
        </div>
        <div style="font-size:14px;font-weight:600;margin-bottom:4px;color:#a0c8ff;">${student.data.name}:</div>
        <div style="font-size:14px;line-height:1.5;margin-bottom:14px;">&ldquo;${q}&rdquo;</div>
        <div style="display:flex;gap:10px;">
          <button data-ans="explain" style="flex:1;padding:10px;border:none;border-radius:8px;cursor:pointer;background:#1a4a2a;color:#4FFFB0;font-size:13px;font-weight:700;">
            📖 Explain again
          </button>
          <button data-ans="later" style="flex:1;padding:10px;border:none;border-radius:8px;cursor:pointer;background:#2a2a3a;color:#8B949E;font-size:13px;font-weight:700;">
            ⏭ Cover it next lesson
          </button>
        </div>
      `
      el.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const ans = (btn as HTMLElement).dataset.ans
          el.remove()
          if (ans === 'explain') {
            student.modifyStat('understanding', 12)
            student.modifyStat('motivation', 5)
            student.setEmotion('happy')
            this.reputation = Math.min(200, this.reputation + 2)
            this.hud.setReputation(this.reputation)
            this.hud.showNotification(`✅ ${student.data.name} understood! +2 rep`, '#4FFFB0', 2000)
          } else {
            student.setEmotion('neutral')
            this.hud.showNotification(`📅 ${student.data.name} will review at home`, '#8B949E', 1500)
          }
          setTimeout(showNext, 400)
        })
      })
      document.body.appendChild(el)
    }

    showNext()
  }

  // ---- DEV cheats (secret, not shown in UI) ----

  private _cheatPromoteToVP(): void {
    this.career.forceRank('zavuch')
    this._saveProgress()
    this.dayNumber = 1
    this.lessonIndex = 0
    this.hud.showNotification('🔑 [DEV] → Deputy Principal', '#BC8CFF', 2000)
    setTimeout(() => this.showSchedule(), 500)
  }

  private _cheatPromoteToDirector(): void {
    this.career.forceRank('director')
    this._saveProgress()
    this.dayNumber = 1
    this.lessonIndex = 0
    this.hud.showNotification('🔑 [DEV] → Director', '#FFD700', 2000)
    setTimeout(() => this.showSchedule(), 500)
  }

  // ---- СОР (mid-week written assessment) ----

  private _startSOR(): void {
    this.blockInput = true
    this.hud.show()
    const roomId = this.roomForLesson(0)
    this.placeStudentsIn(roomId)
    this.students.forEach(s => { s.seated = true; s.setEmotion('writing') })

    const el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;'
    el.innerHTML = `
      <div style="background:#1a2535;color:#e0e8f0;border-radius:14px;padding:44px 54px;max-width:480px;width:90%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.7);">
        <div style="font-size:52px;margin-bottom:16px;">📝</div>
        <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">Day ${this.dayNumber}</div>
        <div style="font-size:26px;font-weight:700;margin-bottom:10px;">Summative Assessment (SA)</div>
        <div style="font-size:15px;color:#8ab4d4;margin-bottom:28px;">
          Students write independently.<br>
          Afterwards you grade the notebooks.
        </div>
        <button id="sor-start-btn" style="padding:14px 44px;border:none;border-radius:10px;cursor:pointer;background:linear-gradient(135deg,#2a4a8a,#3a6ab0);color:#fff;font-size:17px;font-weight:700;transition:opacity .15s;" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
          ▶ Start
        </button>
      </div>`
    el.querySelector('#sor-start-btn')!.addEventListener('click', () => {
      el.remove()
      this._runSORExam()
    })
    document.body.appendChild(el)
  }

  private _runSORExam(): void {
    const currentGrade = this.gradeForLesson(0)
    const examEntries = this.examSystem.generateExam(this.students, this.charData.subject, currentGrade)
    this.students.forEach(s => s.setEmotion('writing'))
    this.hud.showNotification('✏️ SA — students are working…', '#BC8CFF', 6000)

    setTimeout(() => {
      this.notebookUI.open(
        examEntries,
        (id, grade) => {
          const entry = examEntries.find(e => e.studentId === id)
          if (entry) entry.grade = grade
        },
        () => {
          this.blockInput = false
          const avg = this.examSystem.getAverageGrade(examEntries)
          this.hud.showNotification(`✅ SA complete · Average grade: ${avg.toFixed(1)}`, '#4FFFB0', 3000)
          // Record grades in gradebook and affect motivation
          const topic = this.lessonSys.getTopic() || 'SA'
          examEntries.forEach(e => {
            this.gradebook.add({
              studentId: e.studentId,
              studentName: e.studentName,
              grade: e.grade as 2 | 3 | 4 | 5,
              topic,
              lessonDay: this.dayNumber,
              type: 'exam',
            })
            const s = this.students.find(st => st.data.id === e.studentId)
            if (s) s.modifyStat('motivation', (e.grade ?? 3) >= 4 ? 8 : (e.grade ?? 3) === 3 ? 0 : -8)
          })
          this.lessonIndex = LESSONS_PER_DAY
          this.endDay()
        },
      )
    }, 6500)
  }

  // ---- VP (Завуч) mode ----

  private _startVPDay(): void {
    this.blockInput = false
    const roomsToInspect = ['room101', 'room102', 'room103']
    const nextRoomId = roomsToInspect[this.dayNumber % roomsToInspect.length]
    const room = this.school.rooms.get(nextRoomId)

    this.hud.showNotification(
      `🏛️ Deputy Principal · Day ${this.dayNumber} — go to ${room?.label ?? 'the office'} and press E`,
      '#BC8CFF', 8000,
    )

    this.pendingAction = () => {
      this.vpScreen.setGlobalScore(this.vpInspectionScore)
      this.vpScreen.show(room?.label ?? 'Classroom', (records, repDelta) => {
        this.vpInspectionScore += records.reduce((s, r) => s + r.score, 0)
        if (repDelta !== 0) {
          this.reputation = Math.max(0, Math.min(300, this.reputation + repDelta))
          this.hud.setReputation(this.reputation)
        }
        this.hud.showNotification(
          `✅ Inspection done · Score: ${this.vpInspectionScore}${repDelta > 0 ? ` · Rep +${repDelta}` : ''}`,
          '#4FFFB0', 3000,
        )

        // Check director promotion
        const dirPromo = this.career.checkDirectorPromotion(this.vpInspectionScore, this.reputation)
        if (dirPromo) {
          this.hud.showNotification('🎉 You are appointed School Director!', '#FFD700', 6000)
          this._saveProgress()
          setTimeout(() => this.showSchedule(), 6500)
          return
        }

        this.lessonIndex = LESSONS_PER_DAY  // mark day complete
        this.endDay()
      })
    }
  }

  // ---- Persistence ----

  private _saveProgress(): void {
    this.save.save({
      teacherName: this.charData.name,
      subject: this.charData.subject,
      grade: this.charData.grades?.[0] ?? 9,
      grades: this.charData.grades,
      reputation: this.reputation,
      experience: this.experience,
      money: this.money.balance,
      careerRank: this.career.rank.id,
      skillPoints: this.skillTree.points,
      unlockedPerks: this.skillTree.save(),
      dayNumber: this.dayNumber,
      lessonCount: this.weekReports.length,
      completedTopics: [],
      completedTopicsPerGrade: this.completedTopicsPerGrade,
    })
  }
  private _startDirectorWeek(): void {
    const weekNum = Math.ceil(this.dayNumber / DAYS_PER_WEEK)
    this.directorScreen.updateStats(this.reputation, 3.8 + Math.random() * 0.4, weekNum)

    // Victory condition: 10+ weeks as director with good budget
    if (weekNum >= 10 && this.reputation >= 150 && this.directorScreen.state.budget > 800_000) {
      this._showEnding()
      return
    }

    this.directorScreen.show(() => {
      this.dayNumber = 1
      this.lessonIndex = 0
      this._saveProgress()
      this.showSchedule()
    })
  }

  private _showEnding(): void {
    this.blockInput = true
    const weekNum = Math.ceil(this.dayNumber / DAYS_PER_WEEK)
    const avgGrade = this.weekReports.length > 0
      ? Math.round((this.weekReports.reduce((s, r) => s + r.avgUnderstanding, 0) / this.weekReports.length / 20) * 10) / 10
      : 3.8
    const careerPath = ['novice', 'cat2', 'cat1', 'highest', 'honored', 'zavuch', 'director']
    this.endingScreen.show(
      {
        teacherName: this.charData.name,
        subject: this.charData.subject,
        totalWeeks: weekNum,
        totalStudents: this.students.length * weekNum,
        avgGrade,
        totalEarned: this.money.balance,
        reputation: this.reputation,
        schoolRating: this.directorScreen.state.schoolRating,
        careerPath,
      },
      () => {
        this.save.reset()
        window.location.reload()
      },
    )
  }

  // ---- Event system ----

  private tryFireEvent(then: () => void): void {
    const gameMinute = this.time.gameMinutes
    const event = this.eventSys.maybeSpawnEvent(gameMinute)
    if (!event) { then(); return }

    this.blockInput = true
    this.eventUI.open(event, this.students, (resultText) => {
      this.hud.showNotification(resultText, '#4FFFB0', 2500)
      this.blockInput = false
      then()
    })
  }

  // ---- Interaction (E key) ----

  private onInteract(): void {
    if (this.blockInput) return
    this.sound.playClick()

    // Priority 1: check for nearby student (within 2.4 units) during lesson
    const phase = this.lessonSys.getPhase()
    if (phase !== 'done' && !this.breakSys.isActive()) {
      const playerPos = this.app.camera.position
      const nearby = this.students
        .filter(s => s.group.position.distanceTo(playerPos) < 2.4)
        .sort((a, b) => a.group.position.distanceTo(playerPos) - b.group.position.distanceTo(playerPos))[0]

      if (nearby) {
        this.remarkUI.open(nearby.data, (result) => this._applyRemark(result, nearby))
        return
      }
    }

    // Priority 2: pending blackboard/door action
    if (this.pendingAction) {
      const fn = this.pendingAction
      this.pendingAction = null
      fn()
    } else {
      this.hud.showNotification('💡 Walk around the school and watch students', '#8B949E', 1500)
    }
  }

  private _applyRemark(result: import('../ui/StudentRemarkUI').RemarkResult, student: Student): void {
    this.sound.playRemark()
    switch (result.type) {
      case 'warning':
        student.modifyStat('behavior', 8)
        student.modifyStat('attention', 10)
        if (student.emotion === 'phone' || student.emotion === 'sleeping') student.setEmotion('troubled')
        this.hud.showNotification(`✋ ${student.data.name} received a warning`, '#FFD700', 2000)
        break
      case 'confiscate_phone':
        student.modifyStat('attention', 20)
        student.modifyStat('behavior', 5)
        student.setEmotion('troubled')
        this.hud.showNotification(`📵 ${student.data.name}'s phone confiscated`, '#FF4D4D', 2000)
        break
      case 'wake_up':
        student.modifyStat('attention', 15)
        student.setEmotion('confused')
        this.hud.showNotification(`👋 ${student.data.name} woke up`, '#58A6FF', 2000)
        break
      case 'praise':
        student.modifyStat('motivation', 10)
        student.modifyStat('attention', 5)
        student.setEmotion('happy')
        this.sound.playChime()
        this.hud.showNotification(`⭐ ${student.data.name} praised!`, '#4FFFB0', 2000)
        break
      case 'dismiss':
        student.modifyStat('behavior', -15)
        student.modifyStat('motivation', -10)
        student.setEmotion('troubled')
        this.hud.showNotification(`🚪 ${student.data.name} removed from class`, '#FF4D4D', 2500)
        break
    }
  }

  /** Randomly put bored/lazy students on phone or to sleep during lesson */
  private _tickStudentMisbehavior(): void {
    this.students.forEach(s => {
      if (s.emotion === 'writing' || s.emotion === 'raising_hand') return
      const att = s.data.stats.attention
      const beh = s.data.stats.behavior
      // Low attention + low behavior → phone
      if (att < 35 && beh < 50 && Math.random() < 0.4) {
        s.setEmotion('phone')
        return
      }
      // Very low attention → sleeping
      if (att < 20 && Math.random() < 0.5) {
        s.setEmotion('sleeping')
        return
      }
      // Low attention → bored
      if (att < 45 && s.emotion !== 'phone' && s.emotion !== 'sleeping' && Math.random() < 0.3) {
        s.setEmotion('bored')
      }
    })
  }

  private togglePause(): void {
    if (this.pauseMenu.isVisible()) {
      this.pauseMenu.hide()
    } else {
      this.pauseMenu.show({
        onResume: () => {},
        onSave: () => {
          this._saveProgress()
          this.hud.showNotification('💾 Saved!', '#4FFFB0')
        },
        onSettings: () => { this.hud.showNotification('⚙️ Settings coming soon', '#8B949E') },
        onMainMenu: () => { location.reload() },
      })
    }
  }
}
