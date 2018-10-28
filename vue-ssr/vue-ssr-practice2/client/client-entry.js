import createApp from './create-app'
import bus from './util/bus'

const {app, router} = createApp()

bus.$on('auth', () => {
  console.log(1321312)
  router.push('/login')
})

router.onReady(() => {
  app.$mount('#root')
})
