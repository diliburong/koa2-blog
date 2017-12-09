const addHelper = (async (ctx, next) => {
	// let currentUser = null;
	// if (ctx.session.userId) {
	// 	currentUser = await models.User.findById(ctx.session.userId);
	// }
	if (!ctx.state) {
		ctx.state = {};
	}
	ctx.state.csrf = ctx.csrf;
	//ctx.state.helpers = helpers;
	// ctx.state.currentUser = currentUser;
	// ctx.state.isUserSignIn = (currentUser != null);
	await next();
})

module.exports = addHelper