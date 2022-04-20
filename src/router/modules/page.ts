import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const pageRoutes: RouteConfig = {
  path: '/page',
  component: Layout,
  redirect: 'noredirect',
  name: 'Page',
  meta: {
    title: 'Form 表单',
    alwaysShow: true,
    breadcrumb: true
  },
  children: [
    {
      path: 'form',
      component: () => import(/* webpackChunkName: "page" */ '@/views/page/Form.vue'),
      name: 'Form',
      meta: {
        title: 'Form 基础表单',
        breadcrumb: true
      }
    }, {
      path: 'form2',
      component: () => import(/* webpackChunkName: "page" */ '@/views/page/Form.vue'),
      name: 'Form',
      meta: {
        title: 'ProForm 复杂表单',
        breadcrumb: true
      }
    }
  ]
}

export default pageRoutes
