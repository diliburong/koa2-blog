const mongodb = require('../config/mongodb-config.js')
const Schema = mongodb.Schema
const mongoosePaginate = require('mongoose-paginate');



let arcitleItem = {
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref:'user'
  },
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
articleSchema.plugin(mongoosePaginate)

let articleModel = mongodb.model("article", articleSchema)

module.exports = articleModel