/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 17:17:41
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-19 17:50:10
 * @Description:
 */
import VueI18n from 'vue-i18n'

export * from 'element-ui/types/element-ui'

import * as ElementUI from 'element-ui/types/element-ui'
export * from './cute'

export default ElementUI

export * from 'vxe-table'
export { default as VXETable } from 'vxe-table'

export declare function createI18n(options?: Partial<{ storageKey: string; defaultLang: string }>): VueI18n

declare module '*.json' {
  const value: any
  export default value
}
