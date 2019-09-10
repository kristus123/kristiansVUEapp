import Vue from 'vue'
import Vuex from 'vuex';
import authService from '@/services/AuthService.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    componentKey : 'aa',
    isLoggedIn: authService.isAuthenticated(),
    planetObject : { id: 1, name: "hei", size : "stor", date_discovered: "idag" }
  },
mutations: {

},
actions: {

},
getters: {

}
});


export default store;