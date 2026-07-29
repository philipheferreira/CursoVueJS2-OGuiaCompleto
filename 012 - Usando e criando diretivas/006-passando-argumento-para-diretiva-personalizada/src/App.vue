<!-- Exemplo de organização de uma diretiva, no caso sua anatomia:
  v-teste:argumento.mod1.mod2.mod3="'valor'"

-->

<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr/>
    <p v-text="'Usando diretiva para v-text'"></p>
    <p v-html="'Usando diretiva <strong> V-html </strong>'"></p>
    <hr>
    <p v-destaque="'red'">Usando diretiva personalizada</p>
    <p v-destaque="cor">Usando diretiva personalizada</p>
    <p v-destaque:fundo="cor">Usando diretiva personalizada</p> <!-- Usando um argumento dentro da diretiva para selecionar a opção mais viavel na chamada -->
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
