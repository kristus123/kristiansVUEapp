<template>
  <div>
    <h1></h1>
    <div v-if="msg === 'waiting' ">
      <button class="btn btn-primary btn-lg" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Deleting item
      </button>

    </div>
    
    <div v-else-if="msg === '' ">
      <button class="btn btn-danger btn-lg" v-on:click="deletePlanet">Delete</button>
    </div>
    
    <h1>{{msg}}</h1>
  </div>
</template>


<script>
import planetsDao from "@/services/PlanetApiService";

export default {
  name : "delete-planet-button",
  props  : ['planet'],
  data: function() {
    return {
      msg: ""
    };
  },
  
  methods: {
    
    
     onClickButton  : function(event) {
         this.$emit('clicked', 'someValue')
     },
   
    deletePlanet: async function() {
      this.$store.state.totalPlanets = this.$store.state.totalPlanets ="askdaksd" ;
      
      console.log( + " " + "a9sd9asd9asdkjaskdaksd")
      // console.log(this.planet);
      console.log("DELETING");
      this.msg = "waiting";
      try {
        this.msg = await planetsDao.deletePlanet(
          parseInt(this.planet)
        );
        console.log(await this.msg);
        this.onClickButton();
        // console.log(this.msg)
      } catch (error) {
        console.error(error);
      }
    }
  },

};
</script>