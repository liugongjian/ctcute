const pageRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      breadcrumb: false,
    },
  },
]
export default pageRoutes
