const mongodb = require('../config/mongodb-config.js')
const Schema = mongodb.Schema

let categoryItem = {
  name: { type: String, unique: true },
  updated: {
    type: Date,
    default: Date.now()
  }
}


let categorySchema = new Schema(categoryItem)
categorySchema.set('collection', 'category')

let categoryModel = mongodb.model("category", categorySchema)

module.exports = categoryModel