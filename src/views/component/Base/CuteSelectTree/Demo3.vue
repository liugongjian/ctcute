<!--
 * @Author: 黄靖
 * @Date: 2023-03-16 19:03:32
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-16 19:03:32
 * @Description: 
-->
<template>
  <div>
    <cute-select-tree v-model="treeData" :value="treeDataValue" :options="treeOptions">
      <template slot="node" slot-scope="{ node, data }">
        <div class="custom-node">
          {{ node.label }}{{ data.children ? `(总计:${data.children.length})` : '' }}
          <span class="custom-info">{{ data.desc }}</span>
        </div>
      </template>
    </cute-select-tree>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo2',
})
export default class extends Vue {
  private treeData = ''
  private treeDataValue = ''

  treeOptions = [
    {
      id: 1,
      label: '一级 1',
      desc: '一级 1相关信息',
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
      desc: '一级 2相关信息',
      children: [
        {
          id: 5,
          label: '二级 2-1',
          desc: '二级 2-1相关信息',
        },
        {
          id: 6,
          label: '二级 2-2',
          desc: '二级 2-2相关信息',
          children: [
            {
              id: 9,
              label: '三级 2-2-1',
              desc: '三级 2-2-1相关信息',
            },
            {
              id: 10,
              label: '三级 2-2-2',
              desc: '三级 2-2-2相关信息',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: '一级 3',
      desc: '一级 3相关信息',
      children: [
        { id: 7, label: '二级 3-1', desc: '二级 3-1相关信息' },
        { id: 8, label: '二级 3-2', desc: '二级 3-2相关信息' },
      ],
    },
  ]
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }
}
.custom-node {
  width: 100%;
  margin-right: 20px;
}
.custom-info {
  float: right;
  color: #999;
}
</style>
