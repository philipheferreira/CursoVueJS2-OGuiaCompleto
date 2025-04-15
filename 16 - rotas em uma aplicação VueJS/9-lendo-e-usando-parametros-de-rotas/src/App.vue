<template>
  <div id="app">
      <h1>Rotas com VueRouter</h1>
      <Menu />
  </div>
</template>

<script>
import Menu from './components/template/Menu.vue'
export default {
  name: 'inicioApp',
  components: {Menu}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
