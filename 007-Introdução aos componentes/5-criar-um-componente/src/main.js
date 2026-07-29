import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue' //Chamando contador

Vue.config.productionTip = false
Vue.component('app-contador', Contador) //declarando acesso do componente contador globalmente

new Vue({
  render: h => h(App),
}).$mount('#app')
