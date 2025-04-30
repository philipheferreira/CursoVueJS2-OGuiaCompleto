<template>
    <componentPainel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </componentPainel>
</template>

<script>
export default {
    name: 'componentResumo',
    computed: {
        produtos() { // faz o acesso da aplicação vuex apontando a aplicação store criada globalmente pelo main.js. acessa a classe produtos criada
            return this.$store.state.produtos
        },
        total() {
            return this.$store.getters.valorTotal // puxa o valor declarado dentro de getters
        }
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
