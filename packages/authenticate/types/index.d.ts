import { VueInstance } from 'vue'
import { AxiosInstance } from 'axios'
import Router, { RouteConfig, Route, NavigationGuardNext } from 'vue-router'
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
}
export interface CommonAuthProvider {
  layout: {
    containerId?: string
    sidbarMatchDomain?: string
  }
  loginUrl: string
  logoutUrl: string
  ifLogin: ApiConfig & {
    afterLogin: (userinfo: any) => any
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
  authorizeType?: string
  bindRequestInterceptor?: ($auth: AuthInstance) => void
  bindResponseInterceptor?: ($auth: AuthInstance) => void
  beforeEachStartHook?: (to: Route, from: Route, next: NavigationGuardNext) => any
  beforeEachErrorHook?: (to: Route, from: Route, next: NavigationGuardNext) => any
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
  authorizeType: 'local' | 'iam'
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
