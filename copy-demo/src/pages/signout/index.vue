<template lang="html">
  <div class="">
    <v-header>
      <router-link slot="left" to="home">返回</router-link>
    </v-header>
    <div class="ensureSignout">
      <button v-on:click="submit">确认退出</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNOUT } from '../../store/user'
export default {
  methods: {
    ...mapActions([USER_SIGNOUT]),
    submit() {
      this.USER_SIGNOUT()
      this.$router.replace({path: '/login'})
    }
  }
}
</script>

<style lang="css">
.header {
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
}

</style>
