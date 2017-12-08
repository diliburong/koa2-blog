const mongodb = require('../config/default.js')
const Schema = mongodb.Schema

let arcitleItem = {
  title: String,
  author: String,
  description: String,
  content: String,
  tag: String,
  updated: {
    type: Date,
    default: Date.now()
  },
  pv: {
    type: Number, default: 0 
  }
}


let articleSchema = new Schema(arcitleItem)
articleSchema.set('collection', 'article')

let articleModel = mongodb.model("article", articleSchema)

module.exports = articleModel