import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const apiurl = process.env.VUE_APP_PARKSAPI;
const apiKey = process.env.VUE_APP_API_KEY;

export default new Vuex.Store({
  state: {
    savedParks: [],
    stateParks: []
  },
  getters: {},
  mutations: {
    SET_STATE_PARKS(state, payload) {
      state.stateParks = payload;
    }
  },
  actions: {
    GET_STATE_PARKS(context, state_code) {
      return new Promise((resolve, reject) => {
        fetch(`${apiurl}/parks?stateCode=${state_code}&api_key=${apiKey}`)
          .then(response => response.json())
          .then(response => {
            console.log(response);
            context.commit("SET_STATE_PARKS", response.data);
            resolve(true);
          })
          .catch(error => reject(error));
      });
    }
  }
});
