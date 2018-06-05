<template lang="html">
  <div class="">
    <x-button :class="['btn', countdownTimes > 0 ? 'forbit' :'sendCode']" @click.native="sendCode">
      {{countdownTimes > 0 ? countdownTimes : '发送验证码'}}
    </x-button>
  </div>
</template>

<script>
import util from '@/libs/util.js'
import {
  XButton,
} from 'vux'
export default {
  components: {
    XButton,
  },
  props: {
    mobile: String,
    
  },
  data () {
    return {
      countdownTimes: 0,
      maxTime: 60 // 倒计时秒数  默认60秒
    }
  },
  methods: {
    testMobile (mobile) {
      let pattern = /^1[34578]\d{9}$/;
      return pattern.test(mobile) ? true : false;
    },
    // 发送验证码
    sendCode () {
      if( this.countdownTimes > 0 ) {
        return;
      }
      if (!this.mobile) {
        util.toast('请输入手机号码')
        return;
      }
      if (!this.testMobile(this.mobile)) {
        util.toast('手机号码输入错误')
        return;
      }
      this.countdownTimes = this.maxTime;
      this.$ajax
        .request({
          action: "common.SendRegCode",
          data: {mobile: this.mobile}
        })
        .then((response) => {
          let setTime = setInterval( () => {
              this.countdownTimes--;
              if (this.countdownTimes <= 0) {
                  clearInterval(setTime);
              }
          }, 1000);
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  font-size: 12px;
  height:30px;
  line-height:30px;
  margin-left: 12px;
  color: #fff;
}
.forbit {
  width: 40px;
  background-color: #cecece;
}
.sendCode {
  width:90px;
  background-color:#68acff
}
</style>
