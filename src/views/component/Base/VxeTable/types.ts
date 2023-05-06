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
