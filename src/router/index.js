import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import(/* webpackChunkName: "data" */ '../views/DataBindingList2.vue')
  },
  {
    path: '/title',
    name: 'Title',
    component: () => import(/* webpackChunkName: "data" */ '../views/NestedComponent.vue')
  },
  {
    path: '/kakaologin',
    name: 'KaKaoLogin',
    component: () => import(/* webpackChunkName: "data" */ '../views/KaKaoLogin.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
