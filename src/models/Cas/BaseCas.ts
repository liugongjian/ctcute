export class BaseCas {
  /* 框架DOM，用于挂载统一页面框架 */
  public container: HTMLElement
  /* 框架ID */
  public containerId: string
  /* Cas Layout对象 */
  public casLayout: any

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
    return this.casLayout.authCurrentPromise
  }

  /**
   * 初始化页面框架
   */
  public init() {
    this.setContainerId()
    this.casLayout.consoleContainer.init()
  }

  /**
   * 更新菜单
   */
  public updateMenu(routes) {
    console.log('updateMenu', routes)
  }
}
