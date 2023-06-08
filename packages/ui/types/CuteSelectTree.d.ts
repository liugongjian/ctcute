/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 20:36:47
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-08 16:35:58
 * @Description:
 */
import { CuteComponent } from './component'

import { TreeData } from 'element-ui/types/tree'

export interface CuteSelectTreeProps {
  // 指定树节点选择后的取值value为节点对象的某个属性值，也作为每个树节点的key，整棵树应该是唯一的, 默认为id
  value?: string
  children?: string
  label?: string | ((data: any, node: any) => string)
  disabled?: string | ((data: any, node: any) => boolean)
  isLeaf?: string | ((data: any, node: any) => boolean)
}

export interface CuteSelectTreeSlots {
  // 自定义树节点的内容，参数为 { node, data }
  node: VNode[]
}
export declare class CuteSelectTree extends CuteComponent {
  //select绑定值
  value: Array<string> | string

  //是否多选
  multiple: boolean

  //选项列表
  options: Array<TreeData>

  //是否默认展开所有节点
  defaultExpandAll: boolean

  //是否懒加载子节点，需与 load 方法结合使用
  lazy: boolean

  //是否可搜索
  filterable: boolean

  //搜索方法
  filterNodeMethod: (value: string, data: any, node: any) => boolean

  //加载子树数据的方法，仅当 lazy 属性为true 时生效
  load: (data: any, resolve: (any) => void) => void

  //树节点配置选项
  nodeProps: CuteSelectTreeProps

  $slots: CuteSelectTreeSlots
}
