<template>
  <v-app id="app">
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm3 >
        <v-img :src="require('@/assets/logo.png')" aspect-ratio="1"></v-img>
      </v-flex>
      <v-flex xs12>
        <router-view/>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      image: require('@/assets/logo.png')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
