
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
    /* Toda vez que citação é selecionada dentro de components no App.vue é gerado esse componente. 
    O Created é a prova de que isso ocorre, pois ele é gerado toda vez que é chamado */
    created(){ // referente ao ciclo de vida
        console.log('Component Citação criada')
    },
    /* Assim como quando o se sai do component ele é destruido quando outro é chamado no lugar pelo component */
    destroyed(){
        console.log("Component Citação destroida")
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
