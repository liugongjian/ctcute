import Layout from '@/layout/index.vue'

const pageRoutes = [
  // 表单
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
          breadcrumb: true,
          manifest: '@/views/page/form/SimpleForm.json'
        }
      }, {
        path: 'pro-form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/form/SimpleForm.vue'),
        name: 'ProForm',
        meta: {
          title: 'ProForm 复杂表单',
          breadcrumb: true,
          manifest: '@/views/page/form/SimpleForm.json'
        }
      }
    ]
  },
  // 表格
  {
    path: '/page/table',
    component: Layout,
    name: 'Table',
    meta: {
      title: 'Table 表格',
      breadcrumb: true
    },
    children: [
      {
        path: 'simple-table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/table/SimpleTable.vue'),
        name: 'SimpleTable',
        meta: {
          title: 'Table 基础表格',
          breadcrumb: true,
          manifest: '@/views/page/table/SimpleTable.json'
        }
      },
      {
        path: 'pro-table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/table/SimpleTable.vue'),
        name: 'ProTable',
        meta: {
          title: 'ProTable 复杂表格',
          breadcrumb: true,
          manifest: '@/views/page/table/SimpleTable.json'
        }
      }
    ]
  },
  // 其他
  {
    path: '/page/other',
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
        path: 'ts-demo',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/ts-demo/index.vue'),
        name: 'TypeScriptDemo',
        meta: {
          title: 'TypeScript Demo',
          breadcrumb: true,
          manifest: '@/views/page/ts-demo/TypeScriptDemo.json'
        }
      }
    ]
  }
]

export default pageRoutes
