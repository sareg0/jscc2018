import test from 'ava'
import app from '../app'
import request from 'supertest'


test('Get a list of people', async t => {
  const personToCreate = { name: "Bleep Bloop" }

  const person = await request(app)
    .post('/person')
    .send(personToCreate)

  const res = await request(app).get('/person/all')

  t.is(res.status, 200)
  t.true(Array.isArray(res.body), "Body should be an array")
  t.true(res.body.length > 0)
})

test('Create a new person', async t => {
  const person1 = { name: 'Smithy Smitherson' }

  const res = await request(app)
    .post('/person')
    .send(person1)

  t.is(res.status, 200)
  t.is(res.body.name, person1.name)
})