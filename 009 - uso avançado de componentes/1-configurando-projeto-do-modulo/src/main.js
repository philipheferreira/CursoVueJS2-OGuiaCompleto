import './estilo.css' // importa o arquivo style.css separado dos demais, em vez de ser dentro dos arquivos vue. chamando aqui ele é integrado na aplicação
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
