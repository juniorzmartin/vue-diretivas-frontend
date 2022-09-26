<template>
  <p>Sem diretiva</p>
  <p v-texto="{cor: 'blue', tamanhoFonte: '200%', totalCaracteres:15}">Primeira diretiva customizada</p>
  <p v-texto="{cor: 'red', tamanhoFonte:'300%', totalCaracteres:11}">testando v-texto 2</p>
  <p v-texto="configuracaoTexto">testando v-texto 3</p>
  <div v-posicao:absolute="36" v-texto="{cor: '#F21DF2', tamanhoFonte: '200%'}">Binding de argumento e valor</div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({  
      configuracaoTexto : {cor: 'green', tamanhoFonte:'400%', totalCaracteres:4}
  })
}
</script>

<style>
</style>
