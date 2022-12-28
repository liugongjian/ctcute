<!--
 * @Description:
 * @Author: 王月功
 * @Date: 2022-12-23 19:41:27
 * @LastEditTime: 2022-12-23 20:03:25
 * @LastEditors: 王月功
-->
<template>
  <div>
    <div class="component__container">
      <h1>MarkdownBook / gitbook 解决方案</h1>
      <component-demo path="@/views/component/Biz/MarkdownBook/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>MdBook Attributes</h2>
      <el-table :data="props" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>MdBook Events</h2>
      <el-table :data="events" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="回调参数" />
      </el-table>
      <h2>Others</h2>
      当默认表现不满足要求时，菜单和预览区可以拆分使用，详见 lib README.md 。
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'MarkdownBookDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private props = [
    {
      name: 'baseUrl',
      desc: 'book 所在目录的根路径',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'http',
      desc: 'axios 实例',
      type: 'Function(url, options) => Promise<any>',
      options: '',
      default: null,
    },
    {
      name: 'httpOptions',
      desc: '请求 options 参数，非 axios 实例时按需选用',
      type: 'Object',
      options: '',
      default: null,
    },
    {
      name: 'theme',
      desc: '主题',
      type: 'String',
      options: 'light, dark',
      default: 'light',
    },
    {
      name: 'height',
      desc: '容器高度',
      type: 'String',
      options: '',
      default: '600px',
    },
    {
      name: 'bookName',
      desc: '文档名，默认从 summary.md 中读取 h1',
      type: 'String',
      options: '',
      default: null,
    },
  ]

  private events = [
    {
      name: 'copy-code-success',
      desc: '预览区 code 点击复制成功',
      params: '复制的 code 文本',
    },
    {
      name: 'load-menu-fail',
      desc: '菜单加载失败',
      params: '报错信息',
    },
  ]

  private editorCommands = [
    {
      name: 'link',
      desc: '插入链接',
      params: '{ link, desc, download }',
    },
    {
      name: 'image',
      desc: '插入图片',
      params: '{ url, desc, width, height }',
    },
  ]
}
</script>
