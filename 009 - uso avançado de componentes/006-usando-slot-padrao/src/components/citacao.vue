<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot></slot> <!-- Declarando um slot sem nome para receber a chamada do outro component -->
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
