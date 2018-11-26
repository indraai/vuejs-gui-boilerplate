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

const gallery = {
  namespaced: true,
  state: {
    open: false,
    viewing: false,
    title: '<i class="icn icn-picture"></i> The Gallery',
    description: 'A collection of artwork created by Quinn Michaels',
    items: [],
  },
  getters: {
    title(state) {
      return state.title;
    },
    description(state) {
      return state.description;
    },
    open(state) {
      return state.open;
    },
    viewing(state) {
      return state.viewing;
    },
    items(state) {
      return state.items.reverse();
    }
  },
  mutations: {
    title(state, data) {
      state.title = data;
    },
    description(state, data) {
      state.description = data;
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
    },
    items(state, data) {
      state.items = data
    },
  },
  actions: {
    title({commit}, data) {
      commit('title', data);
    },
    description({commit}, data) {
      commit('description', data);
    },
    open({commit}, data) {
      commit('open', true);
      commit('viewing', data);
    },
    close({commit}) {
      commit('close');
    },
    loadItems({commit}, data) {
      // let's build an items array for better use with data later
      const items = [];
      for (let x = 1; x <= 95; x++) {
        items.push({
          id: x,
          name: `Artwork ${x}`,
          caption: `This is Artwork ${x} created by Quinn Michaels`,
          src: `https://deva.space/cdn/paintings/thumb/${x}.jpg`,
        });
      }
      commit('items', items);
    }
  },
}

export { gallery }
