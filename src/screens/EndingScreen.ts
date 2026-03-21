import { uiLock } from '../ui/UILock'
import { t } from '../i18n/index'

export interface EndingStats {
  teacherName: string
  subject: string
  totalWeeks: number
  totalStudents: number
  avgGrade: number
  totalEarned: number
  reputation: number
  schoolRating: number
  careerPath: string[]
}

export class EndingScreen {
  private el: HTMLElement | null = null

  show(stats: EndingStats, onNewGame: () => void): void {
    uiLock()
    if (this.el) this.el.remove()

    this._addStyles()

    const el = document.createElement('div')
    el.id = 'ending-screen'
    el.style.cssText = `
      position:fixed;inset:0;z-index:10000;
      background:radial-gradient(ellipse at center, #0a0f1e 0%, #060810 100%);
      font-family:'Segoe UI',sans-serif;overflow-y:auto;
    `

    el.innerHTML = `
      <!-- Animated starfield background -->
      <canvas id="ending-stars" style="position:fixed;inset:0;pointer-events:none;z-index:0;"></canvas>

      <!-- Confetti layer -->
      <div id="confetti-layer" style="position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden;"></div>

      <!-- Content -->
      <div style="position:relative;z-index:2;max-width:800px;margin:0 auto;padding:48px 24px 60px;">

        <!-- Gold glow header -->
        <div style="text-align:center;margin-bottom:48px;animation:ending_rise 1s ease-out;">
          <div style="font-size:64px;margin-bottom:12px;filter:drop-shadow(0 0 24px #FFD700);">🏆</div>
          <div style="font-size:13px;letter-spacing:4px;color:#a08040;text-transform:uppercase;margin-bottom:8px;
            animation:ending_fadeIn 1.5s ease-out;">
            ${t('ending.history')}
          </div>
          <h1 style="font-size:42px;font-weight:900;margin:0;
            background:linear-gradient(135deg,#FFD700,#FFF0A0,#FFD700);
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
            text-shadow:0 0 40px rgba(255,215,0,0.3);
            animation:ending_rise 1.2s ease-out;">
            ${t('ending.school_year')}
          </h1>
          <div style="font-size:18px;color:#d0c080;margin-top:10px;
            animation:ending_fadeIn 2s ease-out;">
            ${stats.teacherName} — ${stats.subject} ${t('ending.teacher_of')}
          </div>
        </div>

        <!-- Certificate card -->
        <div style="
          background:linear-gradient(135deg,#1a1a0a 0%,#2a2a10 50%,#1a1a0a 100%);
          border:2px solid #8a7020;
          border-radius:20px;padding:40px 48px;margin-bottom:36px;
          box-shadow:0 0 60px rgba(255,215,0,0.15),inset 0 0 40px rgba(255,215,0,0.05);
          position:relative;overflow:hidden;
          animation:ending_rise 1.4s ease-out;
        ">
          <!-- Corner ornaments -->
          <div style="position:absolute;top:10px;left:10px;font-size:20px;opacity:.4;">✦</div>
          <div style="position:absolute;top:10px;right:10px;font-size:20px;opacity:.4;">✦</div>
          <div style="position:absolute;bottom:10px;left:10px;font-size:20px;opacity:.4;">✦</div>
          <div style="position:absolute;bottom:10px;right:10px;font-size:20px;opacity:.4;">✦</div>

          <div style="text-align:center;margin-bottom:28px;">
            <div style="font-size:11px;letter-spacing:3px;color:#a08030;text-transform:uppercase;margin-bottom:8px;">
              ${t('ending.ministry')}
            </div>
            <div style="font-size:28px;font-weight:800;color:#FFD700;margin-bottom:4px;">
              ${t('ending.certificate')}
            </div>
            <div style="font-size:15px;color:#c0a060;">
              ${stats.teacherName} · ${t('ending.school')}
            </div>
          </div>

          <div style="border-top:1px solid #5a4a10;border-bottom:1px solid #5a4a10;padding:20px 0;margin-bottom:24px;
            display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;">
            <div>
              <div style="font-size:32px;font-weight:900;color:#FFD700;">${stats.totalWeeks}</div>
              <div style="font-size:12px;color:#8a7030;">${t('ending.weeks_work')}</div>
            </div>
            <div>
              <div style="font-size:32px;font-weight:900;color:#4FFFB0;">${stats.totalStudents}</div>
              <div style="font-size:12px;color:#4a8a60;">${t('ending.students_taught')}</div>
            </div>
            <div>
              <div style="font-size:32px;font-weight:900;color:#58A6FF;">${stats.avgGrade.toFixed(1)}</div>
              <div style="font-size:12px;color:#3a6a9a;">${t('ending.avg_score')}</div>
            </div>
          </div>

          <div style="text-align:center;">
            <div style="font-size:13px;color:#8a7030;margin-bottom:8px;">${t('ending.school_rating')}</div>
            <div style="font-size:28px;color:#FFD700;letter-spacing:4px;">
              ${'★'.repeat(Math.min(5, Math.ceil(stats.schoolRating)))}${'☆'.repeat(Math.max(0, 5 - Math.ceil(stats.schoolRating)))}
            </div>
          </div>
        </div>

        <!-- Stats grid -->
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:36px;
          animation:ending_rise 1.6s ease-out;">
          ${this._statCard('💰', t('ending.total_earned'), stats.totalEarned.toLocaleString('ru') + ' ₸', '#FFD700')}
          ${this._statCard('⭐', t('ending.reputation'), stats.reputation.toString(), '#58A6FF')}
          ${this._statCard('📚', t('ending.subject'), stats.subject, '#4FFFB0')}
          ${this._statCard('🏆', t('ending.career_path'), stats.careerPath[stats.careerPath.length - 1] || t('career.director'), '#c080ff')}
        </div>

        <!-- Career timeline -->
        <div style="
          background:#0f1828;border-radius:14px;padding:24px 28px;margin-bottom:36px;
          border:1px solid #1e3040;animation:ending_rise 1.8s ease-out;
        ">
          <div style="font-size:13px;color:#4a8cc0;font-weight:700;margin-bottom:16px;letter-spacing:1px;text-transform:uppercase;">
            ${t('ending.career_title')}
          </div>
          <div style="display:flex;align-items:center;gap:0;overflow-x:auto;padding-bottom:4px;">
            ${stats.careerPath.map((rank, i) => `
              <div style="display:flex;align-items:center;flex-shrink:0;">
                <div style="
                  background:${i === stats.careerPath.length - 1 ? 'linear-gradient(135deg,#4a2a8a,#7040c0)' : '#1a2a3a'};
                  border:1px solid ${i === stats.careerPath.length - 1 ? '#8060d0' : '#2a3a4a'};
                  border-radius:8px;padding:8px 14px;font-size:13px;font-weight:600;
                  color:${i === stats.careerPath.length - 1 ? '#c0a0ff' : '#6a9ab8'};
                  white-space:nowrap;
                ">
                  ${EndingScreen._rankLabel(rank)}
                </div>
                ${i < stats.careerPath.length - 1 ? '<div style="width:24px;height:2px;background:#2a3a4a;margin:0 2px;flex-shrink:0;"></div>' : ''}
              </div>`).join('')}
          </div>
        </div>

        <!-- Message -->
        <div style="
          text-align:center;margin-bottom:40px;
          animation:ending_fadeIn 2.5s ease-out;
        ">
          <div style="font-size:18px;color:#d0d8e8;line-height:1.7;max-width:580px;margin:0 auto;">
            ${EndingScreen._getMessage(stats)}
          </div>
        </div>

        <!-- Buttons -->
        <div style="display:flex;gap:16px;justify-content:center;animation:ending_rise 2s ease-out;">
          <button id="ending-continue"
            style="padding:16px 36px;border:none;border-radius:12px;cursor:pointer;
              background:linear-gradient(135deg,#1a4a2a,#2a7a40);
              color:#80ffb0;font-size:16px;font-weight:700;
              border:1px solid #3a8a50;
              box-shadow:0 4px 24px rgba(50,180,80,.3);
              transition:filter .15s;">
            ▶ ${t('ending.continue')}
          </button>
          <button id="ending-newgame"
            style="padding:16px 36px;border:none;border-radius:12px;cursor:pointer;
              background:linear-gradient(135deg,#1a1a4a,#2a2a7a);
              color:#a0a0ff;font-size:16px;font-weight:700;
              border:1px solid #3a3a8a;
              box-shadow:0 4px 24px rgba(60,60,180,.3);
              transition:filter .15s;">
            🔄 ${t('ending.new_game')}
          </button>
        </div>

      </div>
    `

    ;['#ending-continue', '#ending-newgame'].forEach(sel => {
      const btn = el.querySelector(sel) as HTMLButtonElement
      btn?.addEventListener('mouseenter', () => { btn.style.filter = 'brightness(1.25)' })
      btn?.addEventListener('mouseleave', () => { btn.style.filter = '' })
    })

    el.querySelector('#ending-continue')?.addEventListener('click', () => {
      el.remove()
      this.el = null
    })
    el.querySelector('#ending-newgame')?.addEventListener('click', () => {
      el.remove()
      this.el = null
      onNewGame()
    })

    document.body.appendChild(el)
    this.el = el

    // Start animations after mount
    requestAnimationFrame(() => {
      this._startStarfield()
      this._spawnConfetti()
    })
  }

  private _statCard(icon: string, label: string, value: string, color: string): string {
    return `
      <div style="
        background:#0f1828;border:1px solid #1e3040;border-radius:12px;
        padding:20px 22px;display:flex;align-items:center;gap:14px;
      ">
        <span style="font-size:28px;">${icon}</span>
        <div>
          <div style="font-size:12px;color:#4a7890;margin-bottom:4px;">${label}</div>
          <div style="font-size:18px;font-weight:800;color:${color};">${value}</div>
        </div>
      </div>`
  }

  private static _rankLabel(rankId: string): string {
    const map: Record<string, string> = {
      novice: t('career.novice'),
      cat2: t('career.cat2'),
      cat1: t('career.cat1'),
      highest: t('career.highest'),
      honored: t('career.honored'),
      zavuch: t('career.zavuch'),
      director: t('career.director'),
    }
    return map[rankId] ?? rankId
  }

  private static _getMessage(stats: EndingStats): string {
    if (stats.schoolRating >= 4.5) {
      return t('ending.best_school').replace('${stats.totalStudents}', stats.totalStudents.toString())
    }
    if (stats.reputation >= 150) {
      return t('ending.reputation_spread')
    }
    return t('ending.year_worked').replace('${stats.totalWeeks}', stats.totalWeeks.toString())
  }

  private _startStarfield(): void {
    const canvas = this.el?.querySelector('#ending-stars') as HTMLCanvasElement | null
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')!

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
    }))

    let running = true
    const animate = () => {
      if (!running || !this.el) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.alpha += s.speed
        const a = Math.abs(Math.sin(s.alpha))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,220,255,${a * 0.8})`
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()
  }

  private _spawnConfetti(): void {
    const layer = this.el?.querySelector('#confetti-layer')
    if (!layer) return

    const colors = ['#FFD700', '#FF6B6B', '#4FFFB0', '#58A6FF', '#c080ff', '#ff98d0', '#fff']
    const shapes = ['■', '●', '▲', '★', '♦']

    for (let i = 0; i < 80; i++) {
      setTimeout(() => {
        if (!this.el) return
        const el = document.createElement('div')
        const color = colors[Math.floor(Math.random() * colors.length)]
        const shape = shapes[Math.floor(Math.random() * shapes.length)]
        const xStart = Math.random() * 100
        const duration = 2000 + Math.random() * 3000
        const size = 10 + Math.random() * 16

        el.textContent = shape
        el.style.cssText = `
          position:absolute;left:${xStart}%;top:-40px;
          font-size:${size}px;color:${color};
          animation:confetti_fall ${duration}ms linear forwards;
          pointer-events:none;
        `
        layer.appendChild(el)
        setTimeout(() => el.remove(), duration + 100)
      }, i * 120)
    }
  }

  private _addStyles(): void {
    if (document.getElementById('ending-screen-style')) return
    const s = document.createElement('style')
    s.id = 'ending-screen-style'
    s.textContent = `
      @keyframes ending_rise {
        from { opacity:0; transform:translateY(30px); }
        to   { opacity:1; transform:none; }
      }
      @keyframes ending_fadeIn {
        from { opacity:0; }
        to   { opacity:1; }
      }
      @keyframes confetti_fall {
        0%   { transform:translateY(0) rotate(0deg); opacity:1; }
        80%  { opacity:1; }
        100% { transform:translateY(110vh) rotate(${Math.random() > .5 ? '' : '-'}${Math.floor(Math.random() * 720)}deg); opacity:0; }
      }
    `
    document.head.appendChild(s)
  }

  isVisible(): boolean { return this.el !== null }

  hide(): void {
    this.el?.remove()
    this.el = null
  }
}
