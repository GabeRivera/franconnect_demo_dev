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
       <div class="alert" v-for="alert in alerts" v-bind:key="alert.id">
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
<style lang="sass">
.park-page {display: flex; max-width: 1200px; margin: 0 auto; flex-wrap: wrap;}
.park-info { flex: 4; min-width: 600px; font-size: 18px; text-align: left;}
.park-info p {max-width: 70ch;line-height: 150%; margin-bottom: .5rem;}
.label {font-weight: bold;}
.park-alerts { flex: 2; min-width: 325px;}
.alert { max-width: 300px; margin: 0 auto; border: solid 1px #ccc; padding: 1rem 2rem; margin-bottom: 2rem; border-radius: 10px;}
</style>

