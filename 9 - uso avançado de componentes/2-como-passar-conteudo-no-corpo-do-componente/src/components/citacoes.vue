<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        {{ numero }} {{ indice }} <!-- Numero é uma variavel criada dentro do component e indice é uma operação gerada dentro do computed -->
        <Citacao :texto="citacoes[indice].textoLocal"></Citacao> <!-- Enviando os dados para o props do componente citacao receber -->
    </div>
</template>

<script>
import Citacao from './citacao.vue' // importa componente citacao para o codigo

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
            return Math.abs(this.numero % 3) // Funcao indice retorna o numero. Toda vez que ele for igual a 3, zero o seu valor
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
