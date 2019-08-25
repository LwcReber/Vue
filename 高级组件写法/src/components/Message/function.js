import funcMessage from './func-message'
import Vue from 'vue'
const messgeConstructor = Vue.extend(funcMessage)
let seed = 1
const message = (options) => {
  const instance = new messgeConstructor({
    propsData: options
  })

  const id = `message_${seed++}`
  instance.id = id
  instance.vm = instance.$mount() // 生成html标签
  console.log(instance)
  document.body.appendChild(instance.vm.$el)
}
export default message
