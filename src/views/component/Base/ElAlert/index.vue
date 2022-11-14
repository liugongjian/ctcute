<!--
 * @Author: 赵昕
 * @Date: 2022-09-01 10:01:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2022-10-31 10:17:55
 * @Description: 此为直接覆写element-ui的组件，el-alert原有的属性和事件未变，下面只列出新增/有改动的部分
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElAlert / 可配置自定义icon的警告条</h1>
      <component-demo path="@/views/component/Base/ElAlert/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>ElAlert / 可作为Content Area Tip的警告条</h1>
      <component-demo path="@/views/component/Base/ElAlert/Demo2.vue">
        <demo2 />
      </component-demo>
      <h2>ElAlert 说明</h2>
      <p>此为直接覆写element-ui的组件，el-alert原有的属性和事件未变，下面只列出新增/有改动的部分</p>
      <h2>ElAlert Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="required" label="必/选填" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>ElAlert Slot</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="des" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import Demo2 from './Demo2.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'ElAlert',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'contentAreaTip',
      desc: '是否显示成内容区域条样式',
      type: 'Boolean',
      required: '选填',
      options: 'true/false',
      default: 'false',
    },
    {
      name: 'closeBtnColor',
      desc: '关闭按钮的颜色',
      type: 'String',
      required: '选填',
      options: '',
      default: '',
    },
    {
      name: 'type',
      desc: '常用样式类型(weak为弱提示样式)',
      type: 'String',
      required: '选填',
      options: 'success/warning/info/error/weak',
      default: 'info',
    },
  ]
  private slot = [
    {
      name: 'icon-custom',
      des: '自定义的icon, 使用时需要同时设置showIcon属性为true',
    },
  ]
}
</script>
