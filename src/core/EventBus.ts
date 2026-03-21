type Handler = (data: unknown) => void

export class EventBus {
  private static inst: EventBus
  private listeners = new Map<string, Set<Handler>>()

  static getInstance(): EventBus {
    if (!EventBus.inst) EventBus.inst = new EventBus()
    return EventBus.inst
  }

  on(event: string, handler: Handler): void {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set())
    this.listeners.get(event)!.add(handler)
  }

  off(event: string, handler: Handler): void {
    this.listeners.get(event)?.delete(handler)
  }

  emit(event: string, data: unknown = null): void {
    this.listeners.get(event)?.forEach(h => h(data))
  }
}
