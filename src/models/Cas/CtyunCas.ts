import { BaseCas } from './BaseCas'
import settings from '@/settings'
import router from '@/router'
export class CtyunCas extends BaseCas {
  public containerId = 'ctcloud-console'
  public casLayout = CtcloudLayout
  public casConsole = CtcloudLayout.consoleLayout

  /**
   * 检查用户是否登录
   * @returns 用户信息Promise
   */
  public auth() {
    return this.casLayout.getPublicInfo().authCurrentPromise
  }

  /**
   * 更新左侧二级菜单
   */
  public updateMenu(items) {
    const getMenuPromise = new Promise(resolve => {
      resolve({
        title: settings.title,
        list: items
      })
    })
    this.casConsole.fetchMenuData({
      getMenuPromise
    })

    this.casLayout.config({
      pushHash: (route: any) => {
        if (router.currentRoute.path) {
          router.push({
            path: route.code
          })
        }
      }
    })
  }

  /**
   * 构造菜单数据
   * @param routes 路由表
   * @param parentPath
   * @returns 菜单数组
   */
  protected generateRouteMenu(routes, parentPath = '', items = []) {
    routes.forEach(route => {
      const path = parentPath ? `${parentPath}/${route.path}` : route.path
      route.children && this.generateRouteMenu(route.children, path, items)
      items.push({
        menuCode: path,
        menuId: path,
        parentId: parentPath || '0',
        name: route.meta.title,
        href: '#' + path
      })
    })
    return items
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
