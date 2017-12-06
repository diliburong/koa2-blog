const router = require('koa-router')()
const user = require('../controllers/user')

router.get('/login', user.login)
router.post('/login', user.logIn)


module.exports = router