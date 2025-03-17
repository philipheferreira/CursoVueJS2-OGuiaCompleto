import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio.vue'
import Usuario from './components/usuario/usuario.vue'

Vue.use(Router)// registrar o plugin Router dentro do vue. agora vai dar para acessar os plugins router e a rota router

export default new Router({// Função construtora Router
    routes: [{// dentro disso aqui defini o componente responsavel por criar as rotas de acesso
        path: '/',//Quando a pagina inicializar essa será a rota acessada
        component: Inicio// O componente inicio será carregado no inicio da aplicação
    }, {//Segunda rota configurada
        path: '/usuario',
        component: Usuario
    }]
})