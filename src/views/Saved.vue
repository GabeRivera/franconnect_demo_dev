<template>
  <div>
    <h1>Saved</h1>
    <ul class="saved-parks">
       <li class="saved-park" v-for="park in savedParks" v-bind:key="park.id">
         <a :href="park.url">{{ park.name }}</a>
         <button @click.prevent="remove(park.id)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { mapActions } from "vuex";

export default {
  name: "saved",
  computed: {
    ...mapState([
      'savedParks'
    ])
  },
  methods: {
    ...mapActions([
      "REMOVE_PARK_ACTION"
    ]),
    remove(id) {
      this.REMOVE_PARK_ACTION(id)
    }
  }
}
</script>
<style lang="sass">
.saved-parks {list-style-type: none; margin: 0 auto; max-width: 600px;}
.saved-park { width: 100%; display: flex; justify-content: space-between; margin-bottom: 1rem;}
</style>

