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
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="produto"> Mobile</span>
					<span><input type="radio" value="outro" v-model="produto"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
						<option v-for="prioridade in prioridades" :value="prioridade.codigo" :key="prioridade.codigo" :selected="prioridade.codigo === 1">
              {{ prioridade.nome }} 
            </option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
          <input type="text" :value="temp" @input="temp = $event.target.value"> <!-- Utilizando o value bindando ela com a variavel temp 
          o que estiver dentro dela será mostrado dentro do input.
          O comando @input ira fazer com que as modificações dentro do evento input sejam atualizados dentro da variavel declarada input.
          Logo é como se eu dissesse que as modificações feitas dentro do input olhassem dentro dela mesma e repassassem para o temp, que
          está sendo mostrado dentro do input no value bindado -->
				</Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="escolha" />  <!-- Component criado que recebe variavel escolha -->
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
					<span> {{ prioridade }} {{ tipoPioridade }} </span>
				</Rotulo>
				<Rotulo nome="Temp">
					<span> {{ temp }} </span>
				</Rotulo>
        <Rotulo nome="Primeira Reclamação?">
					<span> {{ escolha }} </span>
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
	},
  tipoPioridade(){
    return typeof this.prioridade
  }
	},
	data(){
    return {
		mensagem: '', 
		caracteristicas: [],
      produto: 'web',
      prioridade: 1,
      prioridades: [
        { codigo: 1, nome: 'Baixa'},
        { codigo: 2, nome: 'Moderada'},
        { codigo: 3, nome: 'Alta' }

      ],
        usuario: {
          email: '',
          senha: '',
          idade: 25
        },
        temp: 'teste', // valor criado para usar no input de reclamações
        escolha: true
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
