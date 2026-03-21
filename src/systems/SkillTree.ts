export interface Perk {
  id: string
  branch: 'pedagogy' | 'psychology' | 'org'
  tier: number
  name: string
  desc: string
  cost: number
  requires?: string
  icon: string
}

export const PERKS: Perk[] = [
  // PEDAGOGY
  { id:'ped1', branch:'pedagogy', tier:1, name:'Риторика',      desc:'Объяснения +20% внимания',        cost:100, icon:'🗣️' },
  { id:'ped2', branch:'pedagogy', tier:2, name:'Мастер доски',  desc:'Доска +25% понимания',            cost:250, icon:'📋', requires:'ped1' },
  { id:'ped3', branch:'pedagogy', tier:3, name:'Сторителлинг',  desc:'Примеры +35% мотивации',          cost:400, icon:'📖', requires:'ped2' },
  { id:'ped4', branch:'pedagogy', tier:4, name:'Методист',      desc:'Кулдауны действий −25%',          cost:600, icon:'⚡', requires:'ped3' },
  { id:'ped5', branch:'pedagogy', tier:5, name:'Мастер-класс',  desc:'XP за объяснения ×1.5',           cost:900, icon:'🎓', requires:'ped4' },
  // PSYCHOLOGY
  { id:'psy1', branch:'psychology', tier:1, name:'Эмпатия',     desc:'Похвала +25% внимания',           cost:100, icon:'❤️' },
  { id:'psy2', branch:'psychology', tier:2, name:'Психолог',    desc:'Тревожные учатся лучше',          cost:250, icon:'🧠', requires:'psy1' },
  { id:'psy3', branch:'psychology', tier:3, name:'Мотиватор',   desc:'Задания +50% мотивации',          cost:400, icon:'🌟', requires:'psy2' },
  { id:'psy4', branch:'psychology', tier:4, name:'Конфликтолог',desc:'Конфликты −50% урона',            cost:600, icon:'🕊️', requires:'psy3' },
  { id:'psy5', branch:'psychology', tier:5, name:'Наставник',   desc:'Репутация растёт ×1.5',           cost:900, icon:'🏅', requires:'psy4' },
  // ORGANIZATION
  { id:'org1', branch:'org', tier:1, name:'Тайм-мен.',          desc:'Фазы урока +10% XP',              cost:100, icon:'⏱️' },
  { id:'org2', branch:'org', tier:2, name:'Планировщик',        desc:'Викторина +40% внимания',         cost:250, icon:'📆', requires:'org1' },
  { id:'org3', branch:'org', tier:3, name:'Администратор',      desc:'Зарплата +10% в неделю',          cost:400, icon:'💼', requires:'org2' },
  { id:'org4', branch:'org', tier:4, name:'Инноватор',          desc:'Особые события ×2 XP',            cost:600, icon:'🔬', requires:'org3' },
  { id:'org5', branch:'org', tier:5, name:'Директор',           desc:'Разблокирует режим директора',    cost:900, icon:'🏛️', requires:'org4' },
]

export class SkillTree {
  private unlocked = new Set<string>()
  private _points = 0

  get points(): number { return this._points }

  addPoints(n: number): void { this._points += n }

  canUnlock(id: string): boolean {
    const p = PERKS.find(pk => pk.id === id)
    if (!p) return false
    if (this._points < p.cost) return false
    if (p.requires && !this.unlocked.has(p.requires)) return false
    return true
  }

  unlock(id: string): boolean {
    const p = PERKS.find(pk => pk.id === id)
    if (!p || !this.canUnlock(id)) return false
    this._points -= p.cost
    this.unlocked.add(id)
    return true
  }

  has(id: string): boolean { return this.unlocked.has(id) }

  getXPMult(action: string): number {
    let m = 1
    if (action === 'explain' && this.has('ped5')) m *= 1.5
    if (action === 'praise' && this.has('psy5'))  m *= 1.5
    if (this.has('ped5') && this.has('psy5'))     m *= 1.1  // all-bonus
    return m
  }

  load(ids: string[]): void { ids.forEach(id => this.unlocked.add(id)) }
  save(): string[] { return [...this.unlocked] }
}
