import Message from './message.vue'
import messageFnc from './function'

export default (Vue) => {
  Vue.component(Message.name, Message)
  Vue.prototype.$message = messageFnc
}
