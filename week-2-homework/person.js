module.exports = class Person {
  constructor (name) {
    this.name = name
    this.transactions = []
    this.budgets = []
  }

  createBudget (budget) {
    this.budgets.push(budget)
  }

  fullBudget () {
    return this.budgets
  }

  updateName (updatedName) {
    this.name = updatedName
  }

  listTransactions () {
    console.log('here are all the person\'s transactions:', this.transactions)
    return this.transactions
  }

  transact (transaction) {
    console.log('creating a transaction:', transaction)
    this.transactions.push(transaction)
  }
}
