/*
 * @Author: huanglulu
 * @Date: 2022-07-07 15:45:48
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-10-18 16:08:16
 * @Description:
 */
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const el = {
  ...zhLocale.el,
  pagination: {
    goto: '前往',
    pagesize: '',
    total: '总条数：{total}',
    pageClassifier: '页',
  },
}
const cn = {
  el,
}
export default cn
