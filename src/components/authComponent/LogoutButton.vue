<template>
<div> 
  <!-- <h1> {{this.$store.state.isLoggedIn}}</h1> -->
  <button type="submit" class="btn btn-danger" v-on:click="logout">Logg ut</button>
</div>

</template>


<script>
import AuthService from "@/services/AuthService.js";

export default {
  methods: {
    logout: function() {
      this.$store.state.isLoggedIn = false;
      console.log(this.$store.state.isLoggedIn);
      console.log(AuthService.logout());
          window.location.reload()

    }
  }
};
</script>