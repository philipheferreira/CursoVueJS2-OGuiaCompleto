export default{
    data() {
        return {
            fruta: '',
            frutas: []
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}