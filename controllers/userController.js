const User = require('../model/user.js')
const md5 = require('md5')

const login = async (ctx, next) => {
    const locals = {
        nav: 'login'
    }

    if (ctx.state.isUserLogin) {
      ctx.redirect('/')
      return
    }
    await ctx.render('login', {
        title: 'Login'
    });
}

const logIn = async (ctx, next) => {
  const body = ctx.request.body
  const username = body.username
  const password = body.password
  let user = await User.findOne({
    'username': username
  }).exec()

  if (user && md5(password) === user.password ) {
    ctx.session.userId = user._id
    ctx.status = 302
    ctx.flashMessage.notice = 'Log In Successfully!'
    ctx.redirect('/')
  } else {
    const locals = { nav: 'signIn' }
    ctx.flashMessage.warning = 'User name or Password Error.'
    await ctx.render('login', locals)
  }
}

const logOut = (ctx, next) => {
  if (!ctx.state.isUserLogin) {
    ctx.redirect('/')
    return
  }

  ctx.session.userId = null
  ctx.flashMessage.notice = 'Log out'
  ctx.redirect('/')
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
  logOut,
  test
}