<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <p><strong>Código:</strong> {{ id }} </p>
    </div>
</template>

<script>
    export default{
        props: ['id']
    }
</script>

<style scoped>

</style>