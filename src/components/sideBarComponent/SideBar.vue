<template>
  <div>
    <div id="mySidenav" class="sidenav">
      <center>
        <h1>planet nr.{{this.$store.state.planetObject.id}}</h1>
      </center>

      <a class="closebtn" v-on:click="closeNav">×</a>

      <!-- innmat -->

      <div class="container">
        <div class="form-group">
          <label>Name</label>
          <input type="text" v-model="getName" name="name" class="form-control" />
        </div>

        <div class="form-group">
          <label>Size</label>
          <input
            type="text"
            v-model="this.$store.state.planetObject.size"
            class="form-control"
            placeholder="Size of the planet"
          />
        </div>

        <div class="form-group">
          <label>Date discovered</label>
          <input
            type="text"
            v-model="this.$store.state.planetObject.date_discovered"
            planetObject
            class="form-control"
            placeholder="planets Date of discovery"
          />
        </div>
      </div>

      <center>
        <button v-if="!loading" class="btn btn-primary" v-on:click="updatePlanet">oppdater</button>
        <button v-else class="btn btn-primary" disabled>Venter</button>
      </center>

      <!-- innmat -->
    </div>
  </div>
</template>


<script>
import planetsDao from "@/services/PlanetApiService.js";

export default {

  computed: {
    // a computed getter
    getName: {
      get : function() {return this.$store.state.planetObject.name},

      set: function (value) {
        console.log(value)
        this.name = value
      
    }
      // `this` points to the vm instance
    }
  },


  data: function() {
    return {
      loading: false,
      name: null
    };
  },

  methods: {
    openNav: function() {
      document.getElementById("mySidenav").style.width = "400px";
    },

    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    },

    updatePlanet: async function() {
      this.loading = true;
      console.log("oppdaterer planet");
      // console.log(this.$store.state.planetObject.id);
      
      
      console.log(this.name)
      await planetsDao.updatePlanet({
        planetID: this.$store.state.planetObject.id,
        date_discovered: this.$store.state.planetObject.date_discovered,
        name: this.name,
        size: this.$store.state.planetObject.size
      });
      this.loading = false;

      document.getElementById("mySidenav").style.width = "0px";
      location.reload();

      // console.log(this.$store.state.planetObject.name);
    }
  }
};
</script>




















<style scoped>
.sidenav {
  background-color: #111;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  padding-top: 60px;
  position: fixed;
  top: 0;
  transition: 0.5s;
  width: 0;
  z-index: 1;
}

.sidenav a {
  color: #818181;
  display: block;
  font-size: 25px;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  transition: 0.3s;
}
.sidenav a:hover,
.offcanvas a:focus {
  color: #f1f1f1;
}
.sidenav .closebtn {
  font-size: 36px;
  margin-left: 50px;
  position: absolute;
  right: 25px;
  top: 0;
}
@media screen and max-height 450px {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

input {
  margin-left: 40px;
  max-width: 80%;
  /* align-content: center */
}

h1,
label {
  color: white;
}
</style>