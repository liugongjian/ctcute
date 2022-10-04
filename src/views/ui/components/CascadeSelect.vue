<template>
  <div class="cascade-select">
    <p>
      默认click触发子菜单，有单选和多选等样式，多选可进行折叠展示，支持选择任意一级选项，选择器可hover清空选项。级联选择中的多选可用于地区选择。
    </p>
    <div class="sub-down">
      <h3>单选-默认</h3>
      <div class="line">
        <div class="line__left">
          <el-cascader v-model="value1" clearable :options="options"></el-cascader>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>单选-仅显示最后一级</h3>
      <div class="line">
        <div class="line__left">
          <el-cascader v-model="value2" clearable :show-all-levels="false" :options="options"></el-cascader>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>单选-选择任意一级选项</h3>
      <div class="line">
        <div class="line__left">
          <el-cascader
            v-model="value3"
            :options="options"
            :props="{ checkStrictly: true }"
            clearable
          ></el-cascader>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>多选-默认显示所有tag</h3>
      <div class="line">
        <div class="line__left">
          <el-cascader
            v-model="value4"
            :options="options"
            :show-all-levels="false"
            :props="{ multiple: true }"
            clearable
          ></el-cascader>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>多选-折叠展示tag</h3>
      <div class="line">
        <div class="line__left">
          <el-cascader
            v-model="value5"
            :options="options"
            :show-all-levels="false"
            :props="{ multiple: true }"
            collapse-tags
            clearable
          ></el-cascader>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>多选-选择任意一级选项</h3>
      <div class="line">
        <div class="line__left">
          <el-cascader
            v-model="value6"
            :options="options"
            :props="{ multiple: true, checkStrictly: true }"
            clearable
          ></el-cascader>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'CascadeSelect',
})
export default class extends Vue {
  public static title = {
    zh: '级联选择',
    en: 'CascadeSelect',
  }
  public static description = {
    maintainer: '秦瑞斌',
    version: 'v1.0',
    updateTime: '2022.09.02',
  }

  private value1 = []
  private value2 = []
  private value3 = []
  private value4 = []
  private value5 = []
  private value6 = []
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
}
</script>

<style lang="scss" scoped>
.line {
  display: flex;
  align-items: center;
  margin: 24px 0;

  &__left,
  &__right {
    width: 300px;
    margin-right: 47px;
  }

  .el-cascader {
    width: 100%;
  }
}

.sub-down {
  border-bottom: 1px solid $border-color-light-1;
  > h3 {
    margin: 24px 0;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: $color-grey-1;
    line-height: 20px;
    font-weight: 500;
  }

  .el-row {
    margin: 24px 0;
  }
}

.sub-down:last-child {
  border-bottom: none;

  .el-row {
    margin-top: 24px;
  }
}
</style>
