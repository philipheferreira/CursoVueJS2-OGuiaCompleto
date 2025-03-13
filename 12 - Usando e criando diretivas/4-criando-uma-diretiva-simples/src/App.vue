<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr/>
    <p v-text="'Usando diretiva para v-text'"></p>
    <p v-html="'Usando diretiva <strong> V-html </strong>'"></p>
    <hr>
    <p v-destaque="'red'">Usando diretiva personalizada</p> <!-- Chamada da diretiva criada -->
    <p v-destaque="cor">Usando diretiva personalizada</p> <!-- O v-destaque está reutilizando uma variavel declarado dentro do data return -->
	</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      cor: 'blue' /* Variavel declarada para realizar o repasse pelo binding declarado na chamada da diretiva */
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
