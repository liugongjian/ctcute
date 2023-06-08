<!--
 * @Author: 朱凌浩
 * @Date: 2023-06-05 17:53:38
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-06-05 15:34:38
 * @Description: Settings
-->

<template>
  <div>
    <div class="doc-settings-wrapper">
      <h1>配置属性</h1>
      <el-divider></el-divider>
      <el-table :data="settings" fit border>
        <el-table-column prop="name" label="名称">
          <template slot-scope="{ row }">
            <span class="variables-name" @click="copyCode(row.name)">{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="value" label="默认值">
          <template slot-scope="{ row }">
            <span class="variables-value">{{ row.value }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="comment" label="使用说明"></el-table-column>
      </el-table>
      <el-divider></el-divider>
    </div>
    <cute-md-preview :content="content" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import json from '@/settings/doc'
import copy from 'copy-to-clipboard'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'Settings',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private settings = json

  private content = `
## 设置全局配置
配置文件根据.env.[mode]中设置的NODE_ENV的值匹配对应的配置文件settings.[environment].js，[mode]则是根据vue-cli-service serve命令--mode参数所指定。
默认情况下，mode有三种模式development、test、production，关于Vue CLI 模式与环境变量说明详见：https://cli.vuejs.org/zh/guide/mode-and-env.html

如果您不想通过环境来区分配置文件，比如在某些场景下想根据不同的业务类型来区分配置文件，那么需要对当前/settings/index.js进行一些改造：
1. 首先在环境变量中新增一个变量，建议以VUE_APP_开头，变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中，例如在.env.ctyun下设置VUE_APP_TYPE='ctyun'，在.env.iam下设置VUE_APP_TYPE='iam'
2. 将const env = process.env.NODE_ENV改为const env = process.env.VUE_APP_TYPE
3. 对应的创建settings.ctyun.js和settings.iam.js
`

  /**
   * 复制变量名
   */
  private copyCode(content: string) {
    copy(content)
    this.$message.success(`已复制变量名${content}`)
  }
}
</script>
<style lang="scss" scoped>
.doc-settings-wrapper {
  width: 100%;
  height: 100%;
  padding: $padding-2x $padding-6x $padding-4x $padding-6x;
  background-color: $color-bg-2;
  border: 1px solid $border-color;
  margin-bottom: $margin-4x;
}

.variables-name {
  cursor: pointer;

  &:hover {
    color: $color-master;
  }
}

.variables-value {
  vertical-align: middle;
}
</style>
