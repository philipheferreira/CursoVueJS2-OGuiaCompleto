<template>
    
    <nav class="menu">
        <ul>
                <router-link to="/" tag="li" active-class="active" exact> <!-- O exact serve para definir que quando exatamente for / ele será ativo, para evitar que ele fique marcado em todas as ocasiões -->
                    <a>Home</a>
                </router-link>
                <router-link to="/usuario/1" tag="li" active-class="active"> <!-- Foi definido que ele ira receber naturalmente o id como 1 -->
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