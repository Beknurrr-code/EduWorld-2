import { EventBus } from '../core/EventBus'
import { Student } from '../entities/Student'
import { GradeBook } from './GradeBook'
import { AttentionSystem } from './AttentionSystem'
import { findTopic, type TopicEntry, type RichExplOption, type TaskData } from '../data/TopicBank'

export type LessonPhase = 'explanation' | 'tasks' | 'grading' | 'homework' | 'done'

export interface ExplanationOption {
  label: string
  type: 'theory' | 'example' | 'question' | 'board'
  icon: string
  /** Показывается как основной текст варианта */
  text: string
  understandingDelta: number
  attentionDelta: number
  difficulty: 'easy' | 'medium' | 'hard'
  isBad?: boolean
}

export interface ExplanationRound {
  topic: string
  options: ExplanationOption[]
  chosen: number | null
  phase: 'intro' | 'main' | 'conclusion'
}

/** Текущее задание (доска/письменное + данные) */
export interface ActiveTask {
  mode: 'board' | 'written'
  difficulty: 'easy' | 'medium' | 'hard'
  data: TaskData
}

/** Текущее домашнее задание */
export interface ActiveHomework {
  difficulty: 'easy' | 'medium' | 'hard'
  text: string
}

export interface TaskConfig {
  difficulty: 'easy' | 'medium' | 'hard'
  quantity: 'few' | 'many'
}

export interface NotebookEntry {
  studentId: string
  studentName: string
  errors: string[]
  grade: number | null
  content: string[]   // lines of handwritten work shown on notebook page
}

export interface LessonReport {
  topic: string
  subject: string
  classGrade: number
  dayNumber: number
  understoodCount: number
  avgUnderstanding: number
  notebookGrades: NotebookEntry[]
  xpEarned: number
  repDelta: number
  hwGiven: boolean
  hwDifficulty: 'easy' | 'medium' | 'hard' | null
}

// ─── fallback (если топик не найден в банке) ──────────────────────────────
const GENERIC_TOPICS: Record<string, string[]> = {
  math:       ['Квадратные уравнения','Производная','Теорема Пифагора','Тригонометрия','Логарифмы','Прогрессии'],
  physics:    ['Законы Ньютона','Закон Ома','Термодинамика','Оптика','Ядерная физика'],
  chemistry:  ['Строение атома','ОВР','Типы химических связей','Органическая химия'],
  history:    ['Первая мировая война','Революция 1917','ВОВ','Эпоха Просвещения'],
  literature: ['Образ Раскольникова','Мёртвые души','Пушкин','Шекспир'],
  russian:    ['Причастный оборот','СПП','Виды глагола','Правописание приставок'],
}

const ICONS: Record<string, string> = { theory: '📖', board: '📋', example: '💡', question: '❓' }

// ─── Error / notebook content banks ─────────────────────────────────────────
const ERROR_BANKS: Record<string, string[]> = {
  math: ['Неверный знак при раскрытии скобок','Ошибка в порядке действий','Деление на ноль','Пропущен модуль','Неверная формула','Арифметическая ошибка','Не записан ответ'],
  physics: ['Не указаны единицы измерения','Ошибка в формуле','Неверный перевод единиц','Пропущен чертёж','Знак направления вектора'],
  chemistry: ['Неверный коэффициент','Ошибка в формуле вещества','Потеря электрона в уравнении','Неверное название'],
  history: ['Неверная дата','Перепутан исторический деятель','Неточная периодизация','Неверное название события'],
  literature: ['Неправильная цитата','Перепутаны персонажи','Неверный автор произведения'],
  russian: ['Пропущена запятая','Неверное написание слова','Ошибка в склонении','Неверный разбор предложения'],
  default: ['Пропущено слово','Неразборчивый почерк','Не указан пример','Грамматическая ошибка'],
}

const NOTEBOOK_WORK: Record<string, string[][]> = {
  math: [
    ['Дано:', 'x²+5x+6=0','Решение: (x+2)(x+3)=0','x₁=−2, x₂=−3'],
    ['f(x)=3x²−2x+1',"f'(x)=6x−2","f'(2)=10"],
    ['S=n/2·(2a₁+(n-1)d)','n=10, a₁=2, d=3','S=155'],
  ],
  physics: [
    ['I=U/R=12/4=3 А','Ответ: I=3 А'],
    ['F=ma=2×5=10 Н','Ответ: F=10 Н'],
    ['v=√(2gh)=20 м/с','t=√(2h/g)=2 с'],
  ],
  chemistry: [
    ['2H₂+O₂→2H₂O','Тип: соединение'],
    ['1s²2s²2p⁶3s²3p⁴','Ст. окисления: −2,+4,+6'],
    ['n=m/M=0.2 моль','N=1.2×10²³'],
  ],
  history: [
    ['1914—1918 — Первая мировая война','Причины: империалистические противоречия'],
    ['Февр. революция 1917 г.','Итог: отречение Николая II'],
  ],
  literature: [
    ['Раскольников: теория о «право имею»','Наказание — совесть'],
    ['Лирические отступления: позиция автора','Тема: Россия, народ'],
  ],
  russian: [
    ['ДО: «Прочитав книгу, он лёг.»','Выделяется запятыми'],
    ['СПП: что/как/который','Запятая перед союзом'],
  ],
}

function generateNotebookContent(subject: string): string[] {
  const blocks = NOTEBOOK_WORK[subject] ?? NOTEBOOK_WORK['math']
  return blocks[Math.floor(Math.random() * blocks.length)]
}

function generateNotebookErrors(subject: string, difficulty: 'easy' | 'medium' | 'hard', behavior: number): string[] {
  const bank = ERROR_BANKS[subject] ?? ERROR_BANKS['default']
  const base = difficulty === 'easy' ? 0 : difficulty === 'medium' ? 1 : 2
  const fromBehavior = behavior < 40 ? 2 : behavior < 70 ? 1 : 0
  const count = base + fromBehavior + (Math.random() < 0.4 ? 1 : 0)
  return [...bank].sort(() => Math.random() - 0.5).slice(0, Math.max(0, count))
}

/** Создаёт ExplanationOption из RichExplOption банка */
function richToOption(r: import('../data/TopicBank').RichExplOption, idx: number): ExplanationOption {
  const letters = ['А', 'Б', 'В', 'Г']
  const typeMap: Record<string, ExplanationOption['type']> = {
    'А': 'theory', 'Б': 'board', 'В': 'example', 'Г': 'question',
  }
  return {
    label: r.label,
    text: r.text,
    type: typeMap[letters[idx]] ?? 'theory',
    icon: ICONS[typeMap[letters[idx]] ?? 'theory'],
    understandingDelta: r.understandingBase,
    attentionDelta: r.attentionDelta,
    difficulty: r.difficulty,
    isBad: r.isBad ?? false,
  }
}

/** 5 banks of generic explanation options — picked per round to avoid repetition */
const GENERIC_POOLS: ExplanationOption[][] = [
  /* 0 — Классика */
  [
    { label: 'Теория по учебнику', text: 'Открываем параграф. Читаем определение вслух. Записываем ключевые понятия в тетрадь.', type: 'theory', icon: '📖', understandingDelta: 13, attentionDelta: -8, difficulty: 'hard', isBad: false },
    { label: 'Схема на доске', text: 'Рисуем опорную схему шаг за шагом. Ученики копируют в тетрадь по ходу объяснения.', type: 'board', icon: '📋', understandingDelta: 11, attentionDelta: 3, difficulty: 'medium', isBad: false },
    { label: 'Пример из жизни', text: 'Где в повседневной жизни это встречается? Находим три реальных примера и обсуждаем.', type: 'example', icon: '💡', understandingDelta: 8, attentionDelta: 12, difficulty: 'easy', isBad: false },
    { label: 'Вопрос классу', text: 'Кто попробует объяснить своими словами? Подождём 30 секунд — кто поднимет руку?', type: 'question', icon: '❓', understandingDelta: 5, attentionDelta: 15, difficulty: 'medium', isBad: false },
  ],
  /* 1 — Интерактив */
  [
    { label: 'Мини-лекция «от обратного»', text: 'Сначала покажем, что будет если сделать неправильно. Потом объясним почему.', type: 'theory', icon: '🔄', understandingDelta: 12, attentionDelta: -5, difficulty: 'hard', isBad: false },
    { label: 'Групповое обсуждение', text: 'Разбиваемся на пары — 2 минуты обсуждаем тему между собой. Потом делимся выводами.', type: 'question', icon: '🤝', understandingDelta: 7, attentionDelta: 14, difficulty: 'medium', isBad: false },
    { label: 'Аналогия-сравнение', text: 'Это похоже на… Найдём всё что у них общего и где они отличаются.', type: 'example', icon: '⚖️', understandingDelta: 9, attentionDelta: 10, difficulty: 'easy', isBad: false },
    { label: 'Ролевое объяснение', text: 'Один ученик у доски объясняет всем остальным как «учитель». Я буду поправлять.', type: 'board', icon: '🎭', understandingDelta: 6, attentionDelta: 17, difficulty: 'medium', isBad: false },
  ],
  /* 2 — Практика-первой */
  [
    { label: 'Сначала попробуем сами', text: 'Даю задание — все 3 минуты пробуют без объяснения. Потом вместе разбираем ошибки.', type: 'board', icon: '🧪', understandingDelta: 10, attentionDelta: 6, difficulty: 'medium', isBad: false },
    { label: 'Разбор типичных ошибок', text: 'Вот 3 типичные ошибки по этой теме. Почему они возникают и как их избежать?', type: 'theory', icon: '🚫', understandingDelta: 11, attentionDelta: 4, difficulty: 'hard', isBad: false },
    { label: 'Реальный опыт / эксперимент', text: 'Проверяем прямо в классе. Наблюдаем — что происходит? Делаем вывод вместе.', type: 'example', icon: '🔬', understandingDelta: 8, attentionDelta: 13, difficulty: 'easy', isBad: false },
    { label: '«Угадай закономерность»', text: 'Смотрим на несколько примеров. Кто первым угадает правило — поднимите руку!', type: 'question', icon: '🎯', understandingDelta: 5, attentionDelta: 18, difficulty: 'medium', isBad: false },
  ],
  /* 3 — Сократ */
  [
    { label: 'Опрос по цепочке', text: 'Каждый добавляет одно слово к определению. Начинаем с первой парты — по кругу.', type: 'question', icon: '🔗', understandingDelta: 8, attentionDelta: 9, difficulty: 'medium', isBad: false },
    { label: 'Составляем схему вместе', text: 'Я начну — нарисую центр. Кто добавит следующую ветку? Строим концепт-карту вместе.', type: 'board', icon: '🗺️', understandingDelta: 11, attentionDelta: 5, difficulty: 'medium', isBad: false },
    { label: 'Сравнение с изученным', text: 'Новая тема похожа на то что мы уже проходили. В чём сходства, в чём отличия?', type: 'theory', icon: '🔎', understandingDelta: 9, attentionDelta: 2, difficulty: 'hard', isBad: false },
    { label: 'Предсказание результата', text: 'Прежде чем объяснять — каждый запишет своё предположение. Потом сверим с правильным.', type: 'example', icon: '🔮', understandingDelta: 6, attentionDelta: 14, difficulty: 'easy', isBad: false },
  ],
  /* 4 — Концептуальный */
  [
    { label: 'Большая картина', text: 'Сначала смотрим на тему глобально — где она в системе предмета и зачем она нужна.', type: 'theory', icon: '🌐', understandingDelta: 12, attentionDelta: -3, difficulty: 'hard', isBad: false },
    { label: 'Демонстрация на числах / фактах', text: 'Возьмём конкретные числа и проследим каждый шаг. Без обобщений — чистая конкретика.', type: 'board', icon: '📊', understandingDelta: 10, attentionDelta: 3, difficulty: 'medium', isBad: false },
    { label: 'Таблица «До и После»', text: 'Что мы знали о теме ДО урока? Что узнаём? Заполним таблицу вместе.', type: 'example', icon: '📝', understandingDelta: 8, attentionDelta: 11, difficulty: 'easy', isBad: false },
    { label: '«Объясни соседу»', text: 'Поворачиваемся к соседу и за 1 минуту объясняем тему своими словами. Поехали!', type: 'question', icon: '👥', understandingDelta: 5, attentionDelta: 16, difficulty: 'medium', isBad: false },
  ],
]

/** Bad trap options that replace slot 3 in the conclusion round when no topic badOption exists */
const BAD_OPTIONS: ExplanationOption[] = [
  { label: 'Диктовка определения', text: 'Все записываем. Медленно. Слово за словом. Не отвлекаться.', type: 'theory', icon: '😴', understandingDelta: 2, attentionDelta: -18, difficulty: 'hard', isBad: true },
  { label: 'Пересказ из учебника дословно', text: 'Зачитываю параграф слово в слово. Будет на экзамене — слушайте внимательно.', type: 'theory', icon: '📕', understandingDelta: 3, attentionDelta: -15, difficulty: 'hard', isBad: true },
  { label: 'Молчаливое чтение 5 минут', text: 'Открываем учебник страница 47. Читаем про себя. Вопросов не задаём.', type: 'theory', icon: '🔇', understandingDelta: 1, attentionDelta: -20, difficulty: 'hard', isBad: true },
]

/** Fallback — pick from pools, different pool per round to avoid repetition */
function genericOptionsForRound(topic: string, roundIdx: number): ExplanationOption[] {
  // Different pool per round + slight topic-based offset for variety
  const topicHash = topic.split('').reduce((h, c) => h + c.charCodeAt(0), 0)
  const poolIdx = (topicHash + roundIdx * 2) % GENERIC_POOLS.length
  // Shuffle a copy so option order changes each round
  return [...GENERIC_POOLS[poolIdx]].sort(() => Math.random() - 0.5)
}


export class LessonSystem {
  private bus = EventBus.getInstance()
  private gradebook = GradeBook.getInstance()
  private attention = AttentionSystem.getInstance()
  private subject = 'math'
  private classGrade = 9
  private dayNumber = 1
  private completedTopics: string[] = []

  private phase: LessonPhase = 'explanation'
  private topic = ''
  private topicEntry: TopicEntry | null = null
  private rounds: ExplanationRound[] = []
  private currentRound = 0
  private taskConfig: TaskConfig | null = null
  private activeTask: ActiveTask | null = null
  private activeHomework: ActiveHomework | null = null
  private notebooks: NotebookEntry[] = []
  private hwGiven = false
  private hwDifficulty: 'easy' | 'medium' | 'hard' | null = null

  init(subject: string, classGrade: number, dayNumber: number, completedTopics: string[]): void {
    this.subject = subject
    this.classGrade = classGrade
    this.dayNumber = dayNumber
    this.completedTopics = [...completedTopics]
    this.phase = 'explanation'
    this.rounds = []
    this.currentRound = 0
    this.taskConfig = null
    this.activeTask = null
    this.activeHomework = null
    this.notebooks = []
    this.hwGiven = false
    this.hwDifficulty = null

    // Try to find a rich topic from the bank
    this.topicEntry = findTopic(subject, classGrade, completedTopics)
    this.topic = this.topicEntry?.topic ?? (GENERIC_TOPICS[subject]?.[0] ?? subject)

    // Build 3 explanation rounds with phase labels
    const PHASES: Array<'intro' | 'main' | 'conclusion'> = ['intro', 'main', 'conclusion']
    for (let i = 0; i < 3; i++) {
      let opts: ExplanationOption[]
      if (this.topicEntry) {
        // Rich topic: shuffle option order so А/Б/В/Г positions vary each round
        opts = [...this.topicEntry.options.map((r, idx) => richToOption(r, idx))]
        if (i > 0) opts.sort(() => Math.random() - 0.5)
      } else {
        // Generic fallback: pick a different pool per round for variety
        opts = genericOptionsForRound(this.topic, i)
      }
      // Round 3 (conclusion): replace last slot with a bad option
      if (i === 2) {
        if (this.topicEntry?.badOption) {
          const bad = richToOption(this.topicEntry.badOption, opts.length - 1)
          bad.isBad = true
          opts[opts.length - 1] = bad
        } else {
          // Random bad option from pool so it's different each lesson
          const badIdx = Math.floor(Math.random() * BAD_OPTIONS.length)
          opts[opts.length - 1] = { ...BAD_OPTIONS[badIdx] }
        }
      }
      this.rounds.push({ topic: this.topic, options: opts, chosen: null, phase: PHASES[i] })
    }

    this.bus.emit('lessonStarted', { topic: this.topic, subject, classGrade })
  }

  getPhase(): LessonPhase { return this.phase }
  /** Force-set lesson phase (used by Wednesday quiz bypass) */
  setPhase(p: LessonPhase): void { this.phase = p }
  getTopic(): string { return this.topic }
  getRounds(): ExplanationRound[] { return this.rounds }
  getCurrentRound(): ExplanationRound { return this.rounds[this.currentRound] }
  getNotebooks(): NotebookEntry[] { return this.notebooks }
  getTaskConfig(): TaskConfig | null { return this.taskConfig }
  getActiveTask(): ActiveTask | null { return this.activeTask }
  getActiveHomework(): ActiveHomework | null { return this.activeHomework }
  getTopicEntry(): TopicEntry | null { return this.topicEntry }

  // ---- Preparation bonus (applied to all students on the first explanation round) ----
  private prepUnderstandingBonus = 0
  private prepAttentionBonus = 0

  /** Set a one-time bonus applied at the start of the first explanation round */
  setPrepBonus(understanding: number, attention: number): void {
    this.prepUnderstandingBonus = understanding
    this.prepAttentionBonus = attention
  }

  chooseExplanationOption(optionIndex: number, students: Student[]): void {
    if (this.phase !== 'explanation') return
    const round = this.rounds[this.currentRound]
    if (!round || round.chosen !== null) return

    // Apply one-time prep bonus on the very first round
    if (this.currentRound === 0 && (this.prepUnderstandingBonus || this.prepAttentionBonus)) {
      students.forEach(s => {
        s.modifyStat('understanding', this.prepUnderstandingBonus)
        s.modifyStat('attention', this.prepAttentionBonus)
      })
      this.prepUnderstandingBonus = 0
      this.prepAttentionBonus = 0
    }

    round.chosen = optionIndex
    const opt = round.options[optionIndex]
    // Rich option from bank — apply per-student-type bonuses
    const richOpt = this.topicEntry?.options[optionIndex]

    students.forEach(s => {
      let undDelta = opt.understandingDelta
      if (richOpt) {
        undDelta += richOpt.typeBonus[s.data.type] ?? 0
      }
      // Attention gates understanding: an inattentive student learns much less
      // Attention 85+ → full delta; attention 30 (lazy) → ~35%; attention <8 → floor of 8%
      const attFactor = Math.max(0.08, Math.min(1.0, s.data.stats.attention / 85))
      const gatedDelta = Math.round(undDelta * attFactor)
      // Student emotion & modifier
      const attBonus = s.data.type === 'bully' ? -2 : s.data.type === 'lazy' ? -1 : 0
      const attTotal = opt.attentionDelta + attBonus
      s.modifyStat('understanding', gatedDelta)
      s.modifyStat('attention', attTotal)
      // Set emotion based on understanding result
      const afterUnd = s.data.stats.understanding
      if (afterUnd >= 80) s.setEmotion('happy')
      else if (afterUnd < 40) s.setEmotion('confused')
    })
    this.attention.boost(opt.attentionDelta)

    this.bus.emit('explanationChosen', { round: this.currentRound, option: opt })

    this.currentRound++
    if (this.currentRound >= this.rounds.length) {
      this.phase = 'tasks'
      this.bus.emit('phaseChanged', { phase: 'tasks' })
    } else {
      this.bus.emit('nextExplanationRound', { round: this.currentRound })
    }
  }

  // --- Phase: Tasks ---
  setTaskConfig(config: TaskConfig, students: Student[], mode: 'board' | 'written' = 'written'): void {
    if (this.phase !== 'tasks') return
    this.taskConfig = config

    // Pick task data from bank if available
    const taskData = this.topicEntry?.tasks[config.difficulty]
      ?? { text: `Задание по теме: ${this.topic} (${config.difficulty})` }
    this.activeTask = { mode, difficulty: config.difficulty, data: taskData }

    const diffMult = { easy: 0.7, medium: 1.0, hard: 1.4 }[config.difficulty]
    const modeMult = mode === 'board' ? 1.1 : 1.0

    students.forEach(s => {
      let delta = 10 * diffMult * modeMult * (s.data.stats.understanding / 100)
      // Difficulty modifier per student type
      if (config.difficulty === 'hard') {
        if (s.data.type === 'genius') delta *= 1.6
        else if (s.data.type === 'lazy' || s.data.type === 'bully') delta *= 0.4
        else if (s.data.type === 'anxious') delta *= 0.7
      } else if (config.difficulty === 'easy') {
        if (s.data.type === 'genius') delta *= 0.6  // bored
        else if (s.data.type === 'lazy') delta *= 1.3  // can manage
      }
      // Board tasks: bully less disruptive, lazy more engaged
      if (mode === 'board') {
        if (s.data.type === 'bully') s.modifyStat('behavior', 5)
        if (s.data.type === 'lazy') s.modifyStat('attention', 5)
      }
      s.modifyStat('understanding', delta * 0.4)
      s.setEmotion('writing')
    })

    this.bus.emit('tasksStarted', { config, task: taskData, mode })
  }

  finishTasks(students: Student[]): void {
    if (this.phase !== 'tasks') return
    this.phase = 'grading'

    // Generate notebooks for 3-4 random students
    const shuffled = [...students].sort(() => Math.random() - 0.5)
    const sample = shuffled.slice(0, Math.min(4, shuffled.length))
    const diff = this.taskConfig?.difficulty ?? 'medium'

    this.notebooks = sample.map(s => ({
      studentId: s.data.id,
      studentName: s.data.name,
      errors: generateNotebookErrors(this.subject, diff, s.data.stats.behavior),
      content: generateNotebookContent(this.subject),
      grade: null,
    }))

    students.forEach(s => s.setEmotion('neutral'))
    this.bus.emit('phaseChanged', { phase: 'grading' })
  }

  // --- Phase: Grading ---
  gradeNotebook(studentId: string, grade: number): void {
    if (this.phase !== 'grading') return
    const entry = this.notebooks.find(n => n.studentId === studentId)
    if (!entry) return

    entry.grade = Math.max(2, Math.min(5, grade))
    this.gradebook.add({
      studentId,
      studentName: entry.studentName,
      grade: entry.grade as 2 | 3 | 4 | 5,
      topic: this.topic,
      lessonDay: this.dayNumber,
      type: 'notebook',
    })
    this.bus.emit('notebookGraded', { studentId, grade: entry.grade })
  }

  finishGrading(): void {
    if (this.phase !== 'grading') return
    // Auto-grade any ungraded notebooks as 3
    this.notebooks.forEach(n => {
      if (n.grade === null) this.gradeNotebook(n.studentId, 3)
    })
    this.phase = 'homework'
    this.bus.emit('phaseChanged', { phase: 'homework' })
  }

  // --- Phase: Homework ---
  setHomework(give: boolean, difficulty: 'easy' | 'medium' | 'hard', students: Student[]): void {
    if (this.phase !== 'homework') return
    this.hwGiven = give
    this.hwDifficulty = give ? difficulty : null

    if (give) {
      const hwText = this.topicEntry?.homework[difficulty]
        ?? `Домашнее задание по теме «${this.topic}» — уровень ${difficulty}`
      this.activeHomework = { difficulty, text: hwText }

      students.forEach(s => {
        s.data.hwDone = false
        // Motivation effect by type
        const motDelta = difficulty === 'hard'
          ? (s.data.type === 'genius' ? 5 : -15)
          : difficulty === 'easy'
          ? (s.data.type === 'lazy' ? 8 : 5)
          : 0
        s.modifyStat('motivation', motDelta)
      })
    }
    this.phase = 'done'
    this.bus.emit('phaseChanged', { phase: 'done' })
  }

  skipHomework(students: Student[]): void {
    this.setHomework(false, 'easy', students)
  }

  // --- Report ---
  buildReport(students: Student[]): LessonReport {
    const understood = students.filter(s => s.data.stats.understanding >= 60).length
    const avg = students.reduce((s, st) => s + st.data.stats.understanding, 0) / students.length

    const gradedCount = this.notebooks.filter(n => n.grade !== null).length
    const avgGrade = gradedCount > 0
      ? this.notebooks.reduce((s, n) => s + (n.grade ?? 3), 0) / gradedCount
      : 3

    const xpEarned = Math.round(20 + understood * 2 + (avgGrade - 2) * 8 + (this.hwGiven ? 10 : 0))
    const repDelta = Math.round((understood / students.length - 0.5) * 6)

    return {
      topic: this.topic,
      subject: this.subject,
      classGrade: this.classGrade,
      dayNumber: this.dayNumber,
      understoodCount: understood,
      avgUnderstanding: Math.round(avg),
      notebookGrades: this.notebooks,
      xpEarned,
      repDelta,
      hwGiven: this.hwGiven,
      hwDifficulty: this.hwDifficulty,
    }
  }
}
