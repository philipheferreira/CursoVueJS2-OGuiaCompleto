<template>

    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome"> Alterar Nome</button> <!-- Criar botão que Altera nome -->
        <hr/>
        <div class="componentes">
            <app-usuario-info />
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
            nome: "Pedro"
        }
    },
    methods: {
        alterarNome() { // Operação que altera variavel nome
            this.nome = 'Ana'
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