/* eslint-disable @typescript-eslint/no-empty-function */
import { AxiosInstance } from 'axios'
import { Route, NavigationGuardNext } from 'vue-router'
import { objectExtend, isFunction, getObjectProperty, lodashGet } from './utils'
import defaultOptions from './options'
import StorageFactory from './storage'
import { hasPermission, filterAsyncRouter } from './permissions'
import {
  AuthInstance,
  RequestOptions,
  RequestParams,
  BizAuthConfigOptions,
  CommonAuthProvider,
  UserInfo,
} from '../types'

let __permInfoInstance__: any

export default class VueAuthenticate implements AuthInstance {
  public options: BizAuthConfigOptions
  public authenticateType: 'local' | 'ctyun' | 'iam'
  public currentProvider: CommonAuthProvider
  public permStorage: any
  public $http: AxiosInstance
  public tokenStorage: any
  public tokenName: string
  public userInfo: UserInfo
  public isLogin: boolean

  constructor($http: AxiosInstance, overrideOptions: BizAuthConfigOptions) {
    let options = objectExtend({}, defaultOptions)
    options = objectExtend(options, overrideOptions)
    const tokenStorage = StorageFactory('cookieStorage', options)
    const permStorage = StorageFactory('memoryStorage', options)

    console.log(options)

    Object.defineProperties(this, {
      $http: {
        get() {
          return $http
        },
      },

      options: {
        get() {
          return options
        },
      },

      tokenStorage: {
        get() {
          return tokenStorage
        },
      },

      permStorage: {
        get() {
          return permStorage
        },
      },

      tokenName: {
        get() {
          if (this.options.tokenPrefix) {
            return [this.options.tokenPrefix, this.options.tokenName].join('_')
          } else {
            return this.options.tokenName
          }
        },
      },

      authenticateType: {
        get() {
          return options.authenticateType
        },
      },

      currentProvider: {
        get() {
          return options.providers[options.authenticateType]
        },
      },

      userInfo: {
        get() {
          return this.permStorage.getItem('userInfo')
        },
      },

      isLogin: {
        get() {
          return this.permStorage.getItem('isLogin')
        },
      },
    })
    this.preCheck()
    this.setupInterceptors()
    // TODO 如果在未登录时load，菜单不渲染，登录后是否要重新执行渲染菜单的init方法？
    this.loadLayout()
    this.beforeEach()
  }

  preCheck() {
    // 认证的 url 需要加上业务前缀
    const { authenticateType, providers } = this.options
    if (!authenticateType) {
      throw Error('authenticateType is required')
    }

    if (!providers[authenticateType]) {
      throw Error(`${authenticateType} is required in the providers`)
    }

    if (providers[authenticateType].user) {
      if (providers[authenticateType].user.setUrl && isFunction(providers[authenticateType].user.setUrl)) {
        providers[authenticateType].user.setUrl(this.options.baseUrl)
      }
    }

    // 如果开启了权限
    if (this.options.enableAuthorize) {
      // 检查权限
      if (!this.currentProvider['perms']) {
        throw Error('perms is required for providers in the options')
      }
      // 检查是否传入了路由
      // TODO 如果是根据后端返回的数据生成的路由，这边其实不需要
      if (!this.options.routes || !Array.isArray(this.options.routes)) {
        throw Error('Wrong routes option')
      }
    }
  }

  setupInterceptors() {
    // Setup request interceptors
    if (this.options.bindRequestInterceptor && isFunction(this.options.bindRequestInterceptor)) {
      this.options.bindRequestInterceptor.call(this, this)
    } else {
      throw new Error('Request interceptor must be functions')
    }

    // Setup response interceptors
    if (this.options.bindResponseInterceptor && isFunction(this.options.bindResponseInterceptor)) {
      this.options.bindResponseInterceptor.call(this, this)
    } else {
      throw new Error('Resonse interceptor must be functions')
    }
  }

  loadLayout() {
    // 加载资源
    if (this.options.loadLayout && isFunction(this.options.loadLayout)) {
      this.options.loadLayout.call(this, this)
    } else {
      throw new Error('Load Layout must be functions')
    }
  }

  beforeEach() {
    // 执行beforeEach拦截
    if (this.options.router) {
      this.options.router.beforeEach(async (to: Route, from: Route, next: NavigationGuardNext) => {
        console.log('inner beforeEach')

        const { ifLogin: ifLoginConfig, perms: permsConfig } = this.currentProvider

        if (this.options.beforeEachStartHook && isFunction(this.options.beforeEachStartHook)) {
          const _to = await this.options.beforeEachStartHook(to, this)
          if (_to) next(_to)
        }

        try {
          // 虽然当前路由未必需要登录信息，但是需要通过根据鉴权信息获取可用路由
          const isLogin = await this.isAuthenticated()
          // 已登录
          if (isLogin) {
            // 已登录的前置处理
            if (ifLoginConfig.loggedRouterBeforeEach && isFunction(ifLoginConfig.loggedRouterBeforeEach)) {
              const _to = ifLoginConfig.loggedRouterBeforeEach(to, this)
              if (_to) return next(_to)
            }

            // 如果需要鉴权
            if (this.options.enableAuthorize) {
              // 默认可以发起鉴权请求，可以通过配置拦截
              let canGet = true
              if (permsConfig.canGetPermsBeforeRoute && isFunction(permsConfig.canGetPermsBeforeRoute)) {
                canGet = permsConfig.canGetPermsBeforeRoute(to, this)
              }
              if (canGet) {
                await this.getPermInfo()
              }
            }
          }

          // 不需要登录的路由直接跳转
          if (to.meta && to.meta.withoutLogin) {
            return next()
          }

          // 未登录的前置处理
          if (!isLogin) {
            if (
              ifLoginConfig.unloggedRouterBeforeEach &&
              isFunction(ifLoginConfig.unloggedRouterBeforeEach)
            ) {
              const _to = ifLoginConfig.unloggedRouterBeforeEach(to, this)
              if (_to) return next(_to)
            }
          }

          // 已登录但路由本身并不需要权限，则直接执行
          if (to.meta && !to.meta.perms) {
            return next()
          }

          // 已登录，需要鉴权
          if (this.options.enableAuthorize) {
            // 通用的鉴权判断
            if (hasPermission(this.getAllMenuPerms(), to)) {
              next()
            } else {
              next('/403')
            }
          } else {
            // 不需要鉴权，直接跳转
            next()
          }
        } catch (e) {
          console.error(e)
          if (this.options.beforeEachErrorHook && isFunction(this.options.beforeEachErrorHook)) {
            const _to = await this.options.beforeEachErrorHook(to, this)
            if (_to) next(_to)
          } else {
            next()
          }
        }
      })
    }
  }

  /**
   * 判断是否已登录
   * @param judgeCache 是否强制走接口，默认会判断缓存，false的时候强制调用接口
   * @returns 用户是否已登录
   */
  async isAuthenticated(judgeCache = true) {
    if (judgeCache) {
      const isLogin = this.permStorage.getItem('isLogin')
      if (isLogin === true || isLogin === false) {
        return isLogin
      }
    }
    const isLoggedIn = await this.authenticate()
    return isLoggedIn
  }

  isAuthorized(permissions) {
    const allAuth = this.getAllButtonPerms()
    return allAuth.some(auth => permissions.includes(auth))
  }
  /**
   * Get token if user is authenticated
   * @return {String} Authentication token
   */
  getToken() {
    return this.tokenStorage.getItem(this.tokenName)
  }

  /**
   * Set new authentication token
   * @param {String|Object} token
   */
  setToken(response, tokenPath: string) {
    if (response[this.options.responseDataKey]) {
      response = response[this.options.responseDataKey]
    }

    const token = getObjectProperty(response, tokenPath)

    if (token) {
      this.tokenStorage.setItem(this.tokenName, token)
    }
  }

  removeToken() {
    this.permStorage.removeItem('userInfo')
    this.permStorage.removeItem('isLogin')
    this.tokenStorage.removeItem(this.tokenName)
    // 为了触发重新请求权限数据
    __permInfoInstance__ = null
  }

  // TODO 优先级排序等，也可后端做
  getAllMenuPerms() {
    if (this.options.enableAuthorize) {
      try {
        const allPerms = JSON.parse(this.permStorage.getItem('allPerms') || '[]')
        return allPerms
          .filter(item => item.menuType === 1)
          .map(item => item.perm || item.url || item.perms || '')
          .filter(item => item)
      } catch (e) {
        console.log('allPerms的JSON格式不正确')
      }
    }
    return []
  }

  getAllButtonPerms() {
    if (this.options.enableAuthorize) {
      try {
        const allPerms = JSON.parse(this.permStorage.getItem('allPerms') || '[]')
        return allPerms
          .filter(item => item.menuType === 2)
          .map(item => item.perm || item.perms || item.url || '')
          .filter(item => item)
      } catch (e) {
        console.log('allPerms的JSON格式不正确')
      }
    }
    return []
  }

  /**
   * 获取最终的路由
   */
  getRoutes() {
    if (this.options.enableAuthorize) {
      const generatedRoutes = filterAsyncRouter(this.options.routes, this.getAllMenuPerms())
      return generatedRoutes
    }
    return this.options.routes
  }
  /**
   * Login user using email and password
   * @param  {Object} user           User data
   * @param  {Object} requestOptions Request options
   * @param  {Function} successCb success callback
   * @param  {Function} errorCb error callback
   * @param  {Function} finallyCb finally callback
   * @param  {Function} dataHandler handle different data format
   * @param  {Object} instance vue instance
   * @return {Promise}               Request promise
   */
  // 如果后端返回的数据格式一致，通过dataHanlder处理
  login({
    user,
    requestOptions = {},
    successCb = () => {},
    errorCb = () => {},
    finallyCb = () => {},
    dataHandler = data => data,
    instance,
  }: RequestParams) {
    requestOptions = requestOptions || {}
    requestOptions.url = requestOptions.url ? requestOptions.url : this.options.loginUrl
    requestOptions[this.options.requestDataKey] = user || requestOptions[this.options.requestDataKey]
    requestOptions.method = requestOptions.method || 'POST'
    requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

    return new Promise(resolve => {
      return this.$http(requestOptions)
        .then(response => {
          return dataHandler(response)
        })
        .then(async response => {
          if (response.code === 200) {
            successCb(response)
            // 设置token
            this.setToken(response, 'token')
            // 走认证接口拿用户信息和权限信息
            await this.isAuthenticated(false)
            // 处理redirect
            const redirect_url = instance.$route.query.redirect || '/'
            this.options.router.push(redirect_url)
          } else {
            errorCb(response)
          }
          return resolve(response)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          finallyCb()
        })
    })
  }

  // /**
  //  * Register new user
  //  * @param  {Object} user           User data
  //  * @param  {Object} requestOptions Request options
  //  * @return {Promise}               Request promise
  //  */
  // register(user, requestOptions) {
  //   requestOptions = requestOptions || {}
  //   requestOptions.url = requestOptions.url
  //     ? requestOptions.url
  //     : joinUrl(this.options.baseUrl, this.options.registerUrl)
  //   requestOptions[this.options.requestDataKey] = user || requestOptions[this.options.requestDataKey]
  //   requestOptions.method = requestOptions.method || 'POST'
  //   requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

  //   return this.$http(requestOptions).then(response => {
  //     this.setToken(response)
  //     return response
  //   })
  // }

  /**
   * Logout current user
   * @param  {Object} requestOptions Request options
   * @param  {Function} successCb success callback
   * @param  {Function} errorCb error callback
   * @param  {Function} finallyCb finally callback
   * @param  {Function} dataHandler handle different data format
   * @param  {Object} instance vue instance
   * @return {Promise}               Request promise
   */
  logout({
    requestOptions = {},
    successCb = () => {},
    errorCb = () => {},
    finallyCb = () => {},
    dataHandler = data => data,
    instance,
  }: RequestParams) {
    if (!this.isAuthenticated()) {
      return Promise.reject(new Error('There is no currently authenticated user'))
    }

    requestOptions = requestOptions || {}

    if (requestOptions.url || this.options.logoutUrl) {
      requestOptions.url = requestOptions.url ? requestOptions.url : this.options.logoutUrl
      requestOptions.method = requestOptions.method || 'POST'
      requestOptions[this.options.requestDataKey] = requestOptions[this.options.requestDataKey] || undefined
      requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

      return new Promise(resolve => {
        return this.$http(requestOptions)
          .then(response => {
            return dataHandler(response)
          })
          .then(response => {
            if (response.code === 200) {
              successCb(response)
              this.removeToken()
              instance.$router.push('/login')
            } else {
              errorCb(response)
            }
            return resolve(response)
          })
          .catch(e => {
            console.log(e)
          })
          .finally(() => finallyCb())
      })
    } else {
      this.removeToken()
      return Promise.resolve()
    }
  }

  /**
   * Authenticate user using authentication provider
   *
   * @return {Promise}               判断用户是否登录
   */
  // TODO 用户相关的设置，包括iam和local
  async authenticate() {
    return new Promise((resolve, reject) => {
      if (!this.currentProvider) {
        return reject(new Error('Unknown provider'))
      }
      const ifLoginConfig = this.currentProvider.ifLogin
      const requestOptions: RequestOptions = {}
      requestOptions.method = ifLoginConfig.method
      requestOptions.withCredentials = this.options.withCredentials

      requestOptions.url = ifLoginConfig.url
      return this.$http(requestOptions)
        .then(data => {
          if (ifLoginConfig.dataHandler && isFunction(ifLoginConfig.dataHandler)) {
            data = ifLoginConfig.dataHandler.call(this, data)
          }
          return lodashGet(data, this.options.responseDataKey)
        })
        .then(async data => {
          const { isLoggedIn, property } = data
          this.permStorage.setItem('isLogin', isLoggedIn)
          if (isLoggedIn) {
            // 按需执行登录后的处理
            if (ifLoginConfig.afterLogin && isFunction(ifLoginConfig.afterLogin)) {
              ifLoginConfig.afterLogin.call(this, this, property.userId)
            }

            this.permStorage.setItem('userInfo', property)
          }
          return resolve(isLoggedIn)
        })
        .catch(err => {
          this.permStorage.setItem('isLogin', false)
          reject(err)
        })
    })
  }

  /**
   * Authenticate user using authentication provider
   * @param  {Boolean} refresh 是否强制刷新
   * @return {Promise}               获取用户权限
   */
  getPermInfo(refresh = false) {
    if (__permInfoInstance__) return __permInfoInstance__
    return (__permInfoInstance__ = new Promise(async (resolve, reject) => {
      try {
        if (!refresh && this.permStorage.getItem('allPerms')) {
          resolve(this.permStorage.getItem('allPerms'))
          return
        }
        if (!this.currentProvider) {
          return reject(new Error('Unknown provider'))
        }

        const permConfig = this.currentProvider.perms
        const requestOptions: RequestOptions = {}
        requestOptions.method = permConfig.method
        requestOptions.withCredentials = this.options.withCredentials

        if (permConfig.domain) {
          requestOptions.params = {
            domain: permConfig.domain,
          }
        }

        requestOptions.url = permConfig.url
        const response = await this.$http(requestOptions)

        let data = lodashGet(response, permConfig.responseDataKey || this.options.responseDataKey)
        if (permConfig.dataHandler && isFunction(permConfig.dataHandler)) {
          data = permConfig.dataHandler.call(this, data)
        }

        this.permStorage.setItem('allPerms', JSON.stringify(data))
        resolve(data)
      } catch (err) {
        reject(err)
      } finally {
        // 在宏任务中完成清除
        setTimeout(() => {
          __permInfoInstance__ = null
        })
      }
    }))
  }
}
