import { MENU_TYPE } from '../common/config'

// menu 项
interface MenuItem {
  enable: 'true' | 'false' // 是否可用
  state?: 'online' | 'offline' // 是否上线
  name: string
  renderer: 'menu' | 'button' | 'seperator' | 'submenu' | 'blank' // 渲染类型
  href: string
  hrefLocal?: string
  parentId?: string
  plist?: string // 权限要求表达式
}

export type IamMenuItem = MenuItem & {
  displayOrder?: string // iam 排序，数字型字符串
  ucode: string // iam
  icon?: string // 图标
  items?: Array<IamMenuItem>
}

export type CtyunMenuItem = MenuItem & {
  order: string // ctyun 排序，数字型字符串
  menuCode: string // ctyun
  target?: '_self' | '_blank'
  items?: Array<CtyunMenuItem>
}

// cute/authenticate 需要的格式

export type CuteItem = {
  // name: string
  url?: string
  perms?: string
  menuType: typeof MENU_TYPE[keyof typeof MENU_TYPE]
}

export declare const IamMenu: {
  fetchUrl: string
  dataFormat(list: IamMenuItem[]): CuteItem[]
}
export declare const CtyunMenu: {
  fetchUrl: string
  dataFormat(list: CtyunMenuItem[]): CuteItem[]
}
