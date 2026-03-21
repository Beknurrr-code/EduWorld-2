import { EventBus } from '../core/EventBus'
import { Student } from '../entities/Student'

export type EventType = 'troublemaker' | 'fire_alarm' | 'hw_sabotage' | 'genius_question' | 'phone_ring' | 'student_conflict'

export interface ClassroomEvent {
  type: EventType
  title: string
  icon: string
  desc: string
  choices: { label: string; icon: string; effect: (students: Student[]) => string }[]
}

function makeTroublemaker(): ClassroomEvent {
  return {
    type: 'troublemaker',
    title: 'Troublemaker!',
    icon: '😤',
    desc: 'One student is disrupting the whole class.',
    choices: [
      {
        label: 'Issue a warning',
        icon: '🗣️',
        effect: (students) => {
          const bully = students.find(s => s.data.stats.behavior < 50) ?? students[0]
          bully.modifyStat('behavior', 10)
          return `Warning issued to ${bully.data.name}.`
        },
      },
      {
        label: 'Remove from class',
        icon: '🚪',
        effect: (students) => {
          const bully = students.find(s => s.data.stats.behavior < 50) ?? students[0]
          bully.modifyStat('behavior', 25)
          bully.modifyStat('motivation', -20)
          return `${bully.data.name} was sent out.`
        },
      },
      {
        label: 'Ignore it',
        icon: '🙄',
        effect: (_students) => {
          return 'The class keeps making noise. Attention drops.'
        },
      },
    ],
  }
}

function makeFireAlarm(): ClassroomEvent {
  return {
    type: 'fire_alarm',
    title: 'Fire Alarm!',
    icon: '🚨',
    desc: 'The fire alarm went off. The entire schedule is disrupted.',
    choices: [
      {
        label: 'Calmly evacuate the class',
        icon: '🏃',
        effect: (_students) => 'Class evacuated safely. −10 min lesson time, +reputation.',
      },
      {
        label: 'Continue the lesson',
        icon: '📚',
        effect: (_students) => 'Safety violation! −reputation.',
      },
    ],
  }
}

function makeHWSabotage(): ClassroomEvent {
  return {
    type: 'hw_sabotage',
    title: 'Half the class skipped homework!',
    icon: '😬',
    desc: 'More than half the class showed up without their homework.',
    choices: [
      {
        label: 'Give failing grades',
        icon: '✂️',
        effect: (students) => {
          students.forEach(s => { if (!s.data.hwDone) s.modifyStat('motivation', -10) })
          return 'Failing marks given to all offenders.'
        },
      },
      {
        label: 'Give a second chance',
        icon: '🙏',
        effect: (students) => {
          students.forEach(s => { if (!s.data.hwDone) s.modifyStat('motivation', 5) })
          return 'Second chance given. Motivation rises.'
        },
      },
      {
        label: 'Ask about the reasons',
        icon: '❓',
        effect: (_students) => 'Students appreciated the understanding.',
      },
    ],
  }
}

function makeGeniusQuestion(subject: string, topic: string): ClassroomEvent {
  return {
    type: 'genius_question',
    title: 'Tough question!',
    icon: '🤓',
    desc: `A top student asks a tricky question about "${topic}" (${subject}).`,
    choices: [
      {
        label: 'Answer the question',
        icon: '💡',
        effect: (_students) => 'Class is impressed! +attention, +reputation.',
      },
      {
        label: 'Cover it next lesson',
        icon: '📆',
        effect: (_students) => 'Deferred. The genius is slightly disappointed.',
      },
      {
        label: 'Ask them to answer it',
        icon: '🎓',
        effect: (students) => {
          const genius = students.find(s => s.data.type === 'genius') ?? students[0]
          genius.modifyStat('motivation', 15)
          return `${genius.data.name} happily answers!`
        },
      },
    ],
  }
}

function makePhoneRing(): ClassroomEvent {
  return {
    type: 'phone_ring',
    title: "Someone's phone is ringing!",
    icon: '📱',
    desc: "A loud ringtone interrupts the lesson. The class giggles.",
    choices: [
      {
        label: 'Confiscate the phone',
        icon: '😠',
        effect: (_students) => 'Order restored. −mood for the offender.',
      },
      {
        label: 'Make a joke and continue',
        icon: '😄',
        effect: (_students) => 'Class laughs. +mood! Meme moment.',
      },
    ],
  }
}

function makeConflict(): ClassroomEvent {
  return {
    type: 'student_conflict',
    title: 'Student conflict!',
    icon: '⚔️',
    desc: 'Two students had a fight and are disrupting the class.',
    choices: [
      {
        label: 'Defuse the situation',
        icon: '🕊️',
        effect: (students) => {
          students.slice(0, 2).forEach(s => s.modifyStat('behavior', 10))
          return 'Conflict resolved. Lesson continues.'
        },
      },
      {
        label: 'Call both to the board',
        icon: '📋',
        effect: (students) => {
          students.slice(0, 2).forEach(s => { s.modifyStat('behavior', 5); s.modifyStat('attention', 15) })
          return 'Giving them a task together will settle things.'
        },
      },
    ],
  }
}

export class ClassroomEventSystem {
  private bus = EventBus.getInstance()
  private lastEventMinute = -30
  private minInterval = 12  // min game-minutes between events
  private subject = ''
  private topic = ''

  init(subject: string, topic: string): void {
    this.subject = subject
    this.topic = topic
    this.lastEventMinute = -30
  }

  /** Returns a ClassroomEvent if one should fire now, or null */
  maybeSpawnEvent(gameMinute: number): ClassroomEvent | null {
    if (gameMinute - this.lastEventMinute < this.minInterval) return null
    if (Math.random() > 0.35) return null  // ~35% chance each check

    this.lastEventMinute = gameMinute
    const events: ClassroomEvent[] = [
      makeTroublemaker(),
      makeFireAlarm(),
      makeHWSabotage(),
      makeGeniusQuestion(this.subject, this.topic),
      makePhoneRing(),
      makeConflict(),
    ]
    return events[Math.floor(Math.random() * events.length)]
  }
}
