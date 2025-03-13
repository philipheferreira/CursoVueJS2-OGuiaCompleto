import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
  bind(el, binding){

    let atraso = 0
    if(binding.modifiers['atrasar']) atraso = 3000 // define que se tiver um atraso entre os modificadores então a variavel atraso recebe 3000 milisegundos

    setTimeout(() => { // setTimeout controla todo o processo de decisão repassando o tempo
      if(binding.arg === 'fundo'){
        el.style.backgroundColor = binding.value
      }else{
        el.style.color = binding.value
      }
    }, atraso)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
