import * as THREE from 'three'
import { Blackboard } from './Blackboard'
import { buildDeskGrid, buildTeacherDesk, DeskInfo } from './Furniture'

// ── Layout ────────────────────────────────────────────────────────────────────
// Corridor:  x: -17..24,  z: -2..2
// Room 101:  x: -15..-3,  z: -11..-2   (player's class A)
// Room 102:  x:   0..12,  z: -11..-2   (player's class B)
// Room 103:  x:  15..24,  z: -11..-2   (VP inspect room)
// Staff:     x: -15..-3,  z:   2..11
// Principal: x:   0..12,  z:   2..11
// ─────────────────────────────────────────────────────────────────────────────

const H  = 3.2   // ceiling height
const TH = 0.15  // wall thickness

/** Absolute door center X for each room (in corridor wall at z=±2) */
export const DOOR_X: Record<string, number> = {
  room101:   -9,
  room102:    6,
  room103: 19.5,
  staff:     -9,
  principal:  6,
}
const DOOR_W = 1.3   // door opening width

export interface RoomInfo {
  id: string
  label: string
  /** Door centre world position */
  doorPos: THREE.Vector3
  /** Where player spawns when entering this room */
  spawnInRoom: THREE.Vector3
  /** Where player exits to in corridor */
  spawnInCorridor: THREE.Vector3
  deskInfos: DeskInfo[]
  blackboard: Blackboard | null
  /** Colliders internal to the room (walls) */
  colliders: THREE.Box3[]
}

function wallBox(
  scene: THREE.Scene,
  cx: number, cy: number, cz: number,
  wx: number, wy: number, wz: number,
  mat: THREE.Material,
): THREE.Box3 {
  const m = new THREE.Mesh(new THREE.BoxGeometry(wx, wy, wz), mat)
  m.position.set(cx, cy, cz)
  m.castShadow = true; m.receiveShadow = true
  scene.add(m)
  return new THREE.Box3(
    new THREE.Vector3(cx - wx / 2, 0, cz - wz / 2),
    new THREE.Vector3(cx + wx / 2, wy, cz + wz / 2),
  )
}

/** Builds a wall with a door gap. Returns collider array (two pieces). */
function wallWithDoor(
  scene: THREE.Scene,
  mat: THREE.Material,
  axis: 'x' | 'z',  // which axis the wall runs along
  fixedCoord: number,  // z-position of the wall (for axis='x' walls) OR x-position of the wall (for axis='z' walls)
  start: number, end: number,  // start/end on the running axis
  doorCenter: number,
  doorWidth: number,
): THREE.Box3[] {
  const colliders: THREE.Box3[] = []
  const L = DOOR_W / 2
  const pieces: [number, number][] = [[start, doorCenter - L], [doorCenter + L, end]]
  pieces.forEach(([s, e]) => {
    if (e <= s) return
    const len = e - s
    const mid = (s + e) / 2
    if (axis === 'x') {
      colliders.push(wallBox(scene, mid, H / 2, fixedCoord, len, H, TH, mat))
    } else {
      colliders.push(wallBox(scene, fixedCoord, H / 2, mid, TH, H, len, mat))
    }
  })
  return colliders
}

/** Builds one classroom at given desk offsets and board world X. */
function buildClassroom(
  scene: THREE.Scene,
  id: string,
  label: string,
  // Room bounds
  xMin: number, xMax: number, zMin: number, zMax: number,
  doorZ: number, // z of corridor (where door is)
  doorFacesNorth: boolean, // true = door on south wall of room (z=zMax side)
  mats: { wall: THREE.Material; floor: THREE.Material; ceil: THREE.Material },
): RoomInfo {
  const cx = (xMin + xMax) / 2
  const cz = (zMin + zMax) / 2
  const rw = xMax - xMin
  const rd = zMax - zMin

  const colliders: THREE.Box3[] = []

  // Floor & ceiling (shared with corridor area, just the room interior)
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(rw, rd), mats.floor)
  floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0, cz); floor.receiveShadow = true
  scene.add(floor)
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(rw, rd), mats.ceil)
  ceil.rotation.x = Math.PI / 2; ceil.position.set(cx, H, cz)
  scene.add(ceil)

  // North wall (back wall = blackboard side for north rooms, south wall for south rooms)
  const northZ = doorFacesNorth ? zMin : zMax
  colliders.push(wallBox(scene, cx, H / 2, northZ, rw, H, TH, mats.wall))

  // Side walls
  colliders.push(wallBox(scene, xMin, H / 2, cz, TH, H, rd, mats.wall))
  colliders.push(wallBox(scene, xMax, H / 2, cz, TH, H, rd, mats.wall))

  // Door wall (wall facing corridor) — with door gap
  const doorWallZ = doorFacesNorth ? zMax : zMin
  const doorCX = cx  // door centered on room
  const pieces = wallWithDoor(scene, mats.wall, 'x', doorWallZ, xMin, xMax, doorCX, DOOR_W)
  colliders.push(...pieces)

  // Blackboard (only for classrooms, on the north/back wall)
  let blackboard: Blackboard | null = null
  if (id.startsWith('room')) {
    const bz = doorFacesNorth ? zMin + 0.52 : zMax - 0.52
    blackboard = new Blackboard(scene, cx, bz)
  }

  // Desk grid for classrooms
  const deskInfos: DeskInfo[] = []
  let teacherBox: THREE.Box3 | null = null
  if (id.startsWith('room') && id !== 'room103_npc') {
    const offX = cx
    const offZ = doorFacesNorth ? zMin + 5 : zMax - 5  // desks in middle, biased toward back
    deskInfos.push(...buildDeskGrid(scene, offX, offZ - 2))
    const tdX = cx
    const tdZ = doorFacesNorth ? zMin + 1.4 : zMax - 1.4
    teacherBox = buildTeacherDesk(scene, tdX, tdZ)
    colliders.push(teacherBox)
    for (const d of deskInfos) colliders.push(d.collider)
  }

  // Blackboard also for VP room (room103 with NPC teacher)
  if (id === 'room103') {
    const bz = doorFacesNorth ? zMin + 0.52 : zMax - 0.52
    if (!blackboard) blackboard = new Blackboard(scene, cx, bz)
    // NPC teacher desk
    const tdZ = doorFacesNorth ? zMin + 2 : zMax - 2
    const tb = buildTeacherDesk(scene, cx, tdZ)
    colliders.push(tb)
  }

  const doorPos = new THREE.Vector3(doorCX, 0, doorZ)
  const spawnInRoom = new THREE.Vector3(cx, 1.7, (zMin + zMax) / 2)
  const spawnInCorridor = new THREE.Vector3(doorCX, 1.7, doorZ + (doorFacesNorth ? 1.5 : -1.5))

  return { id, label, doorPos, spawnInRoom, spawnInCorridor, deskInfos, blackboard, colliders }
}

export class SchoolScene {
  readonly scene: THREE.Scene
  readonly rooms: Map<string, RoomInfo> = new Map()
  readonly corridorColliders: THREE.Box3[] = []

  constructor() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xb8cfe8)
    this.scene.fog = new THREE.Fog(0xb8cfe8, 20, 50)

    this._buildCorridor()
    this._buildRooms()
    this._buildLighting()
  }

  private _mat(color: number, roughness = 0.85): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({ color, roughness })
  }

  private _buildCorridor(): void {
    const floorMat = this._mat(0xc8b89a)
    const wallMat  = this._mat(0xe8dfd0)
    const ceilMat  = this._mat(0xf4f0e8)
    // Corridor runs x: -17..24, z: -2..2
    const corrW = 41, corrD = 4, cx = 3.5

    // Floor / ceiling
    const corrFloor = new THREE.Mesh(new THREE.PlaneGeometry(corrW, corrD), floorMat)
    corrFloor.rotation.x = -Math.PI / 2; corrFloor.position.set(cx, 0, 0); corrFloor.receiveShadow = true
    this.scene.add(corrFloor)
    const corrCeil = new THREE.Mesh(new THREE.PlaneGeometry(corrW, corrD), ceilMat)
    corrCeil.rotation.x = Math.PI / 2; corrCeil.position.set(cx, H, 0)
    this.scene.add(corrCeil)

    // West end wall
    this.corridorColliders.push(wallBox(this.scene, -17, H / 2, 0, TH, H, corrD, wallMat))
    // East end wall
    this.corridorColliders.push(wallBox(this.scene, 24, H / 2, 0, TH, H, corrD, wallMat))

    // Ceiling light strips
    const lightMat = this._mat(0xffffff)
    ;(lightMat as THREE.MeshStandardMaterial).emissive = new THREE.Color(0xffffff)
    ;(lightMat as THREE.MeshStandardMaterial).emissiveIntensity = 0.6
    for (const lx of [-10, -2, 8, 18]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(6, 0.05, 0.18), lightMat)
      strip.position.set(lx, H - 0.04, 0)
      this.scene.add(strip)
    }

    // Locker row on east end (decorative)
    const lockerMat = this._mat(0x6a8a9e)
    for (let i = 0; i < 6; i++) {
      const locker = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, 0.4), lockerMat)
      locker.position.set(20 + i * 0.55, 0.9, 1.6)
      locker.castShadow = true
      this.scene.add(locker)
    }
  }

  private _buildRooms(): void {
    const wallMat  = this._mat(0xe0d8c8)
    const floorMat = this._mat(0xb8956a, 0.85)
    const ceilMat  = this._mat(0xf4f0e8)
    const mats = { wall: wallMat, floor: floorMat, ceil: ceilMat }

    const staffMat  = this._mat(0xd4c8b8, 0.9)
    const staffFloor = this._mat(0xc0a880, 0.8)
    const principalFloor = this._mat(0x8b6340, 0.7)

    // ── North rooms (door faces south = corridor at z=-2) ──────────────────
    const r101 = buildClassroom(this.scene, 'room101', 'Кабинет 101',
      -15, -3, -11, -2, -2, true, mats)
    this.rooms.set('room101', r101)
    this.corridorColliders.push(...r101.colliders)

    const r102 = buildClassroom(this.scene, 'room102', 'Кабинет 102',
      0, 12, -11, -2, -2, true, mats)
    this.rooms.set('room102', r102)
    this.corridorColliders.push(...r102.colliders)

    // VP inspection room (Room 103) — has NPC teacher desk + blackboard
    const r103 = buildClassroom(this.scene, 'room103', 'Кабинет 103',
      15, 24, -11, -2, -2, true, mats)
    this.rooms.set('room103', r103)
    this.corridorColliders.push(...r103.colliders)

    // Wall segments between north rooms (corridor boundary at z=-2)
    const nw1 = wallBox(this.scene, -1.5, H / 2, -2, 3, H, TH, wallMat)
    const nw2 = wallBox(this.scene, 13.5, H / 2, -2, 3, H, TH, wallMat)
    this.corridorColliders.push(nw1, nw2)

    // ── South rooms (door faces north = corridor at z=2) ──────────────────
    const staffMats = { wall: staffMat, floor: staffFloor, ceil: ceilMat }
    const staff = buildClassroom(this.scene, 'staff', 'Учительская',
      -15, -3, 2, 11, 2, false, staffMats)
    this._buildStaffRoom(staff)
    this.rooms.set('staff', staff)
    this.corridorColliders.push(...staff.colliders)

    const princMats = { wall: wallMat, floor: principalFloor, ceil: ceilMat }
    const principal = buildClassroom(this.scene, 'principal', 'Кабинет директора',
      0, 12, 2, 11, 2, false, princMats)
    this._buildPrincipalOffice(principal)
    this.rooms.set('principal', principal)
    this.corridorColliders.push(...principal.colliders)

    // South corridor wall east of principal (x: 12..24, z: 2)
    const sw1 = wallBox(this.scene, -1.5, H / 2, 2, 3, H, TH, wallMat)
    const sw2 = wallBox(this.scene, 18, H / 2, 2, 24, H, TH, wallMat)
    this.corridorColliders.push(sw1, sw2)
  }

  private _buildStaffRoom(room: RoomInfo): void {
    const sofaMat = this._mat(0x7b5c3a)
    const tableMat = this._mat(0xd4a96a)

    // Couch
    const sofa = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.55, 0.9), sofaMat)
    sofa.position.set(-9, 0.275, 4.5)
    sofa.castShadow = true; this.scene.add(sofa)

    // Coffee table
    const ct = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.45, 0.6), tableMat)
    ct.position.set(-9, 0.225, 5.6)
    this.scene.add(ct)

    // Bulletin board (decorative)
    const bbMat = this._mat(0xe8c88a)
    const bb = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.5, 0.06), bbMat)
    bb.position.set(-9, 2.2, 2.55)
    this.scene.add(bb)

    // Teacher desks in staff room
    buildTeacherDesk(this.scene, -12, 8)
    buildTeacherDesk(this.scene, -6, 8)
  }

  private _buildPrincipalOffice(room: RoomInfo): void {
    const bigDeskMat = this._mat(0x5c2e0e, 0.6)

    // Big director's desk
    const desk = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.08, 1.2), bigDeskMat)
    desk.position.set(6, 0.85, 4.5)
    desk.castShadow = true; this.scene.add(desk)
    // Desk legs
    const lm = this._mat(0x3a1a06)
    for (const [dx, dz] of [[-1.1, -0.5], [1.1, -0.5], [-1.1, 0.5], [1.1, 0.5]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.84, 8), lm)
      leg.position.set(6 + dx, 0.42, 4.5 + dz)
      this.scene.add(leg)
    }

    // Director's big chair (red leather)
    const chairMat = this._mat(0x8b0000, 0.6)
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 0.6), chairMat)
    seat.position.set(6, 0.5, 5.5)
    this.scene.add(seat)
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.08), chairMat)
    back.position.set(6, 0.85, 5.8)
    this.scene.add(back)

    // Bookshelf (decorative)
    const shelf = this._mat(0x6b3a1f)
    const sh = new THREE.Mesh(new THREE.BoxGeometry(2, 2.4, 0.4), shelf)
    sh.position.set(10.5, 1.2, 6)
    sh.castShadow = true; this.scene.add(sh)

    // Russian flag in corner
    const flag = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.02), new THREE.MeshStandardMaterial({ color: 0xffffff }))
    flag.position.set(0.6, 2.8, 2.58)
    this.scene.add(flag)
  }

  private _buildLighting(): void {
    this.scene.add(new THREE.AmbientLight(0xffe8d0, 0.55))

    // Sun from left
    const sun = new THREE.DirectionalLight(0xfff5d0, 0.9)
    sun.position.set(-8, 10, 0)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.left = -30; sun.shadow.camera.right = 30
    sun.shadow.camera.top = 20; sun.shadow.camera.bottom = -20
    sun.shadow.camera.far = 50
    this.scene.add(sun)

    // Corridor point lights
    for (const lx of [-8, 5, 18]) {
      const pt = new THREE.PointLight(0xfff8e8, 0.7, 16)
      pt.position.set(lx, H - 0.2, 0)
      this.scene.add(pt)
    }

    // Room lights
    for (const [lx, lz] of [[-9, -6.5], [6, -6.5], [19.5, -6.5], [-9, 6.5], [6, 6.5]]) {
      const pt = new THREE.PointLight(0xfff8e8, 0.6, 14)
      pt.position.set(lx, H - 0.3, lz)
      this.scene.add(pt)
    }
  }

  /** Returns room info if player is inside that room's bounds (with small tolerance). */
  getRoomAt(playerPos: THREE.Vector3): RoomInfo | null {
    for (const [, room] of this.rooms) {
      const door = room.doorPos
      // Quick AABB check using door position to infer room side
      const inNorth = door.z < 0 && playerPos.z < -1 && playerPos.z > -12
      const inSouth = door.z > 0 && playerPos.z > 1 && playerPos.z < 12
      if ((inNorth || inSouth)
        && playerPos.x > (room.deskInfos.length > 0
          ? room.deskInfos[0].position.x - 6
          : door.x - 8)
        && playerPos.x < (room.deskInfos.length > 0
          ? room.deskInfos[room.deskInfos.length - 1].position.x + 6
          : door.x + 8)
      ) {
        return room
      }
    }
    return null
  }

  /** Returns true if player is within DOOR_TRIGGER_DIST of a room door. */
  getNearbyRoom(playerPos: THREE.Vector3, triggerDist = 2.5): RoomInfo | null {
    let closest: RoomInfo | null = null
    let bestDist = Infinity
    for (const [, room] of this.rooms) {
      const d = new THREE.Vector2(
        playerPos.x - room.doorPos.x,
        playerPos.z - room.doorPos.z,
      ).length()
      if (d < triggerDist && d < bestDist) { bestDist = d; closest = room }
    }
    return closest
  }
}
