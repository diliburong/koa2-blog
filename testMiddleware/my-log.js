const abc = (async (ctx, next) => {
	console.log(ctx.url)
	await next();
})

module.exports = abc