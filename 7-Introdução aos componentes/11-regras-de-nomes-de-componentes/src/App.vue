<template>
  <div id="app">

    <app-footer></app-footer>
    <app-menu></app-menu>
    <app-toolbar></app-toolbar>
    <app-dropdown></app-dropdown>
    <app-carousel></app-carousel>

  </div>
</template>

<script>
import Footer from '../src/components/template/Footer.vue'
import Menu from '../src/components/template/Menu.vue'
import Toolbar from '../src/components/template/Toolbar.vue'
import Dropdown from '../src/components/user/Dropdown.vue'
import Carousel  from './components/widgets/Carousel.vue' 
export default {
  name: 'App',
  components: {
    'app-footer' : Footer,
    'app-menu' : Menu,
    'app-toolbar' : Toolbar,
    'app-dropdown' : Dropdown,
    'app-carousel' : Carousel
  }
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
