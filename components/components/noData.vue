<template lang="html">
    <div class="fullScr" :style="{top: top + 'px', bottom: bottom + 'px'}">
        <div class="noData">
            <p class="iconfont" style="font-size:40px;">&#xe62c;</p>
          <div class="">
            暂无数据
          </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    top: String,
    bottom: String
  }
}
</script>

<style lang="less" scoped>
@import '../css/common.less';
.fullScr {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index: 9999;
}

.noData {
    font-size: 14px;
    color: #999999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    z-index: 2;
    text-align: center;
}

.noData p {
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid #bbb;
    border-radius: 50%;
    color: #d1d1d1;
}
</style>
