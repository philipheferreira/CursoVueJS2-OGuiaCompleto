<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
    <Menu/>
    <router-view/><!-- Significa que vai carregar dinamicamente os paths declarados nesse componente Vue -->
  </div>
</template>

<script>
import Menu from './components/template/Menu.vue'
export default {
	comments: {Menu}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
