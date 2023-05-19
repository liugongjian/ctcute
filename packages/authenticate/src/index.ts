import './utils'
import VueAuthenticate from './authenticate'
import hasPermissionDirective from './directive'
import IsAuthorizedComponent from './component.vue'
import { AuthInstance, BizAuthConfigOptions } from '../types'

const install = function (Vue: any, options: BizAuthConfigOptions) {
  Vue.directive('permission', hasPermissionDirective)
  Vue.component('IsAuthorized', IsAuthorizedComponent)

  preCheck(options)

  const vueAuthInstance: AuthInstance = new VueAuthenticate(options.http, options)

  Vue.prototype.$auth = vueAuthInstance
}

function preCheck(options: BizAuthConfigOptions) {
  if (!options.http) {
    throw new Error('Request handler instance not found')
  }
}

export { IamLayout, CtyunLayout } from './layout'

export default install
