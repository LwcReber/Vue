import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp()

    router.push(context.url)

    router.onReady(() => {
      // 根据url匹配组件
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component mactched'))
      }
      resolve(app)
    })
  })
}
