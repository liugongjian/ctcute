/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElFormItem进行了扩展
 */
import { ElFormItem as FormItem } from 'element-ui/types/form-item'
import { PopoverPlacement } from 'element-ui/types/popover'

type ErrorShowType = 'tooltip' | 'inline'

export declare class ElFormItem extends FormItem {
  /* 表单错误提示样式类型 */
  errorShowType: ErrorShowType

  /* 当类型为tooltip时，提示位置 */
  placement: PopoverPlacement
}
