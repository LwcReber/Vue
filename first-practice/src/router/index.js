import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h1',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/h2',
      name: 'Hello2',
      component: Hello2
    },
  ]
})
