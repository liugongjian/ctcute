import { CtyunMenuItem, CuteItem, MENU_TYPE } from '../types/menu'

export default {
  fetchUrl: '/ctyun/gw/v1/portal/menu/GetTree',
  // 其实 ctyun 可以直接关掉鉴权
  menuDataFormat(list: CtyunMenuItem[]) {
    return list
      .filter(item => item.enable === 'true')
      .map(
        item =>
          ({
            url: item.menuCode,
            menuType: MENU_TYPE.menu,
          } as CuteItem)
      )
  },
  buttonDataFormat(list: CtyunMenuItem[]) {
    return list
      .filter(item => item.enable === 'true')
      .map(
        item =>
          ({
            perms: item.menuCode,
            menuType: MENU_TYPE.button,
          } as CuteItem)
      )
  },
}
