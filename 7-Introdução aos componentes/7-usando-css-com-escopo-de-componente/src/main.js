import Vue from 'vue'
import App from './App.vue'
import Contadores from './contador.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
