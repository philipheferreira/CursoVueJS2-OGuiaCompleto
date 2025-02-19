<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p> <!-- Forma mais direta e pratica de passar pela props -->
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ inverterNome(nome1) }} </strong>  </p> <!-- Existe a partir das propriedades existe a possibilidade de trabalhar dados dentro de data -->
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
                // default: 'Anonimo' // Caso
                default: function() { // Cria o default com base em uma função que eu queria da minha maneira
                    return Array(10).fill(0).join(',') //Usei uma logica maluca pra gerar um valor 0, 10 vezes separado por virgulas
                }
            }
        },
        methods: {
            inverterNome(palavra){
                return palavra.split('').reverse().join() //inverter o nome que foi passado, que está sendo usado palavra dentro de metodos
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