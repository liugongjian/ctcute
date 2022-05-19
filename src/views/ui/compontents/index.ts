/**
 * 在此数组中添加新增的组件
 */
const componentsList = [
  require('./Button.vue'),
  require('./Breadcrumb.vue'),
  require('./Pagination.vue'),
  require('./Steps.vue'),
  require('./Input.vue'),
  require('./Select.vue'),
  require('./Radio.vue'),
  require('./Checkbox.vue'),
  require('./Rate.vue'),
  require('./Slider.vue'),
  require('./Upload.vue'),
  require('./Switch.vue'),
  require('./Popover.vue'),
  require('./Tooltip.vue'),
  require('./Tabs.vue'),
  require('./Table.vue'),
  require('./Alert.vue'),
  require('./Tag.vue'),
  require('./Tree.vue'),
  // require('./State.vue'),
  require('./Notification.vue'),
  require('./Progress.vue'),
  require('./Toast.vue'),
  require('./Drawer.vue')
]

const _components = {}

export const list = componentsList.map((component: any) => {
  const _component = component.default
  return {
    name: _component.options.name,
    title: _component.title,
    component: _component
  }
})

list.forEach((component: any) => {
  _components[component.name] = component.component
})

export const components = _components
