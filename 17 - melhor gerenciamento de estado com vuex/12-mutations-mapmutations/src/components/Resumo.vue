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
import { mapGetters} from 'vuex' 

export default {
    name: 'componentResumo',
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
