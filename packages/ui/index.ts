/*
 * @Author: huanglulu
 * @Date: 2022-07-18 15:05:01
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-05-08 14:48:58
 * @Description:
 */
import ElementUI, {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Notification,
  Slider,
  Loading,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  MessageBox,
  Badge,
  Card,
  Carousel,
  CarouselItem,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  Skeleton,
  SkeletonItem,
  Empty,
  Descriptions,
  DescriptionsItem,
  Result,
} from 'element-ui'
import ElementUIOverride, { Steps, Step, Alert, Collapse, Rate, Button } from './components/ElementUI'
// svgIcon
import './icons/index'
import SvgIcon from './icons/index.vue'

// 整合appendix，chart等
import CuteAppendix from './packages/appendix/CuteAppendix.vue'
import VXETable from './packages/vxe-table/index'
import CuteSortTable from './packages/sort-table/CuteSortTable.vue'

export {
  CuteAppendix,
  VXETable, // VXETable使用时要vue.use全局注册，因为他会自动注册其他几个相关组件
  CuteSortTable,
}

/**
 * 组件清单
 */
import CuteLayout from './components/CuteLayout/index.vue'
import CuteLayoutSidebar from './components/CuteLayout//Sidebar/index.vue'
import CuteLayoutNavbar from './components/CuteLayout//Navbar/index.vue'
import CuteLayoutBreadcrumb from './components/CuteLayout//Breadcrumb/index.vue'
import CuteLayoutHeader from './components/CuteLayout//Header/index.vue'
import CuteButtonGroup from './components/CuteCombinationButton/CuteButtonGroup.vue'
import CuteEditInput from './components/CuteEditInput/index.vue'
import CuteFormInfo from './components/CuteFormInfo/index.vue'
import CuteRemindInput from './components/CuteInput/CuteRemindInput.vue'
import CuteSpecialRadio from './components/CuteRadio/CuteSpecialRadio.vue'
import CuteRemindSelect from './components/CuteSelect/CuteRemindSelect.vue'
import CuteSelectedInput from './components/CuteSelect/CuteSelectedInput.vue'
import CuteState from './components/CuteState/index.vue'
import CuteStepsMulti from './components/CuteSteps/CuteStepsMulti.vue'
import CuteTableFilter from './components/CuteTable/CuteTableFilter.vue'
import CuteTag from './components/CuteTag/index.vue'
import CuteTitledBlock from './components/CuteTitledBlock/index.vue'
import CuteTableColumnSettings from './components/CuteTable/CuteTableColumnSettings.vue'
import CuteSelectTree from './components/CuteSelect/CuteSelectTree/index.vue'
import CuteArea from './components/CuteArea/index.vue'
import CuteSlider from './components/CuteSlider/index.vue'
import CuteDistributionBar from './components/CuteDistributionBar/index.vue'
import CuteCardBox from './components/CuteCardBox/index.vue'
import CuteScroller from './components/CuteScroller/index.vue'
import CuteFixedFooter from './components/CuteFixedFooter/index.vue'
export {
  CuteLayout,
  CuteLayoutSidebar,
  CuteLayoutNavbar,
  CuteLayoutBreadcrumb,
  CuteLayoutHeader,
  CuteButtonGroup,
  CuteEditInput,
  CuteFormInfo,
  CuteRemindInput,
  CuteSpecialRadio,
  CuteRemindSelect,
  CuteSelectedInput,
  CuteState,
  CuteStepsMulti,
  CuteTableFilter,
  CuteTag,
  CuteTitledBlock,
  CuteTableColumnSettings,
  CuteSelectTree,
  CuteArea,
  CuteSlider,
  CuteDistributionBar,
  CuteCardBox,
  CuteScroller,
  CuteFixedFooter,
}

/**
 * 仅注册使用频率高的，轻量级的组件
 */
const componentsList = [
  CuteLayout,
  CuteLayoutSidebar,
  CuteLayoutNavbar,
  CuteLayoutBreadcrumb,
  CuteLayoutHeader,
  CuteFormInfo,
  CuteEditInput,
  CuteButtonGroup,
  CuteState,
  CuteTag,
  CuteRemindInput,
  CuteRemindSelect,
  CuteSelectedInput,
  CuteTableColumnSettings,
  CuteSelectTree,
  CuteArea,
  CuteSlider,
  CuteStepsMulti,
  CuteCardBox,
  CuteScroller,
  CuteTitledBlock,
  CuteFixedFooter,
]

export default {
  install(Vue, opts = { size: 'medium' }) {
    Vue.use(ElementUI, opts)
    Vue.use(ElementUIOverride)
    Vue.use(InfiniteScroll)
    Vue.use(Loading.directive)

    Vue.prototype.$loading = Loading.service
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification
    Vue.prototype.$message = Message
    Vue.component('SvgIcon', SvgIcon)

    componentsList.map((component: any) => {
      Vue.component(component.options ? component.options.name : component.name, component)
    })
  },
}

export {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Notification,
  Slider,
  Loading,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Carousel,
  CarouselItem,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  Skeleton,
  SkeletonItem,
  Empty,
  Descriptions,
  DescriptionsItem,
  Result,
  Steps,
  Step,
  Alert,
  Collapse,
  Rate,
}

export { default as createI18n } from './i18n'
