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
} from '@cutedesign/layout'
import { isUndefined } from './utils'
import { AxiosRequestConfig } from 'axios'

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
    } else if (authenticateType === 'iam') {
      $auth.$http.interceptors.request.use(IamWorkspace.requestInterceptor)
    } else if (authenticateType === 'ctyun') {
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

  // 在插件路由的beforeEach钩子最开始执行的钩子函数
  beforeEachStartHook: async function (to, from, next) {
    next()
  },

  // 在插件路由的beforeEach钩子报错时执行的钩子函数
  beforeEachErrorHook: async function (to, from, next) {
    next()
  },

  // 加载静态资源
  loadLayout: async function ($auth) {
    try {
      const container = document.querySelector($auth.options.containerId)
      const { authenticateType, providers } = $auth.options
      const { containerId, sidbarMatchDomain } = providers[authenticateType].layout
      if (authenticateType === 'iam') {
        const layout = new IamLayout()
        await layout.load()
        // 由于 layout 加载完后会立即执行一次初始化，因此容器 id 的赋予要滞后到按需资源加载之后、初始化之前
        container.id = containerId
        const console = await layout.init({ containerId })
        // 侧边栏高亮
        console.match({ domain: sidbarMatchDomain })
      } else if (authenticateType === 'ctyun') {
        const layout = new CtyunLayout()
        await layout.load()
        container.id = containerId
        const console = await layout.init()
        // 侧边栏高亮
        console.match({ domain: sidbarMatchDomain })
      }
    } catch (err) {
      console.error(err)
    }
  },

  // 三种用户权限相关的配置
  providers: {
    iam: {
      layout: {
        containerId: 'iam-console-container',
        sidbarMatchDomain: '', // 侧边栏高亮配置，按需重写
      },
      user: {
        loginUrl: IamUser.loginUrl, // 对应业务后端的登录地址
        logoutUrl: IamUser.logoutUrl, // 对应业务后端的退出地址，按需重写
        setUrl(baseUrl) {
          const loginUrl = `${baseUrl}${IamUser.loginUrl}`
          const logoutUrl = `${baseUrl}${IamUser.logoutUrl}`
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
        routerBeforeEach: IamWorkspace.routerBeforeEach,
      },
      perms: {
        domain: '', // 菜单接口对应的domain （osp 中的菜单代码），业务方按需重写
        url: IamMenu.fetchUrl, // 获取用户权限的接口
        method: 'GET',
        responseDataKey: 'data.items', // 可以拿到数据的key
        dataHandler: IamMenu.dataFormat, // 数据格式转换，转换成统一的格式
      },
    },
    ctyun: {
      layout: {
        containerId: 'ctcloud-console', // 注意：该 id 不要重写，会导致 ctyun layout 初始化异常
        sidbarMatchDomain: '', // 侧边栏高亮配置，按需重写
      },
      user: {
        loginUrl: CtyunUser.loginUrl,
        logoutUrl: CtyunUser.logoutUrl,
      },
      ifLogin: {
        url: CtyunUser.fetchUrl,
        method: 'GET',
        afterLogin: userinfo => CtyunWorkspace.setWorkspaceId(userinfo.userId),
        routerBeforeEach: CtyunWorkspace.routerBeforeEach,
      },
      perms: {
        domain: '', // 菜单接口对应的domain （oss 中的菜单代码），业务方按需重写
        url: CtyunMenu.fetchUrl, // 获取用户权限的接口
        method: 'GET',
        responseDataKey: 'data.list', // 可以拿到数据的key
        dataHandler: CtyunMenu.dataFormat, // 数据格式转换，转换成统一的格式
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
