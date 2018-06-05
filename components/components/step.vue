<template lang="html">
  <div class="bgW tbPad20" style="padding: 20px">
    <flexbox :gutter="0" style="position:relative">
      <flexboxItem class="stepItem" v-for="(item, idx) in stepObj" :key="idx">
        <div class="" style="position:relative">
          <div class="line" v-if="idx < stepObj.length - 1" v-bind:class="{'active': (idx + 1) < curStep }">
          </div>
          <div class="icon" v-bind:class="{'step-active': (idx + 1) <= curStep }">
            {{idx + 1}}
          </div>
          <div class="step-text" v-bind:class="{'active': (idx + 1) <= curStep }">
            {{item.name}}
          </div>
        </div>
      </flexboxItem>
    </flexbox>
  </div>
</template>

<script>
export default {
  props: {
    stepObj: Array,
    curStep: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/common.less';
.stepItem {
  z-index: 2;
  text-align: center;
  .icon {
    display: inline-block;
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    background-color: #f2f2f2;
    border-radius: 50%;
    color: #666;
  }

  .icon.step-active {
    color: @colorW;
    background-color: @theme-color;
  }
  .step-text {
    padding-top: 10px;
    font-size: 12px;
    color: #666;
  }
  .step-text.active {
    color: @theme-color;
  }
}

.line {
  height: 4px;
  width: 100%;
  position: absolute;
  top: 15px;
  left: 50%;
  background-color: #f2f2f2;
  z-index: -1;
}
.line.active {
  background-color: @theme-color;
}
</style>
