/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:31:50
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-30 09:13:53
 * @Description:
 */
import { CuteComponent } from './component'

interface CuteButton {
  label: string
  name: string
}

export declare class CuteButtonGroup extends CuteComponent {
  /* 按钮组各按钮数组 */
  data: CuteButton[]

  /* 展示按钮的最大个数 */
  max: number

  /* 按钮大小 */
  size: string

  /* 主按钮数据 */
  main: CuteButton

  /* 主按钮以外的数据 */
  newData: CuteButton[]
}
