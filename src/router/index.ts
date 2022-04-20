import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import pageRoutes from '@/router/modules/page'

Vue.use(Router)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home',
    meta: { hidden: true }
  }
  // {
  //   path: '/page',
  //   component: Layout,
  //   meta: {
  //     title: '页面规范',
  //     icon: 'home',
  //     alwaysShow: true,
  //     breadcrumb: true
  //   },
  //   children: [
  //     {
  //       path: 'form',
  //       component: () => import(/* webpackChunkName: "page" */ '../views/page/Form.vue'),
  //       name: 'form',
  //       meta: {
  //         title: '表单',
  //         icon: 'home',
  //         activeMenu: '/page'
  //       }
  //     }
  //   ]
  // }
]

export const asyncRoutes: RouteConfig[] = [
  pageRoutes
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
