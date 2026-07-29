<template>
    <div class="contadores">
        <app-contador></app-contador>
    </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
    name: 'ContadoresVue',
    components: {
        'app-contador': Contador // component que está sendo puxado de contador
    }
}
</script>

<style>

</style>