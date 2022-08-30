import './utils'
import VueAuthenticate from './authenticate'
import hasPermissionDirective from './directive'

declare module 'vue/types/vue' {
  interface Vue {
    $auth: any
  }
}

const install = function (Vue: any, options: any) {
  Vue.directive('permission', hasPermissionDirective)

  preCheck(options)

  const vueAuthInstance = new VueAuthenticate(options.http, options)

  Vue.prototype.$auth = vueAuthInstance
}

function preCheck(options) {
  if (!options.http) {
    throw new Error('Request handler instance not found')
  }
}
export default install
