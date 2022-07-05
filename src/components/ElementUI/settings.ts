import ElementUI from 'element-ui'
const Pagination = ElementUI.Pagination as any
Pagination.props.layout = {
  default: 'sizes,total, prev, pager, next'
}
Pagination.props.pageSize = {
  default: 20
}
Pagination.props.pageSizes = {
  default: () => [10, 20, 30, 40]
}
Pagination.props.popperClass = {
  default: 'pagination__dropdown'
}
