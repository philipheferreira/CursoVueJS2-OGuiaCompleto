// Criação das operações axios localmente
import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = '' // Link para utilizar a url no axios

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})