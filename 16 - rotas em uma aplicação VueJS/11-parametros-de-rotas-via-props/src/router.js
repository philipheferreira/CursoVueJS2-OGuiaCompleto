import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio.vue'
import Usuario from './components/usuario/Usuario.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    router: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario/:id',
        component: Usuario
    }]
})