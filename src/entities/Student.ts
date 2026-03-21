import * as THREE from 'three'
import { StudentType, buildStudentMesh, buildEmotionSprite, updateEmotionSprite } from './StudentMesh'

export type StudentEmotion = 'neutral' | 'happy' | 'bored' | 'confused' | 'sleeping' | 'raising_hand' | 'writing' | 'troubled' | 'phone'

const EMOTION_ICON: Record<StudentEmotion, string> = {
  neutral: '',
  happy: '😊',
  bored: '😒',
  confused: '❓',
  sleeping: '💤',
  raising_hand: '✋',
  writing: '✏️',
  troubled: '😰',
  phone: '📱',
}

export interface StudentStats {
  understanding: number   // 0-100: how well they understand the current topic
  attention: number       // 0-100: current lesson engagement
  motivation: number      // 0-100: willingness to participate
  behavior: number        // 0-100: 100=good, 0=disruptive
}

export interface StudentData {
  id: string
  name: string
  type: StudentType
  stats: StudentStats
  hwDone: boolean          // did HW last time
  notebookGrade: number    // last notebook check grade 2-5
  progressionScore: number // 0‑N: counts "good lesson" events, threshold triggers stat boost
}

export class Student {
  readonly data: StudentData
  readonly group: THREE.Group
  private emotionSprite: THREE.Sprite
  private animTime = 0
  private _emotion: StudentEmotion = 'neutral'
  private _seated = true
  private seatPosition = new THREE.Vector3()

  constructor(data: StudentData, scene: THREE.Scene) {
    this.data = data
    this.group = buildStudentMesh(data.type)
    this.emotionSprite = buildEmotionSprite()
    this.group.add(this.emotionSprite)
    scene.add(this.group)
  }

  placeat(pos: THREE.Vector3): void {
    this.seatPosition.copy(pos)
    this.group.position.copy(pos)
  }

  setEmotion(e: StudentEmotion): void {
    if (this._emotion === e) return
    this._emotion = e
    updateEmotionSprite(this.emotionSprite, EMOTION_ICON[e])
  }

  get emotion(): StudentEmotion { return this._emotion }

  set seated(v: boolean) {
    this._seated = v
    if (v) {
      this.group.position.copy(this.seatPosition)
      this.group.rotation.y = 0
      this.group.rotation.x = 0
      this.group.rotation.z = 0
    }
  }

  get seated(): boolean { return this._seated }

  /** Modify a stat clamped 0-100 */
  modifyStat(stat: keyof StudentStats, delta: number): void {
    this.data.stats[stat] = Math.max(0, Math.min(100, this.data.stats[stat] + delta))
  }

  update(deltaMs: number): void {
    this.animTime += deltaMs * 0.001
    const t = this.animTime

    switch (this._emotion) {
      case 'writing': {
        // Rhythmic pen strokes: lean forward, arm swings left-right, small vertical bob
        const stroke = Math.sin(t * 5.5)        // fast horizontal stroke
        const bob    = Math.abs(Math.sin(t * 5.5)) * 0.012  // lift on each stroke
        this.group.rotation.x = 0.10 + bob
        this.group.rotation.z = stroke * 0.035
        this.group.position.y = this.seatPosition.y + bob * 0.4
        break
      }
      case 'sleeping':
        // Gradually slump sideways, slow breathing bob
        this.group.rotation.x = 0.04
        this.group.rotation.z = 0.32 + Math.sin(t * 0.9) * 0.05
        this.group.position.y = this.seatPosition.y
        break
      case 'phone':
        // Hunched forward, looking down, subtle secret glance up periodically
        this.group.rotation.x = 0.18 + Math.sin(t * 0.4) * 0.02
        this.group.rotation.z = Math.sin(t * 0.3) * 0.015
        this.group.position.y = this.seatPosition.y
        break
      case 'happy':
        // Excited: slight forward nod + micro side rock
        this.group.rotation.x = -0.02 + Math.sin(t * 5.5) * 0.025
        this.group.rotation.z = Math.sin(t * 3.8) * 0.018
        this.group.position.y = this.seatPosition.y + Math.abs(Math.sin(t * 5.5)) * 0.015
        break
      case 'bored':
        // Lean back slowly, chin on hand drift
        this.group.rotation.x = -0.05 + Math.sin(t * 0.5) * 0.02
        this.group.rotation.z = Math.sin(t * 0.6) * 0.06
        this.group.position.y = this.seatPosition.y
        break
      case 'confused':
        // Tilt head side to side uncertainly
        this.group.rotation.x = 0.02
        this.group.rotation.z = Math.sin(t * 1.8) * 0.08
        this.group.position.y = this.seatPosition.y
        break
      case 'raising_hand':
        // Lean eagerly forward + slight upward y impulse
        this.group.rotation.x = -0.06
        this.group.rotation.z = Math.sin(t * 1.5) * 0.012
        this.group.position.y = this.seatPosition.y + 0.02 + Math.sin(t * 2) * 0.015
        break
      case 'troubled':
        // Stiff, anxious micro-shiver
        this.group.rotation.x = 0.04
        this.group.rotation.z = Math.sin(t * 9) * 0.025
        this.group.position.y = this.seatPosition.y
        break
      default:
        this.group.rotation.x = 0
        this.group.rotation.z = 0
        this.group.position.y = this.seatPosition.y
    }
  }

  distanceTo(pos: THREE.Vector3): number {
    return this.group.position.distanceTo(pos)
  }
}

/** Factory: build student data with type-specific default stats */
export function makeStudentData(id: string, name: string, type: StudentType): StudentData {
  const base: Record<StudentType, StudentStats> = {
    genius:  { understanding: 75, attention: 80, motivation: 85, behavior: 90 },
    lazy:    { understanding: 35, attention: 30, motivation: 25, behavior: 60 },
    bully:   { understanding: 40, attention: 45, motivation: 40, behavior: 20 },
    anxious: { understanding: 60, attention: 70, motivation: 55, behavior: 85 },
    helper:  { understanding: 65, attention: 75, motivation: 80, behavior: 95 },
    average: { understanding: 55, attention: 55, motivation: 55, behavior: 70 },
  }
  return {
    id, name, type,
    stats: { ...base[type] },
    hwDone: true,
    notebookGrade: 4,
    progressionScore: 0,
  }
}
