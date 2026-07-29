<template>
    <div class="usuario">
        <h2>usuários</h2>
        <hr/>
        <router-view />
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    name:'usuarioApp',
    props: ['id'],
    methods: {
        irParaInicio(){
            // this.$router.push('/') // o push faz com que repasse essa informação para o path declarado
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>

</style>