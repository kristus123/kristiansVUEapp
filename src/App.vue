<template>
  <div id="app">
    <!-- <h1>AA {{getMessage}}</h1> -->
    <nav-bar> </nav-bar>

  
    <div class="container">
      <router-view />
    </div>
  
  </div>
</template>

<script>
import NavBar from '@/components/navBarComponents/NavBar';

export default {
  name: "App",

  computed:  {
    getMessage() {
      console.log(this.$store)
      return this.$store.state.message
    }
  },

  components : {NavBar}
};
</script>

<style>
</style>
