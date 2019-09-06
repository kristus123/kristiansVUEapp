import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddPlanet from '@/components/AddPlanet'
import MoreInfo from '@/components/MoreInfo'


import RegisterPage from '@/pages/RegisterPage'

import LoginPage from '@/pages/LoginPage'


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/AddPlanet',
      name: 'AddPlanet',
      component: AddPlanet
    },
    {
      path: '/MoreInfo/:id',
      name: 'MoreInfo',
      component: MoreInfo
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    }
    


  ]
})
