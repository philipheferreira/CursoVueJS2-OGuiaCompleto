<template>

    <div class="componente">

        <h2>Alterar os dados de Usuário</h2>
        <p>Edite as informações</p>
        <p> Idade do usuario: <strong> {{ idade }} </strong>  </p>
        <button @click="alterarIdade"> Alterar Idade</button>
    </div>

</template>

<script>
import barramento from '@/barramento'
    export default{
        name: 'usuarioEditar',
        props: { 
            idade: Number
        },
        data() {
            return {}
        },
        methods: {
            alterarIdade(){
           /* eslint-disable */ this.idade += 1
            barramento.alterarIdade(this.idade) // Emite o evento para o barramento
            }
        }

    }

</script>


<style scoped>

    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }

</style>