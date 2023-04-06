<template>
  <div>
    <h3>选项卡位于下方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="bottom">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于左方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="left">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于右方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="right">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  public static title = {
    zh: '选项卡',
    en: 'Tabs',
  }
  private tabs = [
    {
      title: '选项一',
      name: '1',
      content: '默认项',
    },
    {
      title: '选项二',
      name: '2',
      content: '选中项',
    },
    {
      title: '不可用',
      name: '3',
      content: '不可用',
      disabled: true,
    },
  ]
}
</script>
