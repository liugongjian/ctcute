import { IamMenuItem } from '../types/menu'

export default {
  fetchUrl: '/iam/gw/workspace/menu/GetTree',

  dataFormat(list: IamMenuItem[]) {
    return list.map(item => {
      return item
    })
  },
}
