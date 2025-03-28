import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor){ // filtro declarado globalmente para inverter algum valor
    return valor.split('').reverse().join('') // split = dividi, reverse = inverte e join = reagrupa
})

new Vue({
  render: h => h(App),
}).$mount('#app')
