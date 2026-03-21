import { SkillTree, PERKS } from '../systems/SkillTree'
import { uiLock, uiUnlock } from '../ui/UILock'
import { t } from '../i18n'

const C = {
  bg:     '#060a14',
  panel:  '#0D1117',
  border: '#30363D',
  mint:   '#4FFFB0',
  gold:   '#FFD700',
  blue:   '#58A6FF',
  purple: '#BC8CFF',
  text:   '#E6EDF3',
  muted:  '#8B949E',
  locked: '#30363D',
}

const BRANCH_COLORS: Record<string, string> = {
  pedagogy:   C.mint,
  psychology: C.purple,
  org:        C.gold,
}

export class SkillTreeScreen {
  private overlay: HTMLElement
  private tree: SkillTree
  private skillPoints = 0
  private onClose: (() => void) | null = null

  constructor(tree: SkillTree) {
    this.tree = tree
    this.overlay = document.createElement('div')
    this.overlay.id = 'ew2-skilltree'
    this.overlay.style.cssText = `
      position:fixed; inset:0; background:#000000cc; display:flex; align-items:center;
      justify-content:center; z-index:700; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .25s; backdrop-filter:blur(6px);
      overflow-y:auto; padding:20px;
    `
    document.body.appendChild(this.overlay)
  }

  open(skillPoints: number, onClose: () => void): void {
    this.skillPoints = skillPoints
    this.onClose = onClose
    this.render()
    this.overlay.style.opacity = '1'
    this.overlay.style.pointerEvents = 'auto'
    uiLock()
  }

  private render(): void {
    this.overlay.innerHTML = ''
    const card = document.createElement('div')
    card.style.cssText = `
      background:${C.bg}; border:1px solid ${C.border}; border-radius:18px;
      padding:30px 36px; width:740px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `

    // Header
    const hdr = document.createElement('div')
    hdr.style.cssText = `display:flex; align-items:center; justify-content:space-between;`
    hdr.innerHTML = `
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:900; color:${C.text};">${t('skills.title')}</h2>
        <div style="font-size:13px; color:${C.muted}; margin-top:3px;">${t('skills.points')} <span style="color:${C.gold}; font-weight:800;">${this.skillPoints}</span></div>
      </div>
    `
    const closeBtn = document.createElement('button')
    closeBtn.textContent = '✕'
    closeBtn.style.cssText = `width:34px; height:34px; border-radius:8px; border:1px solid ${C.border}; background:${C.panel}; color:${C.text}; cursor:pointer; font-size:16px;`
    closeBtn.addEventListener('click', () => { this.hide(); this.onClose?.() })
    hdr.appendChild(closeBtn)
    card.appendChild(hdr)

    // Branches
    const perks = PERKS
    const branches: Record<string, typeof perks> = {}
    perks.forEach(p => {
      if (!branches[p.branch]) branches[p.branch] = []
      branches[p.branch].push(p)
    })

    const branchLabels: Record<string, string> = {
      pedagogy:   t('skills.branch.pedagogy'),
      psychology: t('skills.branch.psychology'),
      org:        t('skills.branch.org'),
    }

    const branchesDiv = document.createElement('div')
    branchesDiv.style.cssText = `display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;`

    Object.entries(branches).forEach(([branch, bPerks]) => {
      const col = document.createElement('div')
      col.style.cssText = `display:flex; flex-direction:column; gap:8px;`

      const branchLabel = document.createElement('div')
      branchLabel.style.cssText = `font-size:13px; font-weight:800; color:${BRANCH_COLORS[branch] ?? C.mint}; padding-bottom:4px; border-bottom:1px solid ${C.border};`
      branchLabel.textContent = branchLabels[branch] ?? branch
      col.appendChild(branchLabel)

      bPerks.forEach(perk => {
        const unlocked = this.tree.has(perk.id)
        const canUnlock = !unlocked && this.tree.canUnlock(perk.id)
        const color = BRANCH_COLORS[branch] ?? C.mint

        const perkBtn = document.createElement('button')
        perkBtn.style.cssText = `
          padding:10px 12px; border-radius:8px; text-align:left; cursor:${canUnlock && !unlocked ? 'pointer' : 'default'};
          border:1px solid ${unlocked ? color : C.border};
          background:${unlocked ? color + '18' : canUnlock ? C.panel : '#0a0d12'};
          transition:all .15s; width:100%;
          opacity:${!unlocked && !canUnlock ? '0.5' : '1'};
        `
        perkBtn.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span style="font-size:18px;">${perk.icon}</span>
            <span style="font-weight:800; font-size:13px; color:${unlocked ? color : C.text};">${perk.name}</span>
            ${unlocked ? `<span style="margin-left:auto; color:${color}; font-size:12px;">✓</span>` : `<span style="margin-left:auto; color:${C.muted}; font-size:12px;">${perk.cost} SP</span>`}
          </div>
          <div style="font-size:11px; color:${C.muted}; line-height:1.4;">${perk.desc}</div>
        `

        if (canUnlock && !unlocked) {
          perkBtn.addEventListener('mouseenter', () => { perkBtn.style.borderColor = color; perkBtn.style.background = color + '22' })
          perkBtn.addEventListener('mouseleave', () => { perkBtn.style.borderColor = C.border; perkBtn.style.background = C.panel })
          perkBtn.addEventListener('click', () => {
            this.tree.unlock(perk.id)
            this.skillPoints = this.tree.points
            this.render()
          })
        }
        col.appendChild(perkBtn)
      })
      branchesDiv.appendChild(col)
    })
    card.appendChild(branchesDiv)
    this.overlay.appendChild(card)
  }

  hide(): void {
    uiUnlock()
    this.overlay.style.opacity = '0'
    this.overlay.style.pointerEvents = 'none'
  }

  dispose(): void { this.overlay.remove() }
}
