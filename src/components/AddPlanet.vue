<template>
  <div>
    <center>
      <h1>legg til en nyoppdaget planet</h1>

      <hr style="max-width:60%;" />
      <small
        id="emailHelp"
        style="margin-bottom: 20px;"
        class="form-text text-muted"
      >Det er straffbart å legge ut falsk informasjon angående planet som muligens ikke eksisterer. Straff på inntil 20 år kan oppstå</small>

      <hr style="max-width:60%;" />

      <form class="formStyling" v-on:submit.prevent>
        <div>
          <label>Legg til din planet</label>
          <input
            v-model="planetName"
            type="text"
            class="form-control spacing"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Skriv navnet på planeten"
            required
          />
        </div>

        <div>
          <label>Størrelse på planet</label>
          <input
            v-model="planetSize"
            type="text"
            class="form-control spacing"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Hvor stor er planeten ?"
            required
          />
        </div>

        <div>
          <label>Oppdaget</label>
          <input
            v-model="planetDiscovered"
            type="text"
            class="form-control spacing"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Når oppdaget du denne planeten ?"
            required
          />
        </div>

        <hr />



      <button v-if="!this.$store.state.isLoggedIn" type="submit" class="btn btn-primary" disabled>Please log in</button>


        <button v-else-if="!loading" type="submit" class="btn btn-primary" v-on:click="addPlanet">legg til planet</button>

        <button v-else class="btn btn-primary" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Legger til nyoppdaget planet
        </button>
      </form>
    </center>
  </div>
</template>


<script>
// import PlanetFormHelperVue from "./PlanetFormHelper.vue";
import planetsDao from "../services/PlanetApiService";

export default {
  // components: [PlanetFormHelperVue],

  data: function() {
    return {
      planetName: "",
      planetSize: "",
      planetDiscovered: "",
      loading: false
    };
  },
  methods: {
    addPlanet: async function() {
      this.loading = true;
      console.log("adding planet");
      const { planetName, planetSize, planetDiscovered } = this;

      console.log(planetName, planetSize, planetDiscovered);

      const result = await planetsDao.addPlanet(
        planetName,
        planetSize,
        planetDiscovered
      );
      if (result.success) {
        console.log("YEHAW all good");
      }

      this.planetName = "";
      this.planetSize = "";
      this.planetDiscovered = "";
      this.loading = false;
    }
  }
};
</script>





































<style scoped>
.formStyling {
  max-width: 70%;
}

.form-control.spacing {
  margin-bottom: 40px;
}

input {
  max-width: 50%;
}

label {
}
</style>