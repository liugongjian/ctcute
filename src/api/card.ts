import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { CardListResponse } from '@/types/Card'

export const getCardList = (): AxiosPromise<CardListResponse> => {
  return request({ url: '/mock/175/card-list' })
}
