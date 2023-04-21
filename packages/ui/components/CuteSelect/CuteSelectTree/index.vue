<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-21 10:35:45
 * @Description: 树选择器
-->
<template>
  <el-select
    ref="selector"
    :value="treeData"
    :placeholder="t('cute.select.placeholder')"
    :size="size"
    :disabled="disabled"
    :multiple="multiple ? true : false"
    popper-class="cute-select-tree"
  >
    <el-option :value="value" :label="label" style="height: auto">
      <el-tree
        v-if="$scopedSlots.node"
        ref="tree"
        :default-expand-all="defaultExpandAll"
        :data="options"
        :node-key="treeNodeProps.value"
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
        :default-expand-all="defaultExpandAll"
        :data="options"
        :node-key="treeNodeProps.value"
        :props="treeNodeProps"
        :lazy="lazy"
        :load="load"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Ref, Prop, Model, Emit, Watch, Mixins } from 'vue-property-decorator'
import { Tree } from 'element-ui'
import SelectedTags from './TreeSelectedTags.vue'
import Locale from '@cutedesign/ui/mixins/locale'

const defaultNodeProps = { children: 'children', label: 'label', value: 'id', disabled: 'disabled' }

interface NODE_PROPS {
  children?: string
  label?: string | ((data: any, node: any) => string)
  value?: string
  disabled?: string | ((data: any, node: any) => boolean)
  isLeaf?: string | ((data: any, node: any) => boolean)
}

@Component({
  name: 'CuteSelectTree',
})
export default class extends Mixins(Locale) {
  @Ref('tree') refTree!: Tree
  @Ref('selector') refSelector!: any
  @Prop({ type: Boolean, default: false }) multiple?: boolean // 是否多选
  @Prop({ type: Array, default: '' }) options?: [] //option 值
  @Prop({ type: String, default: 'medium' }) size?: 'medium' //option 值

  @Prop({ type: Object, default: () => ({}) }) nodeProps!: NODE_PROPS //el-tree的props属性
  @Prop({ type: Boolean, default: false }) defaultExpandAll!: boolean //el-tree的default-expand-all属性
  @Prop({ type: Boolean, default: false }) lazy!: boolean //el-tree的lazy属性
  @Prop({ type: Boolean, default: false }) disabled!: boolean //禁用状态

  @Prop({ type: Boolean, default: false }) collapseTags!: boolean //el-tree的collapse-tags属性
  @Prop({ type: Function }) load?: any //el-tree的load属性
  @Model('change', { default: '' }) treeData: Array<any> | string //select 值
  private value = ''
  private label = ''
  private initialInputHeight = 0
  // 多选时选中的tags数据，由于Vue.extend创建的构造函数New出的实例propsData不支持响应式，需要使用数组的push/splice方法才能响应式控制tags数据
  private selectedTags: any[] = []

  get treeNodeProps(): NODE_PROPS {
    return {
      ...defaultNodeProps,
      ...this.nodeProps,
    }
  }

  get treeValueLabelMap(): any {
    const res = {}
    const mapTree = tree => {
      for (const node of tree) {
        res[node[this.treeNodeProps.value]] = this.getLabel(node)
        const childrenNodes = node[this.treeNodeProps.children]
        if (childrenNodes && childrenNodes.length) {
          mapTree(childrenNodes)
        }
      }
    }
    mapTree.call(this, this.options)
    return res
  }

  // 取代el-select原本的tags，自己控制label和value取值
  mountMyTags() {
    const node = this.refSelector
    const tagWrapper = node.$el.querySelector('.el-select__tags > span')
    // 解决tags撑开的高度减少时无法及时resize的问题，需要ResizeObserver支持
    if (ResizeObserver) {
      const ob = new ResizeObserver(() => {
        this.refSelector.resetInputHeight()
      })
      ob.observe(node.$el.querySelector('.el-select__tags'))
    }
    const { selectedTags } = this
    const tagSize = ['small', 'mini'].indexOf(this.size) > -1 ? 'mini' : 'small'

    const TagsCotent = Vue.extend(SelectedTags)
    const tagContent = new TagsCotent({
      propsData: {
        value: selectedTags,
        size: tagSize,
      },
    }).$mount(tagWrapper)
    tagContent.$on('close', val => {
      const upadateTree = (this.treeData as Array<any>).slice()
      const delTreeIdx = upadateTree.findIndex(item => item === val.value)
      upadateTree.splice(delTreeIdx, 1)
      this.$emit('change', upadateTree)
    })
  }

  @Emit('change')
  private handleNodeClick(checkedTreeData) {
    if (this.getDisabled(checkedTreeData, checkedTreeData)) {
      return this.treeData
    }
    if (this.multiple) {
      //多选
      const arrayTreeData = Array.from(this.treeData)

      if (arrayTreeData.indexOf(checkedTreeData[this.treeNodeProps.value]) === -1) {
        arrayTreeData.push(checkedTreeData[this.treeNodeProps.value])
      }
      return arrayTreeData
    } else {
      //单选
      return checkedTreeData[this.treeNodeProps.value]
    }
  }

  // 获取disabled取值
  getDisabled(data: any, node?: any) {
    const disabledKey = this.treeNodeProps.disabled
    if (typeof disabledKey === 'string') {
      return data[disabledKey]
    } else if (typeof disabledKey === 'function') {
      return disabledKey(data, node)
    }
    return false
  }

  // 获取label取值
  getLabel(data: any, node?: any) {
    const labelKey = this.treeNodeProps.label
    if (typeof labelKey === 'string') {
      return data[labelKey]
    } else if (typeof labelKey === 'function') {
      return labelKey(data, node)
    }
    return ''
  }

  @Watch('treeData', { deep: true, immediate: true })
  private setValue(value) {
    if (!this.multiple) {
      this.value = value
      this.label = this.treeValueLabelMap[value] //this.queryTree(this.options, value)
    } else {
      this.diffMultiTagTree()
    }
  }

  diffMultiTagTree() {
    // 需要使用数组的push/splice方法才能响应式控制tags数据
    for (const selection of this.treeData) {
      if (this.selectedTags.findIndex(item => item.value === selection) < 0) {
        this.selectedTags.push({ value: selection, label: this.treeValueLabelMap[selection] })
      }
    }
    for (let i = 0; i < this.selectedTags.length; i++) {
      if ((this.treeData as Array<string>).findIndex(value => value === this.selectedTags[i].value) < 0) {
        this.selectedTags.splice(i, 1)
      }
    }
  }

  created() {
    this.setValue(this.treeData)
  }

  mounted() {
    if (this.refSelector && this.multiple) {
      this.mountMyTags()
    }
  }
}
</script>
