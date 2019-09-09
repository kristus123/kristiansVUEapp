<template>
  <center>
    <h1>hei {{$route.params.id}}</h1>
    <hr />

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Name of planet</span>
      </div>
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="Name of the planet you discovered"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Date discovered</span>
      </div>
      <input
        v-model="date_discovered"
        type="text"
        class="form-control"
        placeholder="The date you discovered the planet"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Size of planet</span>
      </div>
      <input
        v-model="size"
        type="text"
        class="form-control"
        placeholder="How big was it ? "
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <button v-if="!loading" class="btn btn-primary" v-on:click="updatePlanet">oppdater</button>
    <button v-else class="btn btn-primary" disabled>Venter</button>


    <delete-planet-button :planet="$route.params.id"></delete-planet-button>
  </center>
</template>


<script>
import DeletePlanetButton from "@/components/planetComponents/DeletePlanetButton";
import planetsDao from "@/services/PlanetApiService.js";

export default {
  components: { DeletePlanetButton },
  data: function() {
    return {
      name: "",
      size: "",
      date_discovered: "",
      loading : false
    };
  },
  methods: {
    updatePlanet: async function() {
      this.loading = true;
      console.log("oppdaterer planet")
      await planetsDao.updatePlanet({
        planetID: this.$route.params.id,
        date_discovered: this.date_discovered,
        name: this.name,
        size: this.size
      });
      this.loading = false;

    }
  }
};
</script>



<style scoped>
.form-control {
  max-width: 40%;
}
</style>