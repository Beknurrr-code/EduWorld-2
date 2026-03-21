/** 1 game minute = 4 real seconds — comfortable pace for classroom gameplay */
export class TimeManager {
  private static inst: TimeManager
  private _gameMinutes = 0   // 0 = 08:00
  private _paused = false
  private accumMs = 0
  private readonly REAL_MS_PER_GAME_MIN = 4000  // 4000ms = 1 game minute

  static getInstance(): TimeManager {
    if (!TimeManager.inst) TimeManager.inst = new TimeManager()
    return TimeManager.inst
  }

  get paused(): boolean { return this._paused }
  set paused(v: boolean) { this._paused = v }

  /** Call every frame with real delta ms */
  tick(deltaMs: number): void {
    if (this._paused) return
    this.accumMs += deltaMs
    while (this.accumMs >= this.REAL_MS_PER_GAME_MIN) {
      this.accumMs -= this.REAL_MS_PER_GAME_MIN
      this._gameMinutes++
    }
  }

  /** Minutes since 08:00 */
  get gameMinutes(): number { return this._gameMinutes }

  reset(startAtMinute = 0): void {
    this._gameMinutes = startAtMinute
    this.accumMs = 0
  }

  getHHMM(): string {
    const total = 8 * 60 + this._gameMinutes
    const h = Math.floor(total / 60) % 24
    const m = total % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
  }
}
