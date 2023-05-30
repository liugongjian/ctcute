/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:33:59
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-30 09:14:26
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteRemindSelectOption {
  label: string
  value: string
}
export declare class CuteRemindSelect extends CuteComponent {
  /* 组件是否多选 */
  multiple: boolean
  /* 下拉数据 */
  options: CuteRemindSelectOption[]
  /* 占位符 */
  placeholder: string
  /* 提示文案 */
  title: string

  /* 多选时是否将选中值按文字的形式展示 */
  collapseTags: boolean

  /* 下拉框绑定值 */
  value: Array<any> | string

  /* 组件尺寸 */
  size: string

  /* 组件是否禁用 */
  disabled: boolean

  /* 下拉框change的回调函数 */
  myChange: function
}
