import { Message } from 'element-ui'
import { isUndefined, loadJs, loadCss } from './utils'

export function getCookieDomainUrl() {
  try {
    return window.location.hostname
  } catch (e) { }

  return ''
}

export function getRedirectUri(uri) {
  try {
    return !isUndefined(uri) ? `${window.location.origin}${uri}` : window.location.origin
  } catch (e) { }

  return uri || null
}

/**
 * Default configuration
 */
export default {
  baseUrl: null, // 后端接口的基础路径
  tokenName: 'token', // 自建用户体系token的名字
  tokenPrefix: 'vueauth', // 自建用户体系token的前缀
  tokenHeader: 'Authorization', // 自建用户体系接口中传的tokenHeader字段名
  tokenType: null, // 自建用户体系token类型，常用的是'Bear'
  loginUrl: '/v1/auth/login', // 自建用户体系登录接口
  logoutUrl: '/v1/auth/logout', // 自建用户体系退出接口
  storageNamespace: 'vue-authenticate', // 内部存储的namespace
  cookieStorage: {
    // 内部存储cookie的一些参数
    domain: getCookieDomainUrl(),
    path: '/',
    secure: false,
  },
  withCredentials: true, // 请求接口的时候是否带上cookie
  requestDataKey: 'data', // 请求的key
  responseDataKey: 'data', // 响应的key
  authenticateType: 'local', // 需要集成的用户类型
  containerId: '#container', // 入口DOM的id，在app外层
  enableAuthorize: false, // 是否需要集成权限
  authorizeType: 'local', // 需要集成的权限类型
  /**
   * Default request interceptor for Axios library
   * @context {VueAuthenticate}
   */
  bindRequestInterceptor: function ($auth) {
    if ($auth.options.authenticateType === 'local') {
      const tokenHeader = $auth.options.tokenHeader

      $auth.$http.interceptors.request.use(config => {
        if ($auth.getToken()) {
          if ($auth.options.tokenType) {
            config.headers[tokenHeader] = [$auth.options.tokenType, $auth.getToken()].join(' ')
          } else {
            config.headers[tokenHeader] = $auth.getToken()
          }
        } else {
          delete config.headers[tokenHeader]
        }
        return config
      })
    }
  },
  // bindResponseInterceptor
  bindResponseInterceptor: function ($auth) {
    $auth.$http.interceptors.response.use(
      response => {
        // iam未登录状态
        if (response.code === 'core.e1019') {
          window.location.href = $auth.currentProvider.loginUrl
        }
        return response
      },
      error => {
        if (error.response && error.response.status === 401) {
          Message({
            message: '登录失效, 请重新登录! ',
            type: 'error',
            duration: 5 * 1000,
          })
          $auth.permStorage.removeItem('allPerms')
          $auth.removeToken()
          window.location.href = $auth.currentProvider.loginUrl
        }
        return Promise.reject(error)
      }
    )
  },

  beforeEachStartHook: async function (to, from, next) { },

  beforeEachErrorHook: async function (to, from, next) {
    next()
  },

  // 加载静态资源
  loadLayout: function ($auth) {
    const container = document.querySelector($auth.options.containerId)
    container.id = $auth.options.providers[$auth.authenticateType].containerId
    if ($auth.authenticateType === 'iam') {
      loadCss('/iam/layout/alogic-layout.css')
      loadJs('/iam/layout/alogic-layout.js')
    } else if ($auth.authenticateType === 'ctyun') {
      loadCss('/layout/static/css/app.css')
      loadJs('/layout/ctcloud-layout.min.js')
    }
  },

  // 三种用户权限相关的配置
  providers: {
    iam: {
      containerId: 'iam-console-container',
      loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`, // 对应后端的登录地址
      logoutUrl: 'https://iam.ctcdn.cn/iam/sign/out', // 对应后端或者iam的退出地址
      ifLogin: {
        url: '/iam/gw/auth/Current', // 检查用户是否登录的线上接口
        method: 'GET',
      },
      perms: {
        domain: '', // 菜单接口对应的domain，业务方自行配置
        url: '/iam/gw/workspace/menu/GetTree', // 获取用户权限的接口，需要传workspaceId和domain两个参数
        method: 'GET',
        responseDataKey: 'data.items', // 可以拿到数据的key
        dataHandler: data => data, // 数据格式转换，转换成统一的格式
      },
    },
    ctyun: {
      containerId: 'ctcloud-console',
      loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`,
      logoutUrl: 'https://www.ctyun.cn/sign/out',
      ifLogin: {
        url: '/gw/auth/Current', // 检查用户是否登录的线上接口
        method: 'GET',
      },
    },
    local: {
      containerId: 'container',
      loginUrl: `/login?redirect=${encodeURIComponent(window.location.href)}`,
      ifLogin: {
        url: '/v1/auth/account/ifLogin',
        method: 'GET',
        dataHandler: data => data,
      },
      // TODO 以后考虑多个接口，改成数组
      perms: {
        url: '/v1/auth/account/menus',
        method: 'GET',
        dataHandler: data => data,
      },
    },
  },
}
