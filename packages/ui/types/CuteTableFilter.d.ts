/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:35:19
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-18 20:35:32
 * @Description:
 */
import { CuteComponent } from './component'

export type CuteTableFilterItem = {
  /* 过滤条件key */
  key: string

  /* 过滤条件的值 */
  value: string
}

export interface CuteTableFilterSlots {
  /* 展示过滤条件 */
  default: VNode[]

  /* Popover 中的内容区域，用于新增/编辑过滤条件 */
  'popover-content': VNode[]

  [key: string]: VNode[]
}

export declare class CuteTableFilter extends CuteComponent {
  /* 按钮图标 */
  btnIcon?: string

  /* 按钮文本 */
  btnText?: string

  /* 过滤条件 */
  filters?: CuteTableFilterItem[]

  $slots: CuteTableFilterSlots
}
