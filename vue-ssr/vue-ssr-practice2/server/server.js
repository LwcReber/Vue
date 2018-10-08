const Koa = require('koa')

const  app = new koa()

const isDev = process.env.NODE_ENV  === 'development' // 服务端渲染需要区分开发环境或者生产环境，不同环境差别大


// 中间件 可以拍查错误
app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`);
    await next()
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    if(isDev) {
      ctx.body = err.message
    } else {
      ctx.body = 'please try again later'
    }
  }
})
