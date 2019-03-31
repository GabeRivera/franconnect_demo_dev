<template>
  <div class="park-page">
     <div v-if="loading">Fetching park data</div>
     <div class="park-info" v-if="!loading">
       <h1>{{ park.fullname }}</h1>
       <p>{{ park.description }}</p>

       <p class="label">Weather:</p>
       <p>{{ park.weatherinfo }}</p>

       <p class="label">Coordinates:</p>
       <p>{{ park.latlong }}</p>
       <p><a :href="park.directionsurl">Directions</a></p>
     </div>
     <div class="park-alerts">
       <h1 v-if="!loading">Alerts for {{ park.name }}</h1>
       <div v-for="alert in alerts" v-bind:key="alert.id">
         <h4>{{ alert.title }}</h4>
         <p>{{ alert.category }}</p>
         <p>{{ alert.description }}</p>
         <a :href="alert.url">Learn More</a>
      </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'park',
  data() {
    return {
      loading: true,
      park: null,
      alerts: null
    };
  },
  created() {
    const apiurl = process.env.VUE_APP_PARKSAPI;
    const apiKey = process.env.VUE_APP_API_KEY;

    fetch(`${apiurl}/parks?parkCode=${this.$route.params.parkcode}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        this.park = response.data[0];
        this.loading = false;
      });
    fetch(`${apiurl}/alerts?parkCode=${this.$route.params.parkcode}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        this.alerts = response.data;
    });
  }
}
</script>
