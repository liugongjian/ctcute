/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:29:37
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-29 13:46:03
 * @Description:
 */
import { CuteComponent } from './component'

export declare class CuteAppendix extends CuteComponent {
  /* 附件标题  */
  title: string

  /* 附件大小：small、medium（默认）  */
  size: string

  /* 附件地址 */
  url: boolean

  /* 是否显示预览Icon */
  showPreview: boolean

  /* 附件类型 img、file、 pdf、xlsx，除xlsx外，其他类型暂时没做其他处理*/
  type: string

  /* medium类型的svg填充颜色 */
  svgColor: string

  /* medium类型的svg配置 */
  svgName: string
}
