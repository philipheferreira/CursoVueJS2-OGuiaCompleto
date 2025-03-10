
<template>
    <div class="citacao">
        <slot name="fonte"></slot>
        <slot></slot> 
        <div class="autor"><slot name="autor"></slot></div> 
    </div>
</template>

<script>
export default {
    name:"citacaoComponent",
    created(){
        console.log('Component Citação criada')
    },
    destroyed(){
        console.log("Component Citação destroida")
    },
    activated() {
        console.log("Component Citação ativada")
    },
    deactivated(){
        console.log("Component Citação desativada")
    },
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
    .autor{
        float: right;
    }
</style>
