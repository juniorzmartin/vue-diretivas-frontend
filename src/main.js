import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)
Vue.directive('teste', {
    created(){  // chamaddo antes que os atributos do elemento ou ouvintes de event(event listeners) sejam aplicados
        console.log("A diretivas foi aplicada")
    }
})
Vue.mount('#app')
