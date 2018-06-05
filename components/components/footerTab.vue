<template lang="html">
  <div class="footer">
    <tabbar @on-index-change="onIndexChange" style="background-color:#fff">
      <tabbar-item v-for="item in footerTab" :key="item.path" :selected="item.path == $route.path" :link="item.path">
        <img slot="icon" :src="item.icon">
        <img slot="icon-active" :src="item.iconActive">
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import homeIcon from '@/assets/home.svg'
import homeSelIcon from '@/assets/homeSel.svg'
import marketIcon from '@/assets/market.svg'
import marketSelIcon from '@/assets/marketSel.svg'
import newsInfoIcon from '@/assets/newsInfo.svg'
import newsInfoSelIcon from '@/assets/newsInfoSel.svg'
import userIcon from '@/assets/user.svg'
import userSelIcon from '@/assets/userSel.svg'
import Cookies from 'js-cookie'
import util from '@/libs/util.js'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
   return {
     footerTab: [
       { tab: 'home', name: '大牛', path: '/home', icon: homeIcon, iconActive: homeSelIcon },
       { tab: 'market', name: '行情', path: '/market', icon: marketIcon, iconActive: marketSelIcon },
       { tab: 'newsInfo', name: '快讯', path: '/newsInfo', icon: newsInfoIcon, iconActive: newsInfoSelIcon  },
       { tab: 'user', name: '我的', path: '/user', icon: userIcon, iconActive: userSelIcon }
     ]
   }
 },
 computed: {
   openId () {
     return Cookies.get('openid');
   }
 },
 methods: {
   onIndexChange (val) {
     if (val == 3) {
       if (!this.openId) {
           // util.accredit();
           return;
        }
     }
   }
 }
}
</script>
<style lang="less" scoped>
@import '../css/common.less';

  .footer {
    position:fixed;bottom:0px;width:100%;
    z-index: 99999;
  }
</style>
