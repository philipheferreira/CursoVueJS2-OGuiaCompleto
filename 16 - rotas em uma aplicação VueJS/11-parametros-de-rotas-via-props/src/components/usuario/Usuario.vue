<template>
    <div class="usuario">
        <h2>usuários</h2>
        <hr/>
        <p><strong>Código:</strong> {{ id }} </p>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    name: 'usuarioComponent',
    data(){
        return{
            id: this.$forceUpdate.params.id
        }
    },
    methods: {
        irParaInicio(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>

</style>