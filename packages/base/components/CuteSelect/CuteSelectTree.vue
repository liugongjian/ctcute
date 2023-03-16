<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-15 16:59:10
 * @Description: 树选择器
-->
<template>
  <el-select
    ref="selector"
    :value="multiple ? multiLabels : treeData"
    placeholder="请选择"
    :multiple="multiple ? true : false"
    @remove-tag="handelRemove"
  >
    <el-option :value="value" :label="label" style="height: auto">
      <el-tree
        v-if="$scopedSlots.node"
        ref="tree"
        :data="options"
        :node-key="treeNodeProps.key"
        :props="treeNodeProps"
        :lazy="lazy"
        :load="load"
        @node-click="handleNodeClick"
      >
        <template slot-scope="{ node, data }">
          <slot name="node" :node="node" :data="data" />
        </template>
      </el-tree>
      <el-tree
        v-else
        ref="tree"
        :show-checkbox="showCheckbox"
        :data="options"
        :node-key="treeNodeProps.key"
        :props="treeNodeProps"
        :lazy="lazy"
        :load="load"
        @node-click="handleNodeClick"
      >
      </el-tree>
    </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Ref, Prop, Model, Emit, Watch } from 'vue-property-decorator'
import { Tree, Select } from 'element-ui'

const defaultNodeProps = { children: 'children', label: 'label', key: 'id', disabled: 'disabled' }

interface NODE_PROPS {
  children?: string
  label?: string | ((data: any, node: any) => string)
  key?: string
  disabled?: string | ((data: any, node: any) => boolean)
  isLeaf?: string | ((data: any, node: any) => boolean)
}

@Component({
  name: 'CuteSelectTree',
})
export default class extends Vue {
  @Ref('tree') refTree!: Tree
  @Ref('selector') refSelector!: Select
  @Prop({ type: Boolean, default: false }) multiple?: boolean // 是否多选
  @Prop({ type: Array, default: '' }) options?: [] //option 值
  @Prop({ type: Object, default: () => ({}) }) nodeProps!: NODE_PROPS //el-tree的props属性
  @Prop({ type: Boolean, default: false }) showCheckbox!: boolean //el-tree的show-checkbox属性
  @Prop({ type: Boolean, default: false }) lazy!: boolean //el-tree的lazy属性
  @Prop({ type: Function }) load?: any //el-tree的load属性
  @Model('change', { default: '' }) treeData: Array<any> | string //select 值

  private value = ''
  private label = ''
  // el-select中多选tags无法同时记录id和label，根据选择顺序记录labels；
  private multiLabels: string[] = []

  get treeNodeProps(): NODE_PROPS {
    return {
      ...defaultNodeProps,
      ...this.nodeProps,
    }
  }

  @Emit('change')
  private handleNodeClick(checkedTreeData) {
    if (this.getDisabled(checkedTreeData, checkedTreeData)) {
      return this.treeData
    }
    if (this.multiple) {
      //多选
      const arrayTreeData = Array.from(this.treeData)

      if (arrayTreeData.indexOf(checkedTreeData[this.treeNodeProps.key]) === -1) {
        arrayTreeData.push(checkedTreeData[this.treeNodeProps.key])
        this.multiLabels.push(this.getLabel(checkedTreeData, checkedTreeData))
      }
      return arrayTreeData
    } else {
      //单选
      return checkedTreeData[this.treeNodeProps.key]
    }
  }

  getDisabled(data: any, node?: any) {
    const disabledKey = this.treeNodeProps.disabled
    if (typeof disabledKey === 'string') {
      return data[disabledKey]
    } else if (typeof disabledKey === 'function') {
      return disabledKey(data, node)
    }
    return false
  }

  getLabel(data: any, node?: any) {
    const labelKey = this.treeNodeProps.label
    if (typeof labelKey === 'string') {
      return data[labelKey]
    } else if (typeof labelKey === 'function') {
      return labelKey(data, node)
    }
    return ''
  }

  queryTree(tree, value) {
    let stark = []
    stark = stark.concat(tree)
    while (stark.length) {
      const temp = stark.shift()
      if (temp[this.treeNodeProps.children]) {
        stark = stark.concat(temp[this.treeNodeProps.children])
      }
      if (temp[this.treeNodeProps.key] === value) {
        return this.getLabel(temp, temp)
      }
    }
    return ''
  }

  @Watch('treeData', { deep: true })
  private fun(value) {
    console.log('value', value)
    this.value = value
    this.label = this.queryTree(this.options, value)
  }

  created() {
    this.fun(this.treeData)
  }

  private handelRemove(value) {
    try {
      const removeIdx = this.multiLabels.findIndex((i: string) => i === value)
      const updateTree = this.treeData.slice() as any[]
      const removed = updateTree.splice(removeIdx, 1)
      this.$emit('remove-tag', removed[this.treeNodeProps.key], this.treeData.slice())
      this.multiLabels.splice(removeIdx, 1)
      this.$emit('change', updateTree)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tree {
  color: $color-grey-1;
  font-weight: 400;
}

.el-select-dropdown__item,
.el-select-dropdown__item.hover {
  background: $color-bg-1 !important;
  padding: 0;
}

.el-select-dropdown.el-popper.is-multiple {
  .el-select-dropdown__item.hover {
    background: $color-bg-1 !important;
    padding: 0;
  }
}
</style>
