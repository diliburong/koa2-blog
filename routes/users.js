const router = require('koa-router')()
const userController = require('../controllers/userController')
const validate = require('koa2-validation')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response you!'
// })

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
  //   .get('/json', async (ctx, next) => {
  //   ctx.body = {
  //     title: 'koa2 json'
  //   }
  // })

    .get('/login', userController.login)
    .post('/login', validate(userController.v.logIn), userController.logIn)

    .get('/logout', userController.logOut)

module.exports = router
