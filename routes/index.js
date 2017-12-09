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
  //let n = ctx.flashMessage.warning || 0;
  
  // ctx.flashMessage.warning = 'Log Out Successfully!'
  // console.log(ctx.flashMessage.warning)
  // console.log(ctx.flashMessage.warning + '123')
  // ctx.body = ctx.flashMessage.warning
  ctx.body = ctx.csrf;
})

module.exports = router
