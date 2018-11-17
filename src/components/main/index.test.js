import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

import IndraMain from './index.vue'
import {main} from './store.js'

describe('IndraMain', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(main)
  })

  it('expect component to be defined', () => {
    const wrapper = shallowMount(IndraMain, {store, localVue})
    expect(wrapper).to.not.be.an('undefined')
  })
})
