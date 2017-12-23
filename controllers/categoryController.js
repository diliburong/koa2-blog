const Category = require('../model/category')


const getAllCategories = async () => {
    let categories = await Category.find().exec()
    return categories;
}

const createCategory = async(ctx) => {
    let category = new Category({
        name: ctx.require.body.categoryName
    })

    let result = await category.save().catch(err => {
        ctx.throw(500, 'server error')
    })
    return result
}


module.exports = {
    getAllCategories,
    createCategory
}