const router = require('koa-router')()

router.get('/login', async (ctx, next) => {
    const title = 'login'
    await ctx.render('login', {
        title
    })
})

router.post('/login', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.response.redirect('/test');
    // await ctx.render('test', {
    //     message: ctx.request.body.username
    // })
})


router.get('/test', async (ctx, next) => {
    await ctx.render('test', {
        title:'123'
    })
})


module.exports = router