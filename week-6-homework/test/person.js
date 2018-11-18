import test from 'ava'
import app from '../app'
import request from 'supertest'


test('Get all people back', async t => {
  const personToCreate = { name: "Bleep Bloop" }

  const person = await request(app)
    .post('/person')
    .send(personToCreate)

  const res = await request(app).get('/person/all')

  t.is(res.status, 200)
  t.true(Array.isArray(res.body), "Body should be an array")
  t.true(res.body.length > 0)
})

// test('foo', t => {
//   t.pass();
// });

// test('bar', async t => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar')
// });