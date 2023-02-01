/*
 * @Author: 孙善鹏
 * @Date: 2022-10-11 15:06:32
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2022-12-16 17:20:55
 * @Description:
 */
/** Card3  */
export type CardListItem = {
  remark: string
  title: string
  editType: boolean
  size: number
  deploy: number
}

export type CardListResponse = {
  // code: number
  list: CardListItem[]
}
