 <!-- Comando necessario para fazer a comunicação com o componente de forma inversa. Usando callback para comunicar filho com o pai -->

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
                :reiniciarFn="reiniciarNomePrincipal"
                /> <!-- Pega o props reiniciarFn declarado dentro do component filho e joga a funcionalidade do reiniciarNomePrincipal criada no componente pai -->
                <app-usuario-info nome="1" v-bind:nome1="nomeCompleto" @reiniciar-nome="nomeCompleto = $event"/>
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
            },
            reiniciarNomePrincipal() {
                this.nomeCompleto = 'Senhor alguma coisa'
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