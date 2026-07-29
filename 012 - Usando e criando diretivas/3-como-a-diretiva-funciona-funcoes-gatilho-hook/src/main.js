import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {

}) // para poder criar diretivas proprias globalmente

new Vue({
  render: h => h(App),
}).$mount('#app')
