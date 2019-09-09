import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddPlanet from '@/components/AddPlanet'
import MoreInfo from '@/components/MoreInfo'


import RegisterPage from '@/pages/RegisterPage'

import LoginPage from '@/pages/LoginPage'


// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


import { store } from '../main.js'

Vue.use(Router)



const router = new Router({

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




router.beforeEach((to, from, next) => {
  next()
});






export default router;