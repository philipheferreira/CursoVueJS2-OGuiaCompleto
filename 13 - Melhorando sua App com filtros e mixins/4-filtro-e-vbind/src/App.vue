<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p> CPF: {{ cpfAluno }} </p>
    <p> CPF após o filtro cpf: {{ cpfAluno || acaoCPF }} </p>
    <p> CPF após o filtro cpf com a inversão: {{ cpfAluno | acaoCPF | inverter}} </p>
    <p> CPF apenas com o filtro da inversão:  {{ cpfAluno | inverter}} </p> 
	</div>
</template>

<script>
export default {
  filters: {
    acaoCPF(valor){ 
      const arr = valor.split('') 
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.') 
      arr.splice(11, 0, '-')
      return arr.join('') 
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
</style>
