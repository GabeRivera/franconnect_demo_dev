import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Saved from "./views/Saved.vue";
import About from "./views/About.vue";
import Park from "./views/Park.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/franconnect_demo/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/saved",
      name: "saved",
      component: Saved
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/park/:parkcode",
      name: "park",
      component: Park
    }
  ]
});
