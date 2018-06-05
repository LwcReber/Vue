<template lang="html">
    <img :width="width" :height="height" :src="src ? src : defaultImg" :onerror="defImg">
</template>

<script>
import defaultImg from '@/assets/default.png'

export default {
  props: {
    src: String,
    width: Number,
    height: Number
  },
  data () {
    return {
      defImg: `this.src="${defaultImg}"`,
      defaultImg: defaultImg
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/common.less';

</style>
