import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)
Vue.directive('texto', {
    created(el){  // chamaddo antes que os atributos do elemento ou ouvintes de event(event listeners) sejam aplicados
        console.log(el.style)
        el.style.color = 'red' 
        el.style.fontSize= '150%'

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > 25){
            // truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0,22) + '...' 
        }else{
            // manter o texto original
            textoAjustado = textoOriginal
        }
        el.innerText = textoAjustado
    }
})
Vue.mount('#app')
