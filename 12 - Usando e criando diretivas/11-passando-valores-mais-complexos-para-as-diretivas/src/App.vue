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
    <p v-destaque:fundo.atrasar="cor">Usando diretiva personalizada com modificador</p> <!-- Referente a aula 7 e a de agora-->

    <h1>Diretivas Registradas Localmente</h1>

    <p v-destaque-local:fundo.atrasar="{cor1: 'green', atraso: 2000}">Usando diretiva personalizada localmente</p> <!-- Declarando um objeto com parametros para serem passados -->
    <p v-destaque-local.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando diretiva personalizada localmente</p> <!-- Declarando um objeto com parametros para serem passados -->

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
          
          const cor1 = binding.value.cor1 // Alterar o valor pra receber o que está sendo passado no objeto declarado a cima do value cor1
          const cor2 = binding.value.cor2 // Alterar o valor pra receber o que está sendo passado no objeto declarado a cima do value cor2
          let corAtual = cor1

          setTimeout(() => {
            if(binding.modifiers['alternar']){
              setInterval(() => {
                corAtual = corAtual === cor1 ? cor2 : cor1
                aplicarCor(corAtual)
              }, binding.value.intervalo) //Alterando para definir o intervalo que vai ser recebido
            } else {
              aplicarCor(binding.value.cor1) //Receber a cor 1
            }
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
