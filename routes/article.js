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
router.prefix('/article')


router
      .get('/create', articleController.toCreateArticlePage)
      .get('/:id', articleController.showArticle)
			.get('/edit/:id', articleController.toEditArticlePage)
			.post('/edit/:id', articleController.editArticle)
			.post('/create', articleController.createArticle)

module.exports = router