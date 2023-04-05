import { Message } from 'element-ui'
import {
  IamLayout,
  CtyunLayout,
  IamUser,
  CtyunUser,
  IamMenu,
  CtyunMenu,
  IamWorkspace,
  CtyunWorkspace,
} from './layout'
import { isUndefined } from './utils'
import { AxiosRequestConfig } from 'axios'
import { AuthConfigOptions } from '../types'

export function getCookieDomainUrl() {
  try {
    return window.location.hostname
  } catch (e) {}

  return ''
}

export function getRedirectUri(uri) {
  try {
    return !isUndefined(uri) ? `${window.location.origin}${uri}` : window.location.origin
  } catch (e) {}

  return uri || null
}

/**
 * Default configuration
 */
export default <AuthConfigOptions>{
  baseUrl: null, // 后端接口的基础路径
  tokenName: 'token', // cuted内置用户体系token的名字
  tokenPrefix: 'vueauth', // cuted内置用户体系token的前缀
  tokenHeader: 'Authorization', // cuted内置用户体系接口中传的tokenHeader字段名
  tokenType: null, // cuted内置用户体系token类型，常用的是'Bear'
  loginUrl: '/v1/auth/login', // cuted内置用户体系登录接口
  logoutUrl: '/v1/auth/logout', // cuted内置用户体系退出接口
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
  /**
   * Default request interceptor for Axios library
   * @context {VueAuthenticate}
   */
  bindRequestInterceptor: function ($auth) {
    const { authenticateType } = $auth.options
    if (authenticateType === 'local') {
      const tokenHeader = $auth.options.tokenHeader

      $auth.$http.interceptors.request.use((config: AxiosRequestConfig) => {
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
    } else if (authenticateType === 'iam' && $auth.currentProvider.enableWorkspace) {
      $auth.$http.interceptors.request.use(IamWorkspace.requestInterceptor)
    } else if (authenticateType === 'ctyun' && $auth.currentProvider.enableWorkspace) {
      $auth.$http.interceptors.request.use(CtyunWorkspace.requestInterceptor)
    }
  },
  // bindResponseInterceptor
  bindResponseInterceptor: function ($auth) {
    $auth.$http.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error.response && error.response.status === 401) {
          // 认证失败的后端状态码，建议对接的后端用这种方式统一拦截
          Message({
            message: '登录失效, 请重新登录! ',
            type: 'error',
            duration: 5 * 1000,
          })
          $auth.permStorage.removeItem('isLogin')
          $auth.permStorage.removeItem('allPerms')
          $auth.removeToken()
          window.location.href = $auth.currentProvider.user.loginUrl
        }
        return Promise.reject(error)
      }
    )
  },

  // 在插件路由的beforeEach钩子最开始执行的钩子函数，需要调整 to 则按需返回，不需要任何处理则返回 undefined ，不影响后续流程
  beforeEachStartHook: async function () {
    return void 0
  },

  // 在插件路由的beforeEach钩子报错时执行的钩子函数
  beforeEachErrorHook: async function () {
    return void 0
  },

  // 加载静态资源，使用惰性单例，避免二次执行
  loadLayout: (function (fn) {
    let result
    return function ($auth) {
      return result || (result = fn($auth))
    }
  })(async function ($auth) {
    try {
      const container = document.querySelector($auth.options.containerId)
      const { authenticateType, providers } = $auth.options
      const { containerId, bizDomain } = providers[authenticateType].layout
      if (authenticateType === 'iam') {
        if (!window.AlogicLayout) {
          const layout = new IamLayout()
          await layout.load()
          // 由于 layout 加载完后会立即执行一次初始化，因此容器 id 的赋予要滞后到按需资源加载之后、初始化之前
          container.id = containerId
          const console = await layout.init({ containerId })
          // 侧边栏高亮
          console.match({ domain: bizDomain })
        }
      } else if (authenticateType === 'ctyun') {
        if (!window.CtcloudLayout) {
          const layout = new CtyunLayout()
          await layout.load()
          container.id = containerId
          const console = await layout.init()
          // 侧边栏高亮
          console.match({ key: bizDomain })
        }
      }
    } catch (err) {
      console.error(err)
    }
  }),

  // 三种用户权限相关的配置
  providers: {
    iam: {
      enableWorkspace: true, // iam 默认启用 wid
      layout: {
        containerId: 'iam-console-container',
        bizDomain: '', // 侧边栏高亮配置，按需重写
      },
      user: {
        loginUrl: IamUser.loginUrl, // 对应业务后端的登录地址
        logoutUrl: IamUser.logoutUrl, // 对应业务后端的退出地址，按需重写
        setUrl(baseUrl) {
          const loginUrl = `${baseUrl}${this.loginUrl}`
          const logoutUrl = `${baseUrl}${this.logoutUrl}`
          this.loginUrl = loginUrl
          this.logoutUrl = logoutUrl
          IamUser.setConfig({ loginUrl, logoutUrl })
        },
      },
      ifLogin: {
        url: IamUser.fetchUrl, // 检查用户是否登录的线上接口
        method: 'GET',
        // dataHandler: data => data, // 数据格式转换，转换成统一的格式，按需提供
        // afterLogin: userinfo => {}, // 登录成功后，拿到用户信息执行一些操作
        loggedRouterBeforeEach: (to, $auth) => {
          if (!$auth.currentProvider.enableWorkspace) return

          if (to.name !== 'interceptor') {
            return IamWorkspace.routerBeforeEach(to)
          }
        },
        unloggedRouterBeforeEach: () => {
          window.location.href = IamUser.loginUrl
        },
      },
      perms: {
        domain: '', // 菜单接口对应的domain （osp 中的菜单代码），业务方按需重写
        url: IamMenu.fetchUrl, // 获取用户权限的接口
        method: 'GET',
        responseDataKey: 'data.items', // 可以拿到数据的key
        dataHandler: IamMenu.dataFormat, // 数据格式转换，转换成统一的格式
        setWorkspaceId: IamWorkspace.setWorkspaceId,
        canGetPermsBeforeRoute: to => to.name !== 'interceptor', // 判断当前路由是否需要获取权限信息
      },
    },
    ctyun: {
      enableWorkspace: false, // iam 默认不启用 wid
      layout: {
        containerId: 'ctcloud-console', // 注意：该 id 不要重写，会导致 ctyun layout 初始化异常
        bizDomain: '', // 侧边栏高亮配置，按需重写
      },
      user: {
        loginUrl: CtyunUser.loginUrl,
        logoutUrl: CtyunUser.logoutUrl,
        setUrl(baseUrl) {
          const loginUrl = `${baseUrl}${this.loginUrl}`
          const logoutUrl = `${baseUrl}${this.logoutUrl}`
          this.loginUrl = loginUrl
          this.logoutUrl = logoutUrl
          CtyunUser.setConfig({ loginUrl, logoutUrl })
        },
      },
      ifLogin: {
        url: CtyunUser.fetchUrl,
        method: 'GET',
        afterLogin: ($auth, userId) => {
          $auth.currentProvider.enableWorkspace && CtyunWorkspace.setWorkspaceId(userId)
        },
        loggedRouterBeforeEach: (to, $auth) => {
          if (!$auth.currentProvider.enableWorkspace) return

          return CtyunWorkspace.routerBeforeEach(to)
        },
        unloggedRouterBeforeEach: () => {
          window.location.href = CtyunUser.loginUrl
        },
      },
      // TODO ctyun 不需要鉴权，这个配置的意义主要在于菜单上下线，存在意义待定
      perms: {
        domain: '', // 菜单接口对应的domain （oss 中的菜单代码），业务方按需重写
        url: CtyunMenu.fetchUrl, // 获取用户权限的接口
        method: 'GET',
        responseDataKey: 'data.list', // 可以拿到数据的key
        dataHandler: CtyunMenu.dataFormat, // 数据格式转换，转换成统一的格式
        setWorkspaceId: CtyunWorkspace.setWorkspaceId,
      },
    },
    local: {
      layout: {
        containerId: 'container',
      },
      user: {
        loginUrl: `/login?redirect=${encodeURIComponent(window.location.href)}`,
      },
      ifLogin: {
        url: '/v1/auth/account/ifLogin',
        method: 'GET',
        dataHandler: data => data,
        afterLogin: $auth => $auth.getPermInfo(true),
        loggedRouterBeforeEach: to => (to.path === '/login' ? '/' : void 0),
        unloggedRouterBeforeEach: to => `/login?redirect=${to.path === '/login' ? '/' : to.path}`,
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
