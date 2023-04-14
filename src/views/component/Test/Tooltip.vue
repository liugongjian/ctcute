<!--
 * @Author: 李志伟
 * @Date: 2023-03-27 16:34:29
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-04-12 14:26:49
 * @Description: Toast 轻提示
-->
<template>
  <div>
    <h1>Tooltip 轻提示</h1>
    <h3>组件位置</h3>
    <div class="sub-tooltip">
      <el-row type="flex" align="middle" justify="center">
        <el-col :span="2">
          <el-tooltip effect="dark" content="提示描述性文案" placement="left">
            <el-button>左边</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="5">
          <el-row>
            <el-tooltip effect="dark" content="提示描述性文案" placement="top-start">
              <el-button>上左</el-button>
            </el-tooltip>
          </el-row>
          <el-row class="tooltip-interval">
            <el-tooltip effect="dark" content="提示描述性文案" placement="bottom-start">
              <el-button>下左</el-button>
            </el-tooltip>
          </el-row>
        </el-col>
        <el-col :span="5">
          <el-row>
            <el-tooltip effect="dark" content="提示描述性文案" placement="top">
              <el-button>上边</el-button>
            </el-tooltip>
          </el-row>
          <el-row class="tooltip-interval">
            <el-tooltip effect="dark" content="提示描述性文案" placement="bottom">
              <el-button>下边</el-button>
            </el-tooltip>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-row>
            <el-tooltip effect="dark" content="提示描述性文案" placement="top-end">
              <el-button>右上</el-button>
            </el-tooltip>
          </el-row>
          <el-row class="tooltip-interval">
            <el-tooltip effect="dark" content="提示描述性文案" placement="bottom-end">
              <el-button>右边</el-button>
            </el-tooltip>
          </el-row>
        </el-col>
        <el-col :span="1">
          <el-tooltip effect="dark" content="提示描述性文案" placement="right">
            <el-button>右下</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
    <h3>有link</h3>
    <div class="sub-tooltip">
      <el-row type="flex" align="middle" justify="center">
        <el-col :span="6">
          <el-tooltip placement="top" effect="dark">
            <div slot="content" class="link-content">
              <el-link type="primary">更多</el-link> 关于什么的类型
            </div>
            <el-button>Dark</el-button>
          </el-tooltip>
          <el-tooltip placement="top" trigger="click" effect="light">
            <div slot="content" class="link-content">
              <el-link type="primary">更多</el-link> 关于什么的类型
            </div>
            <el-button>Light</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Tooltip',
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.sub-tooltip {
  margin: 24px 0;
  padding-bottom: 24px;
  border-bottom: 1px solid $border-color-light-1;
}

.tooltip-interval {
  margin-top: 52px;
}

.link-content {
  display: flex;
  align-items: center;
}
</style>
