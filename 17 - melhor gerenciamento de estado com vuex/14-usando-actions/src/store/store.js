import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // representa o estado compartilhado da aplicação
        produtos: [
            { nome: 'Produto 1', quantidade: 7, preco: 14.55 },
            { nome: 'Produto 2', quantidade: 10, preco: 22.99 },
            { nome: 'Produto 3', quantidade: 1, preco: 43.18 }
        ]
    },
    getters: { // Funções que vão ler o estado e fazer uma especie de processamento. Recebem o valor estado e fazer um trabalho e modificação com o valor do dado
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: { /* varias funções que tem a responsabilidade de alterar o estado global 
        da aplicação controlado pelo vuex => são como os setters. É para alterar o estado central. Preferencia que por isso só trabalhe codigos sincronos */
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    }
})