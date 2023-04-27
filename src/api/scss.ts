import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as Scss from '@/types/Scss'

export const genScssTheme = (params: Scss.ParamsScss): AxiosPromise<Scss.Scss> =>
  request({
    url: '/v1/scss/gen',
    method: 'get',
    params,
  })
