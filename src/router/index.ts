/*
 * @Author: 马妍
 * @Date: 2022-07-29 10:25:03
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-06-01 17:15:16
 * @Description:
 */
import Vue from 'vue'
import Router, { RouteConfig, Route } from 'vue-router'
import { indexPageRoutes, restPageRoutes } from '@/router/modules/page'
import LayoutPage from '@/layout/LayoutPage.vue'
import settings from '@/settings'
import componentRoutes from '@/router/modules/component'
import uiRoutes from '@/router/modules/ui'
import loginRouter from '@/router/modules/login'
import docRouter from '@/router/modules/doc'
import layoutTestRoutes from '@/router/modules/layoutTest'
import i18n from '@/i18n'

Vue.use(Router)

const _docRoutes = docRouter.map((route: any) => {
  route.meta.type = 'doc'
  return route
})

const _indexRoutes = indexPageRoutes.map((route: any) => {
  route.meta.type = 'page'
  return route
})

const _restPageRoutes = restPageRoutes.map((route: any) => {
  route.meta.type = 'page'
  return route
})

const _componentRoutes = componentRoutes.map((route: any) => {
  route.meta.type = 'component'
  return route
})

const _layoutTestRoutes = layoutTestRoutes.map((route: any) => {
  route.meta.type = 'layoutTest'
  return route
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
  {
    path: '/LoadError',
    component: () => import('@/views/page/StatusPage/LoadError.vue'),
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
      title: 'home.title',
      breadcrumb: false,
    },
  },
  {
    path: '/docs',
    redirect: '/docs/design-target',
    meta: { hidden: true },
  },
  {
    path: '/component',
    redirect: '/component/biz',
    meta: { hidden: true },
  },
]
export const asyncRoutes: RouteConfig[] = [
  //权限
  {
    path: '/page/permission',
    component: LayoutPage,
    name: 'Permission',
    meta: {
      title: 'route.permission.default',
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
          title: 'route.permission.user',
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
          title: 'route.permission.role',
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
          title: 'route.permission.menu',
          breadcrumb: true,
          perms: ['/permission/menu'],
        },
      },
    ],
  },
]

// 为了把asyncRoutes放在图表后面，拆分了图表和其他页面的路由
export const originConstantRoutes: RouteConfig[] = [
  ...base,
  ..._docRoutes,
  ..._indexRoutes,
  ...asyncRoutes,
  ..._restPageRoutes,
  ..._componentRoutes,
  ...uiRoutes,
  ...loginRouter,
  ..._statusRoutes,
  ..._layoutTestRoutes,
]
// 非通用，只是cute-design的场景，遍历所有constantRoutes，给每一条路由的meta加上withoutLogin为true的属性，跳过asyncRoutes
const addRouteMetaProp = (origin: RouteConfig[], props: any): RouteConfig[] => {
  origin.forEach(route => {
    if (route.children && route.children.length) {
      addRouteMetaProp(route.children, props)
    } else {
      if (!(route.meta && route.meta.perms)) {
        route.meta = {
          ...(route.meta || {}),
          ...props,
        }
      }
    }
  })
  return origin
}

export const routes: RouteConfig[] = addRouteMetaProp(originConstantRoutes, { withoutLogin: true })

// export const routes: RouteConfig[] = [...constantRoutes, ...asyncRoutes]

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
  document.title = getPageTitle(i18n.t(to.meta.title) as string)
})

export default router
