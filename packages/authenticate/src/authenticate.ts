/* eslint-disable @typescript-eslint/no-empty-function */
import lodashGet from 'lodash.get'
import { objectExtend, isFunction, getObjectProperty } from './utils'
import defaultOptions from './options'
import StorageFactory from './storage'
import { hasPermission, filterAsyncRouter } from './permissions'
import { RequestOptions, RequestParams } from '../types'

export default class VueAuthenticate {
  private options: any
  private authenticateType: 'local' | 'ctyun' | 'iam'
  private authorizeType: 'local' | 'iam'
  private currentProvider: any
  private permStorage: any
  private $http: any
  private tokenStorage: any
  private tokenName: string

  constructor($http, overrideOptions) {
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
      this.options.router.beforeEach(async (to, from, next) => {
        console.log('inner beforeEach')
        if (to.path === '/500') {
          return next()
        }
        // ! 写法2： 白名单的不走接口，导致需要权限的接口没机会走
        // if (to.meta && to.meta.withoutLogin) {
        //   next()
        // } else {
        //   const isLogin = await this.isAuthenticated()
        //   if (this.authenticateType === 'local') {
        //     if (isLogin) {
        //       if (to.path === '/login') {
        //         next('/')
        //       } else {
        //         if (hasPermission(this.getAllMenus(), to)) {
        //           next()
        //         } else {
        //           next('/404')
        //         }
        //       }
        //     } else {
        //       const redirect_url = to.path === '/login' ? '/' : to.path
        //       next(`/login?redirect=${redirect_url}`)
        //     }
        //   } else {
        //     if (!isLogin) {
        //       window.location.href = this.currentProvider.loginUrl
        //     } else {
        //       next()
        //     }
        //   }
        // }
        // ! 写法1：所有接口都先过一遍isAuthenticated，当status为500时，拦截器一直请求ifLogin接口，死循环
        try {
          const isLogin = await this.isAuthenticated()
          if (this.authenticateType === 'local') {
            if (isLogin) {
              // 如果已登录
              if (to.path === '/login') {
                next('/')
              } else {
                if (hasPermission(this.getAllMenus(), to)) {
                  next()
                } else {
                  // ! 文档里需要说明，强制有404
                  next('/404')
                }
              }
            } else {
              // 白名单中的不用登录
              if (to.meta && to.meta.withoutLogin) {
                next()
              } else {
                const redirect_url = to.path === '/login' ? '/' : to.path
                next(`/login?redirect=${redirect_url}`)
              }
            }
          } else {
            if (!isLogin) {
              // 跳转到单点登录这一块，是怎么做的？
              window.location.href = this.currentProvider.loginUrl
            } else {
              // TODO 如果是IAM，登录相关的是否还有别的设置？
              next()
            }
          }
        } catch (e) {
          next()
        }
      })
    }
  }

  /**
   * Check if user is authenticated
   * @author Sahat Yalkabov <https://github.com/sahat>
   * @copyright Method taken from https://github.com/sahat/satellizer
   * @return {Boolean}
   */
  async isAuthenticated() {
    let isLogin = this.permStorage.getItem('isLogin')
    if (isLogin !== 'true' && isLogin !== 'false') {
      await this.authenticate()
    }
    isLogin = this.permStorage.getItem('isLogin')
    isLogin = isLogin === 'true' ? true : false
    // 如果需要加载权限模块，则请求权限接口
    if (this.options.enableAuthorize && isLogin) {
      await this.getPermInfo()
    }
    return isLogin
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
  setToken(response, tokenPath) {
    this.permStorage.setItem('isLogin', 'true')
    if (response[this.options.responseDataKey]) {
      response = response[this.options.responseDataKey]
    }

    const responseTokenPath = tokenPath || this.options.tokenPath
    const token = getObjectProperty(response, responseTokenPath)

    if (token) {
      this.tokenStorage.setItem(this.tokenName, token)
    }
  }

  removeToken() {
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
        .then(response => {
          if (response.code === 200) {
            successCb(response)
            // 设置token
            this.setToken(response, 'token')
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
        .finally(response => {
          finallyCb(response)
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
              this.permStorage.setItem('isLogin', 'false')
              this.tokenStorage.removeItem(this.tokenName)
              instance.$router.push('/login')
            } else {
              errorCb(response)
            }
            return resolve(response)
          })
          .catch(e => {
            console.log(e)
          })
          .finally(response => finallyCb(response))
      })
    } else {
      this.tokenStorage.removeItem(this.tokenName)
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
        .then(response => {
          return lodashGet(response, ifLoginConfig.responseDataKey)
        })
        .then(isLogin => {
          this.permStorage.setItem('isLogin', `${isLogin}`)
          return resolve(isLogin)
        })
        .catch(err => {
          this.permStorage.setItem('isLogin', 'false')
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
