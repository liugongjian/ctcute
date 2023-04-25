<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-09 08:30:39
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-10 07:10:06
 * @Description: 有标题的卡片，通常用于图表类的盒子
-->

<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteCardBox / 带标题的卡片盒子</h1>
      <component-demo path="@/views/component/Base/CuteCardBox/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>标题右侧有时间选择</h1>
      <component-demo path="@/views/component/Base/CuteCardBox/Demo2.vue">
        <demo2 />
      </component-demo>
      <h1>标题右侧有tabs切换</h1>
      <component-demo path="@/views/component/Base/CuteCardBox/Demo3.vue">
        <demo3 />
      </component-demo>
      <h1>指定内容区高度</h1>
      <component-demo path="@/views/component/Base/CuteCardBox/Demo4.vue">
        <demo4 />
      </component-demo>
      <h2>CuteCardBox Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteCardBox Slot</h2>
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
import Demo2 from './Demo2.vue'
import Demo3 from './Demo3.vue'
import Demo4 from './Demo4.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteTitledBlockDemo',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'title',
      desc: '标题',
      type: 'String',
      options: null,
      default: '',
    },
    {
      name: 'contentHeight',
      desc: '内容区高度',
      type: 'String',
      options: null,
      default: '100%',
    },
  ]
  private slot = [
    {
      name: 'content',
      desc: '卡片的内容',
    },
    {
      name: 'extra',
      desc: '【可选】标题右侧额外的内容，一般是筛选条件或tab切换',
    },
  ]
}
</script>
