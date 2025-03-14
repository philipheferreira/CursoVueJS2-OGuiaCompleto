<template>
	<div id="app">
		<h1>Diretivas Registradas Globalmente</h1>
    <hr/>
    <p v-text="'Usando diretiva para v-text'"></p>
    <p v-html="'Usando diretiva <strong> V-html </strong>'"></p>
    <hr>
    <p v-destaque="'red'">Usando diretiva personalizada</p> <!-- referente a aula 4 -->
    <p v-destaque="cor">Usando diretiva personalizada</p> <!-- referente a aula 5 -->
    <p v-destaque:fundo="cor">Usando diretiva personalizada</p> <!-- Referente a aula 6 -->
    <p v-destaque:fundo.atrasar="cor">Usando diretiva personalizada com modificador</p> <!-- Referente a aula 7 -->

    <h1>Diretivas Registradas Localmente</h1>

    <p v-destaque-local:fundo.atrasar="'lightblue'">Usando diretiva personalizada localmente</p>
    <p v-destaque-local.atrsar="cor">Usando diretiva personalizada localmente</p>

	</div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  directives: {
      'destaque-local': {
        bind(el, binding){
            const aplicarCor = cor => {
              if(binding.arg === 'fundo'){
              el.style.backgroundColor = cor
            }else{
              el.style.color = cor
            }
            }
          let atraso = 0
          if(binding.modifiers['atrasar']) atraso = 3000

          setTimeout(() => {
            aplicarCor(binding.value)
          }, atraso)
        }
      }
  },
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
