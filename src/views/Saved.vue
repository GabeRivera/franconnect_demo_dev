<template>
  <div>
    <h1>Saved</h1>
    <pre>
      {{ savedParks }}
    </pre>
    <ul>
       <li v-for="park in savedParks" v-bind:key="park.id">
         <a :href="park.url">{{ park.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "saved",
  computed: {
    ...mapState([
      'savedParks'
    ])
  }
}
</script>
<style lang="sass">
</style>

