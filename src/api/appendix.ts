import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as Appendix from '@/types/Appendix'
export const createImg = (): AxiosPromise<Appendix.Response> =>
  request({
    url: 'mock/175/appendix/picture',
    method: 'get',
  })
export const createPdf = (): AxiosPromise<Appendix.Response> =>
  request({
    url: 'mock/175/appendix/binary',
    method: 'get',
  })

export const createExcel = (): AxiosPromise<Appendix.Response> =>
  request({
    url: 'mock/175/appendix/excel',
    method: 'get',
  })
