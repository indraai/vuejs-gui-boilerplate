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

import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import VueSmoothScroll from 'vue-smooth-scroll'
import VueCookie from 'vue-cookie';

import App from './components/App.vue'

import store from './store'

Vue.use(VueResource)
Vue.use(VueTouch)
Vue.use(VueSmoothScroll)
Vue.use(VueCookie)

function init() {
  new Vue({
    el: '#app',
    store,
    render: h => h(App),
    created() {}
  })
}
init()
