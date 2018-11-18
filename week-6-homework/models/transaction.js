const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: 'you must input a transaction owner'
  }

})

module.exports = mongoose.model('Transaction', TransactionSchema)