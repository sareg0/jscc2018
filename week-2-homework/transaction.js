module.exports = class Transaction {
  constructor (cost, category, person) {
    console.log(`creating a Transaction`)
    this.cost = cost
    this.category = category
    this.person = person
    this.date = Date.now()
  }

  updateCategory (newCategory) {
    this.category = newCategory
  }

  delete () {
    // how to delete something
  }
}
