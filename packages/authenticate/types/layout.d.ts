import { CurrentInfo } from './user'
import { IamMenuItem, CtyunMenuItem } from './menu'

export function showLoadFailPage(): void

export interface LayoutConfig {
  containerId: string // 容器 id
  urlPrefix: string // url 前缀
  jsUrl: string
  cssUrl: string
}

export type LayoutConfigOptions = Partial<LayoutConfig>
declare class BaseLayout {
  constructor(options?: LayoutConfigOptions)

  // 读配置
  getConfig(): LayoutConfig

  // 写配置
  setConfig(conf: LayoutConfigOptions): void
}

export interface IamLayoutInitOptions {
  containerId?: string // 容器id
  bizDomain?: string // 侧边栏高亮
}
export declare class IamLayout extends BaseLayout {
  // 初始化
  init(options: IamLayoutInitOptions): Promise<AlogicLayout.consoleContainer>
}
export interface CtyunLayoutInitOptions {
  containerId?: string // 容器id
  bizDomain?: string // 侧边栏高亮
  logoutUrl?: string // 登出路由，默认路由无法满足业务侧需求
  consoleInitArgs?: CtcloudLayout.consoleInitArgs
}
export declare class CtyunLayout extends BaseLayout {
  // 初始化
  init(options: CtyunLayoutInitOptions): Promise<CtcloudLayout.consoleLayout>
}

// layout 中的 mvvm
interface MvvmInstance {
  destroy(): void
}

// 发布订阅事件处理
interface EventHandler {
  on(EVENT_NAME: string, callback: () => void): void
}

declare namespace AlogicLayout {
  export interface config {
    // 用户信息超时的事件名
    sessionTimeoutKey: string
    // 订阅事件
    eventHandler: EventHandler
    // 环境变量，目前会影响菜单路由的选取，目前是开发模式使用 hrefLocal ，生产模式使用 href （默认）
    env: 'production' | 'development'
    // 路由模式，当需要业务侧来完成路由跳转时，可以通过 mode 来定义路由模式
    mode: null | 'hash' | 'history'
    // 路由跳转方法，当指定了 mode 时（全局配置或单一路由项配置），会使用本方法来完成路由跳转，业务侧按需重写
    routePush(target: string): void
  }
  // 设置配置信息，目前仅支持2项
  export interface setConfig {
    (config: { mode: string; routePush: string }): void
  }
  // 控制台布局相关
  export interface consoleContainer {
    // 初始化控制台布局
    init(args: { baseNode: HTMLElement | null }): MvvmInstance
    // 更新页头菜单
    updateMenu(args: {
      topic?: string // 在 iam 中创建菜单时输入的主题
      workspaceId?: string
      cache?: boolean
      // 自定义菜单
      dropdownMenuPromise?: Promise<Array<IamMenuItem>> // 返回头像下拉框菜单列表的异步对象。
      topbarMenuPromise?: Promise<Array<IamMenuItem>> // 返回页头框菜单列表的异步对象。
      sidebarMenuPromise?: Promise<Array<IamMenuItem>> // 返回左侧固定菜单列表的异步对象。(最左侧黑色背景的菜单)
      mainMenuPromise?: Promise<{
        title: string
        list: Array<IamMenuItem>
      }> //返回左侧主菜单列表的异步对象(左侧灰色背景菜单)
    }): void
    // 侧边栏高亮
    match(args: { domain?: string; key?: string }): void
  }
  // Current 接口拿到的用户信息
  export type authCurrentPromise = Promise<CurrentInfo>
}

declare namespace CtcloudLayout {
  interface consoleInitArgs {
    getTopbarMenuPromise?: Promise<Array<CtyunMenuItem>> // 自定义控制台顶部菜单
    getDropdownMenuPromise?: Promise<Array<CtyunMenuItem>> // 自定义控制用户头像下拉菜单
  }
  // 控制台布局相关
  export interface consoleLayout {
    // 控制台顶部头像下拉框列表(不可嵌套)
    init(args?: CtcloudLayout.consoleInitArgs): MvvmInstance
    // 侧边栏高亮， 使用的是接口 GetTree?domain=console.leftbar.v2
    matchConsoleMenuCode(args: { menuCode: string; fontColor?: string }): void
    // 隐藏侧边栏
    hideSiderMenu(): void
    // 更新登出路由
    updateConsoleLayoutLogoutUrl(logoutUrl: string): void
  }
  // // 右下角客服
  // export interface fixedSidebarAd {
  //   init(): MvvmInstance
  // }
  // 获取 Current 接口的用户信息
  export interface getPublicInfo {
    (): {
      authCurrentPromise: Promise<CurrentInfo>
    }
  }
  export type authCurrentPromise = Promise<CurrentInfo>
  // 设置 config （待确认细节）
  export interface setLayoutConfig {
    (config: any): void
  }
  // 资源池选择
  export interface regionChooser {
    // 初始化
    init(args: {
      baseNode: HTMLElement
      lign?: string //	组件下来浮层位置 默认'left', 可选 'right'
      dropdownMethod?: string // Trigger method 默认'hover', 可选 'click'
      linkClick?: () => void //	节点点击回调函数 选调
      regionData?: { often: any[]; current: any[]; dec: any[] } //预设资源池
    }): MvvmInstance
    // 更新
    update(options: {
      visible: boolean // 是否展示
      regionData?: { often: any[]; current: any[]; dec: any[] }
    }): void
  }
}

declare global {
  interface Window {
    AlogicLayout: {
      config: AlogicLayout.config
      setConfig: AlogicLayout.setConfig
      // 控制台布局相关
      consoleContainer: AlogicLayout.consoleContainer
      // Current 接口拿到的用户信息
      authCurrentPromise: AlogicLayout.authCurrentPromise
    }
    CtcloudLayout: {
      // 控制台布局相关
      consoleLayout: CtcloudLayout.consoleLayout
      // 右下角客服
      fixedSidebarAd: CtcloudLayout.fixedSidebarAd
      // 获取 Current 接口的用户信息
      getPublicInfo: CtcloudLayout.getPublicInfo
      authCurrentPromise: CtcloudLayout.authCurrentPromise
    }
  }
}
