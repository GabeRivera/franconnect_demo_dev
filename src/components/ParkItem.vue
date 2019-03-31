<template>
  <div class="park-item">
    <h2>{{ park.fullname }}</h2>
    <p>{{ park.designation }}</p>
    <p>{{ park.description | truncate }}</p>
    <p><button @click.prevent="savePark">Save Me</button></p>
    <router-link :to="{ name: 'park', params: { parkcode: park.parkcode }}">Learn More</router-link>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: 'park-item',
  props: ['park'],
  filters: {
    truncate(value) {
      if (value.length > 60) {
        value = value.substring(0, 55) + '...';
      }
      return value;
    }
  },
  methods: {
    ...mapActions([
      "SAVE_PARK_ACTION"
    ]),
    savePark() {
      this.SAVE_PARK_ACTION(this.park);
    }
  }
}
</script>
<style lang="sass">
.park-item { flex: 1; min-width: 320px;margin: 1rem; border: solid 1px #ccc; padding: 1rem 2rem; margin-bottom: 2rem; border-radius: 10px;}
</style>

