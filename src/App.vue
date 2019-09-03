<template>
  <div id="app">
    <the-nav />
    <div class="buffer" />
    <router-view class="container"/>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'
export default {
  name: 'App',
  components: {
    TheNav,
  },
}
</script>

<style lang="scss">
@import "./style/buefy-changes";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.buffer {
  margin-bottom: 3em;
}
</style>
