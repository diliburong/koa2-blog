const Article = require('../model/article.js')
const md = require('markdown-it')()


const showArticle = async (ctx, next) => {
  let id = ctx.params.id
  let article = await Article.findById(id).exec()
  const title = article.title
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

const toCreateArticlePage = async (ctx, next) => {
  const title = 'Create Article'

  if (!ctx.session.userId) {
    ctx.redirect('/login')
  }

  await ctx.render('articles/create', {
    title,
    articleFormPath:'/create'
  })
}

const createArticle  = async (ctx, next) => {
  let noteTitle = ctx.request.body.note_title
  let text = ctx.request.body.content

}

const toEditArticlePage = async (ctx, next) => {
  let id = ctx.params.id
  let article = await Article.findById(id).exec()
  const title = 'Edit Article'
  console.log(article)
  await ctx.render('articles/edit', {
    title,
    articleTitle: article.title,
    articleContent: article.content
  })
}

const editArticle = async (ctx, next) => {

}

module.exports = {
  showArticle,
  showAllArticles,
  toCreateArticlePage,
  createArticle,
  toEditArticlePage,
  editArticle
}