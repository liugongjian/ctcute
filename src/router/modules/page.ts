import Layout from '@/layout/index.vue'

const pageRoutes = [{
  path: '/page/form',
  component: Layout,
  name: 'Form',
  meta: {
    title: 'Form 表单',
    breadcrumb: true
  },
  children: [
    {
      path: 'simple-form',
      component: () => import(/* webpackChunkName: "form" */ '@/views/page/form/SimpleForm.vue'),
      name: 'SimpleForm',
      meta: {
        title: 'Form 基础表单',
        breadcrumb: true
      }
    }, {
      path: 'pro-form',
      component: () => import(/* webpackChunkName: "form" */ '@/views/page/form/SimpleForm.vue'),
      name: 'ProForm',
      meta: {
        title: 'ProForm 复杂表单',
        breadcrumb: true
      }
    }
  ]
}, {
  path: '/page/ohter',
  component: Layout,
  name: 'Other',
  meta: {
    title: 'Other 其他',
    alwaysShow: true,
    breadcrumb: true
  },
  children: [
    {
      path: 'cas',
      component: () => import(/* webpackChunkName: "form" */ '@/views/page/cas/index.vue'),
      name: 'Cas',
      meta: {
        title: 'CAS 单点登录',
        breadcrumb: true
      }
    }
  ]
}]

export default pageRoutes
