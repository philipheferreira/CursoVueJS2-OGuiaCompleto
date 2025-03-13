<!-- O foco dessa aula é sobre diretivas -->

<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr/>
    <p v-text="'Usando diretiva para v-text'"></p> <!-- Diretiva que print um objeto na pagina. Ele está esperando uma string então será impresso na tela -->
    <p v-html="'Usando diretiva <strong> V-html </strong>'"></p> <!-- É uma diretiva que printa um texto na tela e dentro pode usar comandos de html -->
	</div>
</template>

<script>

export default {
  name: 'App',
  components: {}
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
