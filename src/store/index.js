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
import Vuex from 'vuex'

import {global} from './global.js'
import {header} from '../components/header/store.js'
import {footer} from '../components/footer/store.js'
import {menu} from '../components/menu/store.js'
import {main} from '../components/main/store.js'
import {gallery} from '../components/gallery/store.js'
import {videos} from '../components/videos/store.js'
import {blog} from '../components/blog/store.js'
import {share} from '../components/share/store.js'
import {info} from '../components/info/store.js'
import {gui} from '../components/gui/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    header,
    footer,
    menu,
    main,
    gallery,
    videos,
    blog,
    share,
    info,
    gui,
  }
})
