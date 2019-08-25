<template>
  <transition>
    <div class="container">
      <slot>{{content}}</slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      content: String
    },
    computed: {
      test () {
        return 'test'
      }
    }
  }
</script>

<style lang="css" scoped>
 .container {
   position: fixed;
   top: 5vh;
   width: 200px;
   height: 200px;
   background-color: bisque;
 }
</style>
