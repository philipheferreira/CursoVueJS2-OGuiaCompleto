import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
  bind(el, binding){
    //el.style.backgroundColor = 'lightgreen'

    if(binding.arg === 'fundo'){ // O if verifica o argumento no binding, se for igual a fundo então essa opção sera ativada
      el.style.backgroundColor = binding.value
    }else{ // qualquer outra situação será essa outra opção que é a cor do texto
      el.style.color = binding.value
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
