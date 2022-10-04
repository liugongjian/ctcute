import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as CuteTableColumnSettings from '@/types/CuteTableColumnSettings'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (
  params: CuteTableColumnSettings.TableParams
): AxiosPromise<CuteTableColumnSettings.TableData> =>
  request({
    url: '/mock/175/table',
    method: 'get',
    params,
  })
