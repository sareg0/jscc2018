// HOMEWORK
// 1) Create a GitHub account - already done
// 2) Come up with your very own project idea that you will build throughout the course (you can change this afterwards)
// // Project: Budget/Expenditures App
// 3) Create at least 3 different classes and several instances for these classes for your projects
// // Below
// 4) create at least 2 different interactions between said classes
// // Below

// - Transaction; belongs to a person, has a category and an amount
// - Budget; has a category and an amount
// - Category; has a name
// - Person; has many transactions and budgets

// Interactions
// - the user can record an expenditure and income
// - use can see the total
// - the user can add categories
// an expenditure can be for one person or another

class Category {
  constructor (name) {
    console.log(`creating an instance of Category called ${name}`)
    this.name = name
  }

  updateCategoryName (updatedName) {
    this.name = updatedName
  }
}

class Budget {
  constructor (category, amount) {
    console.log(`creating an instance of Budget for Category ${category}`)
    this.name = name
  }

  updateCategoryName (updatedName) {
    this.name = updatedName
  }
}

class Transaction {
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

class Person {
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

const person1 = new Person('Sammy Sweatpants')

person1.updateName('Sassy Newpants')
const fancyCategory = new Category('groceries')
const differentCategory = new Category('miscellaneous')
const cost1 = new Transaction(-2, fancyCategory, person1)
const cost2 = new Transaction(4, differentCategory, person1)
const cost3 = new Transaction(-2, differentCategory, person1)
person1.transact(cost1)
person1.transact(cost2)
person1.transact(cost3)
person1.listTransactions()

// Week 2 homework i couldn't find a link, but it was
// 1) separate your classes out of your main file into their own modules
// 2) create a database class that can save and load data from a json file
