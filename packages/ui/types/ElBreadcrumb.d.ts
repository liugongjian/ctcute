/*
 * @Author: 朱凌浩
 * @Date: 2023-05-25 20:31:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-25 20:31:41
 * @Description: 对ElBreadcrumb进行了扩展
 */
import { ElBreadcrumb as Breadcrumb } from 'element-ui/types/breadcrumb'

type Size = 'medium' | 'small'

export declare class ElBreadcrumb extends Breadcrumb {
  /* 尺寸 */
  size: Size
}
