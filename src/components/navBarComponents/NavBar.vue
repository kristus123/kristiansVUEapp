<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  
    <side-bar> </side-bar>

        
    <router-link to="/" tag="button">
      <a class="navbar-brand text-white" href="#">HomeiPage</a>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="AddPlanet" tag="button">
            <a class="nav-link text-white">
              Add a new Planet
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </li>
        
      </ul>
    </div>

    <div class="form-inline">

    <div v-if="!this.$store.state.isLoggedIn">
          <router-link to="RegisterPage" tag="button">
            <button
              style="margin-right: 20px;"
              class="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >Registrer deg</button>
      </router-link>

      <router-link to="LoginPage" tag="button">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logg inn</button>
      </router-link>
</div>

<div v-else>
  <logout-button></logout-button>
</div>
    </div>
  </nav>
</template>



<script>
import LogoutButton from '@/components/authComponent/LogoutButton';

  import SideBar from   '@/components/sideBarComponent/SideBar'

export default {
  components: {LogoutButton, SideBar}
};
</script>


