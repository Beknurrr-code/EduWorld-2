import * as THREE from 'three'
import { EventBus } from '../core/EventBus'
import { isUIOpen } from '../ui/UILock'

const MOVE_SPEED = 4.5

export class Player {
  readonly camera: THREE.PerspectiveCamera
  private bus = EventBus.getInstance()
  private keys = new Set<string>()
  private euler = new THREE.Euler(0, 0, 0, 'YXZ')
  private colliders: THREE.Box3[] = []
  private isLocked = false

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera
    this._setup()
  }

  setColliders(boxes: THREE.Box3[]): void {
    this.colliders = boxes
  }

  private _setup(): void {
    // Pointer lock on canvas click — only when no UI overlay is open
    document.addEventListener('click', () => {
      if (!this.isLocked && !isUIOpen()) {
        document.body.requestPointerLock()
      }
    })

    document.addEventListener('pointerlockchange', () => {
      this.isLocked = !!document.pointerLockElement
      this.bus.emit('pointerLockChange', this.isLocked)
    })

    document.addEventListener('mousemove', (e) => {
      if (!this.isLocked) return
      const sensitivity = 0.0018
      this.euler.setFromQuaternion(this.camera.quaternion)
      this.euler.y -= e.movementX * sensitivity
      this.euler.x -= e.movementY * sensitivity
      this.euler.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, this.euler.x))
      this.camera.quaternion.setFromEuler(this.euler)
    })

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') { e.preventDefault(); return }
      if (e.code === 'F1') {
        e.preventDefault()
        if (document.pointerLockElement) document.exitPointerLock()
        else document.body.requestPointerLock()
        return
      }
      this.keys.add(e.code)
      if (e.code === 'KeyE' && this.isLocked) {
        this.bus.emit('playerInteract', this.camera.position.clone())
      }
    })
    document.addEventListener('keyup', (e) => { this.keys.delete(e.code) })
  }

  update(deltaMs: number): void {
    if (!this.isLocked) return
    const dt = deltaMs * 0.001
    const dir = new THREE.Vector3()
    const fwd = new THREE.Vector3()
    this.camera.getWorldDirection(fwd); fwd.y = 0; fwd.normalize()
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize()

    if (this.keys.has('KeyW') || this.keys.has('ArrowUp'))    dir.add(fwd)
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown'))  dir.sub(fwd)
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft'))  dir.sub(right)
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) dir.add(right)
    if (dir.lengthSq() === 0) return

    dir.normalize()
    const next = this.camera.position.clone().addScaledVector(dir, MOVE_SPEED * dt)
    // No hard bounds — colliders define walkable area
    next.y = 1.7

    const box = new THREE.Box3(
      new THREE.Vector3(next.x - 0.22, 0, next.z - 0.22),
      new THREE.Vector3(next.x + 0.22, 2, next.z + 0.22),
    )
    let blocked = false
    for (const col of this.colliders) {
      if (box.intersectsBox(col)) { blocked = true; break }
    }
    if (!blocked) this.camera.position.copy(next)
  }

  get locked(): boolean { return this.isLocked }

  exitLock(): void { document.exitPointerLock() }
  requestLock(): void { document.body.requestPointerLock() }
}
