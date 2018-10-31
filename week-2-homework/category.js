module.exports = class Category {
  constructor (name) {
    console.log(`creating an instance of Category called ${name}`)
    this.name = name
  }

  updateCategoryName (updatedName) {
    this.name = updatedName
  }
}
