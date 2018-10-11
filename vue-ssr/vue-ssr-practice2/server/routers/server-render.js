const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.header['Content-type'] ='text/html'
  const context = { url: ctx.path } // 用在服务端渲染传到vue-renderer

  try {
    const appString = await renderer.renderToSrting(context)
    const html = ejs.render(template, {
      appString,
      style: context.renderStyle(),
      scripts: context.renderScripts()
    })
    ctx.body = html
  } catch (err) {
    console.log('render err', err);
    throw err
  }
}
