<!-- Foco de agora são os modificadores de input -->

<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.trim="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model.lazy="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade"> 
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" v-model="caracteristicas" value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" v-model="caracteristicas" value="intermitente"> Intermitente</span> 
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span> <!-- Feito um v-model para repassar o valor. Radio é excludente então por mais que tenha mais de uma opção sempre será colocada só uma depois que selecionar outra que aponte para a mesma variavel -->
					<span class="mr-4"><input type="radio" value="mobile" v-model="produto"> Mobile</span> <!-- Aponta para a mesma variavel que a web -->
					<span><input type="radio" value="outro" v-model="produto"> Outro</span> <!-- Aponta para a mesma variavel que a web -->
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select name="" id="">
						<option></option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha />
				</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span> {{ usuario.email }} </span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span> {{ usuario.senha }} </span> 
				</Rotulo>
				<Rotulo nome="Idade">
					<span> {{ usuario.idade }} </span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span> {{ mensagem }} </span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="c in caracteristicas" :key="c"> {{ c }} </li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span> {{ produto }} </span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>???</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>???</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
  computed: {
	tipo() {
		return typeof this.usuario.idade
	}
	},
	data(){
    return {
		mensagem: '', 
		caracteristicas: [],
      produto: 'web', // String responsavel por armazenar radios. Como ela tem o valor web inicialmente ela já começa com o valor web pre-estartado
        usuario: {
          email: '',
          senha: '',
          idade: 25
        }
      }
    },
    created() {
      setTimeout(() => {
        this.email = ''
      }, 5000)
    }
  }
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
