<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 马妍
 * @LastEditTime: 2022-11-21 16:59:10
 * @Description: 带提示的选择器
-->
<template>
  <el-select
    :value="treeData"
    placeholder="请选择"
    :multiple="multiple ? true : false"
    @remove-tag="handelRemove"
  >
    <el-option :value="value" :label="label" style="height: auto;">
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
import { Vue, Component, Prop, Model, Emit, Watch } from 'vue-property-decorator'
import { Tree } from 'element-ui'
@Component({
  name: 'CuteSelectTree',
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) multiple?: false // 是否多选
  @Prop({ type: Array, default: '' }) options?: [] //option 值
  @Model('updateParent', { default: '' }) treeData: Array<any> | string //select 值
  private defaultProps = {
    children: 'children',
    label: 'label',
  }
  private value = ''
  private label = ''
  @Emit('updateParent')
  private handleNodeClick() {
    const ref: Tree = this.$refs.tree as Tree
    const checkedTreeData = ref.getCurrentNode()
    if (this.multiple) {
      //多选
      const arrayTreeData = Array.from(this.treeData)

      if (arrayTreeData.indexOf(checkedTreeData['label']) === -1) {
        arrayTreeData.push(checkedTreeData['label'])
        this.$emit('change', checkedTreeData)
      }
      return arrayTreeData
    } else {
      //单选
      this.$emit('change', checkedTreeData)
      return checkedTreeData['id']
    }
  }

  queryTree(tree, value) {
    let stark = []
    stark = stark.concat(tree)
    while (stark.length) {
      const temp = stark.shift()
      if (temp.children) {
        stark = stark.concat(temp.children)
      }
      if (temp.id === value) {
        return temp.label
      }
    }
    return ''
  }

  @Watch('treeData', { deep: true })
  private fun(value) {
    this.value = value
    this.label = this.queryTree(this.options, value)
  }

  created() {
    this.fun(this.treeData)
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
