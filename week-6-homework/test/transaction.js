import test from 'ava'
import app from '../app'
import request from 'supertest'

test('Get list of a person\'s transactions', async t => {
  const person1 = { name: "Sara Spendyson" }

  const transaction = await request(app)
    .post('/transaction')
    .send({ amount: 2, category: 'Groceries', owner: person1 })

  const res = await request(app).get('/transaction/all')

  t.is(res.status, 200)
  t.true(Array.isArray(res.body), 'Body should be an array')
  t.true(res.body.length > 0)
})

// test('Get a single transaction', async t => {

// })

// test('Create a transaction', async t => {

// })


// app.get('/transaction/all', async (req, res) => {
//   try {
//     const transactions = await TransactionService.findAll()
//     res.render('transaction', { transactions })
//   } catch (e) {
//     res.render(e.message)
//   }
// })

// app.get('/transaction/:id', async (req, res) => {
//   try {
//     const transaction = await TransactionService.find(req.params.id)
//     res.send(transaction)
//   } catch (e) {
//     res.render(e.message)
//   }
// })

// app.post('/transaction', async (req, res) => {
//   try {
//     console.log('tried it!')
//     await TransactionService.add(req.body)
//     res.redirect('/transaction/:id')
//   } catch (e) {
//     console.log(e.message)
//     res.send(e.message)
//   }
// })