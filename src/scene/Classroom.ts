import * as THREE from 'three'
import { Blackboard } from './Blackboard'
import { buildDeskGrid, buildTeacherDesk, DeskInfo } from './Furniture'

const W = 18   // room width  x: -9..9
const D = 12   // room depth  z: -6..6
const H = 3.6  // room height

export class Classroom {
  readonly scene: THREE.Scene
  readonly blackboard: Blackboard
  readonly deskInfos: DeskInfo[]
  readonly colliders: THREE.Box3[] = []

  constructor() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x87b5d4)
    this.scene.fog = new THREE.Fog(0x87b5d4, 12, 30)

    this._buildRoom()
    this._buildLighting()
    this.blackboard = new Blackboard(this.scene)
    this.deskInfos = buildDeskGrid(this.scene)
    const teacherDeskBox = buildTeacherDesk(this.scene)

    // Register colliders
    this.colliders.push(teacherDeskBox)
    for (const d of this.deskInfos) this.colliders.push(d.collider)
  }

  private _buildRoom(): void {
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xb8956a, roughness: 0.85 })
    const wallMat  = new THREE.MeshStandardMaterial({ color: 0xe8e0d0, roughness: 0.9 })
    const ceilMat  = new THREE.MeshStandardMaterial({ color: 0xf4f0e8, roughness: 0.95 })

    // Floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    this.scene.add(floor)

    // Ceiling
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), ceilMat)
    ceil.rotation.x = Math.PI / 2
    ceil.position.y = H
    this.scene.add(ceil)

    // Front wall (blackboard wall)
    const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshStandardMaterial({ color: 0xd4c8b0, roughness: 0.9 }))
    frontWall.position.set(0, H / 2, -D / 2)
    frontWall.receiveShadow = true
    this.scene.add(frontWall)

    // Back wall (door wall)
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(W, H), wallMat)
    backWall.rotation.y = Math.PI
    backWall.position.set(0, H / 2, D / 2)
    this.scene.add(backWall)

    // Left wall (windows)
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(D, H), wallMat)
    leftWall.rotation.y = Math.PI / 2
    leftWall.position.set(-W / 2, H / 2, 0)
    this.scene.add(leftWall)
    this._buildWindows()

    // Right wall
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(D, H), wallMat)
    rightWall.rotation.y = -Math.PI / 2
    rightWall.position.set(W / 2, H / 2, 0)
    this.scene.add(rightWall)

    // Baseboard (skirting) front
    const sbMat = new THREE.MeshStandardMaterial({ color: 0x8a7460, roughness: 0.8 })
    ;[
      new THREE.Vector3(0, 0.05, -D / 2 + 0.02),
      new THREE.Vector3(0, 0.05, D / 2 - 0.02),
    ].forEach((pos, i) => {
      const sb = new THREE.Mesh(new THREE.BoxGeometry(W, 0.1, 0.04), sbMat)
      sb.position.copy(pos)
      if (i === 1) sb.rotation.y = Math.PI
      this.scene.add(sb)
    })

    // Door on back wall
    this._buildDoor()
  }

  private _buildWindows(): void {
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x87ceeb, transparent: true, opacity: 0.35,
      roughness: 0.05, metalness: 0.1,
    })
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xf0ece0, roughness: 0.8 })
    const zPositions = [-3.6, -1.2, 1.2, 3.6]

    for (const z of zPositions) {
      // Glass
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.5), glassMat)
      glass.rotation.y = Math.PI / 2
      glass.position.set(-W / 2 + 0.02, 2.0, z)
      this.scene.add(glass)

      // Frame
      const frameGeo = new THREE.BoxGeometry(0.06, 1.7, 1.8)
      const frame = new THREE.Mesh(frameGeo, frameMat)
      frame.position.set(-W / 2 + 0.02, 2.0, z)
      this.scene.add(frame)

      // Cross bar
      const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 1.8), frameMat)
      crossH.position.set(-W / 2 + 0.02, 2.0, z)
      this.scene.add(crossH)
      const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.7, 0.06), frameMat)
      crossV.position.set(-W / 2 + 0.02, 2.0, z)
      this.scene.add(crossV)
    }
  }

  private _buildDoor(): void {
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x7a5230, roughness: 0.7 })
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.2, 0.08), doorMat)
    door.position.set(3.5, 1.1, D / 2 - 0.05)
    this.scene.add(door)

    // Knob
    const knobMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.1 })
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), knobMat)
    knob.position.set(3.1, 1.1, D / 2 - 0.1)
    this.scene.add(knob)

    // Door frame
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x5c3a1e, roughness: 0.8 })
    const frameH = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.08, 0.1), frameMat)
    frameH.position.set(3.5, 2.24, D / 2 - 0.03)
    this.scene.add(frameH)
    for (const dx of [-0.525, 0.525]) {
      const fv = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.28, 0.1), frameMat)
      fv.position.set(3.5 + dx, 1.1, D / 2 - 0.03)
      this.scene.add(fv)
    }
  }

  private _buildLighting(): void {
    // Warm ambient
    this.scene.add(new THREE.AmbientLight(0xffe8c8, 0.65))

    // Sun through left windows
    const sun = new THREE.DirectionalLight(0xfff5d0, 1.1)
    sun.position.set(-8, 6, -2)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far = 35
    sun.shadow.camera.left = -12
    sun.shadow.camera.right = 12
    sun.shadow.camera.top = 8
    sun.shadow.camera.bottom = -8
    this.scene.add(sun)

    // Ceiling strip lights (two rows)
    const stripMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 })
    for (const z of [-2.5, 2.5]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(6, 0.05, 0.2), stripMat)
      strip.position.set(0, H - 0.04, z)
      this.scene.add(strip)
      const pt = new THREE.PointLight(0xfff8e8, 0.6, 12)
      pt.position.set(0, H - 0.2, z)
      this.scene.add(pt)
    }
  }
}
