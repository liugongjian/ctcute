<!--
 * @Author: 黄靖
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-08 20:12:45
 * @Description: 
-->
<template>
  <div>
    <cute-select-tree
      v-model="treeData"
      :options="treeOptions"
      filterable
      :filter-node-method="filterNode"
      default-expand-all
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private multiTreeData = []
  private treeData = ''

  treeOptions = [
    {
      id: 1,
      label: '一级 1',
      children: [
        {
          id: 4,
          label: '二级 1-1',
        },
      ],
    },
    {
      id: 2,
      label: '一级 2',
      children: [
        {
          id: 5,
          label: '二级 2-1',
        },
        {
          id: 6,
          label: '二级 2-2',
          children: [
            {
              id: 9,
              label: '三级 2-2-1',
            },
            {
              id: 10,
              label: '三级 2-2-2',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: '一级 3',
      children: [
        { id: 7, label: '二级 3-1' },
        { id: 8, label: '二级 3-2' },
      ],
    },
  ]

  private filterNode(value, data) {
    if (!value) return true
    return data.label.indexOf(value) !== -1
  }
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }
}
</style>
