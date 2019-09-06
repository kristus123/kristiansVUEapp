<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <router-link to="/" tag="button">
      <a class="navbar-brand text-white" href="#">HomeiPage</a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
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
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
      </ul>
    </div>

    <form class="form-inline">
      <!-- <strong> -->
      <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->

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
      <!-- </strong'>' -->
    </form>
  </nav>
</template>





<script>
export default {};
</script>