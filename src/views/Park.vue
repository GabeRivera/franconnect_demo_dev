<template>
  <div class="park-page">
     <pre>{{ park }}</pre>
     <div class="park-info">
       <h1>{{ park.fullname }}</h1>
       <p>{{ park.description }}</p>

       <p class="label">Weather:</p>
       <p>{{ park.weatherinfo }}</p>

       <p class="label">Coordinates:</p>
       <p>{{ park.latlong }}</p>
       <p><a :href="park.directionsurl">Directions</a></p>
     </div>
     <div class="park-alerts">
       <h1>Alerts for {{ park.name }}</h1>
       <div v-for="alert in alerts" v-bind:key="alert.id">
         <p>{{ alert.title }}</p>
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
      });
    fetch(`${apiurl}/alerts?parkCode=${this.$route.params.parkcode}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        this.alerts = response.data[0];
    });
  }
}
</script>
