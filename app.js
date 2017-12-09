const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')
const flashMessage = require('koa-flash-message')
const CSRF = require('koa-csrf')

const index = require('./routes/index')
const users = require('./routes/users')
const article = require('./routes/article')

 const helper = require('./testMiddleware/index.js')

// error handler
onerror(app)


// middlewares
app.keys = ['123']
app.use(session(app))
app.use(flashMessage)
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// app.use(myLogger)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// csrf
app.use(new CSRF({
  invalidSessionSecretMessage: 'Invalid session secret',
  invalidSessionSecretStatusCode: 403,
  invalidTokenMessage: 'Invalid CSRF token',
  invalidTokenStatusCode: 403,
  excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
  disableQuery: false
}));


app.use(helper)


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(article.routes(), article.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
