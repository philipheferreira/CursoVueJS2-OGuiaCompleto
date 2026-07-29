<template>
    <div>
        <h1> {{ globalMixin }} </h1> <!-- Variavel criada dentro do mixin global no Main -->
        <ul>
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" /> <!-- Apertando enter adiciona -->
    </div>
</template>

<script>
import frutasMixin from '../frutasMixin'; // adicionando o mixin tudo que é aplicado nele é automaticamente repassado para esse componente
import usuarioMixin from '@/usuarioMixin';
    export default {
        name: 'frutasComponent',
        data() {
            return{}
        },
        created(){
            console.log('Created - Frutas.vue!')
        },
        methods: {},
        mixins: [frutasMixin, usuarioMixin] // chamando o mixin aqui sendo chamado dentro do ciclo de vida normal desse componente com o ciclo de vida do mixin
    }
</script>

<style>

</style>
