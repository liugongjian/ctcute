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
      component: () => import(/* webpackChunkName: "form" */ '@/views/page/SimpleForm.vue'),
      name: 'SimpleForm',
      meta: {
        title: 'Form 基础表单',
        breadcrumb: true
      }
    }, {
      path: 'pro-form',
      component: () => import(/* webpackChunkName: "form" */ '@/views/page/SimpleForm.vue'),
      name: 'ProForm',
      meta: {
        title: 'ProForm 复杂表单',
        breadcrumb: true
      }
    }
  ]
}]

export default pageRoutes
