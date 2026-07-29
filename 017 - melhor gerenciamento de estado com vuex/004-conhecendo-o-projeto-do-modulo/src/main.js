import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Painel from './components/Painel'
Vue.component('componentPainel', Painel)

Vue.filter('dinheiro', valor => { // filtro criado, que quando citado ira retornar o valor da operação filtrada
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
