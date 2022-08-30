import { AxiosRequestConfig } from 'axios'

// user 数据
export interface UserProperty {
  userId: string
  userType: string
  name: string
  realname: string
  channel: string
  saleChannel?: string
  note: string
  mobile: string
  email: string
  avatarPath: string
}

// current 接口
export interface CurrentInfo {
  isLoggedIn: boolean
  property: UserProperty
}

export declare const IamUser: {
  fetchUrl: string
  requestInterceptor: (userId: string | number) => (config: AxiosRequestConfig) => AxiosRequestConfig
}
export declare const CtyunUser: {
  fetchUrl: string
  requestInterceptor: (userId: string | number) => (config: AxiosRequestConfig) => AxiosRequestConfig
}
