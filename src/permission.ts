import router from './router'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { PermissionModule } from '@/store/modules/permission'
import settings from './settings'

const blackList = ['/Permission/Menu/User', '/Permission/Menu/Role', '/Permission/Menu/Menu']

const getPageTitle = (key: string) => {
  return (key ? `${key} - ` : '') + settings.title
}

router.beforeEach(async (to: Route, _: Route, next: any) => {
  // Determine whether the user has logged in
  if (blackList.indexOf(to.path) !== -1) {
    // if (UserModule.token) {
    if (sessionStorage.getItem('token')) {
      if (to.path === '/login') {
        // If is logged in, redirect to the home page
        next({ path: '/' })
      } else {
        // Check whether the user has obtained his permission roles
        if (UserModule.roles.length === 0) {
          try {
            // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
            await UserModule.getUserInfo()
            const roles = UserModule.roles
            // Generate accessible routes map based on role
            PermissionModule.generateRoutes(roles)
            // Dynamically add accessible routes
            router.addRoutes(PermissionModule.dynamicRoutes)
            // Hack: ensure addRoutes is complete
            // Set the replace: true, so the navigation will not leave a history record
            next({ ...to, replace: true })
          } catch (err) {
            // Remove token and redirect to login page
            Message.error(err || 'Has Error')
            next(`/login?redirect=${to.path}`)
          }
        } else {
          next()
        }
      }
    } else {
      next(`/login?redirect=${to.path}`)
    }
  } else {
    next()
  }
})

router.afterEach((to: Route) => {
  // set page title
  document.title = getPageTitle(to.meta.title)
})
