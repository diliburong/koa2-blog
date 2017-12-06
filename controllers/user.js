

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

module.exports = {
    login,
    logIn
}