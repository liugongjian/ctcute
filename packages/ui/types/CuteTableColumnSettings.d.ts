/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:36:22
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-18 20:36:39
 * @Description:
 */
import { CuteComponent } from './component'
import { ElTableColumn } from 'element-ui/types/table-column'

type TableColumn = {
  /* 显示的标题 */
  label: string

  /* 对应列内容的字段名 */
  prop: string

  /* 具名插槽名称，与自己提供的插槽名称对应 */
  slot?: string

  /* 展示该字段 */
  isSelected?: boolean

  /* 禁止设置该字段 */
  isDisabled?: boolean

  /* 用于透传 el-table-column 属性 */
  props?: ElTableColumn
}

export declare class CuteTableColumnSettings extends CuteComponent {
  /* 表格数据 */
  tableData: Record<string, any>[]

  /* 列字段 */
  tableColumns: TableColumn[]
}
