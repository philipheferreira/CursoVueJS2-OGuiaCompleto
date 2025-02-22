<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p> <!-- Forma mais direta e pratica de passar pela props -->
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ nome1 }} </strong>  </p> <!-- Existe a partir das propriedades existe a possibilidade de trabalhar dados dentro de data -->
        <p> Idade do usuario <strong> {{ idade }} </strong> </p>
        <button @click="reiniciarNome">Reiniciar Nome</button> <!-- Para mandar a modificação do componente filho para o pai é necessario tratar o evento -->
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button> <!-- Botão criado para acionar callback -->
    </div>

</template>


<script>
import barramento from '@/barramento'
    export default{
        name: 'usuarioInfo',
        props: {
            nome: { 
                type: String,
                 default: 'Anônimo',
            },
            nome1: {
                type: String,
                required: true
            },
            reiniciarFn: Function, // função criada para receber callback
            idade: Number // ** recebe o numero do component pai
        },
        methods: {
            inverterNome(palavra){
                return palavra.split('').reverse().join() //inverter o nome que foi passado, que está sendo usado palavra dentro de metodos
            },
            reiniciarNome(){
                barramento.$emit('reiniciar-nome', "Philiphe Siqueira Ferreira");
            }
        },
        created() {
            barramento.$on('idadeMudou', (idade) =>{ // isso é uma função callback
              /* eslint-disable */  this.idade = idade 
            })
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