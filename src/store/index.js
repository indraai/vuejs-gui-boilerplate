import Vue from 'vue'
import Vuex from 'vuex'

import {global} from './global.js'
import {errors} from '../components/errors/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    errors,
  }
})
