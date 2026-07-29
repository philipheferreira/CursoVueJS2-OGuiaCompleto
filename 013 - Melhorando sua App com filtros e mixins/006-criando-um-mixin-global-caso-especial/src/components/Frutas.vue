<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" /> <!-- Apertando enter adiciona -->
    </div>
</template>

<script>
import frutasMixin from '../frutasMixin'; // adicionando o mixin tudo que é aplicado nele é automaticamente repassado para esse componente
    export default {
        name: 'frutasComponent',
        data() {
            return{}
        },
        methods: {},
        mixins: [frutasMixin]
    }
</script>

<style>

</style>
