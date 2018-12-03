import Vue from "vue";
import Vuex from "vuex";
import { ADD_COUNTDOWN_MUTATION } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countdowns: [
      {
        id: "00001",
        end: "2018-12-31",
        name: "New Year's Eve",
      },
      {
        id: "00002",
        end: "2019-01-01",
        name: "MIT Admissions Deadline",
      },
      {
        id: "00003",
        end: "2019-06-16",
        name: "A birthday",
      },
    ],
  },
  mutations: {
    [ADD_COUNTDOWN_MUTATION](state, countdown) {
      state.countdowns.push(countdown);
    },
  },
  actions: {
    addCountdown({ commit }, countdown) {
      setTimeout(() => {
        commit(ADD_COUNTDOWN_MUTATION, countdown);
      }, 1000);
    }
  },
});
