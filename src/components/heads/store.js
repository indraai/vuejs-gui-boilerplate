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

const heads = {
  namespaced: true,
  state: {
    open: false,
    viewing: false,
    title: 'Heads',
    description: 'IndraHeads (heads) is ready for use.',
    profiles: false,
  },
  getters: {
    title(state) {
      return state.title;
    },
    description(state) {
      return state.description;
    },
    profiles(state) {
      return state.profiles;
    },
    open(state) {
      return state.open;
    },
    viewing(state) {
      return state.profiles[state.viewing];
    },
  },
  mutations: {
    title(state, data) {
      state.title = data;
    },
    description(state, data) {
      state.description = data;
    },
    profiles(state, data) {
      state.profiles = data;
    },
    open(state, data) {
      state.open = data;
    },
    viewing(state, data) {
      state.viewing = data;
    },
    close(state) {
      state.viewing = false;
      state.open = false;
    }
  },
  actions: {
    title({commit}, data) {
      commit('title', data);
    },
    description({commit}, data) {
      commit('description', data);
    },
    profiles({commit}, data) {
      const {profiles} = require('./data.json');
      commit('profiles', profiles);
    },
    open({commit}, data) {
      commit('open', true);
      commit('viewing', data);
    },
    close({commit}) {
      commit('close');
    }
  },
}

export { heads }
