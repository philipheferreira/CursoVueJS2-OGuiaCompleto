<!-- Reiterando que slot é muito rico e pratico para as funcionalidades -->

<template>
    <div class="citacao">
        <slot name="fonte"></slot>
        <slot></slot> 
        <div class="autor"><slot name="autor"></slot></div> <!-- Criando uma class autor para modificar o slot nomeado autor -->
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
    .autor{ /* a class autor é afetada pelas modificações aqui geradas */
        float: right;
    }
</style>
