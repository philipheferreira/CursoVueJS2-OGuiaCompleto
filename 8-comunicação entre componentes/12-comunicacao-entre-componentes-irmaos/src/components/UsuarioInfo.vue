<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p> <!-- Forma mais direta e pratica de passar pela props -->
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ nome1 }} </strong>  </p> <!-- Existe a partir das propriedades existe a possibilidade de trabalhar dados dentro de data -->
        <p> Idade do usuario <strong> {{ idade }} </strong> </p>
        <button @click="reiniciarNomeLocal">Reiniciar Nome</button> <!-- Para mandar a modificação do componente filho para o pai é necessario tratar o evento -->
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
                required: true
            },
            reiniciarFn: Function, // função criada para receber callback
            idadeLocal: Number // ** recebe o numero do component pai
        },
        methods: {
            inverterNome(palavra){
                return palavra.split('').reverse().join() //inverter o nome que foi passado, que está sendo usado palavra dentro de metodos
            },
            reiniciarNomeLocal(){
                let valor = 'Philiphe Siqueira Ferreira'
                this.$emit('comando-reiniciar-nome', valor);
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