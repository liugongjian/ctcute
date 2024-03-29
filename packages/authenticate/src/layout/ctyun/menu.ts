import { CtyunMenuItem, CuteItem } from '../../../types/menu'
import { MENU_TYPE } from '../common/config'
import { flatObjectArray } from '../common/utils'

export default {
  fetchUrl: '/gw/v1/portal/menu/GetTree',
  // 其实 ctyun 可以直接关掉鉴权
  dataFormat(list: CtyunMenuItem[] = []) {
    return flatObjectArray(list, 'items')
      .filter(item => item.enable === 'true')
      .map(item => {
        if (item.renderer === 'menu') {
          return {
            perm: item.menuCode,
            menuType: MENU_TYPE.menu,
          } as CuteItem
        } else if (item.renderer === 'button') {
          return {
            perm: item.menuCode,
            menuType: MENU_TYPE.button,
          } as CuteItem
        } else {
          return {
            perm: item.menuCode,
            menuType: MENU_TYPE.other,
          } as CuteItem
        }
      })
  },
}
