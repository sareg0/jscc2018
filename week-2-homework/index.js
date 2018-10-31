// Week 2 homework i couldn't find a link, but it was
// 1) separate your classes out of your main file into their own modules
// 2) create a database class that can save and load data from a json file
const Person = require('./person')
const Database = require('./database')
console.log('Hello World')

const person1 = new Person('Sara')
Database.save(person1)
const loadedFile = Database.load()
console.log(loadedFile)
