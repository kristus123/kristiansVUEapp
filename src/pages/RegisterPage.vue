<template>
  <center>
    <div v-if="this.$store.state.isLoggedIn">
      <h1>You are already logged in silly billy</h1>
    </div>

    <div v-else>
      <h1>Registrer deg</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Lag din helt egen API-key</label>
      </div>

      <hr class="short" />
      <button v-if="!loading" type="submit" class="btn btn-primary" v-on:click="register">Generer nøkkel</button>

      <button v-else class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Genererer nøkkel
      </button>

      <hr class="short" />
      <small
        id="emailHelp"
        class="form-text text-muted"
      >Vi kommer til å selge denne informasjonen litt senere</small>
    </div>
  </center>
</template>


<script>

// import planetsDao from '@/services/PlanetApiService.js'

import authService from "@/services/AuthService.js";

export default {
  data: function() {
    return {
      isAuthenticated: authService.isAuthenticated(),
      loading : false
    };
  },
  methods: {
    register: async function() {
        this.loading = true
        this.isAuthenticated = await authService.register();
      this.$store.state.isLoggedIn = true;
      this.$router.push({name : 'HelloWorld'});
      window.location.reload()
      // this.isAuthenticated = true
    }
  }
};
</script>