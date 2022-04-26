export class BaseCas {
  /* 单点登录类型，目前包含天翼云和CDN IAM */
  public type: string
  /* 框架DOM，用于挂载统一页面框架 */
  public container: HTMLElement
  /* 框架ID */
  public containerId: string
  /* Cas Layout对象 */
  public casLayout: any
  public casConsole: any

  constructor(container) {
    this.container = container
  }

  /**
   * 为container添加ID
   */
  public setContainerId() {
    this.container.id = this.containerId
  }

  /**
   * 检查用户是否登录
   * @returns 用户信息Promise
   */
  public auth() {
    console.log('auth')
  }

  /**
   * 初始化页面框架
   */
  public init() {
    this.setContainerId()
    this.casConsole.init()
  }

  /**
   * 更新左侧二级菜单
   */
  public updateMenu(items) {
    console.log(items)
  }

  /**
   * 使用路由表更新左侧二级菜单
   */
  public updateMenuByRoute(routes) {
    const items = this.generateRouteMenu(routes)
    this.updateMenu(items)
  }

  /**
   * 构造菜单数据
   * @param routes 路由表
   * @param parentPath
   * @returns 菜单数组
   */
  protected generateRouteMenu(routes, parentPath = ''): Array<any> {
    console.log(routes, parentPath)
    return []
  }

  /**
   * 高亮左侧菜单
   * @param route 路由对象
   */
  public activeMenu(route) {
    console.log(route)
  }
}
