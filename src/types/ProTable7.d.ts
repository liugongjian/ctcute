import * as Request from '@/types/Request'
import * as Response from '@/types/Response'

/* 获取表格请求类型 */
export type TableParams = Request.Pager

/* 返回列表 */
export type TableData = {
  list: TableDataItem[]
} & Response.Pager

export type TableDataItem = {
  result?: any
  createTime?: number
  cuNum?: number
  cuUsedNum?: number
  dueTime?: number
  nodeCode: string
  payType?: number
  projectSpaces?: SpaceWork[]
  workspace?: string
  workspaceId: string
  workspaceState?: string
}

export type SpaceWork = {
  createTime?: number
  cuNum?: number
  cuUsedNum?: number
  projectSpace?: string
  projectSpaceId: string
  projectSpaceState?: string
}
