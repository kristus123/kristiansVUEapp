import Vue from 'vue'
import App from './App'
import router from './tools/RouterTool'
import '@/assets/global.css'
import store from '@/tools/VueXTool.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // authService,
  store,
  router,
  components: { App },
  template: '<App/>'
})
