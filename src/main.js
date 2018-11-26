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
import VueCookie from 'vue-cookie';

import VueRouter from 'vue-router'

import App from './App.vue'
import IndraMain from './components/main/index.vue'
import IndraBlog from './components/blog/index.vue'
import IndraBlogView from './components/blog/view.vue'
import IndraGallery from './components/gallery/index.vue'

import store from './store'

const routes = [
  { path: '/', name: 'main', component: IndraMain },
  { path: '/blog', name: 'blog', component: IndraBlog },
  { path: '/blog/:id/:title', name: 'blogView', component: IndraBlogView },
  { path: '/gallery', name: 'gallery', component: IndraGallery }
];
const router = new VueRouter({routes});

Vue.use(VueTouch)
Vue.use(VueSmoothScroll)
Vue.use(VueCookie)
Vue.use(VueRouter)

function init() {
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
    created() {}
  })
}
init()
