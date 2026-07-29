<template>
  <div id="app">

    <app-footer></app-footer> <!-- Toda vez que eu colocar um ifem na variavel dentro de data retorn o Vue deduz qual vai ser a parte com maiusculo automaticamente -->
    <app-menu></app-menu>
    <app-toolbar></app-toolbar>
    <Dropdown></Dropdown>
    <app-carousel></app-carousel>

  </div>
</template>

<script>
import Footer from '../src/components/template/Footer.vue'
import Menu from '../src/components/template/Menu.vue'
import Toolbar from '../src/components/template/Toolbar.vue'
import Dropdown from './components/user/DropDown.vue'
import Carousel  from './components/widgets/Carousel.vue' 
export default {
  name: 'App',
  components: {
    appFooter : Footer, 
    appMenu : Menu,
    appToolbar : Toolbar, // Caso todas as necessidades do vue em criação de variaveis esteja atendido não é necessario para o Vue o nome dado estar entre parenteses
    Dropdown, // Outra forma de chamada é não nomear os nomes, só chamar da forma direta que eles foram criadas
    appCarousel : Carousel
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
