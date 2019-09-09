import Vue from 'vue'
import Vuex from 'vuex';
import authService from '@/services/AuthService.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedin: authService.isAuthenticated()
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
});


export default store;