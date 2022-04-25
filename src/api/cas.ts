import request from '@/utils/request'

export const getMenu = (params: any): Promise<any> =>
  request({
    url: '/iam/gw/workspace/menu/GetTree',
    method: 'get',
    params
  })
