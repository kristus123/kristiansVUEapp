<template>
  <div>
    <center>
      <h1>LOGG INN</h1>

      
        <div class="form-group">
          <label for="exampleInputEmail1">Bruk din API-key</label>
         
          <input
            type="text"
            class="form-control auth-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >Vi kommer til å selge denne informasjonen litt senere</small>
        </div>

        <hr class="short">
        <button type="submit" class="btn btn-primary">Logg inn</button>
        <hr class="short">
    </center>
  </div>
</template>


<script>
export default {};
</script>