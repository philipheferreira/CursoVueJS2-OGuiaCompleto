<!-- Nesse cenario irei criar diferentes slots que iram mostrar diferentes funcionalidades. No caso irei usar a propriedade slot agora no component que chama selecionando o tipo de slot que desejo utilizar -->
<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <h1 slot="autor"> {{ citacoes[indice].autor }} </h1> <!-- Como tem um autor name=autor ele só gera um componente slot que recebe esse slot autor -->
            <p slot="texto"> {{ citacoes[indice].textoLocal }} </p> <!-- Como tem um autor name=texto ele só gera um componente slot que recebe esse slot texto -->
            <h6 slot="fonte"> {{ citacoes[indice].autor }} </h6> <!-- Como tem um autor name=fonte ele só gera um componente slot que recebe esse slot fonte -->
        </Citacao>
    </div>
</template>

<script>
import Citacao from './citacao.vue'

export default {
    name: "citacoesComponent",
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

    h1 {
        color: green; /* Por mais que o componente chamado citacoes tem um h1 style proprio, ele será sobreescrito por esse*/
    }
</style>
