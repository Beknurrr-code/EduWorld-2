import { Student } from '../entities/Student'
import { EventBus } from '../core/EventBus'

export class AttentionSystem {
  private static inst: AttentionSystem
  static getInstance(): AttentionSystem {
    if (!AttentionSystem.inst) AttentionSystem.inst = new AttentionSystem()
    return AttentionSystem.inst
  }

  private _classAttention = 70  // 0-100
  private bus = EventBus.getInstance()

  get value(): number { return this._classAttention }

  /** Called every game-minute from LessonSystem */
  tick(students: Student[]): void {
    // Natural decay
    this._classAttention = Math.max(0, this._classAttention - 0.4)

    // Influence from student stats
    const avg = students.reduce((s, st) => s + st.data.stats.attention, 0) / students.length
    this._classAttention = this._classAttention * 0.8 + avg * 0.2

    this._classAttention = Math.max(0, Math.min(100, this._classAttention))
    this.bus.emit('attentionChanged', { value: Math.round(this._classAttention) })

    if (this._classAttention < 30) this.bus.emit('attentionWarning', null)
  }

  boost(amount: number): void {
    this._classAttention = Math.min(100, this._classAttention + amount)
    this.bus.emit('attentionChanged', { value: Math.round(this._classAttention) })
  }

  drop(amount: number): void {
    this._classAttention = Math.max(0, this._classAttention - amount)
    this.bus.emit('attentionChanged', { value: Math.round(this._classAttention) })
  }

  reset(): void { this._classAttention = 70 }
}
