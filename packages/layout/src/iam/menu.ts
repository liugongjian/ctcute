import { IamMenuItem, CuteItem } from '../../types/menu'
import { MENU_TYPE } from '../common/config'
import { flatObjectArray } from '../common/utils'

export default {
  fetchUrl: '/iam/gw/workspace/menu/GetTree',

  // TODO ，拍平数组，然后根据 render 类型区分类型？弄到同一个菜单里获取
  dataFormat(list: IamMenuItem[] = []) {
    return flatObjectArray(list, 'items')
      .filter(item => item.enable === 'true')
      .map(item => {
        if (item.renderer === 'menu') {
          return {
            url: item.ucode,
            menuType: MENU_TYPE.menu,
          } as CuteItem
        } else if (item.renderer === 'button') {
          return {
            perms: item.ucode,
            menuType: MENU_TYPE.button,
          } as CuteItem
        } else {
          return {
            url: item.ucode,
            menuType: MENU_TYPE.other,
          }
        }
      })
  },
}
