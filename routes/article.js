const router = require('koa-router')()
const articleController = require('../controllers/articleController')
const md = require('markdown-it')()

var result = md.render('# markdown \n # 123')

// router.get('/article', async (ctx, next) => {
//     const title = 'article'
//     await ctx.render('article', {
//         title,
//         result: result
//     })
// })

router.get('/article/:id', articleController.showArticle)


module.exports = router