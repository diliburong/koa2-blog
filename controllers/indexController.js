const toAboutPage = async (ctx, next) => {
  const title = 'About'
  await ctx.render('about', {
    title,
    nav: 'about'
  })

}


module.exports = {
  toAboutPage
}