<template>
  <div class="home">
    <h1>
      Welcome to Daytripper
    </h1>
    <p>
      Need to escape the hustle and bustle in America's gorgeous public lands?
    </p>
    <p>
      Let us help you find the park that fits your needs
    </p>
    <button @click="showLocationForm">Begin!</button>
    <parks-form-location v-if="formLocationShown" v-on:locationDone="showDesignationForm"></parks-form-location>
     <parks-form-designation v-if="formDesignationShown"></parks-form-designation>
  </div>
</template>

<script>
// @ is an alias to /src/
import ParksFormLocation from "@/components/ParksFormLocation.vue";
import ParksFormDesignation from "@/components/ParksFormDesignation.vue";

export default {
  name: "home",
  components: {
    "parks-form-location": ParksFormLocation,
    "parks-form-designation": ParksFormDesignation
  },
  data() {
    return {
      formLocationShown: false,
      formDesignationShown: false
    };
  },
  methods: {
    showLocationForm() {
      this.formLocationShown = true;
    },
    showDesignationForm() {
      this.formLocationShown = false;
      this.formDesignationShown = true;
    }
  }
};
</script>
