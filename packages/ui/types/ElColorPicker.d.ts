/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElColorPicker进行了扩展
 */
import { ElColorPicker as ColorPicker } from 'element-ui/types/color-picker'

type ColorPickerType = 'default' | 'predefine'

export declare class ElColorPicker extends ColorPicker {
  /* 显示风格类型，可以只显示与定义颜色选择栏 */
  type: ColorPickerType
}
