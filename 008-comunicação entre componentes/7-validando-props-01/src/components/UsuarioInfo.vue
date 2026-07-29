<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ inverterNome(nome) }} </strong> </p> 
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ inverterNome(nome1) }} </strong>  </p>
        <p>Nome sendo chamado por binding e atalho na variavel principal  : <strong> {{ inverterNome(nome2) }} </strong>  </p>
    </div>

</template>


<script>

    export default{
        name: 'usuarioInfo',
        // props: ['nome', 'nome1'], //Forma mais geral de receber as coisas
        props: {
            // nome: String // Define que espera receber uma String com os dados
            nome: { // Cria um objeto de informações e definições dentro da variavel para receber melhor os valores props com validações
                type: String, // Informa que a variavel deve receber uma string 
                // required: true, // Diz que a variavel é obrigatoria, ou seja, ela deve ser repassada
                default: 'Anonimo' // Caso
            },
            nome1: {
                type: String,
                required: true
            },
            nome2: {
                type: String,
                required: true
            }
        },
        methods: {
            inverterNome(palavra){
                return palavra.split('').reverse().join() 
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