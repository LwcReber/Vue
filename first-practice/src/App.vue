<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div class="left">
      <NavTab/>
    </div>
    <div class="right">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import NavTab from './components/NavTab.vue'

export default {
  name: 'app',
  components: {
    NavTab: NavTab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 30%;
  height: 100%;
  border-right: 3px solid #000;
  box-shadow: 1px 0 5px #333;
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  height: 100%;
}
</style>
