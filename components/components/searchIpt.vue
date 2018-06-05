<template lang="html">
  <div>
    <!-- <div class="input-container">
      <div class="icon-btn">
        <i class="iconfont">&#xe65d;</i>
      </div>
      <input v-model="searchText" class="input-cnt" type="text" placeholder="输入币种名字搜索">
      <span class="search-btn ">搜索</span>
    </div> -->

    <div class="clear bgW">
      <div class="input-container">
        <div class="icon-btn">
          <i class="iconfont">&#xe65d;</i>
        </div>
        <input v-model="searchText" class="input-cnt" type="text" placeholder="输入币种名字搜索">
      </div>
      <div class="search-btn" @click="search">
        <span>搜索</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    // 绑定搜索按钮，点击返回搜索内容
    search () {
      this.$emit('search', this.searchText)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/common.less';

.input-container {
  position: relative;
  height:46px;
  float: left;
  width: 86%;
  box-sizing: border-box;
  padding: 5px;
  background-color:#fff;
  .icon-btn {
    position: absolute;
    left: 8px;
    width: 30px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ddd;
    i {
      font-size: 20px;
    }
  }
  .input-cnt {
    padding-left: 30px;
    box-sizing: border-box;
    display:inline-block;
    border:1px solid #ddd;
    border-radius:36px;
    height:36px;
    width:100%;
  }
}
.search-btn {
  float: right;
  box-sizing: border-box;
  text-align: center;
  height:46px;
  line-height: 46px;
  width: 14%;
  color: #222;
}
</style>
