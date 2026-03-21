import * as THREE from 'three'

/**
 * Blackboard using a Canvas texture.
 * Positioned on the front wall (z = -HALF_D).
 */
export class Blackboard {
  readonly mesh: THREE.Mesh
  private ctx: CanvasRenderingContext2D
  private texture: THREE.CanvasTexture
  private canvas: HTMLCanvasElement

  constructor(scene: THREE.Scene, worldX = 0, boardWorldZ = -5.48) {
    this.canvas = document.createElement('canvas')
    this.canvas.width = 1024
    this.canvas.height = 320
    this.ctx = this.canvas.getContext('2d')!
    this.texture = new THREE.CanvasTexture(this.canvas)

    const geo = new THREE.PlaneGeometry(8, 2.5)
    const mat = new THREE.MeshStandardMaterial({ map: this.texture, roughness: 0.9 })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.position.set(worldX, 2.4, boardWorldZ)
    this.mesh.receiveShadow = true
    scene.add(this.mesh)

    // Frame
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x2a1a0a, roughness: 0.8 })
    const frameGeo = new THREE.BoxGeometry(8.3, 2.8, 0.06)
    const frame = new THREE.Mesh(frameGeo, frameMat)
    frame.position.set(worldX, 2.4, boardWorldZ - 0.02)
    scene.add(frame)

    this.clear()
  }

  clear(): void {
    const { ctx, canvas } = this
    ctx.fillStyle = '#1a3d2b'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.texture.needsUpdate = true
  }

  writeText(lines: string[]): void {
    this.clear()
    const { ctx } = this
    ctx.fillStyle = '#e8f5e9'
    ctx.textAlign = 'left'
    lines.forEach((line, i) => {
      const size = i === 0 ? 44 : 32
      ctx.font = `${i === 0 ? 'bold' : 'normal'} ${size}px sans-serif`
      ctx.fillText(line, 40, 60 + i * (size + 14))
    })
    this.texture.needsUpdate = true
  }
}
