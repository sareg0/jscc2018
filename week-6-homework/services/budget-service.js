const BudgetModel = require('../models/transaction')

async function findAll () {
  return BudgetModel.find()
}

async function add (budget) {
  return BudgetModel.create(budget)
}

module.exports = {
  findAll
}