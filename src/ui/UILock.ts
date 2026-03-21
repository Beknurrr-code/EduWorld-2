/**
 * Tracks how many UI panels are currently open.
 * While any panel is open, pointer lock is blocked and auto-released.
 */
let _count = 0

export function uiLock(): void {
  _count++
  // Release pointer lock immediately so cursor is free
  if (document.pointerLockElement) document.exitPointerLock()
}

export function uiUnlock(): void {
  _count = Math.max(0, _count - 1)
}

export function isUIOpen(): boolean {
  return _count > 0
}
