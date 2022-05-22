import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export const getMenu = (params: any): AxiosPromise<any> =>
  request({
    url: '/iam/gw/workspace/menu/GetTree',
    method: 'get',
    params
  })
