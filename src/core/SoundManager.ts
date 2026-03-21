/**
 * SoundManager — procedural Web Audio API sounds.
 * No audio files needed. All sounds are synthesized.
 * Very quiet and non-jarring by design.
 */

export class SoundManager {
  private static _inst: SoundManager
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private sfx: GainNode | null = null
  private music: GainNode | null = null
  private _ready = false

  static getInstance(): SoundManager {
    if (!SoundManager._inst) SoundManager._inst = new SoundManager()
    return SoundManager._inst
  }

  /** Call once on first user interaction (browser autoplay policy) */
  init(): void {
    if (this._ready) return
    try {
      this.ctx = new AudioContext()
      this.master = this.ctx.createGain(); this.master.gain.value = 0.65
      this.master.connect(this.ctx.destination)

      this.sfx = this.ctx.createGain(); this.sfx.gain.value = 0.85
      this.sfx.connect(this.master)

      this.music = this.ctx.createGain(); this.music.gain.value = 0.55
      this.music.connect(this.master)

      this._ready = true
      this._startAmbient()
    } catch { /* AudioContext unavailable */ }
  }

  /** 3-tone ascending school bell — gentle */
  playBell(): void {
    if (!this.ctx || !this.sfx) return
    const t = this.ctx.currentTime
    // C5 → E5 → G5, spaced 130ms, long tail
    ;[523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = this.ctx!.createOscillator()
      const env = this.ctx!.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      const st = t + i * 0.13
      env.gain.setValueAtTime(0, st)
      env.gain.linearRampToValueAtTime(0.15, st + 0.02)
      env.gain.exponentialRampToValueAtTime(0.001, st + 2.0)
      osc.connect(env); env.connect(this.sfx!)
      osc.start(st); osc.stop(st + 2.1)
    })
  }

  /** Short soft click (UI, E press) */
  playClick(): void {
    if (!this.ctx || !this.sfx) return
    const t = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const env = this.ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(900, t)
    osc.frequency.exponentialRampToValueAtTime(450, t + 0.06)
    env.gain.setValueAtTime(0.08, t)
    env.gain.exponentialRampToValueAtTime(0.001, t + 0.09)
    osc.connect(env); env.connect(this.sfx)
    osc.start(t); osc.stop(t + 0.11)
  }

  /** Positive chime (reward, achievement) */
  playChime(): void {
    if (!this.ctx || !this.sfx) return
    const t = this.ctx.currentTime
    ;[523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = this.ctx!.createOscillator()
      const env = this.ctx!.createGain()
      osc.type = 'triangle'
      osc.frequency.value = freq
      const st = t + i * 0.08
      env.gain.setValueAtTime(0, st)
      env.gain.linearRampToValueAtTime(0.09, st + 0.01)
      env.gain.exponentialRampToValueAtTime(0.001, st + 0.9)
      osc.connect(env); env.connect(this.sfx!)
      osc.start(st); osc.stop(st + 1.0)
    })
  }

  /** Soft warning blip (disruption, bad choice) */
  playWarning(): void {
    if (!this.ctx || !this.sfx) return
    const t = this.ctx.currentTime
    for (let i = 0; i < 2; i++) {
      const osc = this.ctx.createOscillator()
      const env = this.ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.value = 340 - i * 40
      const st = t + i * 0.18
      env.gain.setValueAtTime(0.07, st)
      env.gain.exponentialRampToValueAtTime(0.001, st + 0.15)
      osc.connect(env); env.connect(this.sfx)
      osc.start(st); osc.stop(st + 0.18)
    }
  }

  /** Very soft pencil-scratch noise */
  playWrite(): void {
    if (!this.ctx || !this.sfx) return
    const sr = this.ctx.sampleRate
    const dur = 0.08
    const buf = this.ctx.createBuffer(1, Math.floor(sr * dur), sr)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) {
      d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) * 0.4
    }
    const src = this.ctx.createBufferSource()
    const filt = this.ctx.createBiquadFilter()
    const env = this.ctx.createGain()
    filt.type = 'bandpass'; filt.frequency.value = 4000; filt.Q.value = 1.2
    env.gain.value = 0.04
    src.buffer = buf
    src.connect(filt); filt.connect(env); env.connect(this.sfx)
    src.start()
  }

  /** Soft "remark" tone when teacher gives warning to student */
  playRemark(): void {
    if (!this.ctx || !this.sfx) return
    const t = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const env = this.ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(440, t)
    osc.frequency.linearRampToValueAtTime(330, t + 0.2)
    env.gain.setValueAtTime(0.07, t)
    env.gain.exponentialRampToValueAtTime(0.001, t + 0.3)
    osc.connect(env); env.connect(this.sfx)
    osc.start(t); osc.stop(t + 0.35)
  }

  /** Ambient classroom — very quiet random pentatonic notes */
  private _startAmbient(): void {
    if (!this.ctx || !this.music) return
    const pentatonic = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25]

    const schedule = () => {
      if (!this.ctx || !this.music) return
      const t = this.ctx.currentTime
      const freq = pentatonic[Math.floor(Math.random() * pentatonic.length)]
      const osc = this.ctx.createOscillator()
      const env = this.ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      const dur = 1.8 + Math.random() * 2.2
      env.gain.setValueAtTime(0, t)
      env.gain.linearRampToValueAtTime(0.08, t + 0.3)
      env.gain.setValueAtTime(0.08, t + dur - 0.4)
      env.gain.linearRampToValueAtTime(0, t + dur)
      osc.connect(env); env.connect(this.music!)
      osc.start(t); osc.stop(t + dur + 0.1)
      // Next note after 60-75% of current note duration
      setTimeout(schedule, (dur * 0.65 + Math.random() * 2) * 1000)
    }
    schedule()
  }

  /** Dramatic fired/game-over sting — descending heavy tones, fades music */
  playGameOver(): void {
    if (!this.ctx || !this.sfx) return
    const t = this.ctx.currentTime
    if (this.music) {
      this.music.gain.setValueAtTime(this.music.gain.value, t)
      this.music.gain.linearRampToValueAtTime(0, t + 1.5)
    }
    ;[440, 330, 220].forEach((freq, i) => {
      const osc = this.ctx!.createOscillator()
      const env = this.ctx!.createGain()
      osc.type = 'sawtooth'
      osc.frequency.value = freq
      const st = t + i * 0.55
      env.gain.setValueAtTime(0, st)
      env.gain.linearRampToValueAtTime(0.22, st + 0.05)
      env.gain.exponentialRampToValueAtTime(0.001, st + 1.2)
      osc.connect(env); env.connect(this.sfx!)
      osc.start(st); osc.stop(st + 1.3)
    })
  }

  setMasterVolume(v: number): void { if (this.master) this.master.gain.value = Math.max(0, Math.min(1, v)) }
  setMusicVolume(v: number): void { if (this.music) this.music.gain.value = Math.max(0, Math.min(1, v)) }
  get ready(): boolean { return this._ready }
}
