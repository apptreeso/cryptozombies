import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    attemptCount: 0
  },
  mutations: {
    setAttemptCount(state, payload) {
      state.attemptCount += payload;
    }
  },
  actions: {
    setAttemptCountAction({ commit }, payload) {
      commit("setAttemptCount", payload);
    }
  },
  getters: {
    getAttemptCount(state) {
      return state.attemptCount;
    }
  }
});
