import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', { // criação de uma diretiva usando hook
  bind(el){ /* bind(el, binding){ */
    el.style.backgroundColor = 'lightgreen' // a partir da diretiva consigo modificar o css
  }

  /*
  A baixo esta a esquematica completa de um bind:
  bind(el, binding, vnode){
  
  }
  
  */
})

new Vue({
  render: h => h(App),
}).$mount('#app')
