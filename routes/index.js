const router = require('koa-router')()
const index = require('../controllers/index')
const md = require('markdown-it')()
var result = md.render('# markdown')

router.get('/', index)

router.get('/string', async (ctx, next) => {
  ctx.body = result
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
