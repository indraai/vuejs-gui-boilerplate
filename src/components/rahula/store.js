'use strict';
// Copyright 2018 Quinn Michaels
// This file is part of indra.design
//
// indra.design is free software:
// you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Foobar is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Foobar.  If not, see <https://www.gnu.org/licenses/>.

// THIS IS THE STORE TEMPLATE MAKE SURE TO ADDE IT TO THE ./store/index.js file
const axios = require('axios');
const callRahula = axios.create({
  baseURL: 'https://rahula.club/api/',
});


const rahula = {
  namespaced: true,
  state: {
    open: false,
    viewing: false,
    title: 'Blog',
    description: 'Recent blogs from indra.design delivered by rahula.club',
    topics: [],
  },
  getters: {
    title(state) {
      return state.title;
    },
    description(state) {
      return state.description;
    },
    topics(state) {
      return state.topics;
    },
    open(state) {
      return state.open;
    },
    viewing(state) {
      return state.viewing;
    }
  },
  mutations: {
    title(state, data) {
      state.title = data;
    },
    description(state, data) {
      state.description = data;
    },
    topics(state, data) {
      state.topics = data;
    },
    open(state, data) {
      state.open = data;
    },
    viewing(state, data) {
      state.viewing = data;
    },
    close(state, data) {
      state.viewing = false;
      state.open = false;
    },
  },
  actions: {
    title({commit}, data) {
      commit('title', data);
    },
    description({commit}, data) {
      commit('description', data);
    },
    topics({commit}, data) {
      callRahula('category/38/indra-design').then(result => {
        const { topics } = result.data;
        commit('topics', topics.slice(0,5))
      }).catch(console.error)
    },
    open({commit}, data) {
      callRahula('topic/' + data).then(result => {
        const {data} = result;
        commit('open', true);
        commit('viewing', data);
      }).catch(console.error)
    },
    close({commit}) {
      commit('close');
    }
  },
}

export { rahula }
