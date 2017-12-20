const mongodb = require('../config/mongodb-config.js')
const Schema = mongodb.Schema

let categoryItem = {
    name: String,
    
}


let categorySchema = new Schema(categoryItem)
categorySchema.set('collection', 'category')

let categoryModel = mongodb.model("category", categorySchema)

module.exports = categoryModel