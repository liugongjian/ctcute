import router from './router'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { PermissionModule } from '@/store/modules/permission'
import settings from './settings'

const whiteList = ['/login', '/auth-redirect']

const getPageTitle = (key: string) => {
  return (key ? `${key} - ` : '') + settings.title
}

router.beforeEach(async(to: Route, _: Route, next: any) => {
  // Determine whether the user has logged in
  if (UserModule.token) {
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
          PermissionModule.dynamicRoutes.forEach(route => {
            router.addRoute(route)
          })
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
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to: Route) => {
  // set page title
  document.title = getPageTitle(to.meta.title)
})
