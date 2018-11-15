"use strict";
// global store operations
import axios from 'axios'

const global = {
  namespaced: true,
  state: {
    urls: {
      server: 'http://localhost:9000/api/',
      ask: 'bot/ask/',
    },
  },
  getters: {},
  mutations: {},
  actions: {},
}

export { global }
