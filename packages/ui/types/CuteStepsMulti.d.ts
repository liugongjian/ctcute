/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:34:51
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-05-30 19:00:56
 * @Description:
 */
import { CuteComponent } from './component'

export type StepState = 'wait' | 'process' | 'finish' | 'error' | 'success'
export interface Step {
  title: string
  disabled?: boolean
  status?: StepState
}

export type StepDirection = 'vertical' | 'horizontal'
export declare class CuteStepsMulti extends CuteComponent {
  //设置当前激活步骤
  active: number

  //步骤条内容,对象数组,可对应设置每个步骤的标题(title)、可用状态(disabled)、当前步骤的状态(status)
  steps: Array<Step>

  //最后一个步骤的宽度
  lastStepWidth: number
  //步骤条大小
  size: string

  //每个 step 的间距，不填写将自适应间距。支持百分比
  space: number | string

  //整个步骤条的最大长度,百分比
  maxWidth: string

  //显示几个中间步骤
  stepSize: number

  //显示方向
  direction: StepDirection

  //是否显示前进后退按钮
  hasGoButton: boolean
}
