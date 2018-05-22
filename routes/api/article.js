const router = require('koa-router')()
const articleController = require('../../controllers/articleController')


router
    .get('/articles', articleController.getAllArticle)
    .get('/articles/:id', articleController.getArticleById)
    .post('/articles/create', articleController.apiCreateArticle)


module.exports = router
