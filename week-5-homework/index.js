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

app.get('/person/all', async (req, res) => {
  try {
    const people = await PersonService.findAll()
    res.render('person', { people })
  } catch (e) {
    res.render(e.message)
  }
})

app.post('/transaction', async (req, res) => {
  try {
    console.log('tried it!')
    await TransactionService.add(req.body)
    res.redirect('/transaction/:id')
  } catch (e) {
    console.log(e.message)
    res.send(e.message)
  }
})

app.get('/transaction/all', async (req, res) => {
  try {
    const transactions = await TransactionService.findAll()
    res.render('transaction', { transactions })
  } catch (e) {
    res.render(e.message)
  }
})

app.get('/transaction/:id', async (req, res) => {
  try {
    const transaction = await TransactionService.find(req.params.id)
    res.send(transaction)
  } catch (e) {
    res.render(e.message)
  }
})

app.post('/person', async (req, res) => {
  const person = await PersonService.add(req.body)
  res.send(person)
})

app.post('/', async (req, res) => {
  console.log(req.body)
  const transaction = await TransactionService.add(req.body)
  res.send(transaction)
})

app.listen(3000, () => {
  console.log('blam!')
})