import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  beforeCreate() {
		this.$store.commit('INTITIALIZE_STORE');
	},
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount("#app");
