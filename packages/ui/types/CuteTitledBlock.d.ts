/*
 * @Author: 胡佳婷
 * @Date: 2023-05-12 07:21:56
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-12 21:38:45
 * @Description:
 */
import { CuteComponent } from './component'

export interface CuteTitledBlockSlots {
  content: VNode[]
  extra: VNode[]
  [key: string]: VNode[]
}
export declare class CuteTitledBlock extends CuteComponent {
  title: string
  $slots: CuteTitledBlockSlots
}
