<!-- Sobre a aula de hoje
No Vue.js, o comando $emit é utilizado para disparar 
eventos personalizados de um componente filho para um 
componente pai. Ele permite a comunicação entre componentes, 
garantindo que o pai possa escutar e reagir a eventos
 gerados pelo filho.
-->

<!-- 
Quando um componente filho quer enviar uma informação ou notificar
 uma ação para o componente pai, ele usa $emit para disparar um
  evento. O componente pai pode então escutar esse evento e 
  executar uma ação específica.
-->

<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p> <!-- Forma mais direta e pratica de passar pela props -->
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ nome1 }} </strong></p> <!-- Existe a partir das propriedades existe a possibilidade de trabalhar dados dentro de data -->
        <button @click="reiniciarNome">Reiniciar Nome</button> <!-- Para mandar a modificação do componente filho para o pai é necessario tratar o evento -->
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
            }
        },
        methods: {
            inverterNome(palavra){
                return palavra.split('').reverse().join() //inverter o nome que foi passado, que está sendo usado palavra dentro de metodos
            },
            reiniciarNome(){/* eslint-disable */
                this.nome1 = 'Philiphe Siqueira Ferreira'
                this.$emit('comando-reiniciar-nome', this.nome1); /* $emit é uma forma de disparar um evento para o componente pai como uma forma de ter uma relação do componente filho com o pai */
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