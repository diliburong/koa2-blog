const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)




const v = (async (ctx, next) => {
      const token = ctx.header.authorization  // 获取jwt
      console.log(token)
      if (token) {
        let payload
        try {
          payload = await verify(token.split(' ')[1], 'koa')  // 解密payload，获取用户名和ID
          // ctx.user = {
          //   name: payload.name,
          //   id: payload.id
          // }
          console.log(payload)
        } catch (err) {
          console.log('token verify fail: ', err)
        }
      }
      await next()
})

module.exports = v