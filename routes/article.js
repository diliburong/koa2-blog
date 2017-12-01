const router = require('koa-router')()

router.get('/article', async (ctx, next) => {
    const title = 'article'
    await ctx.render('article', {
        title
    })
})

module.exports = router