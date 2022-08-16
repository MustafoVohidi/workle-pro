import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/Account.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
