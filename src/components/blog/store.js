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
import axios from 'axios'

const blog = {
  namespaced: true,
  state: {
    title: '<i class="icn icn-pencil"></i> The Blog',
    description: 'The Blog of Quinn Thoughts',
    get: 'https://rahula.club/api/category/39',
    topics: [],
    design: false,
    topic: false,
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
    design(state) {
      return state.design;
    },
    topic(state) {
      return state.topic;
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
    design(state, data) {
      state.design = data;
    },
    topic(state, data) {
      state.topic = data;
    }
  },
  actions: {
    title({commit}, data) {
      commit('title', data);
    },
    description({commit}, data) {
      commit('description', data);
    },
    loadTopics({commit,state,dispatch}, data) {
      axios.get(state.get).then(result => {
        const { topics, name, description } = result.data
        commit('topics', topics)
        dispatch('header/title', name, {root: true});
        dispatch('header/description', description, {root: true});
      }).catch(console.error);
    },
    getTopic({commit}, data) {
      axios.get(`https://rahula.club/api/topic/${data}`).then(result => {
        commit('topic', result.data);
      }).catch(console.error)
    },
    clearTopic({commit}, data) {
      commit('topic', false);
    },
  },
}

export { blog }
