const router = require('koa-router')()
const index = require('../controllers/index')

router.get('/', index)

router.get('/string', async (ctx, next) => {
  console.log(ctx.url + '123')
  ctx.body = 'koa2 string' + ctx.url
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
