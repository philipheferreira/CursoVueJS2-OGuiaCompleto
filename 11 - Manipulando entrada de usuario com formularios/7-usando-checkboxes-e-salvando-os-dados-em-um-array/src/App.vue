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
					<span class="mr-4"><input type="checkbox" v-model="caracteristicas" value="reproduzivel"> Reproduzível</span> <!-- toda vez que for selecionado o checkbox será adicionado no array caracteristicas o value desse checkbox, que é o reproduzivel -->
					<span><input type="checkbox" v-model="caracteristicas" value="intermitente"> Intermitente</span> <!-- toda vez que for selecionado o checkbox será adicionado no array caracteristicas o value desse checkbox, que é o itermitente -->
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio"> Web</span>
					<span class="mr-4"><input type="radio"> Mobile</span>
					<span><input type="radio"> Outro</span>
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
							<li v-for="c in caracteristicas" :key="c"> {{ c }} </li> <!-- Criado campo para visualizar as opções -->
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>???</span>
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
		caracteristicas: [], // criado para validar o checkbox. É um array
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
