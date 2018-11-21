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
const callIndra = axios.create({
  baseURL: 'http://localhost:9000/api/bot/',
});

const chat = {
  namespaced: true,
  state: {
    title: 'IndraChat',
    description: 'IndraChat (chat) is ready for use.',
    open: false,
    question: '',
    conversation: [],
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
    question(state) {
      return state.question;
    },
    conversation(state) {
      return state.conversation;
    },
  },
  mutations: {
    title(state, data) {
      state.title = data;
    },
    description(state, data) {
      state.description = data;
    },
    open(state, data) {
      state.open = !state.open;
    },
    question(state, data) {
      state.question = data;
    },
    conversation(state, data) {
      state.conversation.push(data);
    }
  },
  actions: {
    title({commit}, data) {
      commit('title', data);
    },
    description({commit}, data) {
      commit('description', data);
    },
    open({commit}, data) {
      commit('open', data)
    },
    question({commit}, data) {
      commit('question', data)
    },
    askQuestion({commit, state}, data) {

      commit('conversation', {
        user: 'me',
        text: state.question,
      });

      callIndra('ask?msg=' + state.question).then(result => {
        const {data} = result
        console.log('indra result', result);
        commit('conversation', {
          user: data.a.bot.name,
          text: data.a.text
        })
      }).catch(console.error)

      commit('question', '');
    }
  },
}

export { chat }
