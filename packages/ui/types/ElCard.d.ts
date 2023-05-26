/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElCard进行了扩展
 */
import { ElCard as Card } from 'element-ui/types/card'

type shadowType = 'always' | 'always-light' | 'hover' | 'hover-light' | 'never'

export declare class ElCard extends Card {
  /* 设置阴影显示时机 */
  shadow: shadowType
}
