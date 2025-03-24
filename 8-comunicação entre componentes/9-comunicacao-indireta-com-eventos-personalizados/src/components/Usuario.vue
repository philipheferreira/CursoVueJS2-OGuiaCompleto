    <!-- Foco da Aula: A partir do componente filho estou tentando comunicar com o componente pai -->

<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong> {{ nomeCompleto }} </strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <div class="componentes">

            <app-usuario-info 
            :nome="nomeCompleto" 
            v-bind:nome1="nomeCompleto" 
            @reiniciar-nome="nomeCompleto = $event"
            /> <!-- Dentro de aspas ele vai interpretar como um string, se eu mandar true ou false será interpretado como boolean. Mandando numero ira como number -->
            <app-usuario-info nome="1" v-bind:nome1="nomeCompleto" @reiniciar-nome="nomeCompleto = $event"/> <!-- $event significa que ele recebe o valor disparado no component filho para ficar armazenado na variavel nomeCompleto definida no componente pai. @reiniciar-nome é um metodo que é acionado no componente filho -->
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
    },
    methods: {
        alterarNome(){
            this.nomeCompleto = 'Ana'
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