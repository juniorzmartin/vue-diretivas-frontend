<template>
  <p>Sem diretiva</p>
  <p v-texto="{cor: 'blue', tamanhoFonte: '200%', totalCaracteres:15}">Primeira diretiva customizada</p>
  <p v-texto="{cor: 'red', tamanhoFonte:'300%', totalCaracteres:11}">testando v-texto 2</p>
  <p v-texto="{cor: 'green', tamanhoFonte:'400%', totalCaracteres:4}">testando v-texto 3</p>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
