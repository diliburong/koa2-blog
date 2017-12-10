const router = require('koa-router')()
const index = require('../controllers/index')
const articleController = require('../controllers/articleController')
const md = require('markdown-it')()
var result = md.render('# markdown')

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

module.exports = router
