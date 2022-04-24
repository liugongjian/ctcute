import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import pageRoutes from '@/router/modules/page'

Vue.use(Router)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/page/form/simple-form',
    meta: { hidden: true }
  }
]

export const asyncRoutes: RouteConfig[] = [
  ...pageRoutes
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
