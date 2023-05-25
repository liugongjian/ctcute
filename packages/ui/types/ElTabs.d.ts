/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElTabs进行了扩展
 */
import { ElTabs as Tabs } from 'element-ui/types/tab'

type TabType = 'button' | 'card' | 'border-card'
type Size = 'large' | 'medium' | 'small'

export declare class ElTabs extends Tabs {
  /* 风格类型，不填为默认风格。在el-tabs原有type属性基础上增加了button风格 */
  type: TabType

  /* 尺寸 */
  size: Size

  /* addable属性设置为true时生效，是否显示新tab名称输入框 */
  showAddInput: boolean

  /* addable属性设置为true时生效，新增按钮的文案 */
  addButtonText: string
}
