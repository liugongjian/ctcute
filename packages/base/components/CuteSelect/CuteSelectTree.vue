<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-17 16:59:10
 * @Description: 树选择器
-->
<template>
  <el-select ref="selector" :value="treeData" placeholder="请选择" :multiple="multiple ? true : false">
    <el-option :value="value" :label="label" style="height: auto">
      <el-tree
        v-if="$scopedSlots.node"
        ref="tree"
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
        :show-checkbox="showCheckbox"
        :data="options"
        :node-key="treeNodeProps.value"
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
import { Tree } from 'element-ui'
import SelectedTags from './selectedTags.vue'

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
export default class extends Vue {
  @Ref('tree') refTree!: Tree
  @Ref('selector') refSelector!: any
  @Prop({ type: Boolean, default: false }) multiple?: boolean // 是否多选
  @Prop({ type: Array, default: '' }) options?: [] //option 值
  @Prop({ type: Object, default: () => ({}) }) nodeProps!: NODE_PROPS //el-tree的props属性
  @Prop({ type: Boolean, default: false }) showCheckbox!: boolean //el-tree的show-checkbox属性
  @Prop({ type: Boolean, default: false }) lazy!: boolean //el-tree的lazy属性
  @Prop({ type: Boolean, default: false }) collapseTags!: boolean //el-tree的collapse-tags属性
  @Prop({ type: String, default: 'medium' }) size!: string //el-tree的collapse-tags属性
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

  get treeValueLabelMap() {
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

  @Watch('selectedTags')
  onTagsChange() {
    this.$nextTick(() => {
      this.refSelector.resetInputHeight()
    })
  }

  // 取代el-select原本的tags，自己控制label和value取值
  mountMyTags() {
    const node = this.refSelector
    const tagWrapper = node.$el.querySelector('.el-select__tags > span')
    const { selectedTags } = this
    const tagSize = ['small', 'mini'].indexOf(this.size) > -1 ? 'mini' : 'small'

    const TagsCotent = Vue.extend(SelectedTags)
    // const TagsCotent = Vue.extend({
    //   props: { size: { type: String, default: 'small' }, value: { type: Array, default: () => [] } },
    //   methods: {
    //     handleClose(tag) {
    //       this.$emit('close', tag)
    //     },
    //   },
    //   template:
    //     '<span><el-tag v-for="tag in value" :key="tag.value" type="info" :size="size" closable :disable-transitions="false" @close="handleClose(tag)">{{ tag.label }}</el-tag></span>',
    // })
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
