<template>
  <div class="">
    <ul>
      <li v-for="item in routers">
        <router-link :to="item.path">{{item.component}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      routers: [
        {
          path: '/home',
          component: 'home'
        },
        {
          path: '/detail',
          component: 'detail'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
