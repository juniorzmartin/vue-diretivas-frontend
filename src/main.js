import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

import texto from './directives/texto'
import posicao from './directives/posicao'
import informacao from './directives/informacao'

//importando e registrando globalmente diretivas customizadas
Vue.directive('texto', texto)
Vue.directive('posicao', posicao)
Vue.directive('informacao', informacao)
//

Vue.mount('#app')
