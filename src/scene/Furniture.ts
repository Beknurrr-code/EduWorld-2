import * as THREE from 'three'

const ROWS = 3
const COLS = 5
const COL_SPACING = 2.6
const ROW_SPACING = 2.0
const START_X = -4.8
const START_Z = -1.0

export interface DeskInfo {
  row: number
  col: number
  position: THREE.Vector3
  collider: THREE.Box3
}

function buildDesk(scene: THREE.Scene, x: number, z: number): THREE.Box3 {
  const deskMat = new THREE.MeshStandardMaterial({ color: 0xc8a96e, roughness: 0.8 })
  const legMat  = new THREE.MeshStandardMaterial({ color: 0x8b6340, roughness: 0.7 })
  const chairMat = new THREE.MeshStandardMaterial({ color: 0x2a4a7f, roughness: 0.7 })

  // Desk surface
  const surface = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.7), deskMat)
  surface.position.set(x, 0.76, z)
  surface.castShadow = true; surface.receiveShadow = true
  scene.add(surface)

  // Legs
  const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.74, 6)
  const offsets = [[-0.45, -0.28], [0.45, -0.28], [-0.45, 0.28], [0.45, 0.28]]
  for (const [lx, lz] of offsets) {
    const leg = new THREE.Mesh(legGeo, legMat)
    leg.position.set(x + lx, 0.39, z + lz)
    scene.add(leg)
  }

  // Chair seat
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.5), chairMat)
  seat.position.set(x, 0.46, z + 0.62)
  scene.add(seat)
  // Chair back
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.38, 0.05), chairMat)
  back.position.set(x, 0.67, z + 0.86)
  scene.add(back)
  // Chair legs
  const cLegGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.44, 6)
  for (const [lx, lz2] of [[-0.2, 0.42], [0.2, 0.42], [-0.2, 0.82], [0.2, 0.82]]) {
    const cl = new THREE.Mesh(cLegGeo, legMat)
    cl.position.set(x + lx, 0.24, z + lz2)
    scene.add(cl)
  }

  // Desk items: notebook + pencil
  const nbMat = new THREE.MeshStandardMaterial({ color: 0xf5f5dc, roughness: 0.9 })
  const nb = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.01, 0.28), nbMat)
  nb.position.set(x - 0.1, 0.795, z - 0.05)
  scene.add(nb)

  const pencilMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.6 })
  const pencil = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.22, 6), pencilMat)
  pencil.rotation.z = Math.PI / 2
  pencil.position.set(x + 0.28, 0.798, z - 0.05)
  scene.add(pencil)

  return new THREE.Box3(
    new THREE.Vector3(x - 0.6, 0, z - 0.42),
    new THREE.Vector3(x + 0.6, 1.0, z + 0.95),
  )
}

export function buildDeskGrid(scene: THREE.Scene, offX = 0, offZ = 0): DeskInfo[] {
  const desks: DeskInfo[] = []
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const x = START_X + col * COL_SPACING + offX
      const z = START_Z + row * ROW_SPACING + offZ
      const collider = buildDesk(scene, x, z)
      desks.push({
        row, col,
        position: new THREE.Vector3(x, 0, z),
        collider,
      })
    }
  }
  return desks
}

export function buildTeacherDesk(scene: THREE.Scene, x = -7.5, z = -3.5): THREE.Box3 {
  const deskMat = new THREE.MeshStandardMaterial({ color: 0xa0522d, roughness: 0.7 })
  const legMat  = new THREE.MeshStandardMaterial({ color: 0x6b3a1f, roughness: 0.7 })

  // Surface
  const surf = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.07, 0.8), deskMat)
  surf.position.set(x, 0.80, z)
  surf.castShadow = true; surf.receiveShadow = true
  scene.add(surf)

  // Legs
  const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.78, 8)
  for (const [lx, lz] of [[-0.68, -0.34], [0.68, -0.34], [-0.68, 0.34], [0.68, 0.34]]) {
    const leg = new THREE.Mesh(legGeo, legMat)
    leg.position.set(x + lx, 0.41, z + lz)
    scene.add(leg)
  }

  // Chair
  const chairMat = new THREE.MeshStandardMaterial({ color: 0x8b1a1a, roughness: 0.7 })
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.06, 0.55), chairMat)
  seat.position.set(x, 0.50, z + 0.72)
  scene.add(seat)
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.40, 0.06), chairMat)
  back.position.set(x, 0.73, z + 0.98)
  scene.add(back)

  return new THREE.Box3(
    new THREE.Vector3(x - 0.9, 0, z - 0.5),
    new THREE.Vector3(x + 0.9, 1.1, z + 1.1),
  )
}
