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
const {title, description, data } = require('./data.json');
const content = marked(require('./content.md'));
import axios from 'axios'

const gui = {
  namespaced: true,
  state: {
    title,
    description,
    data,
    content,
    stream: [],
    party: [],
    leaders: [],
    friends: [],
    promote: {},
    question: '',
    answers: [],
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
    },
    stream(state) {
      return state.stream;
    },
    party(state) {
      return state.party;
    },
    leaders(state) {
      return state.leaders;
    },
    friends(state) {
      return state.friends;
    },
    promote(state) {
      return state.promote;
    },
    question(state) {
      return state.question;
    },
    answers(state) {
      return state.answers;
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
    data(state, data) {
      state.data = data;
    },
    stream(state, data) {
      if (state.stream.length > 50) state.stream.pop()
      state.stream.unshift(data);
    },
    party(state, data) {
      if (state.party.length > 50) state.party.pop()
      state.party.unshift(data);
    },
    leaders(state, data) {
      state.leaders = data;
    },
    friends(state, data) {
      state.friends = data;
    },
    promote(state, data) {
      state.friends = data;
    },
    question(state, data) {
      state.question = data;
    },
    answers(state, data) {
      state.answers.push(data);
    },
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
    },
    stream({commit}, data) {
      commit('stream', data);
    },
    party({commit}, data) {
      commit('party', data);
    },
    leaders({commit}, data) {
      commit('leaders', data);
    },
    friends({commit}, data) {
      commit('friends', data);
    },
    promote({commit}, data) {
      commit('promote', data);
    },
    question({commit}, data) {
      commit('question', data);
    },
    ask({commit,state}) {
      axios.post('http://localhost:9300/api/bot/ask/', {
        msg: state.question,
      }).then(answer => {
        console.log('answer', answer.data);
        commit('answers', answer.data);
        commit('question', '');
      });
    },
  },
}

export { gui }
