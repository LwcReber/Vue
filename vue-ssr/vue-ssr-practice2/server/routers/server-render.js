const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['ContentType'] = 'text/html'
  //  用在服务端渲染，传到vueserverrenderer，方便渲染html
  const context = { url: ctx.path }
  try {
    const appString = await renderer.renderToString(context) // 一个promise对象
    const {
      title
    } = context.meta.inject()
    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text()
    })
    ctx.body = html
  } catch (err) {
    console.log('render', err);
    throw err
  }
}
