<template>

    <div class="componente">

        <h2>As informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario pelo props e estatico: <strong> {{ nome }} </strong> </p> <!-- Forma mais direta e pratica de passar pela props -->
        <p>Nome sendo chamado por binding na variavel principal  : <strong> {{ nome1 }} </strong>  </p> <!-- Esta recebendo uma variavel bindada do outro component -->
        <p>Nome sendo chamado por binding e atalho na variavel principal  : <strong> {{ nome2 }} </strong>  </p>
    </div>

</template>


<script>

    export default{
        name: 'usuarioInfo',
        props: ['nome', 'nome1', 'nome2'] // Define a propriedade que será recebida pela props do outro component
    }

</script>

<style scoped>

    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }

</style>