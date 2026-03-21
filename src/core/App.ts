import * as THREE from 'three'

/**
 * Central Three.js app: renderer, camera, RAF loop.
 * The active scene is set via setScene().
 */
export class App {
  readonly renderer: THREE.WebGLRenderer
  readonly camera: THREE.PerspectiveCamera
  private activeScene: THREE.Scene | null = null
  private lastTime = 0
  private _onTick?: (deltaMs: number) => void

  constructor(container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.1
    container.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(
      70, container.clientWidth / container.clientHeight, 0.1, 60
    )
    this.camera.position.set(0, 1.7, 4)

    window.addEventListener('resize', () => this._onResize(container))
  }

  setScene(scene: THREE.Scene): void {
    this.activeScene = scene
  }

  onTick(cb: (deltaMs: number) => void): void {
    this._onTick = cb
  }

  start(): void {
    this.lastTime = performance.now()
    requestAnimationFrame(this._loop)
  }

  private _loop = (now: number): void => {
    requestAnimationFrame(this._loop)
    const delta = Math.min(now - this.lastTime, 100)
    this.lastTime = now
    this._onTick?.(delta)
    if (this.activeScene) this.renderer.render(this.activeScene, this.camera)
  }

  private _onResize(container: HTMLElement): void {
    const w = container.clientWidth, h = container.clientHeight
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }
}
