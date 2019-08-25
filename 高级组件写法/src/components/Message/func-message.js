import Message from './message.vue'

export default {
  extends: Message,
  computed: {
    test () {
      return 'func-test'
    }
  }
}
