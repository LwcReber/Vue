import Vue from 'vue'
import App from './app.vue'

import './assets/images/link.jpg'
import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'

const root = document.createComment('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)