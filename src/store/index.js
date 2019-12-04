import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    attemptCount: 0,
    flagEnd: false
  },
  mutations: {
    setAttemptCount(state, payload) {
      state.attemptCount = payload;
      console.log("state.attemptCount", state.attemptCount);
    },
    setFlagEnd(state, payload) {
      state.flagEnd = payload;
    }
  },
  actions: {
    setAttemptCountAction({ commit }, payload) {
      commit("setAttemptCount", payload);
    },
    setFlagEndAction({ commit }, payload) {
      commit("setFlagEnd", payload);
    }
  },
  getters: {
    getAttemptCount(state) {
      return state.attemptCount;
    },
    getFlagEnd(state) {
      return state.flagEnd;
    }
  }
});
