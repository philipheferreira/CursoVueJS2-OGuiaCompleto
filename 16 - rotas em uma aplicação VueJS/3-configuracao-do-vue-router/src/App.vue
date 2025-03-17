<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
    <router-view/><!-- Significa que vai carregar dinamicamente os paths declarados nesse componente Vue -->
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
