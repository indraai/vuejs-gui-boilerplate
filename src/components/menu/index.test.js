import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

import VueSmoothScroll from 'vue-smooth-scroll'
localVue.use(VueSmoothScroll)

import IndraMenu from './index.vue'
import {menu} from './store.js'

describe('IndraMenu', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(menu)
  })

  it('expect component to be defined', () => {
    const wrapper = shallowMount(IndraMenu, {store, localVue})
    expect(wrapper).to.not.be.an('undefined')
  })
})
