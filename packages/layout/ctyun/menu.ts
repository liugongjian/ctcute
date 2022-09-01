import { CtyunMenuItem, CuteItem } from '../types/menu'
import { MENU_TYPE } from '../common/config'

export default {
  fetchUrl: '/ctyun/gw/v1/portal/menu/GetTree',
  // 其实 ctyun 可以直接关掉鉴权
  dataFormat(list: CtyunMenuItem[]) {
    return list
      .filter(item => item.enable === 'true')
      .map(item => {
        if (item.renderer === 'menu') {
          return {
            url: item.menuCode,
            menuType: MENU_TYPE.menu,
          } as CuteItem
        } else if (item.renderer === 'button') {
          return {
            perms: item.menuCode,
            menuType: MENU_TYPE.button,
          } as CuteItem
        } else {
          return {
            url: item.menuCode,
            menuType: MENU_TYPE.other,
          } as CuteItem
        }
      })
  },
}
