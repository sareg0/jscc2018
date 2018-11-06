const express = require('express')
const PersonService = require('./services/person-service')
const pug = require('pug')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.render('index', {people: people})
})

app.get('/person/:id', async (req, res) => {
  res.send(await PersonService.find(req.params.id))
})

app.post('/person', async (req, res) => {
  console.log(req.body)
  const user = await PersonService.add(req.body)
  res.send(user)

})

app.delete('/person/:id', async (req, res) => {
  await PersonService.del(req.params.id)
  res.send('ok')
})

app.listen(3000, () => {
  console.log('Server Listening')
})
