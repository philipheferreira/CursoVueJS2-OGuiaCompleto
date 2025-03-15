import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor){ // filtro declarado globalmente para inverter algum valor
    return valor.split('').reverse().join('') // split = dividi, reverse = inverte e join = reagrupa
})

// criação de mixin global que ira obrigatoriamente ser aplicado a todos componentes. Incluindo a instancia do Vue
Vue.mixin({
  data() {
    return {
      globalMixin: 'Estou no Mixin Global' // Variavel criada e aplicada globalmente pelo mixin global
    }
  },
    created() {
      console.log('Created - Mixin Global!')
    }
})

new Vue({
  render: h => h(App),
  created() { // instancia do vue criada e realiza o console.log
    console.log('Created - Vue Instance')
  }
}).$mount('#app')
