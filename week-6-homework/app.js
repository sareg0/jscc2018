const express = require('express')
const bodyParser = require('body-parser')
const TransactionService = require('./services/transaction-service')
const PersonService = require('./services/person-service')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// Person Endpoints

app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.send(people)
})

app.post('/person', async (req, res) => {
  const person = await PersonService.add(req.body)
  res.send(person)
})

// Transaction Endpoints

app.get('/transaction/all', async (req, res) => {
  const transactions = await TransactionService.findAll()
  res.send(transactions)
})

// app.get('/transaction/:id', async (req, res) => {
//   try {
//     const transaction = await TransactionService.find(req.params.id)
//     res.send(transaction)
//   } catch (e) {
//     res.render(e.message)
//   }
// })

app.post('/transaction', async (req, res) => {
  const transaction = await TransactionService.add(req.body)
  res.send(transaction)
})

module.exports = app