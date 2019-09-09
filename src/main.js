// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex';
import App from './App'
import router from './tools/RouterTool'
import '@/assets/global.css'
import Vuex from 'vuex'
import authService from '@/services/AuthService.js'
// import authService from "@/services/AuthService.js";
// import { store } from '@/tools/VueXTool.js'
Vue.config.productionTip = false







// import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: authService.isAuthenticated()
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
});












/* eslint-disable no-new */
new Vue({
  el: '#app',
  // authService,
  store,
  router,
  components: { App },
  template: '<App/>'
})
