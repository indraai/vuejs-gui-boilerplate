// Copyright 2018 Quinn Michaels
// This file is part of Indra VueJs Gui Boilerplate
//
// Indra VueJs Gui Boilerplate is free software:
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
import axios from 'axios'

"use strict";
// THIS IS THE STORE TEMPLATE MAKE SURE TO ADDE IT TO THE ./store/index.js file
const chuck = {
  namespaced: true,
  state: {
    communicating: false,
    joke: '',
    bot: {
      name: 'Chuck Norris',
      avatar: 'https://media.discordapp.net/attachments/465948115732660255/474792404025737227/chuck.png',
      url: 'https://api.icndb.com/jokes/random?exclude=[explicit]',
    },
  },
  getters: {
    bot(state) {
      return state.bot;
    },
    communicating(state) {
      return state.communicating;
    },
    joke(state) {
      return state.joke;
    },
  },
  mutations: {
    communicating(state, data) {
      state.communicating = !state.communicating;
    },
    joke(state, data) {
      state.joke = data;
    }
  },
  actions: {
    communicating({commit}, data) {
      commit('communicating', data);
    },
    askChuck({commit, state}) {
      commit('communicating');
      axios.get(state.bot.url).then(answer=> {
        commit('communicating');
        commit('joke', answer.data.value.joke);
        console.log(answer);
      }).catch(console.error);

    }
  },
}

export { chuck }
