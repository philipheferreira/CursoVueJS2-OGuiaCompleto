<template>
    <componentPainel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </componentPainel>
</template>

<script>
export default {
    name: 'componentCarrinho',
    computed: {
        produtos() { // faz o acesso da aplicação vuex apontando a aplicação store criada globalmente pelo main.js. acessa a classe produtos criada
            return this.$store.state.produtos
        },
        total() {
            return this.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
