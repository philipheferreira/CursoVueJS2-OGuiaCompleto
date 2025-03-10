<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <h1 slot="autor">Autor: </h1> 
            <h1 slot="autor"> {{ citacoes[indice].autor }} </h1> 
            <p>Citação: </p> 
            <p> {{ citacoes[indice].textoLocal }} </p> 
            <h6 slot="fonte">Fonte: </h6>
            <h6 slot="fonte"> {{ citacoes[indice].autor }} </h6> 
        </Citacao>
    </div>
</template>

<script>
import Citacao from './citacao.vue'

export default {
    name: "citacoesComponent",
    /* Toda vez que citação é selecionada dentro de components no App.vue é gerado esse componente. 
    O Created é a prova de que isso ocorre, pois ele é gerado toda vez que é chamado */
    created(){
        console.log("Component Citações criado")
    },
    /* Assim como quando o se sai do component ele é destruido quando outro é chamado no lugar pelo component */
    destroyed(){
        console.log("Component Citações destroida")
    },
    components: {
         Citacao 
        },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                textoLocal: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                textoLocal: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                textoLocal: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
