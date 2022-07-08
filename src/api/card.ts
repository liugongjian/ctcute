import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { CardListResponse } from '@/types/Card'
import * as CardList from '@/types/Card'

export const getCardList = (): AxiosPromise<CardListResponse> => {
  return request({ url: '/mock/175/card-list' })
}

export const getCardData = (): AxiosPromise<CardList.CardListResponse> =>
  request({
    url: '/mock/175/card-list',
    method: 'get',
    // data: params,
  })
