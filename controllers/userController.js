const User = require('../model/user.js')
const md5 = require('md5')

const login = async (ctx, next) => {
    const locals = {
        nav: 'login'
    }
    await ctx.render('login', {
        title: 'Login'
    });
}

const logIn = async (ctx, next) => {
  const body = ctx.request.body
  const username = body.username
  const password = body.password
  console.log(username)
  let user = await User.findOne({
    'username': username
  }).exec()

  console.log(user)
  if (user && md5(password) === user.password ) {
    ctx.redirect('/')
  } else {
    await ctx.render('login')
  }
}

const test = async (ctx, next) => {
  var name

  var query =User.findOne({ 'name': 'stutter' })
  query.select('name email password ')
  await query.exec((err, res) => {
      console.log(res.name)
  })
  ctx.body = name
}

module.exports = {
  login,
  logIn,
  test
}