import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/* Mantive para fazer os codigos anteriores funcionarem. Agora a diretiva funciona localmente, nao sendo mais necessario usar essas para as outras funcionarem, se tirar apenas as que foram
declaradas nas aulas anteiores irao parar de funcionar porque elas funcionam com essa declaracao global, as ultimas duas funcionam com a declaracao local, que foi localmente declarada
no componente App.vue */
Vue.directive('destaque', {
  bind(el, binding){

    let atraso = 0
    if(binding.modifiers['atrasar']) atraso = 3000

    setTimeout(() => {
      if(binding.arg === 'fundo'){
        el.style.backgroundColor = binding.value
      }else{
        el.style.color = binding.value
      }
    }, atraso)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
