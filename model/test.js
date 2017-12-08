const User = require('./user.js')
const Article = require('./article.js')
const md5 = require('md5')

//console.log(md5('202cb962ac59075b964b07152d234b70'))

function inset() {
  let user = new User({
    username: "stutter",
    email: "452061213@qq.com",
    password: md5("123")
  })
  user.save(function (err, res) {
    if (err) {
      console.log("ERROR" + err)
    } else {
      console.log("RES " + res)
    }
  })
}

function update() {
  var wherestr = { 'name': 'mavin' }
  var updatestr = { 'password': 'zzz' }  //将用户名更新为“tiny”  

  User.update(wherestr, updatestr, (err, res) => {
  if (err) {
    console.log("ERROR" + err)
    } else {
      console.log(res)
    }
  })
}

function remove() {
  User.remove(wherestr, function (err, res) {
  if (err) {
    console.log("error" + err)
    } else {
      console.log(res)
    }
  })
}

function insertArticle() {
  let article = new Article({
    title: 'From the Desk of the Politely',
    author: 'stutter',
    description: 'The main reason behind this redesign was to add the case studies–I wanted to feel “finished” with my last position and it felt ',
    content: '# markdowntest \n # 123 \n #test',
    tag: 'test'
  })
  article.save((err, res) => {
    if (err) {
      console.log("ERROR" + err)
    } else {
      console.log("RES " + res)
    }
  })
}

function findArticleById() {
  // Article.findById('5a2a9a00c7811c294810dc72').exec((err, res) => {
  //   console.log(res)
  // })

  let user = User.findOne({
    'username': 'stutter'
  }).exec()

  console.log(user)
}
//insertArticle()
// inset()
findArticleById()
