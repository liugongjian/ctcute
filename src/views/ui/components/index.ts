import Button from './Button.vue'
import TextButton from './TextButton.vue'
import IconButton from './IconButton.vue'
import Link from './Link.vue'
import Breadcrumb from './Breadcrumb.vue'
import Pagination from './Pagination.vue'
import Steps from './Steps.vue'
import Input from './Input.vue'
import CodeBox from './CodeBox.vue'
import RichText from './RichText.vue'
import Select from './Select.vue'
import CascadeSelect from './CascadeSelect.vue'
import Radio from './Radio.vue'
import Checkbox from './Checkbox.vue'
import Rate from './Rate.vue'
import Slider from './Slider.vue'
import Upload from './Upload.vue'
import Appendix from './Appendix.vue'
import Switch from './Switch.vue'
import Popover from './Popover.vue'
import Tooltip from './Tooltip.vue'
import Tabs from './Tabs.vue'
import SelectedButton from './SelectedButton.vue'
import Table from './Table.vue'
import Alert from './Alert.vue'
import ContentAreaTips from './ContentAreaTips.vue'
import Tag from './Tag.vue'
import Tree from './Tree.vue'
import State from './State.vue'
import Notification from './Notification.vue'
import Progress from './Progress.vue'
import Toast from './Toast.vue'
import Drawer from './Drawer.vue'
import Transfer from './Transfer.vue'
import Collapse from './Collapse.vue'
import TimeLine from './TimeLine.vue'
import DistributionBar from './DistributionBar.vue'
/**
 * 在此数组中添加新增的组件
 */
const componentsList = [
  Button,
  TextButton,
  IconButton,
  Link,
  Breadcrumb,
  Pagination,
  Steps,
  Input,
  CodeBox,
  RichText,
  Select,
  CascadeSelect,
  Radio,
  Checkbox,
  Rate,
  Slider,
  Upload,
  Appendix,
  Switch,
  Popover,
  Tooltip,
  Tabs,
  SelectedButton,
  Table,
  Alert,
  ContentAreaTips,
  Tag,
  Tree,
  State,
  Notification,
  Progress,
  Toast,
  Drawer,
  Transfer,
  Collapse,
  TimeLine,
  DistributionBar,
]

const _components = {}

export const list = componentsList.map((component: any) => {
  return {
    name: component.options.name,
    title: component.title,
    description: component.description,
    component: component,
  }
})

list.forEach((component: any) => {
  _components[component.name] = component.component
})

export const components = _components
