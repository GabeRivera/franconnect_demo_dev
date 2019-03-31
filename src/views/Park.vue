<template>
  <div class="park-page">
     {{ $route.params.parkcode }}
  </div>
</template>
<script>
export default {
  name: 'park',
  created() {
    const apiurl = process.env.VUE_APP_PARKSAPI;
    const apiKey = process.env.VUE_APP_API_KEY;

    fetch(`${apiurl}/parks?parkCode=${this.$route.paramsparkcode}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  }
}
</script>
