<template>
  <div>
      <p>What kind of park would you like to visit? </p>
      <span class="loader" v-if="loading">Looking for a park with your specified designation...</span>
       <p class="selected-designation" v-if="!displayForm">{{ designation }}</p>
      <form v-if="displayForm" @submit.prevent="submitDesignation">
        <input type="submit" style="display: none;"/>
        <select v-model="designation">
          <option value="null">Select a Designation</option>
          <option value="all">All</option>
          <option value="National Park">National Park</option>
          <option value="National Monument">National Monument</option>
          <option value="National Preserve">National Preserve</option>
          <option value="National Historic Site">National Historic Site</option>
          <option value="National Historical Park">National Historical Park</option>
          <option value="National Memorial">National Memorial</option>
          <option value="National Battlefield">National Battlefield</option>
          <option value="National Cemetery">National Cemetery</option>
          <option value="National Recreation Area">National Recreation Area</option>
          <option value="National Seashore">National Seashore</option>
          <option value="National Lakeshore">National Lakeshore</option>
          <option value="National River">National River</option>
          <option value="National Parkway">National Parkway</option>
          <option value="National Trail">National Trail</option>
          <option value="Affiliated Areas">Affiliated Areas</option>
        </select>
        <input type="submit" value="Go" />
      </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "parks-form-designation",
  data() {
    return {
      designation: null,
      loading: false,
      displayForm: true
    };
  },
  computed: {
    ...mapGetters([
      'GET_PARK_BY_DESIGNATION'
    ])
  },
  methods: {
    submitDesignation() {
      const parksByDesignation = this.GET_PARK_BY_DESIGNATION(this.designation);
      console.log(parksByDesignation);
      this.displayForm = false;
      this.$emit('designationDone', parksByDesignation);
    }
  }
};
</script>
