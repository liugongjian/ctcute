/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElCollapse进行了扩展
 */
import { ElCollapse as Collapse } from 'element-ui/types/color-picker'

export declare class ElCollapse extends Collapse {
  /* 是否显示成分离式的折叠面板 */
  seperate: boolean
}
