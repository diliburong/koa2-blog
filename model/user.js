const mongodb = require('../config/default.js')
const Schema = mongodb.Schema

let userItem = {
    username: { type: String, unique: true },
    email:{ type: String, unique: true },
    password: String
}


let userSchema = new Schema(userItem)
userSchema.set('collection', 'user')

let userModel = mongodb.model("user", userSchema)

module.exports = userModel