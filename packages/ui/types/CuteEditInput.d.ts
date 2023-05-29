/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:32:09
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-29 14:41:35
 * @Description:
 */
import { CuteComponent } from './component'

export declare class CuteEditInput extends CuteComponent {
  /* 非编辑下的展示值 */
  syncedValue: String

  /* 是否展示文本输入框 */
  textarea: boolean

  /* 组件尺寸 */
  size: String

  /* 全局样式变量 */
  colorVariables: Object

  /* 是否编辑状态 */
  editing: boolean

  /* 组件内保存的编辑值 */
  editValue: String

  /* 确认回调函数 */
  onOk: Function

  /* 开始编辑回调函数 */
  startEdit: Function
}
