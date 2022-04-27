/**
 * 在此数组中添加新增的组件
 */
const componentsList = [
  require('./Button.vue'),
  require('./Breadcrumb.vue'),
  require('./Pagination.vue'),
  require('./Steps.vue'),
  require('./Input.vue'),
  require('./Dropdown.vue')
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
