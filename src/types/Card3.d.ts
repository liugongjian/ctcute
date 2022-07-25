/** Card3  */
export type CardListItem = {
  remark: string
  title: string
  size: number
  deploy: number
}

export type CardListResponse = {
  // code: number
  list: CardListItem[]
}
