const router = require('koa-router')()
const indexController = require('../controllers/indexController')
const articleController = require('../controllers/articleController')
const users = require('./users')
const category = require('./category')
const article = require('./article')
const md = require('markdown-it')()
var result = md.render('# markdown')

// const api = require('./api/index')
// const apiArticle = require('./api/articles')


router.use(users.routes(), users.allowedMethods())
router.use("/", category.routes(), category.allowedMethods())
router.use(article.routes(), article.allowedMethods())


// router.use(api.routes(), api.allowedMethods())

router.get('/', articleController.showAllArticles)

// router.get('/api/string', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

router.post('/json', async (ctx, next) => {
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
