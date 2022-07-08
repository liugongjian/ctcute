import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { CardListItem, CardListResponse } from '@/types/Card'

export const getCardList = (): AxiosPromise<CardListItem[]> => {
  return request({ url: '/mock/175/card-list1' })
}

export const getCardData = (): AxiosPromise<CardListResponse> =>
  request({
    url: '/mock/175/card-list',
    method: 'get',
    // data: params,
  })
