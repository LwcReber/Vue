<template lang="html">
  <header class="header">
    <div class="item left">
      <slot name='left'></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="item right">
      <slot name='right'></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css">
.header {
  position: relative;
  background-color: #097;
  line-height: 50px;
  margin-bottom: 20px;
}
.item {
  position: absolute;
  top: 0;
  bottom: 0;
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
.title {
  text-align: center;
}
</style>
