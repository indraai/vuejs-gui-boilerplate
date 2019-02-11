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

import Vue from 'vue'

import VueTouch from 'vue-touch'
import VueSmoothScroll from 'vue-smooth-scroll'
import VueCookie from 'vue-cookie'
import VueSocketIO from 'vue-socket.io'

import VueRouter from 'vue-router'

import App from './App.vue'
import IndraMain from './components/main/index.vue'
import IndraBlog from './components/blog/index.vue'
import IndraBlogView from './components/blog/view.vue'
import IndraGallery from './components/gallery/index.vue'
import IndraGalleryView from './components/gallery/view.vue'
import IndraShare from './components/share/index.vue'
import IndraVideos from './components/videos/index.vue'
import IndraVideosView from './components/videos/view.vue'
import IndraInfo from './components/info/index.vue'
import IndraGui from './components/gui/index.vue'

import store from './store'

const routes = [
  { path: '/', name: 'main', component: IndraMain },
  { path: '/blog', name: 'blog', component: IndraBlog },
  { path: '/blog/:id/:title', name: 'blogView', component: IndraBlogView },
  { path: '/gallery', name: 'gallery', component: IndraGallery },
  { path: '/gallery/:id', name: 'galleryView', component: IndraGalleryView },
  { path: '/videos', name: 'videos', component: IndraVideos },
  { path: '/videos/:id', name: 'videosView', component: IndraVideosView },
  { path: '/artist', name: 'artist', component: IndraInfo },
  { path: '/gui', name: 'gui', component: IndraGui }
];
const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/',
});

Vue.use(VueTouch)
Vue.use(VueSmoothScroll)
Vue.use(VueCookie)
Vue.use(VueRouter)

Vue.use(new VueSocketIO({
    debug: false,
    connection: 'http://localhost:3900/',
}));

// global components
Vue.component('IndraShare', IndraShare);

function init() {
  new Vue({
    el: '#app',
    store,
    router,
    sockets: {
      connect() {
        return console.log('socket connected');
      },
      'me:twitter'(data) {
        console.log('me settings: ', data);
        this.$store.dispatch('gui/me', data);
      },
      'stream:success'(data) {
        this.$store.dispatch('gui/stream', data);
      },
      'party:member'(data) {
        console.log('add party member');
        this.$store.dispatch('gui/party', data);
      },
      'party:heroes'(data) {
        console.log('party heroes');
        this.$store.dispatch('gui/heroes', data);
      },
      'party:friends'(data) {
        this.$store.dispatch('gui/friends', data);
      },
      'party:invited'(data) {
        this.$store.dispatch('gui/invited', data);
      },
      'promote:message'(data) {
        console.log('promote msg', data);
        this.$store.dispatch('gui/promote', data)
      }
    },
    render: h => h(App),
    created() {}
  })
}
init()
