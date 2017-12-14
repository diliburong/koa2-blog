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


router.get('/create', articleController.toCreateArticlePage);
router.get('/:id', articleController.showArticle)

router.post('/create', articleController.createArticle)

module.exports = router