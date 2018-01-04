const router = require('koa-router')()
const articleController = require('../controllers/articleController')
const md = require('markdown-it')()
const checkLogin = require('../middleware/checkLogin')

var result = md.render('# markdown \n # 123')

// router.get('/article', async (ctx, next) => {
//     const title = 'article'
//     await ctx.render('article', {
//         title,
//         result: result
//     })
// })
router.prefix('/article')


router
	.get('/create', checkLogin, articleController.toCreateArticlePage)
	.get('/:id', articleController.showArticle)
	.get('/edit/:id', checkLogin, articleController.toEditArticlePage)
	.post('/edit/:id', checkLogin, articleController.editArticle)
	.post('/create', checkLogin, articleController.createArticle)

module.exports = router