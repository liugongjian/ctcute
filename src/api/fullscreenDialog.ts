import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as FullscreenDialog from '@/types/FullscreenDialog'
/**
 *
 * @param params 表单对象
 * @returns 结果对象
 */
export const getTable = (params: FullscreenDialog.TableParams): AxiosPromise<FullscreenDialog.TableData> =>
  request({
    url: '/mock/175/dialog/fullscreen/table',
    method: 'get',
    params,
  })
