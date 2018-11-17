import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

import IndraFooter from './index.vue'
import {footer} from './store.js'

describe('IndraFooter', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(footer)
  })

  it('expect component to be defined', () => {
    const wrapper = shallowMount(IndraFooter, {store, localVue})
    expect(wrapper).to.not.be.an('undefined')
  })
})
