import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

import IndraHeader from './index.vue'
import {header} from './store.js'

describe(`IndraHeader`, () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(header)
  })

  it('expect component to be defined', () => {
    const wrapper = shallowMount(IndraHeader, {store, localVue})
    expect(wrapper).to.not.be.an('undefined')
  })
})
