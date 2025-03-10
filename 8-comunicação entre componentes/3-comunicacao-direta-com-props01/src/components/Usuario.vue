<template>

    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome">Alterar Nome</button> <!-- O metodo ainda não consegue alterar a variavel -->
        <div class="componentes">
            <app-usuario-info nome="Pedro Silva" v-bind:nome1="nomeCompleto" :nome2="outroNomeCompleto"/> <!-- 1- A variavel nome usa comando estatico para 
            passar as informações. 
            2 - A variavel nomeCompleto foi criada no data e bindada para repassar as infos e ser recebida no outro componente
            3 - A variavel outroNomeCompleto foi criada no data e bindada para repassar as infos e ser recebida no outro componente usando atalho de chamada -->
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
        alterarNome() { // Operação que altera variavel nome
            this.nomeCompleto = 'Ana',
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