<template>
  <div>
    <div id="mySidenav" class="sidenav">
      <a class="closebtn" v-on:click="closeNav">×</a>
      
      <!-- innmat -->

      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
      
      <!-- innmat -->
    
    </div>
    <div class="container-fluid">
                    <button class="btn btn-outline btn-dark" v-on:click="openNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "side-bar",
  methods: {
    openNav: function() {
      document.getElementById("mySidenav").style.width = "250px";
    },

    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
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
</style>