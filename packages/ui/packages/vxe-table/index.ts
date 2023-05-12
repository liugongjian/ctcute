import VXETable from 'vxe-table'
VXETable.setup({
  icon: {
    TABLE_RADIO_CHECKED: 'cute-icon-selected',
    TABLE_RADIO_UNCHECKED: 'cute-icon-not-selected',
    TABLE_EDIT: 'cute-icon-edit',
    TABLE_EXPAND_OPEN: 'cute-icon-caret-down',
    TABLE_EXPAND_CLOSE: 'cute-icon-caret-right',
  },
})

VXETable.setup({
  table: {
    rowConfig: {
      isHover: true,
    },
  },
})

export default {
  install(Vue) {
    Vue.use(VXETable)
  },
}
