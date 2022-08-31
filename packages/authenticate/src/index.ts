import './utils'
import VueAuthenticate from './authenticate'
import hasPermissionDirective from './directive'
import { AuthInstance, BizAuthConfigOptions } from '../types'

declare module 'vue/types/vue' {
  interface Vue {
    $auth: any
  }
}

const install = function (Vue: any, options: BizAuthConfigOptions) {
  Vue.directive('permission', hasPermissionDirective)

  preCheck(options)

  const vueAuthInstance: AuthInstance = new VueAuthenticate(options.http, options)

  Vue.prototype.$auth = vueAuthInstance
}

function preCheck(options: BizAuthConfigOptions) {
  if (!options.http) {
    throw new Error('Request handler instance not found')
  }
}
export default install
