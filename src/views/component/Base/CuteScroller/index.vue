<!--
 * @Author: 严程向
 * @Date: 2022-07-22 21:14:49
 * @LastEditors: yanchengxiang 675036196@qq.com
 * @LastEditTime: 2023-04-06 14:25:01
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteScroller / 表格</h1>
      <component-demo path="@/views/component/Base/CuteScroller/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteScroller Attributes</h2>
      <el-table :data="attributesData" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteScroller Methods</h2>
      <el-table :data="methodsData" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteScroller',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private attributesData = [
    {
      name: 'v-model',
      desc: '绑定值',
      type: 'string',
      options: null,
      default: null,
    },
    {
      name: 'offset',
      desc: '偏移量',
      type: 'number',
      options: null,
      default: null,
    },
  ]

  private methodsData = [
    {
      name: 'reCalHeight',
      desc: '重新计算表格的高度。如当表格与分页器的距离比较大的时候，则可在表格渲染后调用一下。',
      type: 'function',
      options: null,
      default: null,
    },
  ]
}
</script>
<style lang="scss" scoped>
.component__container {
}
</style>
