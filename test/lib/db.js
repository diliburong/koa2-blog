const User = require('../../model/user.js')
const Article = require('../../model/article.js')
const Category = require('../../model/category.js')
const md5 = require('md5')

const clear = function() {
  
}

const insert = function() {
  let user = new User({
    username: "stutter",
    email: "452061213@qq.com",
    password: md5("123")
  })
  user.save(function (err, res) {
    if (err) {
      console.log("ERROR" + err)
    }
  })
}

module.exports = {
  clear,
  insert
}