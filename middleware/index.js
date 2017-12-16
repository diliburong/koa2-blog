const User = require('../model/user')
const Utils = require('../util/index')


const addHelper = (async (ctx, next) => {
	let currentUser = null;
	if (ctx.session.userId) {
		currentUser = await User.findById(ctx.session.userId);
	}

	if (!ctx.state) {
		ctx.state = {};
	}
	ctx.state.csrf = ctx.csrf;
	ctx.state.Utils = Utils;
	ctx.state.currentUser = currentUser;
	ctx.state.isUserLogin = (currentUser != null);
	await next();
})

module.exports = addHelper