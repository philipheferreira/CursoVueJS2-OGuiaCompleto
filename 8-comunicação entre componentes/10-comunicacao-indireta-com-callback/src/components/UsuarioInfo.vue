<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p>
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ nome1 }} </strong>  </p> 
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button> <!-- Botão criado para acionar callback -->
    </div>

</template>


<script>

    export default{
        name: 'usuarioInfo',
        props: {
            nome: { 
                type: String,
                 default: 'Anônimo',
            },
            nome1: {
                type: String,
                //required: true
                default: 'Anônimo'
            },
            reiniciarFn: Function // função criada para receber callback
        },
        methods: {
            inverterNome(palavra){
                return palavra.split('').reverse().join() 
            },
            reiniciarNome(){/* eslint-disable */
                this.nome1 = 'Philiphe Siqueira Ferreira'
                this.$emit('reiniciar-nome', this.nome1);
            }
        }
    }

</script>

<style scoped>

    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }

</style>