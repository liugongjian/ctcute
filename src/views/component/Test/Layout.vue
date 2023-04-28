<!--
 * @Author: XinZhao
 * @Date: 2023-04-19 9:59:34
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-28 15:04:29
 * @Description: Layout
-->
<template>
  <div class="layout-test">
    <h1>Layout</h1>
    <el-card>
      <h3>基础布局</h3>
      <el-form inline @submit.native.prevent>
        <el-form-item>
          <el-select v-model="layoutNumber" placeholder="请选择分栏效果">
            <el-option
              v-for="item in layoutModeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-row>
        <el-col v-for="index in 24 / layoutNumber" :key="index" :span="layoutNumber">
          <div v-if="index % 2 === 0" class="grid-content bg-purple text-pos">span: {{ layoutNumber }}</div>
          <div v-else class="grid-content bg-purple-light text-pos">span: {{ layoutNumber }}</div>
        </el-col>
      </el-row>
    </el-card>

    <el-card>
      <h3>分栏间隔</h3>
      <el-form inline @submit.native.prevent>
        <el-form-item label="间隔">
          <el-input-number v-model="gutterNumber" controls-position="right" :min="0"></el-input-number>
        </el-form-item>
      </el-form>
      <el-row :gutter="gutterNumber">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </el-card>

    <el-card>
      <h3>分栏偏移</h3>
      <el-row>
        <el-form inline @submit.native.prevent>
          <el-form-item label="偏移栏数">
            <el-input-number v-model="offsetNumber" controls-position="right" :min="0"></el-input-number>
          </el-form-item>
          <el-form-item label="span属性">
            <el-input-number v-model="spanNumber" controls-position="right" :min="0"></el-input-number>
          </el-form-item>
        </el-form>
        <el-col :span="spanNumber" :offset="offsetNumber">
          <div class="grid-content bg-purple text-pos">span: {{ spanNumber }} offset: {{ offsetNumber }}</div>
        </el-col>
      </el-row>
    </el-card>

    <el-card>
      <h3>对齐方式</h3>
      <el-form inline @submit.native.prevent>
        <el-form-item label="对齐方式">
          <el-select v-model="justifyMode" placeholder="请选择对齐方式">
            <el-option v-for="type in justifyModeList" :key="type" :label="type" :value="type"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-row type="flex" :justify="justifyMode">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Layout',
})
export default class extends Vue {
  private layoutModeList = [
    {
      label: 'span: 24',
      value: 24,
    },
    {
      label: 'span: 12',
      value: 12,
    },
    {
      label: 'span: 8',
      value: 8,
    },
    {
      label: 'span: 6',
      value: 6,
    },
    {
      label: 'span: 4',
      value: 4,
    },
  ]
  private layoutNumber = 6

  private gutterNumber = 20
  private offsetNumber = 6
  private spanNumber = 6

  private justifyModeList = ['start', 'end', 'center', 'space-around', 'space-between']
  private justifyMode = 'start'
}
</script>
<style lang="scss" scoped>
.layout-test {
  .el-card {
    margin-bottom: $margin-4x;

    .el-row {
      margin-bottom: $margin-4x;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .grid-content {
      border-radius: $border-radius;
      min-height: 36px;
    }

    .bg-purple {
      background: $color-master-bg;
    }

    .bg-purple-light {
      background: $color-master-bg-light;
    }

    .text-pos {
      padding: $padding;
    }

    h3 {
      margin-top: 0;
    }
  }
}
</style>
