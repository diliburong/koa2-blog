const router = require('koa-router')()
const userController = require('../../controllers/userController')
const jwt = require('jsonwebtoken')
const util = require('util')



router

  .post('/logintoken', userController.apiLogin)
  .get('/userInfo', async (ctx) => {
    // const token = ctx.header.authorization  // 获取jwt
    ctx.body = {
      test:'123'
    }
  })

module.exports = router