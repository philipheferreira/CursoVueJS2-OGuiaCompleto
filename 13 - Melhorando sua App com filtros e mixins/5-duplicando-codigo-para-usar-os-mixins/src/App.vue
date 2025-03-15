<!-- Montando cenario com erro de duplicação -->
<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p> CPF: {{ cpfAluno }} </p>
    <p> CPF após o filtro cpf: {{ cpfAluno || acaoCPF }} </p>
    <p> CPF após o filtro cpf com a inversão: {{ cpfAluno | acaoCPF | inverter}} </p>
    <p> CPF apenas com o filtro da inversão:  {{ cpfAluno | inverter}} </p>
    <hr/>
    <input type="text" :value="cpfAluno">
    <br />
    <input type="text" :value="cpfAluno | acaoCPF">
    <br />
    <input type="text" :value="cpfAluno | inverter ">
    <br />
    <input type="text" :value="cpfAluno | acaoCPF | inverter">
    <hr/>
    <hr/>
    <Frutas/>
    <hr/>
    <div> <!-- lista replicada localmente -->
        <ul>
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" /> <!-- Apertando enter adiciona -->
    </div>
	</div>
</template>

<script>
import Frutas from './components/Frutas.vue'

export default {
  components: { Frutas },
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
      cpfAluno: '60070080090',
      fruta: '',
      frutas: ['banana', 'maça', 'laranja'] // Lista generica
    }
  },
        methods: {
            add() {
                this.frutas.push(this.fruta) // Metodo para adicionar fruta
                this.fruta = '' // limpa depois de adicionar
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
