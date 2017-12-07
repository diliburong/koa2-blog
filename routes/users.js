const router = require('koa-router')()
const userController = require('../controllers/user')

//router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response you!'
// })

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/usertest', userController.test)

router.get('/login', userController.login)
router.post('/login', userController.logIn)

module.exports = router
