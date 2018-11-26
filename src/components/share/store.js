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

const share = {
  namespaced: true,
  state: {
    title: 'IndraShare',
    description: 'IndraShare (share) is ready for use.',
    sharing: [
      {
        name: 'twitter',
        link: 'https://twitter.com/intent/tweet?hashtags=quinnmichaels,fortrent&text=:your%20message%20here:&via=quinnmichaels&url=',
        icon: 'https://deva.space/cdn/sharing/twitter-128.png',
      },
      {
        name: 'facebook',
        link: 'https://www.facebook.com/sharer/sharer.php?text=:your%20message%20here&u=',
        icon: 'https://deva.space/cdn/sharing/facebook-128.png',
      },
      {
        name: 'goolge+',
        link: 'https://plus.google.com/share?app=110&hashtags=quinnmichaels,fortrent&text=:your%20message%20here:&url=',
        icon: 'https://deva.space/cdn/sharing/googleplus-128.png',
      }
    ],
  },
  getters: {
    title(state) {
      return state.title;
    },
    description(state) {
      return state.description;
    },
    sharing(state) {
      return state.sharing;
    },
  },
  mutations: {
    title(state, data) {
      state.title = data;
    },
    description(state, data) {
      state.description = data;
    },
  },
  actions: {
    title({commit}, data) {
      commit('title', data);
    },
    description({commit}, data) {
      commit('description', data);
    },
  },
}

export { share }
