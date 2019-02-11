'use strict'
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

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

import :component: from './index.vue'
import {:store:} from './store.js'

describe(':component:', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({modules: {:store:}})
  })

  it('expects :component: to be defined', () => {
    const wrapper = shallowMount(:component:, {router, store, localVue})
    expect(wrapper).to.not.be.an('undefined')
  })

  it('expects :component: to have a title', () => {
    expect(store.getters.title).to.not.be.an('undefined')
  })

  it('expects :component: to have a description', () => {
    expect(store.getters.description).to.not.be.an('undefined')
  })

  it('expects :component: to have content', () => {
    expect(store.getters.content).to.not.be.an('undefined')
  })

  it('expects :component: data to be an array', () => {
    expect(store.getters.data).to.be.an('array')
  })
})
