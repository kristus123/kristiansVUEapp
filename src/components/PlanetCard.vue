<template>
  <div v-if="showCard">
    <!-- {{showCard}} -->
    <div class="card cardSize">
      <div class="card-body text-left">
        <h1 class="text-center">{{planetProp.name}}</h1>
        <hr style="padding-bottom: 20px;" />
        <ul>
          <li class="InfoList">
            <h4>Oppdaget</h4>
            <ul>
              <li>{{planetProp.date_discovered}}</li>
            </ul>
          </li>
          <li class="InfoList">
            <h4>Størrelse</h4>
            <ul>
              <li>{{planetProp.size}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <center>
        <button
          style="margin-bottom:20px;"
          v-on:click="goToPlanet"
          class="btn btn-primary btn-lg"
        >More info</button>

        <delete-planet-button :planet="this.planetProp.id" @clicked="onClickChild"></delete-planet-button>
      </center>
    </div>
  </div>
</template>


<script>
import DeletePlanetButton from "@/components/planetComponents/DeletePlanetButton";

export default {
    data : function() {
      return {
        showCard: true
      }
      
    },

  props: ["planetProp"],
  components: { DeletePlanetButton },

  methods: {
    onClickChild: function(value) {
      console.log(value);
      this.showCard = false;
    },

    goToPlanet: function() {
      // this.$store.state.componentKey += 1;
      console.log("GOING");
      this.$store.state.planetObject  = this.planetProp;
      console.log(this.planetProp)
      console.log("________________________")
      console.log(this.$store.state.planetObject)
      console.log(this.$store.state.planetObject.name);

      document.getElementById("mySidenav").style.width = "400px";
    }
  }
};
</script>




<style scoped>
.cardSize {
  width: 300px;
  margin-bottom: 50px;
  margin-right: 80px;
}

.InfoList {
  padding-bottom: 20px;
}
</style>