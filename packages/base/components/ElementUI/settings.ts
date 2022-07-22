import ElementUI from 'element-ui'
const Pagination = ElementUI.Pagination as any
const Table = ElementUI.Table as any
Pagination.props.layout = {
  default: 'sizes,total, prev, pager, next',
}
Pagination.props.pageSize = {
  default: 20,
}
Pagination.props.pageSizes = {
  default: () => [10, 20, 30, 40],
}
Pagination.props.popperClass = {
  default: 'pagination__dropdown',
}
Pagination.props.hideOnSinglePage = {
  default: true,
}

Table.props.emptyText = {
  default: '暂无数据',
}
