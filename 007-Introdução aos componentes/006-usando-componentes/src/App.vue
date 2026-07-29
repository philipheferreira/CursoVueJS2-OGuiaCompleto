<!-- Criação da primeira funcionalidade pelo app-->

<template>
  <div id="app">
    <h2>Contadores</h2>

    <app-contadores></app-contadores> <!-- Chamando componente que foi declarado Globalmente -->
    <app-contadores v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>