import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as OrderTabel from '@/types/OrderTable1'

export const getOrderTableList = (params: OrderTabel.TableParams): AxiosPromise<OrderTabel.TableData> =>
  request({
    url: '/mock/175/order/list',
    method: 'get',
    data: params,
  })
