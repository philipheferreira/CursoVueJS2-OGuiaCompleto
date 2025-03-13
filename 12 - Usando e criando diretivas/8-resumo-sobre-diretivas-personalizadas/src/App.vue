
<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr/>
    <p v-text="'Usando diretiva para v-text'"></p>
    <p v-html="'Usando diretiva <strong> V-html </strong>'"></p>
    <hr>
    <p v-destaque="'red'">Usando diretiva personalizada</p> <!-- referente a aula 4 -->
    <p v-destaque="cor">Usando diretiva personalizada</p> <!-- referente a aula 5 -->
    <p v-destaque:fundo="cor">Usando diretiva personalizada</p> <!-- Referente a aula 6 -->
    <p v-destaque:fundo="cor">Usando diretiva personalizada com modificador</p> <!-- Referente a aula 7 -->
	</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      cor: 'blue',
      cor2: 'green'
    }
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
