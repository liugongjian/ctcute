import Layout from '@/layout/index.vue'

const pageRoutes = [
  {
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
  },
  {
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
        path: 'icon',
        component: () => import(/* webpackChunkName: "icon" */ '@/views/page/icon/index.vue'),
        name: 'Icon',
        meta: {
          title: 'Icon 图标',
          breadcrumb: true
        }
      },
      {
        path: 'cas',
        component: () => import(/* webpackChunkName: "cas" */ '@/views/page/cas/index.vue'),
        name: 'Cas',
        meta: {
          title: 'CAS 单点登录',
          breadcrumb: true
        }
      }
    ]
  }
]

export default pageRoutes
