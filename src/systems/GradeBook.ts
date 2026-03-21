export interface GradeEntry {
  studentId: string
  studentName: string
  grade: 2 | 3 | 4 | 5
  topic: string
  lessonDay: number
  type: 'notebook' | 'oral' | 'board' | 'exam'
}

export class GradeBook {
  private static inst: GradeBook
  private entries: GradeEntry[] = []

  static getInstance(): GradeBook {
    if (!GradeBook.inst) GradeBook.inst = new GradeBook()
    return GradeBook.inst
  }

  add(entry: GradeEntry): void { this.entries.push(entry) }

  getByStudent(id: string): GradeEntry[] {
    return this.entries.filter(e => e.studentId === id)
  }

  /** Average grade for a student (0 if none) */
  average(id: string): number {
    const es = this.getByStudent(id)
    if (!es.length) return 0
    return es.reduce((s, e) => s + e.grade, 0) / es.length
  }

  /** All entries for a lesson day */
  getByDay(day: number): GradeEntry[] {
    return this.entries.filter(e => e.lessonDay === day)
  }

  all(): GradeEntry[] { return [...this.entries] }

  clear(): void { this.entries = [] }
}
