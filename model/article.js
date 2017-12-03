const mongodb = require('../config/default.js')
const Schema = mongodb.Schema

let arcitleItem = {
    title:String,
    content:String
}


let articleSchema = new Schema(arcitleItem)
articleSchema.set('collection', 'article')

let articleModel = mongodb.model("article", articleSchema)

module.exports = articleModel