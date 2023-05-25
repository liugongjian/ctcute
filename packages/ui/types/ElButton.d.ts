/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElButton进行了扩展
 */
import { ElButton as Button } from 'element-ui/types/button'

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'ct' | 'weak'

export declare class ElButton extends Button {
  /** 按钮类型 */
  type: ButtonType

  /* 是否显示边框 */
  border: boolean

  /* 是否方形按钮 */
  square: string

  /* 文本按钮的颜色类型，可选primary/success/warning/danger/ct/weak */
  textType: ButtonType
}
