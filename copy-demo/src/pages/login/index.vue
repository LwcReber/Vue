<template>
  <div class="">
    <v-header>
      <router-link slot="left" to="/">返回</router-link>
    </v-header>
    <form class="" v-on:submit.prevent="submit">
      <div class="">
        <div class="" v-show="btn && !form.id">id不能为空</div>
        <input type="number" placeholder="输入你的id" v-model="form.id">
      </div>
      <div class="">
        <div v-show="btn && !form.name">用户名不能为空</div>
        <input type="text" placeholder="输入你的用户名" v-model="form.name">
      </div>
      <button>登录</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../../store/user'

export default {
  data() {
    return {
      btn: false, // true 为已经提交，false为没有提交
      form: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
            ...mapActions([USER_SIGNIN]),
			submit() {
				this.btn = true
        console.log(this.form.id);
				if(!this.form.id || !this.form.name) return
				this.USER_SIGNIN(this.form)
				this.$router.replace({ path: '/home' })
			}
		}

}
</script>

<style lang="css">
</style>
