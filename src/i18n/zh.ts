/*
 * @Author: huanglulu
 * @Date: 2022-07-07 15:45:48
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-21 16:59:42
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
