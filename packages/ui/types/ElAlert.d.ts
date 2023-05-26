/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElAlert进行了扩展
 */
import { ElAlert as Alert } from 'element-ui/types/form-item'

type AlertType = 'success' | 'warning' | 'info' | 'error' | 'weak'

export declare class ElAlert extends Alert {
  /* 是否显示成内容区域条样式 */
  contentAreaTip: boolean

  /* 关闭按钮的颜色 */
  closeBtnColor: string

  /* 常用样式类型(weak为弱提示样式) */
  type: AlertType
}
