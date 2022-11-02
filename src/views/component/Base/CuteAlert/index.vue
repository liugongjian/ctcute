<!--
 * @Author: 赵昕
 * @Date: 2022-09-01 10:01:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2022-10-28 15:49:01
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteAlert / 可配置自定义icon的警告条</h1>
      <component-demo path="@/views/component/Base/CuteAlert/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>CuteAlert / 可作为Content Area Tip的警告条</h1>
      <component-demo path="@/views/component/Base/CuteAlert/Demo2.vue">
        <demo2 />
      </component-demo>
      <h2>CuteAlert Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="required" label="必/选填" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteAlert Slot</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="des" label="说明" />
      </el-table>
      <h2>CuteAlert Events</h2>
      <el-table :data="events" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="des" label="说明" />
        <el-table-column prop="param" label="回调参数" />
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
  name: 'CuteAlert',
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
      name: 'showIcon',
      desc: '是否显示图标',
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
    {
      name: 'title',
      desc: '标题',
      type: 'String',
      required: '选填',
      options: '',
      default: '',
    },
    {
      name: 'closable',
      desc: '	是否可关闭',
      type: 'Boolean',
      required: '选填',
      options: 'true/false',
      default: 'true',
    },
    {
      name: 'close-text',
      desc: '	关闭按钮自定义文本',
      type: 'string',
      required: '选填',
      options: '',
      default: '',
    },
  ]
  private slot = [
    {
      name: 'icon-custom',
      des: '自定义的icon, 使用时需要同时设置showIcon属性为true',
    },
    {
      name: 'title',
      des: '标题的内容',
    },
  ]
  private events = [
    {
      name: 'close',
      des: '关闭alert时触发的事件',
      params: '',
    },
  ]
}
</script>
