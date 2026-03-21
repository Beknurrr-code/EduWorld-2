import { FeatherlessAPI } from './FeatherlessAPI'
import { Student } from '../entities/Student'
import { EventBus } from '../core/EventBus'

/** Governs autonomous student reactions to lesson events */
export class StudentAI {
  private api: FeatherlessAPI
  private bus = EventBus.getInstance()

  constructor(api: FeatherlessAPI) {
    this.api = api
  }

  /** Called after each explanation round — update student emotions */
  reactToExplanation(students: Student[], understandingDelta: number, attentionDelta: number): void {
    students.forEach(s => {
      const u = s.data.stats.understanding
      if (u >= 80) s.setEmotion('happy')
      else if (u <= 35) s.setEmotion('confused')
      else if (attentionDelta < 0) s.setEmotion('bored')
      else s.setEmotion('neutral')
    })
  }

  /** After task phase ends */
  reactToTasks(students: Student[], difficulty: 'easy' | 'medium' | 'hard'): void {
    students.forEach(s => {
      const u = s.data.stats.understanding
      if (difficulty === 'hard' && u < 50) s.setEmotion('confused')
      else if (difficulty === 'easy' && u > 70) s.setEmotion('bored')
      else s.setEmotion('writing')
    })
  }

  /** Simulate whether a student "did" homework based on their stats */
  simulateHWCompletion(students: Student[], hwDifficulty: 'easy' | 'medium' | 'hard'): void {
    const diffPenalty = { easy: 0, medium: 15, hard: 30 }
    students.forEach(s => {
      const chance = (s.data.stats.motivation + s.data.stats.behavior) / 2 - diffPenalty[hwDifficulty]
      s.data.hwDone = Math.random() * 100 < chance
    })
  }

  /** Random in-lesson student behavior tick — bored students may become disruptors */
  behaviorTick(students: Student[]): void {
    students.forEach(s => {
      const { attention, behavior, motivation } = s.data.stats
      // Bored student with low behavior may cause trouble
      if (attention < 25 && behavior < 40 && Math.random() < 0.08) {
        s.setEmotion('troubled')
        this.bus.emit('studentDisrupting', { studentId: s.data.id, studentName: s.data.name })
        return
      }
      // Tired student
      if (attention < 20 && motivation < 30) { s.setEmotion('bored'); return }
      // Happy engaged student
      if (attention > 75 && motivation > 70) { s.setEmotion('happy'); return }
    })
  }

  /** Get an AI-generated bubble text for a student reaction (async, no-blocking) */
  async getStudentReactionBubble(student: Student, context: string): Promise<string> {
    const type = student.data.type
    const mood = student.data.stats.attention > 60 ? 'внимательный' : 'скучающий'
    const prompts: Record<string, string> = {
      genius:     `Ученик-отличник реагирует на "${context}". 1 короткая фраза (умная, иногда занудная).`,
      rebel:      `Ученик-хулиган реагирует на "${context}". 1 короткая фраза (дерзкая).`,
      average:    `Обычный ${mood} ученик реагирует на "${context}". Очень короткая фраза.`,
      shy:        `Тихий ${mood} ученик реагирует на "${context}". 1 тихая фраза.`,
      jester:     `Ученик-шут реагирует на "${context}". 1 смешная фраза.`,
    }
    const prompt = prompts[type] ?? prompts['average']
    try {
      const result = await (this.api as any).call([{ role: 'user', content: prompt }], 40)
      return result
    } catch {
      const fallbacks: Record<string, string[]> = {
        genius:  ['Это неточно...', 'Я проверил, и формула другая.', 'Интересно!'],
        rebel:   ['Скукажуха.', 'Вы серьёзно?', 'Мне всё равно.'],
        average: ['Ок...', 'А это будет в контрольной?', 'Не понял.'],
        shy:     ['...', 'Хорошо.', 'Я понял, кажется.'],
        jester:  ['Хаха!', 'А можно анекдот?', 'Я не слушал.'],
      }
      const bank = fallbacks[type] ?? fallbacks['average']
      return bank[Math.floor(Math.random() * bank.length)]
    }
  }
}
