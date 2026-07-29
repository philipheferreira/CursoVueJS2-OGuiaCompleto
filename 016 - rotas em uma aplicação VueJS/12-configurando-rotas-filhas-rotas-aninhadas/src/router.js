/* Aqui serao feitas as estruturas das rotas aninhadas */

import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio.vue'


import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/usuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario/',
        component: Usuario,
        props: true, /* defino que sera repassado um valor props pela rota e sera recebido */
        children: [ /* Configurado rotas filhas dentro do acesso ao usuario. Eu irei acessar
            essas rotas apos passar um valor especifico dentro da props id, possibilitando 
            o acesso */
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true}, /* dentro desse path
            como nao estou usando o / significa que nao estou comecando da raiz,
            logo estou usando o path mais a cima que ser o path: '/usuario/' como base
            para criar a continuacao do meu caminho. Logo o raciocinio completo ser que
            path: '/usuario/:id' */
            {path: ':id/editar', component: UsuarioEditar, props: true}
        ]
    }]
})