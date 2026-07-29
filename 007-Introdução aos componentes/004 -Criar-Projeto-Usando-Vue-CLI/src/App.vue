<!-- Criação da primeira funcionalidade pelo app-->

<template>
    <div id="app">
      <h2>Contadores</h2>

      {{ contador }}
    </div>
</template>

<script>
export default {

  // data: { // forma errada, não ira funcionar de jeito nenhum
  //  contador: 0
  // }

  data() {
    return { 
      contador: 0
    }
  }
}
</script>

<style>

</style>