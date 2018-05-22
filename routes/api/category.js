const router = require('koa-router')()
const categoryController = require('../../controllers/categoryController')


router
    .get('/categories', categoryController.apiGetAllCategories)

module.exports = router
