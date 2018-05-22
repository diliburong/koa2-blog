const Category = require('../model/category')


const getAllCategories = async () => {
  let categories = await Category.find().exec()
  return categories
}

const createCategory = async (ctx, next) => {
  let category = new Category({
    name: ctx.request.body.newcategoryName
  })

  let result = await category.save().catch(err => {
    ctx.throw(500, 'server error')
  })
  ctx.status = 200
  ctx.body = {
    result: {
      categoryId: category._id,
      categoryName: category.name
    }
  }
}

// api

const apiGetAllCategories = async (ctx, next) => {
  let categories = await Category.find().exec()

  ctx.body = {
    status: 200,
    categories
  }

}

module.exports = {
  getAllCategories,
  createCategory,
  apiGetAllCategories
}