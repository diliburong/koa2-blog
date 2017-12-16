module.exports = async (ctx, next) => {
  const title = 'home'
  console.log(url + '  123555')
  console.log(ctx.session)
  await ctx.render('index', {
    title,
    url,
    nav: 'home'
  })
}