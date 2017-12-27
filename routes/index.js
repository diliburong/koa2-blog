const router = require('koa-router')()
const indexController = require('../controllers/indexController')
const articleController = require('../controllers/articleController')
const users = require('./users')
const category = require('./category')
const article = require('./article')
const md = require('markdown-it')()
var result = md.render('# markdown')


router.use(users.routes(), users.allowedMethods())
router.use(category.routes(), category.allowedMethods())
router.use(article.routes(), article.allowedMethods())
router.get('/', articleController.showAllArticles)

router.get('/string', async (ctx, next) => {
  ctx.body = result
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async (ctx, next) => {
  await ctx.render('test', {
    
  })
})

router.get('/about', indexController.toAboutPage)

module.exports = router
