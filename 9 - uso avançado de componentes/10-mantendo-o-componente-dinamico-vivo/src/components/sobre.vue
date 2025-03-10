<template>
    <div>
        <p class="nome">Citações</p>
        <p class="versao">Versão 1.0</p>
    </div>
</template>

<script>
export default {
    name:'sobreComponent',
    /* Toda vez que citação é selecionada dentro de components no App.vue é gerado esse componente. 
    O Created é a prova de que isso ocorre, pois ele é gerado toda vez que é chamado */
    created(){
        console.log("Component Sobre criado")
    },
    /* Assim como quando o se sai do component ele é destruido quando outro é chamado no lugar pelo component */
    destroyed(){
        console.log("Component sobre destroido")
    }
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDD;
        height: 200px;
        width: 200px;
        border-radius: 100px;
    }

    p {
        margin: 0;
    }

    .nome {
        font-size: 2.1rem;
        font-weight: bold;
    }

    .versao {
        font-size: 1.4rem;
    }
</style>
