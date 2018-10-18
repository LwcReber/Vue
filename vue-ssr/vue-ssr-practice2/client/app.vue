<template>
  <div id="app">
    <div id="cover"></div>

    <Header>3243213211</Header>
    <router-view></router-view>


    <!-- <notification  content="test notify"/> -->
    <!-- <todo></todo> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './layout/todo.vue'

export default {
  metaInfo: {
    title: 'reber\'s todo app'
  },
  components: {
    Header,
    Footer,
    Todo
  },
  mounted () {

  },
  methods: {
    notify () {
      this.$notify({
        content: 'test',
        btn: 'close'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>
