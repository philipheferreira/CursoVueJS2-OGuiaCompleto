<!-- Criação da primeira funcionalidade pelo app-->

<template>
  <div id="app">
    <h2>Contadores</h2>

    <app-contador></app-contador> <!-- Chamando componente que foi declarado Globalmente -->
  </div>
</template>

<script>
export default {
 /* Como declarei uma vez dentro do main.js o app-contador esta existindo globalmente, logo ele nao precisa ser declarado localmente
 detro da aplicacao app */
}
</script>

<style>

</style>