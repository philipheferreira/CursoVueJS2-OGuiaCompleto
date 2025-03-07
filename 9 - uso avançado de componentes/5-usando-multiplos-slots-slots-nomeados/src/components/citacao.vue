<!-- Definindo um nome para o slot pode criar multiplos slots em que cada um deles retornara algo diferente, ao inves de só repetir e repetir o componente com os mesmos dados -->
<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    name:"citacaoComponent",
    props: ['texto']
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1 {
        color: red;
    }
</style>
