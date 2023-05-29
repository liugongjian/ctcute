/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:33:37
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-29 14:58:27
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteRadio {
  label: String
  disabled?: boolean
}

export declare class CuteSpecialRadio extends CuteComponent {
  /* 选项组数据数组 */
  options: CuteRadio[]

  /* 该组件是否禁用 */
  disabled: Boolean

  /* 该组件尺寸 */
  size: String

  /* 该组件绑定的展示值 */
  value: String

  /* 组件change的回调函数 */
  myChange: Function
}
