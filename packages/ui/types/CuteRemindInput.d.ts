/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:33:12
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-29 14:51:30
 * @Description:
 */
import { CuteComponent } from './component'

export declare class CuteRemindInput extends CuteComponent {
  /* 输入框占位符 */
  placeholder: String

  /* 提示值 */
  title: String

  /* 组件尺寸值 */
  size: String

  /* 输入框是否禁用状态 */
  disabled: Boolean

  /* 输入框绑定值 */
  value: String

  /* 输入框change回调函数 */
  myChange: Function

  /* 输入框提示值样式调整回调函数 */
  getPosition: Function
}
