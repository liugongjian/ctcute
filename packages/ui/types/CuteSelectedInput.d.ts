/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:34:19
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-29 15:19:33
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteSelectedInputOption {
  label: String
  value: String
}
export declare class CuteSelectedInput extends CuteComponent {
  /* 已选中数据 */
  checkedList: Array[String]

  /* 已选中数据 */
  options: CuteSelectedInputOption[]

  /* 组件尺寸大小 */
  size: String

  /* 下拉框change事件回调 */
  handelSelectChange: Function
}
