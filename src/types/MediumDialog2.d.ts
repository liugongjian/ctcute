/*
 * @Author: zhaodan
 * @Date: 2023-01-09 13:59:11
 * @LastEditors: zhaodan
 * @LastEditTime: 2023-01-09 13:59:31
 * @Description:
 */
export interface Form {
  type: string
  name: string
  menu: string
  sort: string
  permissionTag: string
  alias: string
}

export type Response = {
  id: number
}
