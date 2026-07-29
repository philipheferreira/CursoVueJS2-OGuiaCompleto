import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio.vue'
import Usuario from './components/usuario/usuario.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario/:id', //os 2 pontos significa que ira receber parametros para poder direcionar as operações. Ai ele espera receber um id
        component: Usuario
    }]
})