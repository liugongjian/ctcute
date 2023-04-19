/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 17:17:41
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-18 20:47:53
 * @Description:
 */
export * from 'element-ui/types/element-ui'

import * as ElementUI from 'element-ui/types/element-ui'
export * from './cute'

export default ElementUI

export * from 'vxe-table/types/index'

declare module '*.json' {
  const value: any
  export default value
}
