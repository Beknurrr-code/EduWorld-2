import * as THREE from 'three'
import type { Student } from '../entities/Student'
import type { StudentType } from '../entities/StudentMesh'

const BREAK_SPEED = 0.0025  // units per millisecond

/** Clamped corridor positions students can wander to */
const CORRIDOR_WAYPOINTS: THREE.Vector3[] = [
  new THREE.Vector3(-14, 0.24, 0),
  new THREE.Vector3(-10, 0.24, 0.4),
  new THREE.Vector3(-6,  0.24, -0.3),
  new THREE.Vector3(-2,  0.24, 0.5),
  new THREE.Vector3(2,   0.24, -0.4),
  new THREE.Vector3(6,   0.24, 0.3),
  new THREE.Vector3(10,  0.24, -0.5),
  new THREE.Vector3(14,  0.24, 0),
  new THREE.Vector3(18,  0.24, 0.4),
  new THREE.Vector3(-8,  0.24, 0),
  new THREE.Vector3(4,   0.24, 0),
]

interface SocialEvent {
  aId: string
  bId: string
  type: 'chat' | 'help' | 'conflict'
  bubbleTimer: number  // ms remaining
}

interface BubbleOverlay {
  el: HTMLElement
  studentId: string
}

const SOCIAL_TEXTS: Record<SocialEvent['type'], string[]> = {
  chat:     ['💬', '😄', '🗣️'],
  help:     ['🤝', '💡', '📖'],
  conflict: ['😠', '💢', '😤'],
}

export class BreakSystem {
  private students: Student[] = []
  private targets = new Map<string, THREE.Vector3>()
  private socialEvents: SocialEvent[] = []
  private socialTick = 0
  private breakTimer = 0
  private onBreakEnd: (() => void) | null = null
  private active = false
  private bubbles: BubbleOverlay[] = []
  /** Container for floating chat bubbles */
  private bubbleContainer: HTMLElement

  constructor() {
    this.bubbleContainer = document.createElement('div')
    this.bubbleContainer.style.cssText = `
      position:fixed; inset:0; pointer-events:none; z-index:90;
      font-family:'Nunito',sans-serif;
    `
    document.body.appendChild(this.bubbleContainer)
  }

  start(students: Student[], durationMs: number, onEnd: () => void): void {
    this.students = students
    this.breakTimer = durationMs
    this.onBreakEnd = onEnd
    this.active = true
    this.socialEvents = []
    this.socialTick = 0
    this.targets.clear()
    this.clearBubbles()

    // Scatter students to corridor with personal jitter
    students.forEach((s, i) => {
      const base = CORRIDOR_WAYPOINTS[i % CORRIDOR_WAYPOINTS.length]
      const jitter = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        0,
        (Math.random() - 0.5) * 1.2,
      )
      const t = base.clone().add(jitter)
      t.x = Math.max(-17, Math.min(22, t.x))
      t.z = Math.max(-1.8, Math.min(1.8, t.z))
      t.y = 0.24
      this.targets.set(s.data.id, t)
      s.seated = false
      s.setEmotion('happy')
    })
  }

  update(deltaMs: number): void {
    if (!this.active) return

    this.breakTimer -= deltaMs
    if (this.breakTimer <= 0) {
      this.end()
      return
    }

    // Move students toward their targeted waypoints
    this.students.forEach(s => {
      const target = this.targets.get(s.data.id)
      if (!target) return
      const diff = new THREE.Vector3().subVectors(target, s.group.position)
      diff.y = 0
      const dist = diff.length()
      if (dist > 0.15) {
        const step = Math.min(BREAK_SPEED * deltaMs, dist)
        diff.normalize().multiplyScalar(step)
        s.group.position.addScaledVector(diff, 1)
        s.group.position.y = 0.24
        // Face movement direction
        s.group.rotation.y = Math.atan2(diff.x, diff.z)
      } else {
        // Pick new waypoint
        const wp = CORRIDOR_WAYPOINTS[Math.floor(Math.random() * CORRIDOR_WAYPOINTS.length)]
        const jitter = new THREE.Vector3(
          (Math.random() - 0.5) * 5,
          0,
          (Math.random() - 0.5) * 1.2,
        )
        const next = wp.clone().add(jitter)
        next.x = Math.max(-17, Math.min(22, next.x))
        next.z = Math.max(-1.8, Math.min(1.8, next.z))
        next.y = 0.24
        this.targets.set(s.data.id, next)
        // Periodic random emotion change
        if (Math.random() < 0.3) {
          const idles: Array<'happy' | 'bored' | 'neutral'> = ['happy', 'happy', 'bored', 'neutral']
          s.setEmotion(idles[Math.floor(Math.random() * idles.length)])
        }
      }
    })

    // Age social events
    this.socialEvents = this.socialEvents.filter(e => {
      e.bubbleTimer -= deltaMs
      return e.bubbleTimer > 0
    })

    // Social interaction tick every 3s
    this.socialTick += deltaMs
    if (this.socialTick >= 3000) {
      this.socialTick = 0
      this.trySpawnSocialEvent()
    }
  }

  private trySpawnSocialEvent(): void {
    if (this.students.length < 2) return

    for (let attempt = 0; attempt < 8; attempt++) {
      const idxA = Math.floor(Math.random() * this.students.length)
      let idxB = Math.floor(Math.random() * this.students.length)
      if (idxA === idxB) continue
      const a = this.students[idxA]
      const b = this.students[idxB]
      const dist = a.group.position.distanceTo(b.group.position)
      if (dist > 6) continue

      let type: SocialEvent['type'] = 'chat'
      const aType = a.data.type as StudentType
      const bType = b.data.type as StudentType

      if (aType === 'bully' || bType === 'bully') {
        type = Math.random() < 0.4 ? 'conflict' : 'chat'
      } else if (
        (aType === 'genius' || aType === 'helper') &&
        (bType === 'anxious' || bType === 'average' || bType === 'lazy')
      ) {
        type = 'help'
      } else if (
        (bType === 'genius' || bType === 'helper') &&
        (aType === 'anxious' || aType === 'average' || aType === 'lazy')
      ) {
        type = 'help'
      }

      // Apply stat effects
      if (type === 'help') {
        const helper = (aType === 'genius' || aType === 'helper') ? a : b
        const helped  = helper === a ? b : a
        helped.modifyStat('motivation', 3)
        helped.modifyStat('understanding', 2)
        helper.setEmotion('happy')
        helped.setEmotion('happy')
      } else if (type === 'conflict') {
        const victim = (aType === 'bully') ? b : a
        victim.modifyStat('motivation', -4)
        victim.setEmotion('troubled')
      } else {
        a.setEmotion('happy')
        b.setEmotion('happy')
      }

      this.socialEvents.push({ aId: a.data.id, bId: b.data.id, type, bubbleTimer: 2500 })

      // Show floating icon above the pair
      const icon = SOCIAL_TEXTS[type][Math.floor(Math.random() * SOCIAL_TEXTS[type].length)]
      this.spawnBubbleFor(a.data.id, b.data.id, icon)
      break
    }
  }

  private spawnBubbleFor(aid: string, _bid: string, icon: string): void {
    const el = document.createElement('div')
    el.textContent = icon
    el.style.cssText = `
      position:absolute; font-size:22px; top:30%; left:50%;
      transform:translate(-50%,-50%); animation:floatUp 2.5s ease-out forwards;
    `
    // Simple CSS animation
    if (!document.querySelector('#ew2-bubble-style')) {
      const style = document.createElement('style')
      style.id = 'ew2-bubble-style'
      style.textContent = `@keyframes floatUp{0%{opacity:1;transform:translate(-50%,-50%) translateY(0)}100%{opacity:0;transform:translate(-50%,-50%) translateY(-40px)}}`
      document.head.appendChild(style)
    }
    this.bubbleContainer.appendChild(el)
    this.bubbles.push({ el, studentId: aid })
    setTimeout(() => el.remove(), 2600)
  }

  private clearBubbles(): void {
    this.bubbles.forEach(b => b.el.remove())
    this.bubbles = []
  }

  private end(): void {
    if (!this.active) return
    this.active = false
    this.clearBubbles()
    // Return all students to seats
    this.students.forEach(s => {
      s.setEmotion('neutral')
      s.seated = true
    })
    this.onBreakEnd?.()
  }

  /** Call when player triggers early break end (presses E near classroom door) */
  forceEnd(): void { this.end() }

  isActive(): boolean { return this.active }

  /** How many ms remain in the break */
  getRemaining(): number { return Math.max(0, this.breakTimer) }

  dispose(): void { this.bubbleContainer.remove() }
}
