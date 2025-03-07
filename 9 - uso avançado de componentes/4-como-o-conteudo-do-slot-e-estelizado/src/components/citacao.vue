<template>
    <div class="citacao">
        <slot></slot>
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
        color: red; /* Crio uma style dentro desse compontonete que será mostrado no outro componente citacoes, que está chamando ele */
        /* color: red!important; Caso queira, posso utilizar o comando important que ira sobreescrever o conflito de h1 do outro componente, mas não é uma pratica recomendada */ 
    }
</style>
