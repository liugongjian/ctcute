<!--
 * @Author: 黄靖
 * @Date: 2023-03-16 19:03:32
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-16 19:03:32
 * @Description: 
-->
<template>
  <div>
    <cute-select-tree v-model="treeData" :options="treeOptions" :node-props="nodeProps" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo2',
})
export default class extends Vue {
  private treeData = 1

  private nodeProps = {
    label: 'name',
    value: 'ucode',
    disabled: data => data.group === 3,
    children: 'subItems',
  }

  treeOptions = [
    {
      ucode: 1,
      name: '一级 1',
      desc: '一级 1相关信息',
      group: 1,
      subItems: [
        {
          ucode: 4,
          name: '二级 1-1',
          group: 1,
        },
      ],
    },
    {
      ucode: 2,
      name: '一级 2',
      desc: '一级 2相关信息',
      group: 2,
      subItems: [
        {
          ucode: 5,
          name: '二级 2-1',
          desc: '二级 2-1相关信息',
          group: 2,
        },
        {
          ucode: 6,
          name: '二级 2-2',
          desc: '二级 2-2相关信息',
          group: 2,
          subItems: [
            {
              ucode: 9,
              name: '三级 2-2-1',
              desc: '三级 2-2-1相关信息',
              group: 2,
            },
            {
              ucode: 10,
              name: '三级 2-2-2',
              desc: '三级 2-2-2相关信息',
              group: 2,
            },
          ],
        },
      ],
    },
    {
      ucode: 3,
      name: '一级 3',
      desc: '一级 3相关信息',
      group: 3,
      subItems: [
        { ucode: 7, name: '二级 3-1', desc: '二级 3-1相关信息', group: 3 },
        { ucode: 8, name: '二级 3-2', desc: '二级 3-2相关信息', group: 3 },
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
