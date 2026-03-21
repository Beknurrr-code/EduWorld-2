import * as THREE from 'three'

export type StudentType = 'genius' | 'lazy' | 'bully' | 'anxious' | 'helper' | 'average'

/** Per-type appearance: hair color, eye color, skin tone */
const TYPE_LOOK: Record<StudentType, { hair: number; eye: number; skin: number; uniform: number }> = {
  genius:  { hair: 0x1a1a2e, eye: 0x4a90d9, skin: 0xf5c5a3, uniform: 0x2a4a9f },
  lazy:    { hair: 0x3d2b1a, eye: 0x7a7a7a, skin: 0xf0d0b0, uniform: 0x2a4a9f },
  bully:   { hair: 0x8b0000, eye: 0xcc2200, skin: 0xe8b090, uniform: 0x2a4a9f },
  anxious: { hair: 0x4a3060, eye: 0x9b59b6, skin: 0xfcd9c0, uniform: 0x2a4a9f },
  helper:  { hair: 0x7b4f28, eye: 0x27ae60, skin: 0xf5c5a3, uniform: 0x2a4a9f },
  average: { hair: 0x2d2d2d, eye: 0x555566, skin: 0xf5c5a3, uniform: 0x2a4a9f },
}

/** 3-step gradient map for MeshToonMaterial cel-shading */
function makeGradientMap(): THREE.DataTexture {
  // Three brightness steps: shadow / mid / highlight
  const data = new Uint8Array([80, 160, 230])
  const tex = new THREE.DataTexture(data, 3, 1, THREE.RedFormat)
  tex.minFilter = tex.magFilter = THREE.NearestFilter
  tex.needsUpdate = true
  return tex
}

function toon(color: number, gradientMap: THREE.DataTexture): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({ color, gradientMap })
}

function outline(mesh: THREE.Mesh, scale = 1.07): THREE.Mesh {
  const outMat = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.BackSide })
  const outMesh = new THREE.Mesh(mesh.geometry, outMat)
  outMesh.scale.setScalar(scale)
  return outMesh
}

function addWithOutline(group: THREE.Group, mesh: THREE.Mesh, outlineScale = 1.07): void {
  group.add(mesh)
  group.add(outline(mesh, outlineScale))
}

/** Builds a low-poly anime-style student as a Group.
 *  Total height ≈ 1.55. Head is 30% of height.
 */
export function buildStudentMesh(type: StudentType): THREE.Group {
  const group = new THREE.Group()
  const gm = makeGradientMap()
  const look = TYPE_LOOK[type]

  const skinMat    = toon(look.skin, gm)
  const hairMat    = toon(look.hair, gm)
  const uniformMat = toon(look.uniform, gm)
  const pantsMat   = toon(0x1e2a3a, gm)
  const shirtMat   = toon(0xf0f0f0, gm)
  const shoeMat    = toon(0x1a1a1a, gm)

  // ── TORSO ────────────────────────────────────────────────────────────────
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.60, 0.28), uniformMat)
  torso.position.set(0, 0.72, 0)
  torso.castShadow = true
  addWithOutline(group, torso)

  // Shirt collar (white strip at top of torso)
  const collar = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.14, 0.30), shirtMat)
  collar.position.set(0, 0.95, 0.01)
  group.add(collar)

  // ── NECK ─────────────────────────────────────────────────────────────────
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.10, 0.14, 8), skinMat)
  neck.position.set(0, 1.06, 0)
  group.add(neck)

  // ── HEAD ─────────────────────────────────────────────────────────────────
  const headGeo = new THREE.BoxGeometry(0.44, 0.44, 0.38)  // slightly boxy for anime
  const head = new THREE.Mesh(headGeo, skinMat)
  head.position.set(0, 1.37, 0)
  head.castShadow = true
  addWithOutline(group, head, 1.055)

  // Glasses for genius and anxious types
  if (type === 'genius' || type === 'anxious') {
    const gm2 = new THREE.MeshBasicMaterial({ color: 0x222222 })
    const lensGeo = new THREE.BoxGeometry(0.13, 0.09, 0.02)
    const ll = new THREE.Mesh(lensGeo, gm2); ll.position.set(-0.12, 1.375, 0.205); group.add(ll)
    const rl = new THREE.Mesh(lensGeo, gm2); rl.position.set(0.12, 1.375, 0.205); group.add(rl)
    const br = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.015, 0.01), gm2)
    br.position.set(0, 1.375, 0.208); group.add(br)
  }

  // ── EYES (canvas sprite for large anime pupils) ───────────────────────
  const eyeCanvas = document.createElement('canvas')
  eyeCanvas.width = 64; eyeCanvas.height = 40
  const ec = eyeCanvas.getContext('2d')!
  // eye white
  ec.fillStyle = '#fff'
  for (const ex of [8, 36]) {
    ec.beginPath(); ec.ellipse(ex + 12, 20, 14, 12, 0, 0, Math.PI * 2); ec.fill()
  }
  // iris
  ec.fillStyle = `#${look.eye.toString(16).padStart(6, '0')}`
  for (const ex of [8, 36]) {
    ec.beginPath(); ec.ellipse(ex + 12, 20, 10, 10, 0, 0, Math.PI * 2); ec.fill()
  }
  // pupil
  ec.fillStyle = '#111'
  for (const ex of [8, 36]) {
    ec.beginPath(); ec.ellipse(ex + 12, 22, 6, 7, 0, 0, Math.PI * 2); ec.fill()
  }
  // highlight dot
  ec.fillStyle = '#fff'
  for (const ex of [8, 36]) {
    ec.beginPath(); ec.arc(ex + 16, 16, 3, 0, Math.PI * 2); ec.fill()
  }
  const eyeTex = new THREE.CanvasTexture(eyeCanvas)
  const eyeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.36, 0.12),
    new THREE.MeshBasicMaterial({ map: eyeTex, transparent: true }),
  )
  eyeMesh.position.set(0, 1.38, 0.195)
  group.add(eyeMesh)

  // ── HAIR BLOCKS (anime block style) ──────────────────────────────────────
  // Top layer
  const hairTop = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.14, 0.42), hairMat)
  hairTop.position.set(0, 1.63, 0)
  addWithOutline(group, hairTop, 1.04)
  // Side bangs
  const bangL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.38), hairMat)
  bangL.rotation.z = 0.15
  bangL.position.set(-0.26, 1.46, 0)
  group.add(bangL)
  const bangR = bangL.clone()
  bangR.rotation.z = -0.15
  bangR.position.set(0.26, 1.46, 0)
  group.add(bangR)
  // Front fringe
  const fringe = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 0.08), hairMat)
  fringe.position.set(0, 1.55, 0.20)
  group.add(fringe)
  // Back hair
  const backHair = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.34, 0.08), hairMat)
  backHair.position.set(0, 1.46, -0.22)
  group.add(backHair)

  // ── ARMS ─────────────────────────────────────────────────────────────────
  const armGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.55, 8)
  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(armGeo, uniformMat)
    arm.rotation.z = side * 0.18
    arm.position.set(side * 0.33, 0.62, 0)
    arm.castShadow = true
    addWithOutline(group, arm, 1.08)

    // Hand (sphere)
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), skinMat)
    hand.position.set(side * 0.37, 0.31, 0)
    group.add(hand)
  }

  // ── LEGS ──────────────────────────────────────────────────────────────────
  const legGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.58, 8)
  for (const side of [-1, 1]) {
    const leg = new THREE.Mesh(legGeo, pantsMat)
    leg.position.set(side * 0.14, 0.13, 0)
    leg.castShadow = true
    addWithOutline(group, leg, 1.08)

    // Shoe
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.10, 0.24), shoeMat)
    shoe.position.set(side * 0.14, -0.17, 0.04)
    group.add(shoe)
  }

  // Type-specific scale variations
  if (type === 'bully') group.scale.set(1.1, 1.05, 1.1)
  if (type === 'lazy')  group.scale.set(0.97, 0.97, 0.97)

  return group
}

/** Emotion icon drawn above the student's head */
export function buildEmotionSprite(): THREE.Sprite {
  const canvas = document.createElement('canvas')
  canvas.width = 64; canvas.height = 32
  const tex = new THREE.CanvasTexture(canvas)
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(0.8, 0.4, 1)
  sprite.position.set(0, 1.95, 0)
  return sprite
}

export function updateEmotionSprite(sprite: THREE.Sprite, icon: string): void {
  const mat = sprite.material as THREE.SpriteMaterial
  const tex = mat.map as THREE.CanvasTexture
  const canvas = tex.image as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, 64, 32)
  if (icon) {
    // bubble
    ctx.fillStyle = 'rgba(0,0,0,0.55)'
    ctx.beginPath()
    ctx.roundRect(4, 2, 56, 28, 8)
    ctx.fill()
    ctx.font = '20px serif'
    ctx.textAlign = 'center'
    ctx.fillText(icon, 32, 23)
  }
  tex.needsUpdate = true
}
