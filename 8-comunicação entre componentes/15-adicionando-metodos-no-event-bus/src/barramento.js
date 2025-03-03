import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade) // Essa função emite a operação
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeMudou', callback) // é um evento de callback. É chamada toda vez que o evento acontecer
        }
    } 
})