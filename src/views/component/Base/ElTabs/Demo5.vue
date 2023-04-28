<template>
  <div>
    <h3>{{ $t('demo.tabs.demo5.title1') }}</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="bottom">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">{{
          item.content
        }}</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>{{ $t('demo.tabs.demo5.title2') }}</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="left">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">{{
          item.content
        }}</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>{{ $t('demo.tabs.demo5.title3') }}</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="right">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">{{
          item.content
        }}</el-tab-pane>
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
      title: this.$t('demo.tabs.common.option1'),
      name: '1',
      content: this.$t('demo.tabs.common.optionDefault'),
    },
    {
      title: this.$t('demo.tabs.common.option2'),
      name: '2',
      content: this.$t('demo.tabs.common.optionChoosed'),
    },
    {
      title: this.$t('demo.tabs.common.optionDisable'),
      name: '3',
      content: this.$t('demo.tabs.common.optionDisable'),
      disabled: true,
    },
  ]
}
</script>
