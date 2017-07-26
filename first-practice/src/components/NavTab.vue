<template lang="html">
  <div class="">
    <ul>
      <li v-for='item in routes'>
        <router-link :to='item.path'>{{item.component}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: '/h1',
          component: 'Hello'
        },
        {
          path: '/h2',
          component: 'Hello2'
        }
      ]
    }
  }
}

</script>

<style lang="css">
ul {
  list-style: none;
}
</style>
