<template>
  <div>
    <h1>Saved</h1>
    <pre>
      {{ stateParks }}
    </pre>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "saved",
  computed: {
    ...mapState([
      //change to saved when that logic is wired up:
      'stateParks'
    ])
  }
}
</script>
<style lang="sass">

</style>

