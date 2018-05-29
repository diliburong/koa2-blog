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

const apiCreateCategory = async (ctx, next) => {
  
  let newCategoryName = ctx.request.body.newCategoryName;
  let message = '创建成功'
  ctx.status = 200
  let category

  if(newCategoryName === '' || newCategoryName === undefined) {
    ctx.status = 501
    message = "类别名不能为空"
  } else {
      category = new Category({
      name: ctx.request.body.newCategoryName
    })

    
    let result = await category.save().catch(err => {
      ctx.status = 500
      message = "该类别已存在"
    })

  }
 
  ctx.body = {
    status: ctx.status,
    message,
    categoryId: category._id,
    categoryName: category.name
  }
}

module.exports = {
  getAllCategories,
  createCategory,
  apiGetAllCategories,
  apiCreateCategory
}