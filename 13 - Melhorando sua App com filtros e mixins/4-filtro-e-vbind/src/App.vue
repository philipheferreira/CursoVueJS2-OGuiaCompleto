<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p> CPF: {{ cpfAluno }} </p>
    <p> CPF após o filtro cpf: {{ cpfAluno || acaoCPF }} </p>
    <p> CPF após o filtro cpf com a inversão: {{ cpfAluno | acaoCPF | inverter}} </p>
    <p> CPF apenas com o filtro da inversão:  {{ cpfAluno | inverter}} </p> 
    <hr/>
    <input type="text" :value="cpfAluno"> <!-- Uso de filtro no v-binding na aula -->
    <br />
    <input type="text" :value="cpfAluno | acaoCPF">
    <br />
    <input type="text" :value="cpfAluno | inverter ">
    <br />
    <input type="text" :value="cpfAluno | acaoCPF | inverter">

	</div>
</template>

<script>
export default {
  filters: {
    acaoCPF(valor){ 
      const arr = valor.split('') // divite a string em array
      arr.splice(3, 0, '.') // adiciona um ponto na 3° posição sem deletar ninguém
      arr.splice(7, 0, '.') // adiciona um ponto na 7° posição sem deletar ninguém
      arr.splice(11, 0, '-') // adiciona um traço na 11° posição sem deletar ninguém
      return arr.join('') // junta todo mundo em um unico string
    }
  },
  data() {
    return {
      cpfAluno: '60070080090'
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

input{
  font-size: 2.5rem;
}
</style>
