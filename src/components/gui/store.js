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
    heroes: [],
    friends: [],
    promote: [],
    question: '',
    conversation: [],
    commands: [],
    error: false,
    me: false,
    invited: {},
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
    heroes(state) {
      return state.heroes;
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
    conversation(state) {
      return state.conversation;
    },
    error(state) {
      return state.error;
    },
    me(state) {
      return state.me;
    },
    commands(state) {
      return state.commands;
    },
    invited(state) {
      return state.invited;
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
    },
    stream(state, data) {
      if (state.stream.length > 50) state.stream.pop()
      state.stream.unshift(data);
    },
    party(state, data) {
      if (state.party.length > 50) state.party.pop()
      state.party.unshift(data);
    },
    heroes(state, data) {
      state.heroes = data;
    },
    friends(state, data) {
      state.friends = data;
    },
    promote(state, data) {
      state.promote.unshift(data);
    },
    question(state, data) {
      state.question = data;
    },
    conversation(state, data) {
      state.conversation.push(data);
    },
    error(state, data) {
      state.error = data;
    },
    me(state, data) {
      state.me = data;
    },
    command(state, data) {
      state.commands.unshift(data);
    },
    invited(state, data) {
      state.invited = data;
    }
  },
  actions: {
    me({commit}, data) {
      commit('me', data);
    },
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
    heroes({commit}, data) {
      commit('heroes', data);
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
      commit('conversation', {
        type: 'question',
        text: state.question
      });
      commit('command', state.question);
      axios.post('http://localhost:9300/api/bot/ask/', {
        msg: state.question,
      }).then(answer => {
        console.log('answer', answer.data);
        commit('conversation', {
          type: 'answer',
          data: answer.data.a
        });
        commit('question', '');
      });
    },
    error({commit}, data) {
      commit('error', data);
    },
    command({commit}, data) {
      commit('command', data);
    },
    invited({commit}, data) {
      commit('invited', data);
    },
  },
}

export { gui }
