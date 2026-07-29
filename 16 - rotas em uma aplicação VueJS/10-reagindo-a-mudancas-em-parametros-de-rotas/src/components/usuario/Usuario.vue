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
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to) {
            this.id = to.params.id
        }
    }, /* O watch vai ficar vigiando a mudando do id na rota. Antes apenas o id na rota modificava,
    nao o no component. Com o watch ele atualiza a variavel id  */
    methods: {
        irParaInicio(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>

</style>