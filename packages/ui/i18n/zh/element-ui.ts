/**
 * 所有原 element-ui 组件（未被覆写）所需中文语言包在此定义
 */
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {
  el: {
    ...zhLocale.el,
    pagination: {
      goto: '前往',
      pagesize: '',
      total: '共{total}条',
      pageClassifier: '页',
    },
    messagebox: {
      confirm: '确 认',
      cancel: '取 消',
    },
    colorpicker: {
      clear: '清 空',
      confirm: '确 定',
    },
  },
}
