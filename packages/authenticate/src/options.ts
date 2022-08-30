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
  baseUrl: null,
  tokenName: 'token',
  tokenPrefix: 'vueauth',
  tokenHeader: 'Authorization',
  tokenType: null,
  loginUrl: '/v1/auth/login',
  logoutUrl: '/v1/auth/logout',
  // registerUrl: '/auth/register',
  storageNamespace: 'vue-authenticate',
  cookieStorage: {
    domain: getCookieDomainUrl(),
    path: '/',
    secure: false,
  },
  withCredentials: true,
  requestDataKey: 'data',
  responseDataKey: 'data',
  authenticateType: 'local',
  containerId: '#container',
  enableAuthorize: false,
  authorizeType: 'local',
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

  providers: {
    iam: {
      // TODO 是每个项目固定的吗？
      workspaceId: '10000000',
      domain: 'osp.main',
      containerId: 'iam-console-container',
      loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`,
      logoutUrl: 'https://iam.ctcdn.cn/iam/sign/out',
      ifLogin: {
        url: '/iam/gw/auth/Current', // 检查用户是否登录的线上接口
        method: 'GET',
      },
      perms: {
        url: '/iam/gw/workspace/menu/GetTree',
        method: 'GET',
        responseDataKey: 'data.items',
        dataHandler: data => data, // TODO
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
