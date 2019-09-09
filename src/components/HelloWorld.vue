<template>
  <div>
    <div v-if="this.$store.state.isLoggedIn">
      <div class="row">
        <div class="col-sm">
          <!-- <info-cards></info-cards> -->
        </div>
        <div class="col-sm">
          <info-cards :value="allPlanets.length" title="Antall planeter"></info-cards>
        </div>
        <div class="col-sm">
          <!-- <info-cards></info-cards> -->
        </div>
      </div>

      <hr />
      <center>
        <div v-if="allPlanets.length === 0" class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </center>

      <div class="row">
        <div v-for="planet in allPlanets" :key="planet.id">
          <planet-card :planetProp="planet"></planet-card>
        </div>
      </div>
    </div>

    <div v-else>
      <center>
        <h1>Please log in before entering this site</h1>

        <img
          src="https://www.av-avis.no/images/f12fd143-3b4c-4330-bec9-b98b92f31cc7?fit=crop&h=326&q=80&w=580"
        />
        <h1>Made by the Boys Inc.</h1>
      </center>
    </div>
  </div>
</template>

<script>
import planetsDao from "../services/PlanetApiService";
import PlanetCard from "../components/PlanetCard.vue";
import InfoCards from "@/components/frontPageComponent/InfoCards";

export default {
  name: "HelloWorld",
  components: {
    InfoCards,
    PlanetCard
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      allPlanets: []
    };
  },
  async created() {
    if (this.$store.state.isLoggedIn) {
      try {
        const data = await planetsDao.getAllPlanets();
        this.allPlanets = data;
        console.log(this.allPlanets);
        this.$store.state.totalPlanets = this.allPlanets.length;
        console.log(this.$store.state.totalPlanets);
      } catch (error) {
        console.error(error);
      }
    }

    // console.log(`${this.allPlanets} AAAAAAAAAAAAA`);
    // console.log("_________________");
    // console.log(`this.$el doesn't exist yet, but it will soon!`);
    // // console.log(this.allPlanets)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 60%;
}

.flex-container {
  /* display: flex; */
  /* justify-content: center;  */
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
