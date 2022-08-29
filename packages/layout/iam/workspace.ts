import { Route, NavigationGuardNext } from 'vue-router'

import beforeEach from '../common/routerBeforeEach'

// 路由拦截器
export default beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
  to.name === 'interceptor' ? next() : next({ name: 'interceptor' })
})
