<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" /> <!-- Apertando enter adiciona -->
    </div>
</template>

<script>
    export default {
        name: 'frutasComponent',
        data() {
            return{
                fruta: '',
                frutas: ['banana', 'maça', 'laranja'] // Lista generica
            }
        },
        methods: {
            add() {
                this.frutas.push(this.fruta) // Metodo para adicionar fruta
                this.fruta = '' // limpa depois de adicionar
            }
        }
    }
</script>

<style>

</style>
