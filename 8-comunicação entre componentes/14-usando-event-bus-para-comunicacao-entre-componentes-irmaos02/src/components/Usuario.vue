<!-- Usando um componente pai em comum para poder conectar os componentes filhos. pasando valor numero -->

<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong> {{ nomeCompleto }} </strong></p>
        <p> Idade  <strong> {{ idade }} </strong> </p>
        <button @click="alterarNome">Alterar Nome</button>
        <div class="componentes">

            <app-usuario-info
            :nome="nomeCompleto"
            :idade="idade"
            v-bind:nome1="nomeCompleto"
            @reiniciar-nome="reiniciarNome"
            :reiniciarFn="reiniciarNomePrincipal"
            /> <!-- Dentro de aspas ele vai interpretar como um string, se eu mandar true ou false será interpretado como boolean. Mandando numero ira como number -->
            <app-usuario-info nome="1" v-bind:nome1="nomeCompleto" @reiniciar-nome="reiniciarNome" :idade="idade" />
            <app-usuario-editar :idade="idade" @idadeMudou="idade = $event"/> <!-- :idade faz o binding para passar a informação e o @idadeMudou recebe o event de idade no componente filho e repassa para os irmãos -->

        </div>

    </div>


</template>


<script>
import barramento from '@/barramento'
import AppUsuarioInfo from './UsuarioInfo.vue'
import AppUsuarioEditar from './UsuarioEditar.vue'

export default {
    name: 'appUsuario',
    components: {
        AppUsuarioInfo,
        AppUsuarioEditar
    },
    data(){
        return {
            nomeCompleto: 'Philiphe Siqueira Ferreira',
            idade: 21
        }
    },
    created() {
        // Escutando o evento emitido pelo barramento
        barramento.$on('idadeMudou', (novaIdade) => {
            this.idade = novaIdade
        })
    },
    methods: {
        alterarNome(){
            this.nomeCompleto = 'Ana'
        },
        reiniciarNomePrincipal() { // Função criada para se comunicar com o componente filho
            this.nomeCompleto = 'Algum outro nome'
        },
    }
}

</script>


<style scoped>

.container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }

</style>