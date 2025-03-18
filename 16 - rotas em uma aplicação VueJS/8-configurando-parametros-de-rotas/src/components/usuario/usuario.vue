<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr/>
        <button sucesso @click="irParaInicio">Voltar</button> <!-- Coloquei um atributo que já está sendo aplicado um style pelo css -->
    </div>
</template>

<script>
export default {
    name: 'usuarioApp',
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