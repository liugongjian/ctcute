/** Card2  */
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
