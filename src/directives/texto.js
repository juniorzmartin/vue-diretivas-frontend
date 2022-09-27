export default {
    created(el, binding){  // chamaddo antes que os atributos do elemento ou ouvintes de event(event listeners) sejam aplicados
        if(binding.value?.cor) el.style.color = binding.value.cor
        if(binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte

        let totalCaracteres = 25
        if(binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres
      
        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > totalCaracteres){
            // truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0,(totalCaracteres - 3)) + '...' 
        }else{
            // manter o texto original
            textoAjustado = textoOriginal
        }
        el.innerText = textoAjustado

    }
}