const router = require('koa-router')()
const article = require('./article')
const user = require('./user')
const category = require('./category')

const jwt = require('koa-jwt')
// router.prefix('/api')



router.use(article.routes(), article.allowedMethods());
router.use(user.routes(), user.allowedMethods());
router.use("/",category.routes(), category.allowedMethods());




module.exports = router
