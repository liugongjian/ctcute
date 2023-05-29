/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:37:43
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-29 10:47:50
 * @Description:
 */
import { CuteComponent } from './component'

type dataType = {
  /* 配置项唯一标识 */
  code: string
  /* 配置项名称 */
  name: string
  /* 配置项数据或者百分比 */
  value?: number
  /* 配置项是否被选中 */
  checked: boolean
}
export declare class CuteDistributionBar extends CuteComponent {
  /* 分配条配置项信息 */
  data: dataType

  /* 输入框数据最大值 */
  max: number

  /* 是否显示输入框，用来自定义数值 */
  showValue: boolean

  /* 选项每行的个数，默认auto */
  rowNumber: [string, number]

  /* mode: fixed: 完全分配所有资源 free: 不完全分配所有资源，有一定剩余 */
  mode: string
}
