/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:34:19
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-30 13:47:25
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteSelectedInputOption {
  label: string
  value: string
}
export declare class CuteSelectedInput extends CuteComponent {
  /* 已选中数据 */
  checkedList: Array[string]

  /* 已选中数据 */
  options: CuteSelectedInputOption[]

  /* 组件尺寸大小 */
  size: string

  /* 下拉框change事件回调 */
  handelSelectChange: any
}
