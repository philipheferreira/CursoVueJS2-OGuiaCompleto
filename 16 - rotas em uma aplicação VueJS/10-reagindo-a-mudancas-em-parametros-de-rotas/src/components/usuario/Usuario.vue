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
    name:'usuarioApp',
        data() {
            return{
                id: this.$route.params.id /* forma que tem para pegar o parametro a partir da rota. 
                O route é referente a rota, o params é referente ao parametro da rota na url, o id é a
                variavel definida */
            }
        },
        watch: { /* operacao que vigia a alteracao de valor do id */
            $route(to) { /* Acessa a route e pega o valor id que atualiza na rota e repassa para o id no component */
                this.id = to.params.id
            }
        },
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