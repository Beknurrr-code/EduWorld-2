export interface CareerLevel {
  id: string
  name: string
  icon: string
  xpRequired: number
  lessonsRequired: number
  repRequired: number
  salaryBonus: number   // multiplier e.g. 0.1 = +10%
}

export const CAREER_LEVELS: CareerLevel[] = [
  { id: 'novice',    name: 'Rookie Teacher',    icon: '📖', xpRequired: 0,     lessonsRequired: 0,   repRequired: 0,   salaryBonus: 0    },
  { id: 'cat2',      name: 'Teacher Cat. II',   icon: '📗', xpRequired: 300,   lessonsRequired: 8,   repRequired: 55,  salaryBonus: 0.10 },
  { id: 'cat1',      name: 'Teacher Cat. I',    icon: '📘', xpRequired: 1000,  lessonsRequired: 20,  repRequired: 75,  salaryBonus: 0.20 },
  { id: 'highest',   name: 'Expert Teacher',    icon: '🏆', xpRequired: 3000,  lessonsRequired: 40,  repRequired: 110, salaryBonus: 0.35 },
  { id: 'honored',   name: 'Honored Teacher',   icon: '🌟', xpRequired: 8000,  lessonsRequired: 80,  repRequired: 130, salaryBonus: 0.60 },
  { id: 'zavuch',    name: 'Deputy Principal',  icon: '🏛️', xpRequired: 15000, lessonsRequired: 100, repRequired: 140, salaryBonus: 0.80 },
  { id: 'director',  name: 'School Director',   icon: '👔', xpRequired: 30000, lessonsRequired: 200, repRequired: 180, salaryBonus: 1.20 },
]

export class CareerSystem {
  private _rankIndex = 0

  get rank(): CareerLevel { return CAREER_LEVELS[this._rankIndex] }
  get rankIndex(): number { return this._rankIndex }

  isVP(): boolean       { return this.rank.id === 'zavuch' || this.rank.id === 'director' }
  isDirector(): boolean { return this.rank.id === 'director' }

  /** Regular promotion (XP/lessons/rep). Does NOT promote to zavuch or director. */
  checkPromotion(xp: number, lessons: number, rep: number): CareerLevel | null {
    const next = CAREER_LEVELS[this._rankIndex + 1]
    // VP/Director require special exam/inspection checks — skip via checkExamPromotion
    if (!next || next.id === 'zavuch' || next.id === 'director') return null
    if (xp >= next.xpRequired && lessons >= next.lessonsRequired && rep >= next.repRequired) {
      this._rankIndex++
      return this.rank
    }
    return null
  }

  /** Called after weekly exam. If eligible + stats meet threshold → promotes to zavuch. */
  checkExamPromotion(xp: number, lessons: number, rep: number, examAvg: number): CareerLevel | null {
    if (this.rank.id !== 'honored') return null
    const zavuch = CAREER_LEVELS.find(r => r.id === 'zavuch')!
    if (examAvg >= 4.0 && xp >= zavuch.xpRequired && lessons >= zavuch.lessonsRequired && rep >= zavuch.repRequired) {
      this._rankIndex = CAREER_LEVELS.indexOf(zavuch)
      return this.rank
    }
    return null
  }

  /** Called after VP inspection cycle. If score ≥ threshold → promotes to director. */
  checkDirectorPromotion(inspectionScore: number, rep: number): CareerLevel | null {
    if (this.rank.id !== 'zavuch') return null
    const director = CAREER_LEVELS.find(r => r.id === 'director')!
    if (inspectionScore >= 6 && rep >= director.repRequired) {
      this._rankIndex = CAREER_LEVELS.indexOf(director)
      return this.rank
    }
    return null
  }

  load(rankId: string): void {
    const idx = CAREER_LEVELS.findIndex(r => r.id === rankId)
    if (idx >= 0) this._rankIndex = idx
  }

  /** Dev-only: jump directly to any rank by id */
  forceRank(rankId: string): void {
    const idx = CAREER_LEVELS.findIndex(r => r.id === rankId)
    if (idx >= 0) this._rankIndex = idx
  }
}
