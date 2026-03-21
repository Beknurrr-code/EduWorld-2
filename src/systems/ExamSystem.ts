import { Student } from '../entities/Student'
import { NotebookEntry } from './LessonSystem'

// Exam questions per subject
const EXAM_QUESTIONS: Record<string, string[]> = {
  math: [
    'Задача 1: Решите уравнение 3x² - 5x + 2 = 0',
    'Задача 2: Найдите производную f(x) = x³ - 4x + 7',
    'Задача 3: Вычислите sin²α + cos²α при α = 30°',
    'Задача 4: Найдите корни: |x - 3| = 7',
    'Задача 5: Логарифм: log₂(32) = ?',
  ],
  physics: [
    'Задача 1: Тело массой 5 кг движется со скоростью 10 м/с. Кинетическая энергия?',
    'Задача 2: Сопротивление цепи: R₁=4 Ом, R₂=6 Ом параллельно. Общее R=?',
    'Задача 3: Закон Кулона: заряды 2мкКл и 3мкКл на расстоянии 0.1 м. Сила=?',
    'Задача 4: Период колебаний маятника длиной L=1 м. T=?',
    'Задача 5: Скорость света в стекле (n=1.5). v=?',
  ],
  chemistry: [
    'Задача 1: Составьте уравнение реакции горения метана CH₄',
    'Задача 2: Перечислите типы химических связей с примерами',
    'Задача 3: pH раствора HCl с концентрацией 0.01 моль/л?',
    'Задача 4: Электронная конфигурация атома натрия (Na, Z=11)?',
    'Задача 5: Реакция нейтрализации: NaOH + HCl → ?',
  ],
  history: [
    'Вопрос 1: В каком году началась Великая Отечественная война?',
    'Вопрос 2: Назовите причины Первой мировой войны (не менее 3)',
    'Вопрос 3: Кто такой Пётр Великий? Его реформы.',
    'Вопрос 4: Дата и значение Куликовской битвы?',
    'Вопрос 5: Основные события революции 1917 года.',
  ],
  literature: [
    'Вопрос 1: Главные темы романа «Война и мир» Толстого',
    'Вопрос 2: Образ Раскольникова в «Преступлении и наказании»',
    'Вопрос 3: Смысл названия «Мёртвые души» Гоголя',
    'Вопрос 4: Конфликт в пьесе «Гроза» Островского',
    'Вопрос 5: Лирический герой поэзии Пушкина',
  ],
  russian: [
    'Задание 1: Расставьте знаки препинания в предложении',
    'Задание 2: Морфемный разбор слова «пересмотришь»',
    'Задание 3: Синтаксический разбор предложения',
    'Задание 4: Найдите все причастные обороты в тексте',
    'Задание 5: Напишите мини-сочинение по данному тексту',
  ],
}

// Plausible but slightly wrong exam answers (to generate realistic errors)
const ERROR_POOL: Record<string, string[]> = {
  math: ['Неверный знак у корня', 'Арифметическая ошибка', 'Неправильное применение формулы',
    'Пропущен один корень', 'Ошибка в раскрытии скобок'],
  physics: ['Неверные единицы измерения', 'Ошибка в формуле', 'Неверное направление вектора',
    'Арифметическая ошибка', 'Пропущен знак минус'],
  chemistry: ['Неверно расставлены коэффициенты', 'Ошибка в формуле вещества', 'Нарушен закон сохранения масс',
    'Неверный заряд иона', 'Пропущен продукт реакции'],
  history: ['Неточная дата', 'Перепутаны имена', 'Не указана причинно-следственная связь',
    'Неполный ответ', 'Ошибка в хронологии'],
  literature: ['Неверная цитата', 'Ошибка в интерпретации', 'Не указаны черты характера',
    'Нет ссылки на текст', 'Поверхностный анализ'],
  russian: ['Пунктуационная ошибка', 'Грамматическая ошибка', 'Неверный морфемный разбор',
    'Ошибка согласования', 'Нарушение нормы'],
}

/** Fake "written" exam answers per student performance level */
function generateExamContent(subject: string, performance: number, grade: number): string[] {
  const qs = EXAM_QUESTIONS[subject] ?? EXAM_QUESTIONS.math
  const lines: string[] = [`КОНТРОЛЬНАЯ РАБОТА`, `${subject.toUpperCase()} · ${grade} класс`]
  const selected = qs.slice(0, 3 + Math.floor(performance * 2))
  selected.forEach((q, i) => {
    lines.push('')
    lines.push(q)
    if (performance > 0.75) {
      lines.push(`Ответ: [показан верный ход решения]`)
    } else if (performance > 0.45) {
      lines.push(`Ответ: [частично верно, есть недочёты]`)
    } else {
      lines.push(`Ответ: [попытка, но допущены существенные ошибки]`)
    }
  })
  return lines
}

function pickErrors(subject: string, count: number): string[] {
  const pool = ERROR_POOL[subject] ?? ERROR_POOL.math
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export interface ExamResult {
  entries: NotebookEntry[]
  averageGrade: number
  eligibleForVP: boolean
}

export class ExamSystem {
  /** Generate exam notebooks for all students. Called at end-of-week. */
  generateExam(students: Student[], subject: string, classGrade: number): NotebookEntry[] {
    return students.map((s) => {
      // Use student's current understanding to generate realistic performance
      const understanding = s.data.stats.understanding / 100
      const performance = Math.max(0.1, Math.min(0.95, understanding + (Math.random() - 0.5) * 0.25))

      // Map performance to grade (1-5)
      let rawGrade: number
      if (performance >= 0.85) rawGrade = 5
      else if (performance >= 0.7) rawGrade = 4
      else if (performance >= 0.5) rawGrade = 3
      else rawGrade = 2

      const errorCount = Math.max(0, 5 - rawGrade) + Math.floor(Math.random() * 2)
      const errors = pickErrors(subject, errorCount)
      const content = generateExamContent(subject, performance, classGrade)

      return {
        studentId: s.data.id,
        studentName: s.data.name,
        errors,
        grade: null,   // teacher grades it
        content,
      } satisfies NotebookEntry
    })
  }

  /** Calculate average of all graded notebooks. Null grades skipped. */
  getAverageGrade(entries: NotebookEntry[]): number {
    const graded = entries.filter(e => e.grade !== null)
    if (graded.length === 0) return 0
    return graded.reduce((sum, e) => sum + (e.grade ?? 0), 0) / graded.length
  }

  /** Exam avg ≥ 4.0 makes the teacher eligible for VP promotion. */
  static isPromotionEligible(avgGrade: number): boolean {
    return avgGrade >= 4.0
  }
}
