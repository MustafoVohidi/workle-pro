import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Common from '@/views/Common.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Common
  },
  {
    path: '/account/',
    name: 'account',
    component: () => import('@/views/Account.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
