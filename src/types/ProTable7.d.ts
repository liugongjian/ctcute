/**
 * 表格数据
 * 示例为服务器主机
 */
export interface TableData {
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

export interface SpaceWork {
  createTime?: number
  cuNum?: number
  cuUsedNum?: number
  projectSpace?: string
  projectSpaceId: string
  projectSpaceState?: string
}
