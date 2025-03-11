<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p> <!-- Forma mais direta e pratica de passar pela props -->
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ nome1 }} </strong>  </p> <!-- Existe a partir das propriedades existe a possibilidade de trabalhar dados dentro de data -->
        <button @click="reiniciarNome">Reiniciar Nome</button> <!-- Para mandar a modificação do componente filho para o pai é necessario tratar o evento -->
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
                return palavra.split('').reverse().join() //inverter o nome que foi passado, que está sendo usado palavra dentro de metodos
            },
            reiniciarNome(){/* eslint-disable */
                this.nome1 = 'Philiphe Siqueira Ferreira'
                this.$emit('reiniciar-nome', this.nome1); /* $emit é uma forma de disparar um evento para o componente pai como uma forma de ter uma relação do componente filho com o pai */
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