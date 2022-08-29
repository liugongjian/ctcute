import { IamMenuItem, CuteItem, MENU_TYPE } from '../types/menu'

export default {
  fetchUrl: '/iam/gw/workspace/menu/GetTree',

  menuDataFormat(list: IamMenuItem[]) {
    return list
      .filter(item => item.enable === 'true')
      .map(
        item =>
          ({
            url: item.ucode,
            menuType: MENU_TYPE.menu,
          } as CuteItem)
      )
  },
  buttonDataFormat(list: IamMenuItem[]) {
    return list
      .filter(item => item.enable === 'true')
      .map(
        item =>
          ({
            perms: item.ucode,
            menuType: MENU_TYPE.button,
          } as CuteItem)
      )
  },
}
