import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layout/index.vue'

Vue.use(Router)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home',
    meta: { hidden: true }
  },
  {
    path: '/home',
    component: Layout,
    meta: {
      id: '20210424150201002000',
      title: '首页',
      code: '001000000',
      icon: 'home',
      only: true,
      alwaysShow: false
    },
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        meta: {
          id: '20210424150201002001',
          title: '首页',
          code: '001001000',
          icon: 'home',
          activeMenu: '/home',
          breadcrumb: false
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    meta: {
      id: '20210424150201003000',
      title: '关于',
      code: '002000000',
      icon: 'home',
      only: true,
      alwaysShow: false
    },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        name: 'about',
        meta: {
          id: '20210424150201003001',
          title: '关于',
          code: '002001000',
          icon: 'home',
          activeMenu: '/about',
          breadcrumb: false
        }
      }
    ]
  }
]

export const asyncRoutes: RouteConfig[] = [
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
