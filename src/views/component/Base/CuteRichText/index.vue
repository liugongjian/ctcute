<template>
  <div>
    <div class="component__container">
      <h1>CuteRichText / 富文本</h1>
      <component-demo path="@/views/component/Base/CuteRichText/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteRichText Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="required" label="必/选填" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteRichText',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'imgUrl',
      desc: '上传图片接口地址',
      type: 'string',
      required: '必填',
    },
    {
      name: 'videoUrl',
      desc: '上传视频接口地址',
      type: 'string',
      required: '必填',
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
</style>
