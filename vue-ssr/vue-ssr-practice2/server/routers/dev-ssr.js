// 开发环境处理

const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
let axios = require('axios')
const MemoryFS = require('memory-fs') // 不把文件写入到磁盘，直接写入内存， 可以提高效率
const webpack = require('webpack')
const VuerServerRenderer = require('vue-server-renderer')
const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFS()

serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, stats) => {
  if(err) throw err
  // webpack 打包报错提醒
  stats = stats.toJson()
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.warn(err))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated');
})

const handleSSR = async  (ctx) => {
  // 有包的时候才启动， 防止刚启动时，webpack还没有打包好导致报错
  if(!bundle) {
    ctx.body = '等会，别急'
    return
  }

  let clientManifestResp = await axios.get('http://127.0.0.1:8000/public/vue-ssr-client-manifest.json')

  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8' // 指定为utf-8格式才能是字符串
  )
  const renderer = VuerServerRenderer
    .createBundleRenderer(bundle, {
      inject: false, //  不使用官方的固定模板来注入，自己处理
      clientManifest
    })

    await serverRender(ctx, renderer, template)
}

const router = new Router()

router.get('*', handleSSR)

module.exports = router
