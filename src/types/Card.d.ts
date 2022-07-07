/* 请求类型: Code */
export type CardListItem = {
  remark: string
  title: string
  size: number
  deploy: number
}

export type CardListResponse = {
  code: number
  data: CardListItem[]
}
