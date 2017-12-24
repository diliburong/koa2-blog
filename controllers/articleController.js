const Article = require('../model/article.js')
const CategoryController = require('./categoryController')
const md = require('markdown-it')()


const showArticle = async (ctx, next) => {
  let id = ctx.params.id
  let article = null
  try {
    article = await Article.findById(id).populate('category').exec()
  } catch (err) {
    ctx.throw(404)
  }
  
  const title = article.title
  await ctx.render('articles/article', {
    title,
    tag: article.tag,
    articleTitle: article.title,
    category: article.category.name,
    result: md.render(article.content),
    nav: 'article'
  })
}

const showAllArticles = async (ctx, next) => {
  let articles = await Article.find().populate('category').exec()
  const title = 'home'
  await ctx.render('index', {
    title,
    articles,
    nav: 'home'
  })
}

const toCreateArticlePage = async (ctx, next) => {
  const title = 'Create Article'

  if (!ctx.session.userId) {
    ctx.redirect('/login')
  }

  let categories = await CategoryController.getAllCategories()
  console.log(categories)
  await ctx.render('articles/create', {
    title,
    articleFormPath:'create',
    categories: categories
  })
}

const createArticle  = async (ctx, next) => {
  let noteTitle = ctx.request.body.note_title
  let text = ctx.request.body.content
  let categoryId = ctx.request.body.categoryId

  let article = new Article({
    title: noteTitle,
    author: 'stutter',
    description: "",
    content: text,
    tag: 'test',
    category: categoryId
  })

  article.save().catch(err => {
    ctx.throw(500, 'server error')
  })
  ctx.redirect('/article/' + article.id)
}

const toEditArticlePage = async (ctx, next) => {
  let id = ctx.params.id
  let article
  try {
    article = await Article.findById(id)
  } catch (error) {
    ctx.throw(404)
  }
  const title = 'Edit Article'
  console.log(article)
  await ctx.render('articles/edit', {
    title,
    articleTitle: article.title,
    articleContent: article.content,
    nav: 'article'
  })
}

const editArticle = async (ctx, next) => {
  let id = ctx.params.id
  let noteTitle = ctx.request.body.note_title
  let text = ctx.request.body.content

  let updateStr = {
    title: noteTitle,
    content: text,
    updated: Date.now()
  }

  try {
    Article.findByIdAndUpdate(id, updateStr)
  } catch (error) {
    ctx.throw(404)
  }
}

module.exports = {
  showArticle,
  showAllArticles,
  toCreateArticlePage,
  createArticle,
  toEditArticlePage,
  editArticle
}