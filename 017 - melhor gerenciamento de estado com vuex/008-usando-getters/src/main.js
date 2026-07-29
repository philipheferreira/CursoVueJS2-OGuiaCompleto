import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

import Painel from './components/Painel'
Vue.component('componentPainel', Painel)

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	store, // store ta sendo rodado dentro do Vue no momento renderização junto com a aplicação
	render: h => h(App),
}).$mount('#app')
