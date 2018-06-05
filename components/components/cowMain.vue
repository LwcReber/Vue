<template lang="html">
  <div class="">
    <div class="lrPad22 tPad16 person-detail-top">
      <img class="bgImg" :src="bgPic"></img>
      <flexbox :align='"stretch"' :justify='"space-between"' :gutter="8" >
        <v-img class="verM" :src="data.headpic" :width="46" :height="46" style="border-radius:50%" alt=""></v-img>
        <flexboxItem :span="2/4">
          <div class="tPad5">
            <span>{{data.realname}}</span>
          </div>
          <div class="fontS12">
            <span>{{data.info}}</span>
          </div>
        </flexboxItem>

        <flexboxItem>
            <div class="subs-num-box">
              <span class="subs-num-cnt">
                <i v-if="data.isOrder" class="iconfont fontS12">&#xe603;</i>
                <span>{{data.order_count}}</span>人订阅
              </span>
            </div>
        </flexboxItem>
      </flexbox>

      <!-- 收益 -->
      <flexbox class="income-list" :justify='"center"' :gutter="0">
        <flexboxItem class="income-list-item" :span="1/4">
          <div>
            <span>昨日</span>
            <i v-if="data.yesterday_down" class="iconfont colOrg fontS12">&#xe60b;</i>
            <i v-else class="iconfont colGr fontS12">&#xe7d5;</i>
          </div>
          <div class="fontS16">
            <span :class='data.yesterday_down == 0 ? "colGr" : "colOrg"'>{{data.yesterday_fit}}</span>
          </div>
        </flexboxItem>
        <flexboxItem class="income-list-item" :span="1/4">
          <div class="">
            <span>一周收益</span>
            <i v-if="data.week_down" class="iconfont colOrg fontS12">&#xe60b;</i>
            <i v-else class="iconfont colGr fontS12">&#xe7d5;</i>
          </div>
          <div class="fontS16">
            <span :class='data.week_down == 0 ? "colGr" : "colOrg"'>{{data.week_fit}}</span>
          </div>
        </flexboxItem>
        <flexboxItem class="income-list-item" :span="1/4">
          <div class="">
            <span>一月收益</span>
            <i v-if="data.month_down" class="iconfont colOrg fontS12">&#xe60b;</i>
            <i v-else class="iconfont colGr fontS12">&#xe7d5;</i>
          </div>
          <div class="fontS16">
            <span :class='data.month_down == 0 ? "colGr" : "colOrg"'>{{data.month_fit}}</span>
          </div>
        </flexboxItem>
        <flexboxItem class="income-list-item" :span="1/4">
          <div class="">
            <span>累计收益</span>
            <i v-if="data.now_down" class="iconfont colOrg fontS12">&#xe60b;</i>
            <i v-else class="iconfont colGr fontS12">&#xe7d5;</i>
          </div>
          <div class="fontS16">
            <span :class='data.now_down == 0 ? "colGr" : "colOrg"'>{{data.total_fit}}</span>
          </div>
        </flexboxItem>
      </flexbox>
    </div>
  </div>
</template>

<script>
import bgPic from '@/assets/bgsmblu.png';

export default {
  data () {
    return {
      bgPic: bgPic
    }
  },
  props: {
    data: Object
  }
}
</script>

<style lang="less" scoped>
@import '../css/common.less';

.person-detail-top {
  color: @colorW;
  position: relative;
}
.bgImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.subs-num-box {
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  width: 100%;
  border: 1px solid #fff;
}
.income-list {
  font-size: 12px;
  padding-top: 30px;
  padding-bottom: 27px;
  .income-list-item {
    text-align: center;
  }
}
</style>
