import { CtyunMenuItem } from '../types/menu'

export default {
  fetchUrl: '/ctyun/gw/v1/portal/menu/GetTree',
  // TODO 待补充
  dataFormat(list: CtyunMenuItem[]) {
    return list.map(item => {
      return item
    })
  },
}
