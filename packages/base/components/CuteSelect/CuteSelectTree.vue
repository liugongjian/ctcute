<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-28 13:40:22
 * @Description: 带提示的选择器
-->
<template>
  <el-select
    :value="treeData"
    placeholder="请选择"
    :multiple="multiple ? true : false"
    @remove-tag="handelRemove"
  >
    <el-option :value="value" style="height: auto">
      <el-tree
        ref="tree"
        :data="options"
        :props="defaultProps"
        node-key="id"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'
import { Tree } from 'element-ui'
@Component({
  name: 'CuteSelectTree',
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) multiple?: false // 是否多选
  @Prop({ default: '' }) value?: any | string //option 值
  @Prop({ type: Array, default: '' }) options?: [] //option 值
  @Model('updateParent', { default: '' }) treeData: any | string //select 值
  private checkedTreeData = null //选中tree

  private defaultProps = {
    children: 'children',
    label: 'label',
  }
  private handleNodeClick(data, node, nodeData) {
    if (this.multiple) {
      //多选
      let ref = <Tree>this.$refs.tree
      this.checkedTreeData = ref.getCurrentNode()
      let treeData1 = Array.from(this.treeData)
      let value1 = Array.from(this.value)
      treeData1.push(this.checkedTreeData['label'])

      value1.push({
        id: this.checkedTreeData['id'],
        label: this.checkedTreeData['label'],
      })
      this.$emit('updateParent', treeData1)
      this.$emit('change', { id: this.checkedTreeData['id'], label: this.checkedTreeData['label'] })
    } else {
      //单选
      this.$emit('updateParent', data.label)
    }
  }
  private handelRemove(e) {
    this.$emit('remove-tag', e, this.treeData)
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
  background: #fff;
  padding: 0;

  ::v-deep.el-tree-node__content:not(.el-tree-node:focus > .el-tree-node__content):hover {
    color: $color-master-1 !important;
  }
}
</style>
