<template>
  <div class="park-item">
    <h2>{{ park.fullname }}</h2>
    <p>{{ park.designation }}</p>
    <p>{{ park.description | truncate }}</p>
    <router-link :to="{ name: 'park', params: { parkcode: park.parkcode }}">Learn More</router-link>
  </div>
</template>
<script>
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
  }
}
</script>
<style lang="sass">
.park-item {flex: 1; min-width: 320px; }
</style>

