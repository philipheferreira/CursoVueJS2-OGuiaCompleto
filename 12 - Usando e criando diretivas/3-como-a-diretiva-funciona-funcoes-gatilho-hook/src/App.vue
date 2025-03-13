<!-- Essa aula tem o foco de estudar o funcionamento dos Hooks -->

<!-- Gatilhos (Hooks): 
    bind(el, binding, vnode) => Quando a diretiva é interligada com elemento 
    inserted(el, binding, vnode) => Elemento inserido no nó pai
    update(el, binding, vnode, oldVNode) => Quando o componente é atualizado (antes filhos)
    componentUpdated(el, binding, vnode, oldVNode) => Quando o componente é atualizado (depois filhos)
    unbind(el, binding, vnode) => Quando a diretiva é desvinculada do elemento
-->

<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr/>
    <p v-text="'Usando diretiva para v-text'"></p>
    <p v-html="'Usando diretiva <strong> V-html </strong>'"></p>
	</div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
