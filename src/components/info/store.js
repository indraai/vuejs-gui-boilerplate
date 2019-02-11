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
import marked from 'marked';

const info = {
  namespaced: true,
  state: {
    title: '<i class="icn icn-user"></i> The Artist',
    description: 'Quinn Michaels is the artist, programmer, imagineer behind the <a href="https://indra.design">indra.design</a> platform that runs quinnmichaels.com',
    content: marked(require('./content.md')),
    data: require('./data.json')
  },
  getters: {
    title(state) {
      return state.title;
    },
    description(state) {
      return state.description;
    },
    data(state) {
      return state.data;
    },
    content(state) {
      return state.content;
    },
    data(state) {
      return state.data;
    }
  },
  mutations: {
    title(state, data) {
      state.title = data;
    },
    description(state, data) {
      state.description = data;
    },
    content(state, data) {
      state.content = data;
    },
    data(state, data) {
      state.data = data;
    }
  },
  actions: {
    title({commit}, data) {
      commit('title', data);
    },
    description({commit}, data) {
      commit('description', data);
    },
    content({commit}, data) {
      commit('content', data);
    },
    data({commit}, data) {
      commit('data', data);
    }
  },
}

export { info }
