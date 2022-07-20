import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import pageRoutes from '@/router/modules/page'
import componentRoutes from '@/router/modules/component'
import uiRoutes from '@/router/modules/ui'

Vue.use(Router)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/guide/quick-start',
    meta: { hidden: true },
  },
  {
    path: '/component',
    redirect: '/component/base',
    meta: { hidden: true },
  },
]

const _pageRoutes = pageRoutes.map((route: any) => {
  route.meta.type = 'page'
  return route
})

const _componentRoutes = componentRoutes.map((route: any) => {
  route.meta.type = 'component'
  return route
})

export const asyncRoutes: RouteConfig[] = [..._pageRoutes, ..._componentRoutes, ...uiRoutes]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
})

export default router
