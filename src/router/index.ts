/*
 * @Author: 马妍
 * @Date: 2022-07-29 10:25:03
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-09-01 10:55:00
 * @Description:
 */
import Vue from 'vue'
import Router, { RouteConfig, Route } from 'vue-router'
import pageRoutes from '@/router/modules/page'
import componentRoutes from '@/router/modules/component'
import uiRoutes from '@/router/modules/ui'
import loginRouter from '@/router/modules/login'
import Layout from '@/layout/index.vue'
import settings from '@/settings'

Vue.use(Router)

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
const base = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      breadcrumb: false,
    },
  },
  {
    path: '/component',
    redirect: '/component/base',
    meta: { hidden: true },
  },
]
// TODO 除了用户权限相关的 其他都是constantRoutes
export const originConstantRoutes: RouteConfig[] = [
  ...base,
  ..._pageRoutes,
  ..._componentRoutes,
  ...uiRoutes,
  ...loginRouter,
  ..._statusRoutes,
]
// 非通用，只是cute-design的场景，遍历所有constantRoutes，给每一条路由的meta加上withoutLogin为true的属性
const addRouteMetaProp = (origin: RouteConfig[], props: any): RouteConfig[] => {
  origin.forEach(route => {
    if (route.children && route.children.length) {
      addRouteMetaProp(route.children, props)
    } else {
      route.meta = {
        ...(route.meta || {}),
        ...props,
      }
    }
  })
  return origin
}

export const constantRoutes: RouteConfig[] = addRouteMetaProp(originConstantRoutes, { withoutLogin: true })

export const asyncRoutes: RouteConfig[] = [
  //权限
  {
    path: '/page/permission',
    component: Layout,
    name: 'Permission',
    meta: {
      title: 'Permission 权限',
      alwaysShow: true,
      breadcrumb: true,
      perms: ['/permission'],
      type: 'page',
    },
    children: [
      {
        path: 'user',
        component: () =>
          import(/* webpackChunkName: "simplemenu" */ '@/views/permission/User/SimpleUser.vue'),
        name: 'User',
        meta: {
          title: 'SimpleUser 用户管理',
          breadcrumb: true,
          perms: ['/permission/user'],
        },
      },
      {
        path: 'role',
        component: () =>
          import(/* webpackChunkName: "simpleuser" */ '@/views/permission/Role/SimpleRole.vue'),
        name: 'Role',
        meta: {
          title: 'SimpleRole 角色管理',
          breadcrumb: true,
          perms: ['/permission/role'],
        },
      },
      {
        path: 'menu',
        component: () =>
          import(/* webpackChunkName: "simpleprole" */ '@/views/permission/Menu/SimpleMenu.vue'),
        name: 'Menu',
        meta: {
          title: 'SimpleMenu 菜单管理',
          breadcrumb: true,
          perms: ['/permission/menu'],
        },
      },
    ],
  },
]

export const routes: RouteConfig[] = [...constantRoutes, ...asyncRoutes]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})

const getPageTitle = (key: string) => {
  return (key ? `${key} - ` : '') + settings.title
}

router.afterEach((to: Route) => {
  // set page title
  document.title = getPageTitle(to.meta.title)
})

export default router
