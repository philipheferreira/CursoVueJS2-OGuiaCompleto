<template>
    
    <nav class="menu">
        <ul>
                <router-link to="/" tag="li" active-class="active" exact> <!-- O exact serve para definir que quando exatamente for / ele será ativo, para evitar que ele fique marcado em todas as ocasiões -->
                    <a>Home</a>
                </router-link> <!-- a tag a ira receber o nome, é necessario apra configurar depois de utilizar a tag para receber a caracteristica de li -->
                <router-link to="/usuario" tag="li" active-class="active">
                    <a>usuarios</a>
                </router-link>
        </ul>
    </nav>

</template>

<script>

    export default{
        name: "menuComponents"
    }

</script>

<style>


</style>