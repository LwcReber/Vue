<template lang="html">
  <div class="">
    <v-header class="header">
      <router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
    </v-header>
    <div class="" v-if="!user.id">
      <router-link to="/login">您还没登录，请先登录</router-link>
    </div>
    <div class="content" v-if="user.id">
      <img :src="logo" alt="">
      <h1>哈哈哈，我已经入坑Vue2</h1>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import logo from './logo.png'
export default {
  data() {
    return {
      logo
    }
  },
  computed: mapState({ user: state => state.user})
}
</script>

<style lang="css">

.content {
  text-align: center;
}
</style>
