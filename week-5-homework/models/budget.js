const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget',
    required: 'You must supply a category'
  }]
})

module.exports = mongoose.model('Budget', BudgetSchema)