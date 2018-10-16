// 扩展组件功能
import Notification from './notification.vue'

export default  {
  extends: Notification,
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.createTimer()
  },
  data () {
    return {
      verticalOffset: 0,
      autoClose: 3000
    }
  },
  beforeDestory () {
    this.clearTimer()
  },
  methods: {
    createTimer () {
      if(this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    }
  }
}
