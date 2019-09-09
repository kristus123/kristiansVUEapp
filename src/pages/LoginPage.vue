<template>
  <div>
    <!-- {{this.$store.state.isLoggedIn}} -->
    <login-form v-if="!this.$store.state.isLoggedIn"> </login-form>
   
    <div v-else>
      <h1>hei allerede logget inn </h1>
      <logout-button> </logout-button>  
    </div>
  
  </div>
</template>


<script>

import LogoutButton from '@/components/authComponent/LogoutButton';
import LoginForm from '@/components/authComponent/LoginForm';


import authService from '@/services/AuthService.js'

export default {
  components : {LogoutButton, LoginForm},

  data : function() {
    return {
      username : "",
      isLoggedIn : authService.isAuthenticated()
    }
  }
}
</script>