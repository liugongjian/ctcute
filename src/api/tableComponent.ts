import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as TableComponent from '@/types/TableComponent'
/**
 * 获取表格组件数据
 * @returns 表格数据
 */
export const getTableComponent = (): AxiosPromise<TableComponent.TableComponentData> =>
  request({
    url: '/mock/175/table/component',
    method: 'get',
  })
