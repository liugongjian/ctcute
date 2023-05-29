/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:31:50
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-29 14:23:09
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteButton {
  label: String
  name: String
}

export declare class CuteButtonGroup extends CuteComponent {
  /* 按钮组各按钮数组 */
  data: CuteButton[]

  /* 展示按钮的最大个数 */
  max: Number

  /* 按钮大小 */
  size: String

  /* 主按钮数据 */
  main: CuteButton

  /* 主按钮以外的数据 */
  newData: CuteButton[]
}
