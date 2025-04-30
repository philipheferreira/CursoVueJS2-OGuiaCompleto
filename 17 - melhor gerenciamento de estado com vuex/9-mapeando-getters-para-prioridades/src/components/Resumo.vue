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
import { mapGetters} from 'vuex' // faz um link direto com todas as aplicações de getters declaradas

export default {
    name: 'componentResumo',
    // a chamada do getters pode ocorrer de quatro formas
    
    // PRIMEIRA FORMA
    /*computed: mapGetters(['valorTotal'])*/

    // SEGUNDA FORMA
    /*computed: mapGetters({
        total: 'valorTotal'
    })*/

    // TERCEIRA FORMA
    /*computed: {
        ...mapGetters(['valorTotal']) // faz o mapeamento e puxar qualquer informação referente ao getters dentro da funcionalidade valorTotal
    }*/

    // QUARTA FORMA
    computed: {
        ...mapGetters({
            total: 'valorTotal'
        })
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
