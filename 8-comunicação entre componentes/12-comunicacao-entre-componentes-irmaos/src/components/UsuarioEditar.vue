<template>

    <div class="componente">

        <h2>Alterar os dados de Usuário</h2>
        <p>Edite as informações</p>
        <p> Idade do usuario: <strong> {{ idadeLocal }} </strong>  </p>
        <button @click="alterarIdade"> Alterar Idade</button>
    </div>

</template>

<script>

    export default{
        name: 'usuarioEditar',
        props: { 
            idade: Number 
        },
        data() {
            return {
                idadeLocal: this.idade
            }
        },
        alterarIdade(){
            this.idadeLocal = 33
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