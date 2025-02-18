<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p> <!-- Forma mais direta e pratica de passar pela props -->
        <p>Nome do usuario sendo chamado por binding criado na variavel principal  : <strong> {{ nome1 }} </strong>  </p>
    </div>

</template>


<script>

    export default{
        name: 'usuarioInfo',
        props: ['nome', 'nome1']
    }

</script>

<style scoped>

    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }

</style>