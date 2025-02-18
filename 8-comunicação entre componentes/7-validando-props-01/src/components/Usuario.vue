<template>

    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <div class="componentes">

            <app-usuario-info :nome="nomeCompleto" v-bind:nome1="nomeCompleto" />
            <app-usuario-info nome="1" v-bind:nome1="nomeCompleto" />
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
            nomeCompleto: 'Philiphe Siqueira Ferreira'
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