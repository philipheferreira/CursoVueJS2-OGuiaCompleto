<!-- NESSE CAPITULO E GETTER VAI PEGAR A LISTA DE PRODUTOS E RETORNAR A LISTA DE PRODUTOS COM O TOTAL PREVIAMENTE CALCULADO  -->

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
        produtos() { // Como ele atualiza as operações direto do Vuex acaba não sendo necessario a utilização dessa operação produtos para as coisas
            return this.$store.state.produtos
        },
        total() {
            return this.$store.getters.valorTotal // puxa o valor declarado dentro de getters diretamente
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
