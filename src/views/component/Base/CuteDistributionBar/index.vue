<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:18
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-25 09:14:29
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteDistributionBar / 分配条</h1>
      <component-demo path="@/views/component/Base/CuteTitledBlock/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteDistributionBar Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteDistributionBar Slot</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteDistributionBarDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'title',
      desc: '标题',
      type: 'String',
      options: null,
      default: null,
    },
  ]
  private slot = [
    {
      name: 'content',
      desc: '块的内容',
    },
    {
      name: 'extra',
      desc: '【可选】标题右侧额外的内容，一般是操作',
    },
  ]
}
</script>
