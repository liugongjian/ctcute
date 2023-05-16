import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale'
import zhLang from '../../i18n/zh/element-ui'
import Steps from './Steps/index.vue'
import Step from './Steps/Step.vue'
import Alert from './Alert/index.vue'
import Collapse from './Collapse/index.vue'
import Rate from './Rate/index.vue'
import ColorPicker from './ColorPicker/index.vue'
import Tabs from './Tabs/tabs.vue'
import Breadcrumb from './Breadcrumb/Breadcrumb.vue'
import BreadcrumbItem from './Breadcrumb/BreadcrumbItem.vue'
import Button from './Button/index.vue'
import Popover from './Popover/index.vue'
import directive from './Popover/directive.js'
import FormItem from './FormItem/index.vue'

export default {
  install(Vue) {
    Vue.component(Steps.name, Steps)
    Vue.component(Step.name, Step)
    Vue.component(Alert.name, Alert)
    Vue.component(Collapse.name, Collapse)
    Vue.component(Rate.name, Rate)
    Vue.component(ColorPicker.name, ColorPicker)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(BreadcrumbItem.name, BreadcrumbItem)
    Vue.component(Button.name, Button)
    Vue.directive('popover', directive)
    Vue.component(Popover.name, Popover)
    Vue.component(FormItem.name, FormItem)

    const Pagination = ElementUI.Pagination as any
    const Table = ElementUI.Table as any
    const Card = ElementUI.Card as any
    Pagination.props.layout = {
      default: 'total, sizes, prev, pager, next',
    }
    Pagination.props.pageSize = {
      default: 20,
    }
    Pagination.props.pageSizes = {
      default: () => [10, 20, 30, 50, 100],
    }
    Pagination.props.popperClass = {
      default: 'pagination__dropdown',
    }
    Table.props.emptyText = {
      default: '暂无数据',
    }
    Card.props.shadow.default = 'hover'

    // 覆写默认语言包，支持按 cute 设置回退中文
    locale.use(zhLang)
  },
}
export { Steps, Step, Alert, Collapse, Rate, ColorPicker, Button, Popover }
