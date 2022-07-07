import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { CardListItem } from '@/types/Card'

export const getCardList = (): AxiosPromise<CardListItem[]> => {
  return request({ url: '/mock/175/card-list' })
}
