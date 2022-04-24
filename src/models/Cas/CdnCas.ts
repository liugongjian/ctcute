import { BaseCas } from './BaseCas'
import settings from '@/settings'

export class CdnCas extends BaseCas {
  public containerId = 'iam-console-container'
  public casLayout = AlogicLayout

  // constructor(container) {
  //   super(container)
  // }

  /**
   * 更新菜单
   */
  public updateMenu(routes) {
    console.log(routes)
    const mainMenuPromise = new Promise(resolve => {
      resolve({
        title: settings.title,
        list: this.generateMenu(routes)
      })
    })
    this.casLayout.consoleContainer.updateMenu({
      mainMenuPromise
    })
  }

  /**
   * 生产菜单数据
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
