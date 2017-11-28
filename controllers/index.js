module.exports = async (ctx, next) => {
  const title = 'home'
  const url = ctx.url
  console.log(url + '  123555')
  await ctx.render('index', {
    title,
    url
  })
}