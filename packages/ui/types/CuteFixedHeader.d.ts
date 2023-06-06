/*
 * @Author: 黄靖
 * @Date: 2023-04-25 17:49:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-05-30 19:16:03
 * @Description:
 */
import { CuteComponent } from './component'

export interface CuteFixedHeaderSlots {
  default: VNode[]
}
export declare class CuteFixedHeader extends CuteComponent {
  $slots: CuteFixedHeaderSlots
}
