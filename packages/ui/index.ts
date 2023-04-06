/*
 * @Author: huanglulu
 * @Date: 2022-07-18 15:05:01
 * @LastEditors: yanchengxiang 675036196@qq.com
 * @LastEditTime: 2023-04-06 10:47:36
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
import ElementUIOverride, {
  Steps,
  Step,
  Alert,
  Collapse,
  Rate,
  Button,
  MessageBox,
} from './components/ElementUI'
import './components/ElementUI/settings'
import './style/index.scss'
import './fonts/iconfont.css'
import './fonts/bahnschrift.css'
import './icons/index'

/**
 * 组件清单
 */
import CuteLayout from './components/CuteLayout/index.vue'
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
export {
  CuteLayout,
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
}

/**
 * 仅注册使用频率高的，轻量级的组件
 */
const componentsList = [
  CuteLayout,
  CuteFormInfo,
  CuteEditInput,
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
]

export default {
  install(Vue) {
    Vue.use(ElementUI, { size: 'medium' })
    Vue.use(ElementUIOverride)

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
