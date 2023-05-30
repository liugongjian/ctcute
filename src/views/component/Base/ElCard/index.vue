<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-31 15:30:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-31 07:33:40
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElCard / 默认总是显示无边框浅色阴影</h1>
      <p>通常作为页面容器使用</p>
      <component-demo path="@/views/component/Base/ElTabs/Demo5.vue">
        <demo5 />
      </component-demo>
      <h1>悬浮后显示阴影(shadow="hover")</h1>
      <component-demo path="@/views/component/Base/ElCard/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>总是显示阴影(shadow="always")</h1>
      <component-demo path="@/views/component/Base/ElTabs/Demo2.vue">
        <demo2 />
      </component-demo>
      <h1>不显示阴影(shadow="never")</h1>
      <component-demo path="@/views/component/Base/ElTabs/Demo3.vue">
        <demo3 />
      </component-demo>
      <h1>无边框且有浅色阴影，悬浮后显示深色阴影(shadow="hover-light")</h1>
      <component-demo path="@/views/component/Base/ElTabs/Demo4.vue">
        <demo4 />
      </component-demo>
      <h2>ElCard 说明</h2>
      <p>此为直接覆写element-ui的组件，el-card原有的属性和事件未变，下面只列出新增/有改动的部分</p>
      <h2>ElCard Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="required" label="必/选填" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
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
import Demo5 from './Demo5.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'ElTabs',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
  },
})
export default class extends Vue {
  get prop() {
    return [
      {
        name: 'shadow',
        desc: '设置阴影显示时机	',
        type: 'string',
        required: '选填',
        options: 'always/always-light/hover/hover-light/never',
        default: 'always-light',
      },
    ]
  }
}
</script>
