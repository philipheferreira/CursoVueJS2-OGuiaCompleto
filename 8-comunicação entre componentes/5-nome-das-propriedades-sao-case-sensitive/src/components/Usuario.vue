<template>

    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button v-on:click="alterarNome">Alterar nome</button>
        <div class="componentes">
            <app-usuario-info nome="Pedro Silva" v-bind:nome1="nomeCompleto" :nome2="outroNomeCompleto" /> <!-- Comandos bindados que são variaveis são case sensitives -->
            <app-usuario-editar />
        </div>
    </div>


</template>


<script>
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
            outroNomeCompleto: 'O guerreiro'
        }
    },
    methods: {
        alterarNome(){
        this.nomeCompleto = "Ana Leticia Nascimento"
        this.outroNomeCompleto = 'Outra Ana'
    }
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