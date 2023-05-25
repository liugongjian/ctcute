/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElSteps进行了扩展
 */
import { ElSteps as Steps } from 'element-ui/types/steps'

type Size = 'medium' | 'small'

export declare class ElSteps extends Steps {
  /* 尺寸 */
  size: Size
}
