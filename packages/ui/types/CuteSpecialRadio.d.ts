/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:33:37
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-30 09:15:46
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteRadio {
  label: string
  disabled?: boolean
}

export declare class CuteSpecialRadio extends CuteComponent {
  /* 选项组数据数组 */
  options: CuteRadio[]

  /* 该组件是否禁用 */
  disabled: boolean

  /* 该组件尺寸 */
  size: string

  /* 该组件绑定的展示值 */
  value: string

  /* 组件change的回调函数 */
  myChange: function
}
