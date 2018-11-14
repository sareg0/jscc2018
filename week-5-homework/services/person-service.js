const PersonModel = require('../models/person')

async function findAll () {
  return PersonModel.find()
}

async function add (person) {
  return PersonModel.create(person)
}

async function del (personId) {
  return PersonModel.remove({ _id: personId })
}

async function find (personId) {
  return PersonModel.findOne({ _id: personId })
}

module.exports = {
  findAll,
  find,
  add,
  del
}