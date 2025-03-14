<!-- Filtros: são transformações que podemos fazer em cima de valores assim como se pode fazer transformações em propriedades computadas.
 Os filtros em algumas situações são mais praticos de serem usados supersimples. 
 Os Mixins são formas de reuso-->

<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p> {{ cpf | cpf }} </p> <!-- Para usar a interpolação é só usar um pipe -->
	</div>
</template>

<script>
export default {
  filters: {
    cpf(valor){ 
      const arr = valor.split('')
      arr.splice(3, 0, '.') // O splice adiciona na 3° posição um ponto. O 0 é que não deleta nada do array criado que o nome é arr
      arr.splice(7, 0, '.') // O splice adiciona na 7° posição um ponto. O 0 é que não deleta nada do array criado que o nome é arr
      arr.splice(11, 0, '-') // O splice adiciona na 11° posição uma barra. O 0 é que não deleta nada do array criado que o nome é arr
      return arr.join('') // Ele retorna um array somando todos os valores separados em um unico array. Mais os pontos e o traço
    }
  },
  data() {
    return {
      cpf: '60070080090' // sempre bom usar como string pra evitar problemas referentes a number
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
