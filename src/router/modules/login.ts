const pageRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'route.login.title',
      breadcrumb: false,
    },
  },
]
export default pageRoutes
