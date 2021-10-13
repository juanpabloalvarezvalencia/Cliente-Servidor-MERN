import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },  
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  }, 
  {
    path: '/bicicleta',
    name: 'Bicicleta',
    component: () => import(/* webpackChunkName: "bicicleta" */ '../views/Bicicleta.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
