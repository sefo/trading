<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Trading/>
  </div>
</template>

<script>
import Trading from './components/Trading.vue'

export default {
  name: 'app',
  components: {
    Trading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
