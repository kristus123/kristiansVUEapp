<template>
  <div>
    <center>
      <!-- <h1>{{this.$authService.state.isLoggedIn}}</h1> -->
      <!-- {{username}} -->
      <!-- {{this.$store.state.isLoggedIn}} -->
      <div class="form-group">
        <div v-if="this.$store.state.isLoggedIn">
          <h1>du er allerede logget inn</h1>

          <hr class="short" />
          <!-- <logout-button></logout-button> -->
          <!-- <button type="submit" class="btn btn-danger" v-on:click="logout" >Logg ut</button> -->
          <hr class="short" />
        </div>

        <div v-else>
          <h1>LOGG INN</h1>
          <label for="exampleInputEmail1">Bruk din API-key</label>

          <input
            v-model="username"
            type="text"
            class="form-control auth-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your KEy"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >Vi kommer til å selge denne informasjonen litt senere</small>

          <hr class="short" />
          <button type="submit" class="btn btn-primary" v-on:click="login">Logg inn</button>
          <hr class="short" />
        </div>
      </div>
    </center>
  </div>
</template>


<script>
// import LogoutButton from "@/components/authComponent/LogoutButton";
import authService from "@/services/AuthService.js";
// import from "@/components/authComponent/LogoutButton";

export default {
  // components: { LogoutButton },
  data: function() {
    return {
      username: null
    };
  },
  methods: {
    login: function() {
      this.$store.state.isLoggedIn = true;
      authService.login(this.username);
      this.username = "";
      console.log(this.$store.state.isLoggedIn);
      this.$router.push({name : 'HelloWorld'});
      window.location.reload();
    }
  }
};

// export default {
//   components : {LogoutButton},

//   data : function() {
//     return {
//       username : ""
//     }
//   }
// }
</script>







