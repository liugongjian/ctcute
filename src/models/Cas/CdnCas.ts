import { BaseCas } from './BaseCas'
import settings from '@/settings'

export class CdnCas extends BaseCas {
  public containerId = 'iam-console-container'
  public casLayout = AlogicLayout
  public casConsole = AlogicLayout.consoleContainer

  /**
   * 检查用户是否登录
   * @returns 用户信息Promise
   */
  public auth() {
    return this.casLayout.authCurrentPromise
  }

  /**
   * 更新左侧二级菜单
   */
  public updateMenu(items) {
    const mainMenuPromise = new Promise(resolve => {
      resolve({
        title: settings.title,
        list: items
      })
    })
    this.casConsole.updateMenu({
      mainMenuPromise
    })
  }

  /**
   * 构造菜单数据
   * @param routes 路由表
   * @param parentPath
   * @returns 菜单数组
   */
  protected generateRouteMenu(routes, parentPath = '') {
    return routes.map(route => {
      const path = parentPath ? `${parentPath}/${route.path}` : route.path
      const items = route.children && this.generateRouteMenu(route.children, path)
      return {
        menuId: path,
        name: route.meta.title,
        ucode: path,
        href: path,
        items
      }
    })
  }

  /**
   * 高亮左侧菜单
   * @param route 路由对象
   */
  public activeMenu(route) {
    this.casConsole.match({
      key: route.path
    })
  }
}
