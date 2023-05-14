import { VueInstance, PluginFunction } from 'vue'
import { AxiosInstance } from 'axios'
import Router, { RouteConfig, Route } from 'vue-router'

export * from './layout'

declare module 'vue-router/types/router' {
  interface RouteMeta {
    hidden?: boolean // 是否不需要用于生成菜单
    activeMenu?: string // 当路由不用于生成菜单时，建议设置该选项，主动配置菜单项亮
    breadcrumb?: boolean // 是否不需要用于生成面包屑
    withoutLogin?: boolean // 对于不需要登录的页面，需要设置
    perms?: string[] | string // 路由所需权限（任一满足即可），设置时会校验该路由对应页面的权限
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: AuthInstance
  }
}

export interface RequestOptions {
  url?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  withCredentials?: boolean
  params?: any
  data?: any
}

export interface RequestParams {
  user?: any
  requestOptions?: RequestOptions
  successCb?: (response: any) => any
  errorCb?: (response: any) => any
  finallyCb?: () => any
  dataHandler?: (response: any) => any
  instance?: VueInstance
}

type CookieStorage = {
  domain?: string
  path?: string
  secure?: boolean
}

interface ApiConfig extends RequestOptions {
  dataHandler?: (data: any) => any
}
export interface CommonAuthProvider {
  enableWorkspace?: boolean // 是否启用 wid
  ifLogin: ApiConfig & {
    loginUrl: string
    afterLogin?: ($auth: AuthInstance, userId: string) => any // 已登录后的操作
    loggedRouterBeforeEach?: (to: Route, $auth: AuthInstance) => Route | string | void // 已登录状态下，路由前置操作
    unloggedRouterBeforeEach?: (to: Route, $auth: AuthInstance) => Route | string | void // 未登录状态下，路由前置操作
  }
  perms?: ApiConfig & {
    domain?: string
    responseDataKey?: string
    setWorkspaceId?: (data: any) => any // 当使用 wid 时，可由外部指定
    canGetPermsBeforeRoute?: (to: Route, $auth: AuthInstance) => boolean // 判断当前路由是否需要获取权限信息
  }
}

interface AuthProviders {
  iam: CommonAuthProvider
  ctyun: CommonAuthProvider
  local: CommonAuthProvider
}
export interface AuthConfigOptions {
  baseUrl?: string | null
  tokenName?: string
  tokenPrefix?: string
  tokenHeader?: string
  tokenType?: string | null
  loginUrl?: string
  logoutUrl?: string
  storageNamespace?: string
  cookieStorage?: CookieStorage
  withCredentials?: boolean
  requestDataKey?: string
  responseDataKey?: string
  authenticateType?: string
  containerId?: string
  enableAuthorize?: boolean
  bindRequestInterceptor?: ($auth: AuthInstance) => void
  bindResponseInterceptor?: ($auth: AuthInstance) => void
  beforeEachStartHook?: (to: Route, $auth: AuthInstance) => Promise<Route | undefined>
  beforeEachErrorHook?: (to: Route, $auth: AuthInstance) => Promise<Route | undefined>
  loadLayout?: ($auth?: AuthInstance) => Promise<void>
  providers?: AuthProviders
}

export interface UserInfo {
  userId: string
  name: string
}

export interface AuthInstance {
  options: AuthConfigOptions
  authenticateType: 'local' | 'ctyun' | 'iam'
  currentProvider: CommonAuthProvider
  permStorage: any
  $http: AxiosInstance
  tokenStorage: any
  tokenName: string
  userInfo: UserInfo
  isLogin: boolean

  // 判断是否有按钮权限
  isAuthorized: (needPerms: string[]) => boolean

  getToken: () => string | undefined
  removeToken: () => void
  getPermInfo: (refresh?: boolean) => Promise<any>
  getAllMenuPerms: () => string[]
  getAllButtonPerms: () => string[]
  getRoutes: () => BizAuthConfigOptions.routes

  login: (RequestParams) => Promise<any>
  logout: (RequestParams) => Promise<any>
}

export interface BizAuthConfigOptions extends AuthConfigOptions {
  http: AxiosInstance
  router: Router
  routes?: RouteConfig[]
}

declare const install: PluginFunction<BizAuthConfigOptions>

export default install
