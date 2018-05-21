const router = require('koa-router')()
const article = require('./article')
const user = require('./user')


router.prefix('')



router.use(article.routes(), article.allowedMethods());
router.use(user.routes(), user.allowedMethods());


module.exports = router
