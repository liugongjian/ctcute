/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:37:17
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-05-30 19:07:04
 * @Description:
 */
import { CuteComponent } from './component'

export declare class CuteSlider extends CuteComponent {
  //绑定值
  value: number | Array<number>

  //最小值
  min: number

  //最大值
  max: number

  //是否禁用
  disabled: boolean

  //是否是双滑块
  range: boolean

  //标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内
  marks: Record<number, string>

  //单位
  unit: string

  //长度
  width: number
}
