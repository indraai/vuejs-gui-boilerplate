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
