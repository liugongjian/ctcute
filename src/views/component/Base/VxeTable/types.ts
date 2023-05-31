/*
 * @Author: 朱玉豆
 * @Date: 2023-05-26 17:58:24
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-31 11:50:25
 * @Description:
 */
/**
 * 表格数据1
 */
export type TableType = {
  name: string
  status: number
  ip: string
  time: string
  tags: Array<string>
  desc: string
  health: number
  flag?: boolean
}

/**
 * 表格数据2
 */
export type TableType2 = {
  id?: number
  name: string
  role?: string
  sex: string
  age: number
  amount?: number
  key?: string
  translate?: string
  address: string
}

// 可编辑单元格 单元格数据配置
export interface CellConfig {
  value: string
  key?: string
  config: {
    fillColor: string
    bold: string
    italic: string
    remarks: Array<string>
    fontColor: string
    borderBottom?: string
    borderRight?: string
  }
}

export interface EditTableCellType {
  [key: string]: CellConfig
}
