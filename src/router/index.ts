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
      title: '首页',
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
          title: '首页',
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
      title: '关于',
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
          title: '关于',
          icon: 'home',
          activeMenu: '/about',
          breadcrumb: false
        }
      }
    ]
  },
  {
    path: '/page',
    component: Layout,
    meta: {
      title: '页面规范',
      icon: 'home',
      alwaysShow: true,
      breadcrumb: true
    },
    children: [
      {
        path: 'simple-form',
        component: () => import(/* webpackChunkName: "page" */ '../views/page/SimpleForm.vue'),
        name: 'simple-form',
        meta: {
          title: '简单表单',
          icon: 'home',
          activeMenu: '/page'
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
