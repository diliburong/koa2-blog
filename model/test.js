const User = require('./user.js')
const Article = require('./article.js')
const Category = require('./category.js')
const md5 = require('md5')

//console.logx(md5('202cb962ac59075b964b07152d234b70'))

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

function insertCategoryArticle() {
  let category = new Category({
    name:'work'
  })

  category.save((err, res) => {
    if(err) {
      console.log(err);
      return 
    } else {
      let article = new Article({
        title: 'Three Habits that Changed my Career',
        author: 'stutter',
        description: 'It’s the small things that make big waves. I have two habits I’ve picked up over the years which I can attribute a large part of my productive periods',
        content: '# test Notes \n I was a bad student. I didn’t bring my homework home; doing it during lunches and classes to avoid lugging my textbooks around. As a result, I never picked up any good learning habits at the time I probably should have.\n While this served me okay until past college, my refusal to take notes didn’t serve me so well long-term. It was fine as a Junior Designer but it became a big negative as my projects became more complex.\n # Feedback Loops',
        tag: 'work',
        category: category._id
      })
      article.save((err, res) => {
        if (err) {
          console.log("ERROR" + err)
        } else {
          console.log("RES " + res)
        }
      })

    }
  })
}



function insertArticle() {
  let article = new Article({
    title: 'Three Habits that Changed my Career',
    author: 'stutter',
    description: 'It’s the small things that make big waves. I have two habits I’ve picked up over the years which I can attribute a large part of my productive periods',
    content: '# Taking Notes \n I was a bad student. I didn’t bring my homework home; doing it during lunches and classes to avoid lugging my textbooks around. As a result, I never picked up any good learning habits at the time I probably should have.\n While this served me okay until past college, my refusal to take notes didn’t serve me so well long-term. It was fine as a Junior Designer but it became a big negative as my projects became more complex.\n # Feedback Loops',
    tag: 'work'
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

inset()

// insertCategoryArticle()
// inset()
//findArticleById()
