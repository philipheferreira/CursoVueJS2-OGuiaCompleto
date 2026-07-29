import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', { // criação de uma diretiva usando hook
  bind(el, binding){
    //el.style.backgroundColor = 'lightgreen' // a partir da diretiva consigo modificar o css
    el.style.backgroundColor = binding.value // Usando a variavel binding é possivel recever variaveus na chamada das diretivas quando forem criadas
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
