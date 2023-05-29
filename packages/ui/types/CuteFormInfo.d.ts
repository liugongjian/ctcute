/*
 * @Author: 朱凌浩
 * @Date: 2023-04-18 20:32:36
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-04-18 20:33:02
 * @Description:
 */
import { CuteComponent } from './component'

export type TooltipEffect = 'dark' | 'light'
export declare class CuteFormInfo extends CuteComponent {
  /* Tooltip配色  */
  effect: TooltipEffect

  /* Tooltip宽度 */
  width: number

  /* 提示标题 */
  title: string

  /* 提示内容 */
  content: string
}
