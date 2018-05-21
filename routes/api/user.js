const router = require('koa-router')()
const userController = require('../../controllers/userController')



router
  .get('/usertest', async (ctx, next) => {
    ctx.body = {
      title: '23 json'
    }
  })

module.exports = router
