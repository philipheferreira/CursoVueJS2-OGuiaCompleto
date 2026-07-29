/*

Cada uma dessas opcoes agora navega para a pagina detalhe

*/

<template>
    <div class="usuario-lista">
        <h3>Lista de Usuarios</h3>
        <router-link tag="li" to="/usuario/1" class="item-lista">Usuario 1</router-link>
        <router-link tag="li" to="/usuario/2" class="item-lista">Usuario 2</router-link>
        <router-link tag="li" to="/usuario/3" class="item-lista">Usuario 3</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>