const User = require('../model/user.js')

const login = async (ctx, next) => {
    const locals = {
        nav: 'login'
    }
    await ctx.render('login', {
        title: 'Login'
    });
}

const logIn = async (ctx, next) => {
    const body = ctx.request.body;
    ctx.redirect('/');
}

const test = async (ctx, next) => {

    var name

    var query =User.findOne({ 'name': 'stutter' })
    query.select('name email password ')
    await query.exec((err, res) => {
        console.log(res.name)
        name = res.name
        
    })
    console.log(name)
    ctx.body = name
}

module.exports = {
    login,
    logIn,
    test
}