import { EventBus } from '../core/EventBus'
import { uiLock, uiUnlock } from './UILock'
import { t } from '../i18n'

const C = {
  bg:     '#0D1117',
  panel:  '#161B22',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  red:    '#FF4D4D',
  text:   '#E6EDF3',
  muted:  '#8B949E',
}

export interface PauseCallbacks {
  onResume(): void
  onSave(): void
  onMainMenu(): void
  onSettings(): void
}

export class PauseMenu {
  private overlay: HTMLElement
  private visible = false
  private cbs: PauseCallbacks | null = null
  private bus = EventBus.getInstance()

  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-pause'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:500; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s; backdrop-filter:blur(6px);
    `
    document.body.appendChild(this.overlay)
    this.buildUI()

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.visible) this.hide()
    })
  }

  private buildUI(): void {
    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:18px;
      padding:36px 44px; min-width:280px; display:flex; flex-direction:column; align-items:center; gap:14px;
    `

    const title = document.createElement('h2')
    title.style.cssText = `margin:0 0 8px; font-size:26px; color:${C.text}; font-weight:900;`
    title.textContent = t('pause.title')
    card.appendChild(title)

    const sep = document.createElement('hr')
    sep.style.cssText = `width:100%; border:none; border-top:1px solid ${C.border}; margin:4px 0 10px;`
    card.appendChild(sep)

    const items: [string, string, () => void][] = [
      [t('pause.resume'), C.mint, () => { this.hide(); this.cbs?.onResume() }],
      [t('pause.save'), '#58A6FF', () => { this.cbs?.onSave() }],
      [t('pause.settings'), C.muted, () => { this.cbs?.onSettings() }],
      [t('pause.menu'), C.red, () => { if (confirm(t('pause.menu_confirm'))) { this.hide(); this.cbs?.onMainMenu() } }],
    ]

    items.forEach(([label, color, action]) => {
      const btn = document.createElement('button')
      btn.textContent = label
      btn.style.cssText = `
        width:100%; padding:12px 20px; border-radius:10px; border:1px solid ${C.border};
        background:${C.panel}; color:${color}; font-family:inherit; font-size:15px;
        font-weight:800; cursor:pointer; text-align:left; transition:all .15s;
      `
      btn.addEventListener('mouseenter', () => { btn.style.background = color + '22'; btn.style.borderColor = color })
      btn.addEventListener('mouseleave', () => { btn.style.background = C.panel; btn.style.borderColor = C.border })
      btn.addEventListener('click', action)
      card.appendChild(btn)
    })

    const versionEl = document.createElement('div')
    versionEl.style.cssText = `margin-top:8px; font-size:11px; color:${C.muted};`
    versionEl.textContent = t('pause.version')
    card.appendChild(versionEl)

    this.overlay.appendChild(card)
  }

  show(cbs: PauseCallbacks): void {
    this.cbs = cbs
    this.visible = true
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  hide(): void {
    this.visible = false
    uiUnlock()
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
  }

  isVisible(): boolean { return this.visible }
  dispose(): void { this.overlay.remove() }
}
