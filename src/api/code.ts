import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as Code from '@/types/Code'

export const getManifest = (params: Code.ParamsManifest): AxiosPromise<Code.Manifest[]> =>
  request({
    url: '/v1/code/manifest',
    method: 'get',
    params,
  })

export const getCode = (params: Code.ParamsCode): AxiosPromise<string> =>
  request({
    url: '/v1/code',
    method: 'get',
    params,
  })
