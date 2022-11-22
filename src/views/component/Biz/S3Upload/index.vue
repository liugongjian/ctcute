<!--
 * @Author: 庄晓欣
 * @Date: 2022-11-07 14:28:24
 * @LastEditors: 庄晓欣
 * @LastEditTime: 2022-11-22 15:35:00
 * @Description: 
-->
<template>
  <div>
    <div class="component__container">
      <h1>S3Upload / 对接 S3 的文件上传组件</h1>
      <component-demo path="@/views/component/Biz/S3Upload/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>S3Upload Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值">
          <template scope="{ row }">
            <div v-html="row.options"></div>
          </template>
        </el-table-column>
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>S3Upload Methods</h2>
      <el-table :data="method" fit border>
        <el-table-column prop="name" label="方法名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="参数" />
      </el-table>
      <h2>S3Upload Slots</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'
import Demo1 from './Demo1.vue'

@Component({
  name: 'S3UploadDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 's3-client-config',
      desc: '必传参数。S3配置项，用于设置endpoint、region、凭据和其他选项',
      type: 'object',
      options:
        '<a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html">详见此处</a> <br/> (为安全起见，配置中的 AK, SK 不建议直接使用原始AK, SK，建议使用 STS 临时凭证)',
      default: '-',
    },
    {
      name: 's3-upload-config',
      desc: '必传参数，S3上传配置项，用于设置上传的bucket、key等',
      type: 'object',
      options:
        '<a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/uploadpartrequest.html">详见此处</a> <br/>(除S3原有选项外，可用 parallelChunkCount 指定切片并发上传的个数)',
      default: '-',
    },
    {
      name: 'multiple',
      desc: '是否支持多选文件	',
      type: 'boolean',
      options: '-',
      default: '-',
    },
    {
      name: 'show-file-list',
      desc: '是否显示已上传文件列表',
      type: 'boolean',
      options: '-',
      default: 'true',
    },
    {
      name: 'drag',
      desc: '是否启用拖拽上传',
      type: 'boolean',
      options: '-',
      default: 'false',
    },
    {
      name: 'accept',
      desc: '接受上传的文件类型',
      type: 'string',
      options:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">文件类型详见此处</a>',
      default: '-',
    },
    {
      name: 'on-remove',
      desc: '文件列表移除文件时的钩子',
      type: 'function(file, fileList)',
      options: '-',
      default: '-',
    },
    {
      name: 'on-success',
      desc: '文件上传成功时的钩子',
      type: 'function(file, fileList)',
      options: '-',
      default: '-',
    },
    {
      name: 'on-error',
      desc: '文件上传失败时的钩子',
      type: 'function(file, fileList)',
      options: '-',
      default: '-',
    },
    {
      name: 'on-change',
      desc: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
      type: 'function(file, fileList)',
      options: '-',
      default: '-',
    },
    {
      name: 'before-upload',
      desc: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传',
      type: 'function(file)',
      options: '-',
      default: '-',
    },
    {
      name: 'before-remove',
      desc: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',
      type: 'function(file, fileList)',
      options: '-',
      default: '-',
    },
    {
      name: 'auto-upload',
      desc: '是否在选取文件后立即进行上传',
      type: 'boolean',
      options: '-',
      default: 'true',
    },
    {
      name: 'file-list',
      desc: '上传的文件列表',
      type: 'array',
      options: '-',
      default: '[]',
    },
    {
      name: 'disabled',
      desc: '是否禁用',
      type: 'boolean',
      options: '-',
      default: 'false',
    },
    {
      name: 'limit',
      desc: '最大允许上传个数',
      type: 'number',
      options: '-',
      default: '-',
    },
    {
      name: 'on-exceed',
      desc: '文件超出个数限制时的钩子',
      type: 'function(file, fileList)',
      options: '-',
      default: '-',
    },
  ]

  private method = [
    {
      name: 'clearFiles',
      desc: '清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
      params: '-',
    },
    {
      name: 'abort',
      desc: '取消上传请求',
      params: '可选（ file: fileList 中的 file 对象 ）',
    },
    {
      name: 'submit',
      desc: '手动上传文件列表	',
      params: '-',
    },
  ]

  private slot = [
    {
      name: 'trigger',
      desc: '触发文件选择框的内容',
    },
    {
      name: 'tip',
      desc: '提示说明文字',
    },
  ]
}
</script>
