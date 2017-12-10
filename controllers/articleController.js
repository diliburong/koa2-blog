const Article = require('../model/article.js')
const md = require('markdown-it')()


const showArticle = async (ctx, next) => {
  let id = ctx.params.id
  let article = await Article.findById(id).exec()
  const title = 'article'
  await ctx.render('article', {
    title,
    tag: article.tag,
    articleTitle: article.title,
    result: md.render(article.content)
  })
}

const showAllArticles = async (ctx, next) => {
  let articles = await Article.find().exec()
  const title = 'home'
  await ctx.render('index', {
    title,
    articles
  })

}

const createArticle  = async (ctx, next) => {
  let text = ctx.request.body.content

}

module.exports = {
  showArticle,
  showAllArticles,
  createArticle
}