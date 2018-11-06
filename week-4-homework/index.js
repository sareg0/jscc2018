const express = require('express')
const pug = require('pug')
const bodyParser = require('body-parser')

const app = express()

app.listen(3000, () => {
  console.log('blam!')
})

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})
