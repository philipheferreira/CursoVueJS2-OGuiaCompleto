<template>
    <div class="usuario">
        <h2>usuários</h2>
        <hr/>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    name:'usuarioApp',
    methods: {
        irParaInicio(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>

</style>