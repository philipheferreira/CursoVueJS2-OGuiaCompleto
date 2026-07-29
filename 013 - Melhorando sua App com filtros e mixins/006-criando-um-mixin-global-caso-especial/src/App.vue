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
    <h3> Componente sendo chamado </h3>
    <Frutas/>
    <hr/>
    <h4> Lista sendo chamada localmente usando Mixin </h4>
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
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin' // segundo mixin sendo criado

export default {
  components: { Frutas },
  mixins: [frutasMixin, usuarioMixin], /* mixins significa mistura, no caso é como se ele 
  fizesse uma mesclagem daquilo que está nesse component. Ele faz o merge das informações.
  Caso tenha metodos e variaveis com nomes parecidos nos dois ele da preferencia para
  os registrados nesse componente */
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
      frutas: ['abacate'] /* Como é uma lista que está presente também no mixin esse ira sobrepor o do mixin porque o que estiver no componente terá preferencia */
    }
  },
        methods: {}
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
