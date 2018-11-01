import createApp from './create-app'
// import { log } from 'util';

// context 就是server-render 的context
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const mathedComponents = router.getMatchedComponents()
      if (!mathedComponents.length) {
        return reject(new Error('no component matched'))
      }
      Promise.all(mathedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            route: router.currentRoute,
            store
          })
        }
      })).then(data => {
        console.log(store.state)
        // 数据请求回来后，再渲染app
        context.meta = app.$meta()
        resolve(app)
      })
    })
  })
}
