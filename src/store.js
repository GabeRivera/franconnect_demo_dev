import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const apiurl = process.env.VUE_APP_PARKSAPI;
const apiKey = process.env.VUE_APP_API_KEY;

export default new Vuex.Store({
  state: {
    savedParks: [],
    stateParks: {},
    currState: null,
  },
  getters: {
    GET_PARK_BY_DESIGNATION: (state) => (designation) => {
      return state.stateParks[state.currState].filter(park => {
       return park.designation.includes(`${designation}`);
      });
    }
  },
  mutations: {
    INTITIALIZE_STORE(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
    SET_STATE_PARKS(state, payload) {
      state.stateParks[state.currState] = payload;
    },
    SET_CURR_STATE(state, payload) {
      state.currState = payload;
    },
    SAVE_PARK(state, payload) {
      const found = state.savedParks.findIndex((park) => park.id === payload.id);
      if (found === -1) {
        state.savedParks.push(payload);
      }
    }
  },
  actions: {
    GET_STATE_PARKS(context, state_code) {
      context.commit("SET_CURR_STATE", state_code);
      return new Promise((resolve, reject) => {
        if (context.state.stateParks[state_code] === undefined) {
          fetch(`${apiurl}/parks?stateCode=${state_code}&api_key=${apiKey}`)
          .then(response => response.json())
          .then(response => {
            context.commit("SET_STATE_PARKS", response.data);
            resolve(true);
          })
          .catch(error => reject(error));
        }
        else {
          resolve(true);
        }
      });
    },
    SAVE_PARK_ACTION(context, park) {
      context.commit("SAVE_PARK", park);
    }
  }
});
