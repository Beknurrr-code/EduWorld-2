export class MoneySystem {
  private _balance: number

  constructor(initial = 80000) {
    this._balance = initial
  }

  get balance(): number { return this._balance }

  earn(amount: number): void { this._balance += amount }
  spend(amount: number): boolean {
    if (this._balance < amount) return false
    this._balance -= amount
    return true
  }

  /** Weekly salary calc: base 80k + rep * 400, multiplied by career bonus */
  calcWeeklySalary(reputation: number, careerBonus: number): number {
    return Math.round((80000 + reputation * 400) * (1 + careerBonus))
  }
}
