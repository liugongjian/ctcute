import { VueInstance } from 'vue'
import { AxiosInstance } from 'axios'
import Router, { RouteConfig, Route, NavigationGuardNext } from 'vue-router'

declare module 'vue-router/types/router' {
  interface RouteMeta {
    hidden?: boolean // 是否不需要用于生成菜单
    activeMenu?: string // 当路由不用于生成菜单时，建议设置该选项，主动配置菜单项亮
    breadcrumb?: boolean // 是否不需要用于生成面包屑
    withoutLogin?: boolean // 对于不需要登录的页面，需要设置
    perms?: string[] // 参数为一组路由，设置时会校验该路由对应页面的权限
  }
}

export interface RequestOptions {
  url?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  withCredentials?: boolean
  params?: object
  data?: object
}

export interface RequestParams {
  user?: object
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
  responseDataKey?: string
  dataHandler?: (data: any) => any
  domain?: string
  setWorkspaceId?: (data: any) => any
}
export interface CommonAuthProvider {
  layout: {
    containerId: string
    bizDomain?: string
  }
  user: {
    loginUrl: string
    logoutUrl: string
    setUrl?: (baseUrl: string) => any
  }
  ifLogin: ApiConfig & {
    afterLogin: ($auth: AuthInstance, userId: string) => any
    routerBeforeEach: (to: Route) => Route | undefined
  }
  perms?: ApiConfig
}

interface AuthProviders {
  iam: CommonAuthProvider
  ctyun: CommonAuthProvider
  local: CommonAuthProvider
}
export interface AuthConfigOptions {
  baseUrl?: string
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
  beforeEachStartHook?: (to: Route) => Promise<Route | undefined>
  beforeEachErrorHook?: (to: Route) => Promise<Route | undefined>
  loadLayout?: ($auth: AuthInstance) => void
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
}

export interface BizAuthConfigOptions extends AuthConfigOptions {
  http: AxiosInstance
  router: Router
  routes?: RouteConfig[]
}
