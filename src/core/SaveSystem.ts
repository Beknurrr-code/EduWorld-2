export interface SaveData {
  teacherName: string
  subject: string
  grade: number
  grades?: number[]
  reputation: number
  experience: number
  money: number
  careerRank: string
  skillPoints: number
  unlockedPerks: string[]
  dayNumber: number
  lessonCount: number
  completedTopics: string[]
  completedTopicsPerGrade?: Record<number, string[]>
}

const KEY = 'ew2_save'

const DEFAULTS: SaveData = {
  teacherName: '',
  subject: 'Математика',
  grade: 7,
  reputation: 50,
  experience: 0,
  money: 80000,
  careerRank: 'bez_kategorii',
  skillPoints: 0,
  unlockedPerks: [],
  dayNumber: 1,
  lessonCount: 0,
  completedTopics: [],
}

export class SaveSystem {
  private static inst: SaveSystem
  private data: SaveData = { ...DEFAULTS }

  static getInstance(): SaveSystem {
    if (!SaveSystem.inst) SaveSystem.inst = new SaveSystem()
    return SaveSystem.inst
  }

  load(): SaveData {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) this.data = { ...DEFAULTS, ...JSON.parse(raw) as Partial<SaveData> }
    } catch { /* ignore */ }
    return this.data
  }

  save(partial: Partial<SaveData>): void {
    this.data = { ...this.data, ...partial }
    try { localStorage.setItem(KEY, JSON.stringify(this.data)) } catch { /* ignore */ }
  }

  get(): SaveData { return this.data }
  reset(): void { this.data = { ...DEFAULTS }; localStorage.removeItem(KEY) }
}
