/** Thin wrapper around the Featherless AI (OpenAI-compatible) API */

const API_URL = 'https://api.featherless.ai/v1/chat/completions'
const MODEL = 'meta-llama/Meta-Llama-3.1-8B-Instruct'

// Fallback phrases for when API is unavailable
const FALLBACK_EXPLAIN: Record<string, string[]> = {
  theory:    ['Итак, внимание на доску. Сегодня разбираем ключевую концепцию...', 'Рассмотрим теоретическую основу этой темы...', 'Запишем определение и формулу...'],
  board:     ['Смотрите, как это решается по шагам:', 'На доске — и разберём вместе:', 'Алгоритм решения такой...'],
  example:   ['Представьте: вы заказываете пиццу. Вот вам и пропорции!', 'Это как с ездой на велосипеде — сначала страшно, потом сам едешь.', 'Из жизни: каждый раз, когда вы делаете сдачу в магазине...'],
  question:  ['Кто может сказать, что происходит, если...?', 'Прежде чем я объясню, попробуйте сами: почему так?', 'Интересный вопрос — как думаете?'],
}

const FALLBACK_ERRORS: string[] = [
  'Не та формула', 'Вычислительная ошибка', 'Не записан ответ',
  'Ошибка в знаке', 'Неверный вывод', 'Пропущен шаг',
]

const FALLBACK_FEEDBACK: string[] = [
  'Хорошая попытка, но здесь ошибка.', 'Почти верно! Проверь вычисления.',
  'Ошибка типичная — запомни правило.', 'Старался, но не хватило внимательности.',
]

export interface ChatMessage { role: 'system' | 'user' | 'assistant'; content: string }

export class FeatherlessAPI {
  private apiKey: string
  private enabled = true

  constructor(apiKey: string) {
    this.apiKey = apiKey
    if (!apiKey) this.enabled = false
  }

  private async call(messages: ChatMessage[], maxTokens = 120): Promise<string> {
    if (!this.enabled) throw new Error('no key')
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
      body: JSON.stringify({ model: MODEL, messages, max_tokens: maxTokens, temperature: 0.85 }),
    })
    if (!resp.ok) throw new Error(`API ${resp.status}`)
    const data: any = await resp.json()
    return data.choices?.[0]?.message?.content?.trim() ?? ''
  }

  /** 1–2 sentence teacher explanation of a topic/method combo */
  async getExplanationLine(topic: string, type: 'theory' | 'board' | 'example' | 'question', subject: string): Promise<string> {
    try {
      const prompt = `Ты учитель ${subject} в российской школе. Объясни ученикам 9 класса тему "${topic}" методом: ${type}. Одно–два предложения, разговорным языком, можно с юмором.`
      return await this.call([{ role: 'user', content: prompt }], 80)
    } catch {
      const bank = FALLBACK_EXPLAIN[type] ?? FALLBACK_EXPLAIN['theory']
      return bank[Math.floor(Math.random() * bank.length)]
    }
  }

  /** Generate 2-3 notebook errors for a student on a topic */
  async getNotebookErrors(topic: string, difficulty: 'easy'|'medium'|'hard', studentName: string): Promise<string[]> {
    try {
      const prompt = `Ученик "${studentName}" решал задачу по теме "${topic}" (сложность: ${difficulty}). Перечисли 2–3 конкретных ошибки которые он мог допустить, кратко, по одной фразе каждая. Только список через \n.`
      const text = await this.call([{ role: 'user', content: prompt }], 100)
      return text.split('\n').map(s => s.replace(/^\d+\.\s*/, '').trim()).filter(Boolean).slice(0, 3)
    } catch {
      return FALLBACK_ERRORS.sort(() => Math.random() - 0.5).slice(0, 2)
    }
  }

  /** Short teacher feedback phrase for a graded notebook */
  async getGradeFeedback(grade: number, errors: string[]): Promise<string> {
    try {
      const errStr = errors.join('; ')
      const prompt = `Учитель ставит оценку ${grade} за тетрадь. Ошибки: ${errStr || 'нет'}. Одна фраза-комментарий (разговорно, можно иронично).`
      return await this.call([{ role: 'user', content: prompt }], 60)
    } catch {
      return FALLBACK_FEEDBACK[Math.floor(Math.random() * FALLBACK_FEEDBACK.length)]
    }
  }

  /** Event narration line */
  async getEventLine(eventType: string, studentName?: string): Promise<string> {
    try {
      const who = studentName ? `Ученик ${studentName}.` : ''
      const prompt = `Короткая (1 предложение) реакция учителя на событие "${eventType}" в классе. ${who} Разговорный стиль.`
      return await this.call([{ role: 'user', content: prompt }], 60)
    } catch {
      return 'Ситуация в классе выходит из-под контроля!'
    }
  }
}
