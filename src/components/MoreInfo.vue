<template>
  <center>
    <h1>hei {{$route.params.id}}</h1>
    <hr />


  <delete-planet-button :planet="$route.params.id" ></delete-planet-button>
  </center>
</template>


<script>
import DeletePlanetButton from '@/components/planetComponents/DeletePlanetButton'

export default {
  components : {DeletePlanetButton}
};
</script>