const TransactionModel = require('../models/transaction')

async function findAll () {
  return TransactionModel.find()
}

async function add (transaction) {
  return TransactionModel.create(transaction)
}

async function del (transactionId) {
  return TransactionModel.remove({ _id: transactionId })
}

async function find (transactionId) {
  return TransactionModel.findOne({ _id: transactionId })
}

module.exports = {
  findAll,
  find,
  add,
  del
}