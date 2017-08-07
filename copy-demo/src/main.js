import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import components from './components' // 加载公共组件
import store from './store/'
import routes from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

// 注册全局的组件
Object.keys(components).forEach((key) => {
  // 找到第一个字母,将其修改为大写
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`v${name}`, components[key])
})

// 路由切换前判断用户是否已经登录
router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  // true 登录， false 未登录
  var isLogin = Boolean(store.state.user.id)
  // 强制切换到登录界面
  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
