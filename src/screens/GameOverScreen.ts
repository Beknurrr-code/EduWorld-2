/**
 * GameOverScreen — shown when the teacher is fired or resigns.
 * Displays reason and a restart button.
 */
export type FireReason =
  | 'reputation'     // Reputation collapsed (< 10)
  | 'bad_grades'     // 3 consecutive failed exams (avg < 2.8)
  | 'violation'      // Grade manipulation / misconduct

const REASON_TEXT: Record<FireReason, { icon: string; title: string; body: string }> = {
  reputation: {
    icon: '📉',
    title: 'You were fired',
    body: 'Your reputation dropped to a critical level. The director decided to let you go. Parents and administration have lost trust in you.',
  },
  bad_grades: {
    icon: '📝',
    title: 'You were dismissed',
    body: 'The class average grade stayed below 3.0 for three consecutive weeks. The education quality board demanded a replacement.',
  },
  violation: {
    icon: '⚠️',
    title: 'Misconduct',
    body: 'Systematic grade manipulation was recorded. The dismissal order was signed by the director.',
  },
}

export class GameOverScreen {
  private el: HTMLElement | null = null
  private onRestartCb: (() => void) | null = null

  show(reason: FireReason, stats: { weeks: number; reputation: number; avgGrade: string }, onRestart: () => void): void {
    this.onRestartCb = onRestart
    if (this.el) this.el.remove()

    const info = REASON_TEXT[reason]

    this.el = document.createElement('div')
    this.el.style.cssText = `
      position:fixed;inset:0;z-index:9999;
      background:rgba(0,0,0,.92);
      display:flex;align-items:center;justify-content:center;
      font-family:'Segoe UI',Nunito,sans-serif;
      animation:ew2_go_fade .6s ease;
    `

    this.el.innerHTML = `
      <style>
        @keyframes ew2_go_fade { from { opacity:0; transform:scale(.94); } to { opacity:1; transform:none; } }
        @keyframes ew2_go_shake { 0%,100% { transform:translateX(0); } 20%,60% { transform:translateX(-6px); } 40%,80% { transform:translateX(6px); } }
        #ew2-go-box { animation: ew2_go_shake .5s .3s ease both; }
      </style>
      <div id="ew2-go-box" style="
        background:linear-gradient(160deg,#1a0a0a,#1a1018);
        border:1px solid #5a1a1a;
        border-radius:18px;
        padding:52px 58px;
        max-width:500px;width:90%;
        text-align:center;
        box-shadow:0 0 60px rgba(180,30,30,.35);
        color:#e0d0d0;
      ">
        <div style="font-size:62px;margin-bottom:12px;">${info.icon}</div>
        <div style="font-size:28px;font-weight:800;color:#ff6060;margin-bottom:12px;">${info.title}</div>
        <div style="font-size:15px;color:#c0a0a0;line-height:1.6;margin-bottom:28px;">${info.body}</div>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:32px;">
          <div style="background:#2a1010;border:1px solid #4a2020;border-radius:10px;padding:14px 10px;">
            <div style="font-size:11px;color:#905050;margin-bottom:4px;">WEEKS</div>
            <div style="font-size:22px;font-weight:700;color:#e08080;">${stats.weeks}</div>
          </div>
          <div style="background:#2a1010;border:1px solid #4a2020;border-radius:10px;padding:14px 10px;">
            <div style="font-size:11px;color:#905050;margin-bottom:4px;">REPUTATION</div>
            <div style="font-size:22px;font-weight:700;color:#e08080;">${stats.reputation}</div>
          </div>
          <div style="background:#2a1010;border:1px solid #4a2020;border-radius:10px;padding:14px 10px;">
            <div style="font-size:11px;color:#905050;margin-bottom:4px;">AVG GRADE</div>
            <div style="font-size:22px;font-weight:700;color:#e08080;">${stats.avgGrade}</div>
          </div>
        </div>

        <button id="ew2-go-restart" style="
          padding:14px 44px;border:none;border-radius:12px;cursor:pointer;
          background:linear-gradient(135deg,#7a1a1a,#aa2a2a);
          color:#fff;font-size:17px;font-weight:700;
          transition:opacity .15s;
          font-family:'Segoe UI',sans-serif;
        " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
          🔄 Restart
        </button>
      </div>
    `

    this.el.querySelector('#ew2-go-restart')!.addEventListener('click', () => {
      this.hide()
      this.onRestartCb?.()
    })

    document.body.appendChild(this.el)
  }

  hide(): void {
    this.el?.remove()
    this.el = null
  }
}
