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
                        <td>{{ produto.preco | dinheiro }}</td> <!-- Filter dinheiro sendo utilizado, ele foi declarado no main.js então roda nativamente na aplicação -->
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
        total() { // Assim que a aplicação inicializa pega o preço dentro do objeto atraves do map e soma os valores colocandoos juntos dentro de total 
            return this.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    data() {
        return {
            produtos: [
                { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
                { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
                { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
            ]
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
