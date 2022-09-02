/* eslint-disable @typescript-eslint/no-empty-function */
import lodashGet from 'lodash.get'
import { AxiosInstance } from 'axios'
import { Route, NavigationGuardNext } from 'vue-router'
import { objectExtend, isFunction, getObjectProperty } from './utils'
import defaultOptions from './options'
import StorageFactory from './storage'
import { hasPermission, filterAsyncRouter } from './permissions'
import { RequestOptions, RequestParams, BizAuthConfigOptions, CommonAuthProvider, UserInfo } from '../types'

export default class VueAuthenticate {
  public options: BizAuthConfigOptions
  public authenticateType: 'local' | 'ctyun' | 'iam'
  public authorizeType: 'local' | 'iam'
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

      authorizeType: {
        get() {
          return options.enableAuthorize ? options.authorizeType : ''
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
    // 匹配的认证和权限的组合
    const compatibleCombination = ['local,local', 'iam,local', 'ctyun,local', 'iam,iam']
    // 如果开启了权限
    if (this.options.enableAuthorize) {
      // 检查权限与认证是类型是否匹配
      const combination = this.authenticateType + ',' + this.authorizeType
      if (!compatibleCombination.includes(combination)) {
        throw Error(`Incompatible Authorize Type, All Compatible Types are ${compatibleCombination}`)
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
        if (this.options.beforeEachStartHook && isFunction(this.options.beforeEachStartHook)) {
          this.options.beforeEachStartHook.call(this, this, to, from, next)
        }
        // ! 写法1： 白名单的不走接口，login页面在已登录状态下不会自动跳转，并且可能导致需要权限的接口没机会走
        try {
          if (to.meta && to.meta.withoutLogin) {
            next()
          } else {
            const isLogin = await this.isAuthenticated()
            if (this.authenticateType === 'local') {
              if (isLogin) {
                if (to.path === '/login') {
                  next('/')
                } else {
                  if (hasPermission(this.getAllMenus(), to)) {
                    next()
                  } else {
                    next('/404')
                  }
                }
              } else {
                const redirect_url = to.path === '/login' ? '/' : to.path
                next(`/login?redirect=${redirect_url}`)
              }
            } else {
              if (!isLogin) {
                window.location.href = this.currentProvider.loginUrl
              } else {
                next()
              }
            }
          }
        } catch (e) {
          // next()
          if (this.options.beforeEachErrorHook && isFunction(this.options.beforeEachErrorHook)) {
            this.options.beforeEachErrorHook(to, from, next)
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
    return await this.authenticate()
  }

  isAuthorized(permissions) {
    const allAuth = this.getAllButtons()
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
  }

  // TODO 优先级排序等，也可后端做
  getAllMenus() {
    if (this.options.enableAuthorize) {
      try {
        const allPerms = JSON.parse(this.permStorage.getItem('allPerms') || '[]')
        return allPerms.filter(item => item.menuType === 1).map(item => item.url)
      } catch (e) {
        console.log('allPerms的JSON格式不正确')
      }
    }
    return []
  }

  getAllButtons() {
    if (this.options.enableAuthorize) {
      try {
        const allPerms = JSON.parse(this.permStorage.getItem('allPerms') || '[]')
        return allPerms.filter(item => item.menuType === 2).map(item => item.perms)
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
      const generatedRoutes = filterAsyncRouter(this.options.routes, this.getAllMenus())
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
    successCb = () => { },
    errorCb = () => { },
    finallyCb = () => { },
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
    successCb = () => { },
    errorCb = () => { },
    finallyCb = () => { },
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
            return ifLoginConfig.dataHandler.call(this, data)
          } else {
            return data
          }
        })
        .then(async data => {
          const {
            data: { isLoggedIn, property },
          } = data
          this.permStorage.setItem('isLogin', isLoggedIn)
          if (isLoggedIn) {
            // 按需执行登录后的处理
            if (ifLoginConfig.afterLogin && isFunction(ifLoginConfig.afterLogin)) {
              ifLoginConfig.afterLogin.call(this, data)
            }

            this.permStorage.setItem('userInfo', property)
            // 如果需要加载权限模块，则请求权限接口
            if (this.options.enableAuthorize) {
              await this.getPermInfo()
            }
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
   *
   * @return {Promise}               获取用户权限
   */
  async getPermInfo() {
    return new Promise((resolve, reject) => {
      if (this.permStorage.getItem('allPerms')) {
        return resolve(this.permStorage.getItem('allPerms'))
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
      return this.$http(requestOptions)
        .then(response => {
          return lodashGet(response, permConfig.responseDataKey || this.options.responseDataKey)
        })
        .then(data => {
          if (permConfig.dataHandler && isFunction(permConfig.dataHandler)) {
            return permConfig.dataHandler.call(this, data)
          } else {
            return data
          }
        })
        .then(data => {
          this.permStorage.setItem('allPerms', JSON.stringify(data))
          return resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
