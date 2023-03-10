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

export interface UserConfigOptions {
  loginUrl?: string
  logoutUrl?: string
}

interface User {
  fetchUrl: string
  loginUrl: string
  logoutUrl: string
  setConfig: (options: UserConfigOptions) => void
}

export declare const IamUser: User
export declare const CtyunUser: User
