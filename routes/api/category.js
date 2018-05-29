const router = require('koa-router')()
const categoryController = require('../../controllers/categoryController')


router
    .get('categories', categoryController.apiGetAllCategories)
    .post('category/create', categoryController.apiCreateCategory)

module.exports = router
