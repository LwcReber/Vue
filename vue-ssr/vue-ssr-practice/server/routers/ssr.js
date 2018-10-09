// 生产环境处理
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const serverRender = require('./server-render')
const VueServerRender = require('vue-server-renderer')
const clientManifest = require('../../dist/vue-ssr-client-manifest.json')
const renderer = VueServerRender.createBundleRenderer(
  path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'),
  {
    inject: false,
    clientManifest
  }
)

const template = fs.readFileSync(
  path.join(__dirname, '../server.template.ejs'),
  'utf-8'
)

const pageRouter = new Router()
pageRouter.get('*', async (ctx) => {
  await serverRender(ctx, renderer, template)
})
module.exports = pageRouter