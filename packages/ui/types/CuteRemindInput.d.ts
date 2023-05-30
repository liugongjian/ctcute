/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:33:12
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-30 09:13:07
 * @Description:
 */
import { CuteComponent } from './component'

export declare class CuteRemindInput extends CuteComponent {
  /* 输入框占位符 */
  placeholder: string

  /* 提示值 */
  title: string

  /* 组件尺寸值 */
  size: string

  /* 输入框是否禁用状态 */
  disabled: boolean

  /* 输入框绑定值 */
  value: string

  /* 输入框change回调函数 */
  myChange: function

  /* 输入框提示值样式调整回调函数 */
  getPosition: function
}
