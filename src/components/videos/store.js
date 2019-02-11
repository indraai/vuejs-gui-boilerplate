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

const videos = {
  namespaced: true,
  state: {
    title: '<i class="icn icn-camera-video"></i> The Videos',
    description: 'A collection of art in motion videos made by Quinn Michaels',
    content: marked(require('./content.md')),
    data: require('./data.json').videos.reverse(),
    viewing: false,
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
    viewing(state) {
      return state.viewing;
    },
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
    viewing(state, data) {
      state.viewing = data;
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
    viewing({commit}, data) {
      commit('viewing', data);
    },
  },
}

export { videos }
