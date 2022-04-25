import { BaseCas } from './BaseCas'
import settings from '@/settings'

export class CdnCas extends BaseCas {
  public containerId = 'iam-console-container'
  public casLayout = AlogicLayout

  /**
   * 更新菜单
   */
  public updateMenu(items) {
    const mainMenuPromise = new Promise(resolve => {
      resolve({
        title: settings.title,
        list: items
      })
    })
    this.casLayout.consoleContainer.updateMenu({
      mainMenuPromise
    })
  }

  /**
   * 使用路由表更新菜单
   */
  public updateMenuByRoute(routes) {
    const items = this.generateMenu(routes)
    this.updateMenu(items)
  }

  /**
   * 构造菜单数据
   * @param routes 路由表
   * @param parentPath
   * @returns 菜单数组
   */
  private generateMenu(routes, parentPath = '') {
    return routes.map(route => {
      const path = parentPath ? `${parentPath}/${route.path}` : route.path
      const items = route.children && this.generateMenu(route.children, path)
      return {
        name: route.meta.title,
        href: path,
        items
      }
    })
  }
}
