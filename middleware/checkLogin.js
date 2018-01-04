'use strict'

const checkLogin = (async (ctx, next) => {
    
    if (!ctx.session.userId) {
        ctx.redirect('/login')
    }

    await next();
})

module.exports = checkLogin