/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:37:03
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-18 20:37:10
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteAreaCityOption {
  label: String
  value: String
  count: number
}

interface CuteAreaOption {
  label: String
  city: CuteAreaCityOption[]
}

export declare class CuteArea extends CuteComponent {
  /* 下拉框绑定值 */
  value: string

  /* 设置几列展示，默认为4，最小可设为2  */
  column: number

  /* 是否可以清空选项  */
  clearable: boolean

  /* 列表数据  */
  data: CuteAreaOption[]

  /* 指定选项的键名作为实际取值的key  */
  valueKey: string

  /* 最近访问列表  */
  recentData: CuteAreaCityOption[]

  /* 是否显示最近访问列表  */
  showRecent: boolean

  /* 弹窗宽度  */
  popperWidth: string

  /* 弹窗最大高度  */
  popperMaxHeight: string

  /* 选中值发生变化时触发的回调函数 */
  change: Function

  /* 点击清空按钮时触发的回调函数 */
  clear: Function
}
