<template>
    <div>
          <label>Legg til din planet</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Skriv navnet på planeten"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >Det er straffbart å legge ut falsk informasjon angående planet som muligens ikke eksisterer. Straff på inntil 20 år kan oppstå</small>
        </div>

</template>



<script>
export default {
    name: "planet-form-helper-vue"
    
}
</script>