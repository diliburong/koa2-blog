const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')
const flashMessage = require('./middleware/flashMessage.js')
const CSRF = require('koa-csrf')
const cors = require('koa2-cors')
const jwt = require('koa-jwt')
const config = require('./config/index')

const router = require('./routes/index')
const api = require('./routes/api/index')

const helper = require('./middleware/index.js')

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

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function (ctx, next) {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});




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

//
app.use(cors({
  origin: function (ctx) {
      return "*"; // 允许来自所有域名请求
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


// routes

router.use(
  '/api',
  jwt({
    secret: config.jwt_secret
  }).unless({
    path: [/^\/api\/login/]
  }),
  api.routes()
)

app.use(router.routes(), router.allowedMethods())
// app.use(api.routes(), api.allowedMethods())

// jwt



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

console.log('Server running at http://127.0.0.1:3000/');

module.exports = app
