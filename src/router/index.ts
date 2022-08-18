/*
 * @Author: 马妍
 * @Date: 2022-07-29 10:25:03
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-11 17:56:05
 * @Description:
 */
import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import pageRoutes from '@/router/modules/page'
import componentRoutes from '@/router/modules/component'
import uiRoutes from '@/router/modules/ui'
import loginRouter from '@/router/modules/login'

Vue.use(Router)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/Login',
    meta: { hidden: true },
  },
  {
    path: '/guide',
    redirect: '/guide/quick-start',
    meta: { hidden: true },
  },

  {
    path: '/component',
    redirect: '/component/base',
    meta: { hidden: true },
  },
  {
    path: '/permission',
    redirect: '/permission/User',
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

// TODO 除了404，其他需要配合后端接口的状态跳转
const _statusRoutes = [
  {
    path: '/404',
    component: () => import('@/views/page/StatusPage/Page404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/403',
    component: () => import('@/views/page/StatusPage/Page403.vue'),
    meta: { hidden: true },
  },
  {
    path: '/500',
    component: () => import('@/views/page/StatusPage/Page500.vue'),
    meta: { hidden: true },
  },
  { path: '*', redirect: '/404', meta: { hidden: true } },
]

export const asyncRoutes: RouteConfig[] = [
  ..._pageRoutes,
  ..._componentRoutes,
  ...uiRoutes,
  ..._statusRoutes,
  ...loginRouter,
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
})

export default router
