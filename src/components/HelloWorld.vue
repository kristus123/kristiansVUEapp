<template>
  <div>
    <center>
    
    <div v-if="allPlanets.length === 0" class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </center>



    <div class="row">

    <div v-for="planet in allPlanets" :key="planet.id">
      <planet-card :planetProp="planet" ></planet-card>
    </div>

    </div>





  </div>
  

</template>

<script>
import planetsDao from "../services/PlanetApiService";
import PlanetCard from "../components/PlanetCard.vue";
export default {
  name: "HelloWorld",
  components: {
    PlanetCard
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      allPlanets: []
    };
  },
  async created() {
    console.log("______________________________");
    try {
      const data = await planetsDao.getAllPlanets();
      this.allPlanets = data;
      console.log(this.allPlanets);
    } catch (error) {
      console.error(error);
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
