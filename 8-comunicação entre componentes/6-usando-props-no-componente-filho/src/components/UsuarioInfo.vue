<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ inverterNome(nome) }} </strong> </p>
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ inverterNome(nome1) }} </strong>  </p> <!-- Existe a partir das propriedades existe a possibilidade de trabalhar dados dentro de data -->
        <p>Nome sendo chamado por binding e atalho na variavel principal  : <strong> {{ inverterNome(nome2) }} </strong>  </p>
    </div>

</template>


<script>

    export default{
        name: 'usuarioInfo',
        props: ['nome', 'nome1', 'nome2'],
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