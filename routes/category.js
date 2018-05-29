const router = require('koa-router')()
const categoryController = require('../controllers/categoryController')




// router.get('/categories', categoryController.getAllCategories)
router.post('category/create', categoryController.createCategory)
     .get('categories', categoryController.apiGetAllCategories)
module.exports = router