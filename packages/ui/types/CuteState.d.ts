/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:34:33
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-12 07:42:46
 * @Description:
 */
import { CuteComponent } from './component'

/** state type */
export type StateType = 'info' | 'success' | 'warning' | 'danger' | 'fatal' | 'master'

export declare class CuteState extends CuteComponent {
  type: StateType
  color?: string
  icon?: string
  loading?: boolean
}
