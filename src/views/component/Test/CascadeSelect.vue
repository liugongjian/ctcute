<!--
 * @Author: error: 孙善鹏
 * @Date: 2023-04-11 13:49:34
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-23 14:49:14
 * @Description: 
-->
<template>
  <div class="page-test">
    <h1>{{ $t('componentTest.cascadeSelect.title') }}</h1>
    <el-card>
      <h3>{{ $t('componentTest.cascadeSelect.single') }}</h3>
      <div class="page-content">
        <el-radio-group v-model="itemSize" size="small">
          <el-radio-button value="medium" label="medium">{{
            $t('componentTest.common.data.default')
          }}</el-radio-button>
          <el-radio-button value="small" label="small">{{
            $t('componentTest.common.data.small')
          }}</el-radio-button>
          <el-radio-button value="large" label="large">{{
            $t('componentTest.common.data.large')
          }}</el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="itemDisabled" size="small">
          <el-radio-button :value="true" :label="true">{{
            $t('componentTest.common.data.disable')
          }}</el-radio-button>
          <el-radio-button :value="false" :label="false">{{
            $t('componentTest.common.data.enable')
          }}</el-radio-button>
        </el-radio-group>
      </div>

      <div class="page-items">
        <!-- <el-checkbox v-model="privateshowalllevels" @change="itemChecked = []">不显示全部层级</el-checkbox> -->
        <!-- <el-divider direction="vertical"></el-divider> -->

        <el-checkbox v-model="checkStrictly" @change="itemChecked = []">{{
          $t('componentTest.cascadeSelect.random')
        }}</el-checkbox>
      </div>
      <div>
        <el-cascader
          v-model="itemChecked"
          :size="itemSize"
          :disabled="itemDisabled"
          :props="{ checkStrictly: checkStrictly }"
          clearable
          :show-all-levels="privateshowalllevels"
          :options="options"
        ></el-cascader>
      </div>
    </el-card>
    <el-card>
      <h3>{{ $t('componentTest.cascadeSelect.multiple') }}</h3>
      <div class="page-items">
        <el-checkbox v-model="collapsetags" @change="itemChecked = []">{{
          $t('componentTest.cascadeSelect.notAllTag')
        }}</el-checkbox>
        <el-divider direction="vertical"></el-divider>

        <el-checkbox v-model="checkStrictly" @change="itemChecked = []">{{
          $t('componentTest.cascadeSelect.random')
        }}</el-checkbox>
      </div>
      <div>
        <div class="page-items">
          <el-cascader
            v-model="itemChecked"
            size="large"
            :disabled="itemDisabled"
            :props="{ multiple: true, checkStrictly: checkStrictly }"
            :collapse-tags="collapsetags"
            :show-all-levels="privateshowalllevels"
            :options="options"
          ></el-cascader>
        </div>
        <div class="page-items">
          <el-cascader
            v-model="itemChecked"
            size="medium"
            :disabled="itemDisabled"
            :props="{ multiple: true, checkStrictly: checkStrictly }"
            :collapse-tags="collapsetags"
            :show-all-levels="privateshowalllevels"
            :options="options"
          ></el-cascader>
        </div>
        <div class="page-items">
          <el-cascader
            v-model="itemChecked"
            size="small"
            :disabled="itemDisabled"
            :props="{ multiple: true, checkStrictly: checkStrictly }"
            :collapse-tags="collapsetags"
            :show-all-levels="privateshowalllevels"
            :options="options"
          ></el-cascader>
        </div>
        <div class="page-items">
          <el-cascader
            v-model="itemChecked"
            size="mini"
            :disabled="itemDisabled"
            :props="{ multiple: true, checkStrictly: checkStrictly }"
            :collapse-tags="collapsetags"
            :show-all-levels="privateshowalllevels"
            :options="options"
          ></el-cascader>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiRadio',
})
export default class extends Vue {
  private itemSize = 'medium'
  private itemDisabled = false

  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private options = [
    {
      value: 'zhinan',
      label: '指南',
      children: [
        {
          value: 'shejiyuanze',
          label: '设计原则',
          children: [
            {
              value: 'yizhi',
              label: '一致',
            },
            {
              value: 'fankui',
              label: '反馈',
            },
            {
              value: 'xiaolv',
              label: '效率',
            },
            {
              value: 'kekong',
              label: '可控',
            },
          ],
        },
        {
          value: 'daohang',
          label: '导航',
          children: [
            {
              value: 'cexiangdaohang',
              label: '侧向导航',
            },
            {
              value: 'dingbudaohang',
              label: '顶部导航',
            },
          ],
        },
      ],
    },
    {
      value: 'zujian',
      label: '组件',
      children: [
        {
          value: 'basic',
          label: 'Basic',
          children: [
            {
              value: 'layout',
              label: 'Layout 布局',
            },
            {
              value: 'color',
              label: 'Color 色彩',
            },
            {
              value: 'typography',
              label: 'Typography 字体',
            },
            {
              value: 'icon',
              label: 'Icon 图标',
            },
            {
              value: 'button',
              label: 'Button 按钮',
            },
          ],
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio 单选框',
            },
            {
              value: 'checkbox',
              label: 'Checkbox 多选框',
            },
            {
              value: 'input',
              label: 'Input 输入框',
            },
            {
              value: 'input-number',
              label: 'InputNumber 计数器',
            },
            {
              value: 'select',
              label: 'Select 选择器',
            },
            {
              value: 'cascader',
              label: 'Cascader 级联选择器',
            },
            {
              value: 'switch',
              label: 'Switch 开关',
            },
            {
              value: 'slider',
              label: 'Slider 滑块',
            },
            {
              value: 'time-picker',
              label: 'TimePicker 时间选择器',
            },
            {
              value: 'date-picker',
              label: 'DatePicker 日期选择器',
            },
            {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器',
            },
            {
              value: 'upload',
              label: 'Upload 上传',
            },
            {
              value: 'rate',
              label: 'Rate 评分',
            },
            {
              value: 'form',
              label: 'Form 表单',
            },
          ],
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table 表格',
            },
            {
              value: 'tag',
              label: 'Tag 标签',
            },
            {
              value: 'progress',
              label: 'Progress 进度条',
            },
            {
              value: 'tree',
              label: 'Tree 树形控件',
            },
            {
              value: 'pagination',
              label: 'Pagination 分页',
            },
            {
              value: 'badge',
              label: 'Badge 标记',
            },
          ],
        },
        {
          value: 'notice',
          label: 'Notice',
          children: [
            {
              value: 'alert',
              label: 'Alert 警告',
            },
            {
              value: 'loading',
              label: 'Loading 加载',
            },
            {
              value: 'message',
              label: 'Message 消息提示',
            },
            {
              value: 'message-box',
              label: 'MessageBox 弹框',
            },
            {
              value: 'notification',
              label: 'Notification 通知',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'menu',
              label: 'NavMenu 导航菜单',
            },
            {
              value: 'tabs',
              label: 'Tabs 标签页',
            },
            {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑',
            },
            {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单',
            },
            {
              value: 'steps',
              label: 'Steps 步骤条',
            },
          ],
        },
        {
          value: 'others',
          label: 'Others',
          children: [
            {
              value: 'dialog',
              label: 'Dialog 对话框',
            },
            {
              value: 'tooltip',
              label: 'Tooltip 文字提示',
            },
            {
              value: 'popover',
              label: 'Popover 弹出框',
            },
            {
              value: 'card',
              label: 'Card 卡片',
            },
            {
              value: 'carousel',
              label: 'Carousel 走马灯',
            },
            {
              value: 'collapse',
              label: 'Collapse 折叠面板',
            },
          ],
        },
      ],
    },
    {
      value: 'ziyuan',
      label: '资源',
      children: [
        {
          value: 'axure',
          label: 'Axure Components',
        },
        {
          value: 'sketch',
          label: 'Sketch Templates',
        },
        {
          value: 'jiaohu',
          label: '组件交互文档',
        },
      ],
    },
  ]
  private itemChecked = []
  private itemChecked2 = []
  private isIndeterminate = true
  private checkAll = false
  // 特殊
  private privateshowalllevels = false
  private checkStrictly = false
  private collapsetags = false
}
</script>

<style lang="scss" scoped>
.page-test {
  .el-card {
    margin-bottom: $margin-4x;

    h3 {
      margin-top: 0;
    }
  }
}

.page-content {
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  .el-input {
    width: 250px;
  }
}
.page-items {
  margin-bottom: 20px;
}
</style>
