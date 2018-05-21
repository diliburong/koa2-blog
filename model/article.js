const mongodb = require('../config/mongodb-config.js')
const Schema = mongodb.Schema

let arcitleItem = {
  title: String,
  author: String,
  description: String,
  content: String,
  tag: String,
  created:{
    type: Date,
    default: Date.now()
  },
  updated: {
    type: Date,
    default: Date.now()
  },
  pv: {
    type: Number, default: 0 
  },
  category:{
    type: Schema.Types.ObjectId,
    ref:'category'
  },
  isDeleted: {
    type: Number,
    default: 0
  },
  createdTime: String
}


let articleSchema = new Schema(arcitleItem)
articleSchema.set('collection', 'article')

let articleModel = mongodb.model("article", articleSchema)

module.exports = articleModel