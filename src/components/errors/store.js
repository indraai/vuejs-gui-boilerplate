"use strict";
// store to control the lazers
const errors = {
  namespaced: true,
  state: {
    errors: [],
  },
  getters: {
    list(state) {
      return state.errors;
    }
  },
  mutations: {
    error(state, newValue) {
      state.errors.push(newValue);
    }
  },
  actions: {
    error({commit}, data) {
      commit('error', data);
    }
  },
};

export { errors }
