const router = require('koa-router')()
const categoryController = require('../controllers/categoryController')



router.prefix('/category')

// router.get('/categories', categoryController.getAllCategories)
router.post('/create', categoryController.createCategory)

module.exports = router