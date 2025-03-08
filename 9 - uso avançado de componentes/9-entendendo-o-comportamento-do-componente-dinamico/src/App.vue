<template>
	<div id="app">
		<span>
			<button @click="componente = 'citacoes'">Citações</button> <!-- O botão passa para o componente o valor passe, que repassa para o componente component alterando seu valor -->
			<button @click="componente = 'sobre'">Sobre</button> <!-- O botão passa para o componente o valor passe, que repassa para o componente component alterando seu valor -->
		</span>
		<component :is="componente"/> <!-- Componente especial do Vue para receber um componente especifico, no is será definido o componente que ira receber o component -->
	</div>
</template>

<script>
import Citacoes from './components/citacoes'
import Sobre from './components/sobre.vue'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			componente: 'citacoes' // variavel que recebe o nome do componeentee
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>