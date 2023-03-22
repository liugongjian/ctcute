<!--
 * @Author: 黄靖
 * @Date: 2023-03-20 17:53:38
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-20 17:53:38
 * @Description: scss变量, 当前描述的variables.scss版本为提交id=fc0672e
-->

<template>
  <div>
    <h1>SASS变量</h1>
    <el-divider></el-divider>
    <div v-for="(v, idx) in variables" :key="idx">
      <h3>{{ v.title }}</h3>
      <el-table :data="v.list" fit border>
        <el-table-column prop="name" label="变量名">
          <template slot-scope="{ row }">
            <span class="variables-name" @click="copyCode(row.name)">{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="value" label="值">
          <template slot-scope="{ row }">
            <span
              v-if="row.type === 'color'"
              class="coloratlas"
              :style="{ backgroundColor: getValue(row.name) }"
            ></span>
            <span class="variables-value">{{ getValue(row.name) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="scene" label="使用场景"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Variables from '@cutedesign/ui/style/themes/default/index.scss'
import copy from 'copy-to-clipboard'
@Component({
  name: 'Variables',
})
export default class extends Vue {
  /**
   * ui/style/themes/default/variables.scss
   * 全局替换 (\$[^:]+):[^\n\/\/]*(\/\/\s([^\n]+))? => { name: '$1', type:'color', scene:'$3'},
   */
  private variables = [
    /* Color
-------------------------- */
    /* 主题色 */
    {
      title: '主题色',
      list: [
        { name: '$color-master', type: 'color', scene: '主题色，用于主题按钮，链接hover状态等' },
        { name: '$color-master-hover', type: 'color', scene: '主题-悬停色，用于主题按钮悬停等' },
        { name: '$color-master-active', type: 'color', scene: '主题-触发色，用于选中状态' },
        { name: '$color-master-disabled', type: 'color', scene: '主题-禁用色，用于禁用状态' },
        { name: '$color-master-bg', type: 'color', scene: '主题-背景色' },
        { name: '$color-master-bg-light', type: 'color', scene: '主题-背景浅色' },
        { name: '$color-master-bg-light-2', type: 'color', scene: '主题-背景浅色2' },

        //     { name: '$color-master-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-master-2', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-master-3', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-master-4', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-master-5', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-master-6', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-master-7', type: 'color', scene: 'deprecated(弃用)' },

        /* CT特殊色, ct意为ctyun缩写 */
        {
          name: '$color-ct',
          type: 'color',
          scene: '天翼云-默认色，用于天翼云风格的主题按钮、链接hover状态等',
        },
        { name: '$color-ct-hover', type: 'color', scene: '天翼云-悬停色，用于天翼云风格的题按钮悬停等' },
        { name: '$color-ct-active', type: 'color', scene: '天翼云-触发色，用于天翼云风格的选中状态' },
        { name: '$color-ct-disabled', type: 'color', scene: '天翼云-禁用色，用于天翼云风格的禁用状态' },

        //     { name: '$color-sp-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-sp-2', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-sp-3', type: 'color', scene: 'deprecated(弃用)' },
      ],
    },
    /* 状态色 */
    {
      title: '状态色',
      list: [
        { name: '$color-info', type: 'color', scene: '信息通知色，用于信息通知内容' },
        { name: '$color-info-hover', type: 'color', scene: '信息通知-悬停色，用于信息通知内容的悬停' },
        { name: '$color-info-active', type: 'color', scene: '信息通知-触发色，用于信息通知内容的选中状态' },
        { name: '$color-info-disabled', type: 'color', scene: '信息通知-禁用色，用于信息通知内容的触发状态' },
        { name: '$color-info-bg', type: 'color', scene: '信息通知-背景色，用于信息通知内容的北京' },
        { name: '$color-success', type: 'color', scene: '成功色，用于表示成功状态的内容' },
        { name: '$color-success-hover', type: 'color', scene: '成功-悬停色' },
        { name: '$color-success-active', type: 'color', scene: '成功-触发色' },
        { name: '$color-success-disabled', type: 'color', scene: '成功-禁用色' },
        { name: '$color-success-bg', type: 'color', scene: '成功-背景色' },
        { name: '$color-warning', type: 'color', scene: '警告' },
        { name: '$color-warning-hover', type: 'color', scene: '' },
        { name: '$color-warning-active', type: 'color', scene: '' },
        { name: '$color-warning-disabled', type: 'color', scene: '' },
        { name: '$color-warning-bg', type: 'color', scene: '' },
        { name: '$color-danger', type: 'color', scene: '危险' },
        { name: '$color-danger-hover', type: 'color', scene: '' },
        { name: '$color-danger-active', type: 'color', scene: '' },
        { name: '$color-danger-disabled', type: 'color', scene: '' },
        { name: '$color-danger-bg', type: 'color', scene: '' },
        { name: '$color-fatal', type: 'color', scene: '严重危险' },
        { name: '$color-fatal-hover', type: 'color', scene: '' },
        { name: '$color-fatal-active', type: 'color', scene: '' },
        { name: '$color-fatal-disabled', type: 'color', scene: '' },
        { name: '$color-fatal-bg', type: 'color', scene: '' },

        //     { name: '$color-status-master', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-master-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-danger', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-danger-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-danger-2', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-danger-3', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-info', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-info-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-success', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-success-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-warning', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-status-warning-1', type: 'color', scene: 'deprecated(弃用)' },
      ],
    },
    /* 中性色 */
    {
      title: '中性色',
      list: [
        { name: '$color-neutral-1', type: 'color', scene: '' },
        { name: '$color-neutral-2', type: 'color', scene: '' },
        { name: '$color-neutral-3', type: 'color', scene: '' },
        { name: '$color-neutral-4', type: 'color', scene: '' },
        { name: '$color-neutral-5', type: 'color', scene: '' },
        { name: '$color-neutral-6', type: 'color', scene: '' },
        { name: '$color-neutral-7', type: 'color', scene: '' },
        { name: '$color-neutral-8', type: 'color', scene: '' },
        { name: '$color-neutral-9', type: 'color', scene: '' },
        { name: '$color-neutral-10', type: 'color', scene: '' },
        { name: '$color-neutral-11', type: 'color', scene: '' },
        { name: '$color-white', type: 'color', scene: '' },
        { name: '$color-black', type: 'color', scene: '' },

        //     { name: '$color-grey-0', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-2', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-3', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-4', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-5', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-6', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-7', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-8', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-9', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-10', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$color-grey-11', type: 'color', scene: 'deprecated(弃用)' },
      ],
    },

    /* 其他 */
    //     { name: '$color-other-1', type: 'color', scene: 'deprecated(弃用) 使用在tooltip背景, order页眉背景' },

    /* Background
-------------------------- */
    {
      title: '背景色、禁用色',
      list: [
        { name: '$color-bg-1', type: 'color', scene: '' },
        { name: '$color-bg-2', type: 'color', scene: '' },
        { name: '$color-bg-3', type: 'color', scene: '' },
        { name: '$color-form-component-bg', type: 'color', scene: '' },
        { name: '$color-content-bg', type: 'color', scene: '' },
        { name: '$color-body-bg', type: 'color', scene: '' },

        //     { name: '$body-fill', type: 'string', scene: 'deprecated(弃用)' },
        /* Disabled Base (由于多个表单组件会用到disabled的状态，因此仍然保留以下变量)
-------------------------- */
        { name: '$disabled-bg', type: 'color', scene: '' },
        { name: '$disabled-border', type: 'color', scene: '' },
        { name: '$disabled-color', type: 'color', scene: '' },

        //     { name: '$disabled-danger-bg', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$disabled-danger-color', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$disabled-danger-border', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$disabled-fill', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$disabled-danger-fill', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$disabled-icon-color', type: 'color', scene: 'deprecated(弃用)' },
      ],
    },

    {
      title: '字体、边框、间距、阴影',
      list: [
        /* Typography
-------------------------- */
        { name: '$font-family', type: 'string', scene: '标准字体' },
        { name: '$font-family-cute-icons', type: 'string', scene: '' },
        { name: '$text-size', type: 'string', scene: '标准字体大小' },
        { name: '$text-size-sm', type: 'string', scene: '字号small' },
        { name: '$text-size-md', type: 'string', scene: '字号medium' },
        { name: '$text-size-lg', type: 'string', scene: '字号large' },
        { name: '$text-size-xl', type: 'string', scene: '字号extra large' },
        { name: '$text-color', type: 'color', scene: '强调/正文标题' },
        { name: '$text-color-light', type: 'color', scene: '次强调/正文标题' },
        { name: '$text-color-light-2', type: 'color', scene: '置灰信息' },
        { name: '$text-color-feature', type: 'color', scene: '说明文字' },
        { name: '$text-weight', type: 'string', scene: '标准字体粗细' },
        { name: '$text-title-weight', type: 'string', scene: '标题的字体粗细' },

        //     { name: '$text-size-primary', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$text-size-small', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$text-size-medium', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$text-size-large', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$text-size-x-large', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$text-color-primary', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$text-color-light-1', type: 'color', scene: 'deprecated(弃用)' },

        /* 行间距 */
        { name: '$line-height', type: 'string', scene: '' },

        /* Border
-------------------------- */
        { name: '$border-color', type: 'color', scene: '' },
        { name: '$border-color-hover', type: 'color', scene: '' },
        { name: '$border-color-light', type: 'color', scene: '' },
        { name: '$border-color-dark', type: 'color', scene: '' },
        { name: '$border-radius', type: 'string', scene: '悬浮状态' },
        { name: '$border-radius-medium', type: 'string', scene: 'Card圆角' },

        //     { name: '$border-color-primary', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$border-color-light-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$border-color-dark-1', type: 'color', scene: 'deprecated(弃用)' },

        /* 间距: Padding & Margin
-------------------------- */
        { name: '$common-space', type: 'string', scene: '' },
        { name: '$common-space-2x', type: 'string', scene: '8px' },
        { name: '$common-space-3x', type: 'string', scene: '12px' },
        { name: '$common-space-4x', type: 'string', scene: '16px' },
        { name: '$common-space-5x', type: 'string', scene: '20px' },
        { name: '$common-space-6x', type: 'string', scene: '24px' },
        { name: '$common-space-7x', type: 'string', scene: '28px' },
        { name: '$common-space-8x', type: 'string', scene: '32px' },
        { name: '$common-space-9x', type: 'string', scene: '36px' },
        { name: '$common-space-10x', type: 'string', scene: '40px' },
        { name: '$common-space-6', type: 'string', scene: '特殊场景使用6px' },
        { name: '$common-space-10', type: 'string', scene: '特殊场景使用10px' },

        { name: '$padding', type: 'string', scene: '' },
        { name: '$padding-2x', type: 'string', scene: '8px' },
        { name: '$padding-3x', type: 'string', scene: '12px' },
        { name: '$padding-4x', type: 'string', scene: '16px' },
        { name: '$padding-5x', type: 'string', scene: '20px' },
        { name: '$padding-6x', type: 'string', scene: '24px' },
        { name: '$padding-7x', type: 'string', scene: '28px' },
        { name: '$padding-8x', type: 'string', scene: '32px' },
        { name: '$padding-9x', type: 'string', scene: '36px' },
        { name: '$padding-10x', type: 'string', scene: '40px' },
        { name: '$padding-6', type: 'string', scene: '特殊场景使用6px' },
        { name: '$padding-10', type: 'string', scene: '特殊场景使用10px' },

        { name: '$margin', type: 'string', scene: '' },
        { name: '$margin-2x', type: 'string', scene: '8px' },
        { name: '$margin-3x', type: 'string', scene: '12px' },
        { name: '$margin-4x', type: 'string', scene: '16px' },
        { name: '$margin-5x', type: 'string', scene: '20px' },
        { name: '$margin-6x', type: 'string', scene: '24px' },
        { name: '$margin-7x', type: 'string', scene: '28px' },
        { name: '$margin-8x', type: 'string', scene: '32px' },
        { name: '$margin-9x', type: 'string', scene: '36px' },
        { name: '$margin-10x', type: 'string', scene: '40px' },
        { name: '$margin-6', type: 'string', scene: '特殊场景使用6px' },
        { name: '$margin-10', type: 'string', scene: '特殊场景使用10px' },

        //     { name: '$padding-primary', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$padding-medium', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$padding-small', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$padding-tiny', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$margin-large', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$margin-medium', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$margin-small', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$margin-tiny', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$margin-primary', type: 'string', scene: 'deprecated(弃用)' },

        /* Shadow
-------------------------- */
        { name: '$shadow-1', type: 'string', scene: '一级阴影: 背景卡片使用' },
        {
          name: '$shadow-2',
          type: 'string',
          scene: '二级阴影: 下拉组件使用，如下拉菜单、下拉选择器、气泡确认框',
        },
        { name: '$shadow-3', type: 'string', scene: '三级阴影: 最上层投影，对话框、抽屉使用' },
        { name: '$shadow-form-item', type: 'string', scene: '组件Focused状态使用' },

        //     { name: '$shadow-input', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$shadow-card', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$shadow-dialog', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$shadow-table-card', type: 'string', scene: 'deprecated(弃用)' },
      ],
    },
    {
      title: '组件',
      list: [
        /* 标签(Tag)
-------------------------- */
        { name: '$tag-master', type: 'color', scene: '主题色标签背景' },
        { name: '$tag-master-border', type: 'color', scene: '主题色标签边框' },
        { name: '$tag-info', type: 'color', scene: '信息色标签背景' },
        { name: '$tag-info-border', type: 'color', scene: '信息色标签边框' },
        { name: '$tag-success', type: 'color', scene: '成功色标签背景' },
        { name: '$tag-success-border', type: 'color', scene: '成功色标签边框' },
        { name: '$tag-warning', type: 'color', scene: '警告色标签背景' },
        { name: '$tag-warning-border', type: 'color', scene: '警告色标签边框' },
        { name: '$tag-danger', type: 'color', scene: '危险色标签背景' },
        { name: '$tag-danger-border', type: 'color', scene: '危险色标签边框' },
        { name: '$tag-fatal', type: 'color', scene: '危险色标签背景' },
        { name: '$tag-fatal-border', type: 'color', scene: '危险色标签边框' },
        { name: '$tag-weak', type: 'color', scene: '轻微提示色标签背景' },
        { name: '$tag-weak-border', type: 'color', scene: '轻微提示色标签边框' },
        { name: '$tag-ct', type: 'color', scene: 'CT特殊色标签背景' },
        { name: '$tag-ct-border', type: 'color', scene: 'CT特殊色标签边框' },

        //     // { name: '$color-tag-master-1', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-master-2', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-info-1', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-info-2', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-success-1', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-success-2', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-warning-1', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-warning-2', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-danger-1', type: 'color', scene: 'deprecated(弃用)' },
        //     // { name: '$color-tag-danger-2', type: 'color', scene: 'deprecated(弃用)' },

        /* Button
-------------------------- */
        { name: '$button-icon-color', type: 'color', scene: '' },
        { name: '$button-margin', type: 'string', scene: '' },
        { name: '$button-padding-mini', type: 'string', scene: '' },
        { name: '$button-padding-small', type: 'string', scene: '' },
        { name: '$button-padding-medium', type: 'string', scene: '' },
        { name: '$button-padding-large', type: 'string', scene: '' },

        /* Form
-------------------------- */
        { name: '$form-item-label-line-height', type: 'string', scene: '' },
        { name: '$form-item-error-padding-top', type: 'string', scene: '' },

        /* Input
-------------------------- */
        { name: '$input-bg', type: 'color', scene: '' },
        { name: '$input-disabled-bg', type: 'color', scene: '' },
        { name: '$input-hover-border', type: 'color', scene: '' },
        { name: '$input-active-border', type: 'color', scene: '' },
        { name: '$input-xs-height', type: 'string', scene: '' },
        { name: '$input-sm-height', type: 'string', scene: '' },
        { name: '$input-md-height', type: 'string', scene: '' },
        { name: '$input-lg-height', type: 'string', scene: '' },
        { name: '$input-height', type: 'string', scene: '' },
        { name: '$input-prefix-padding', type: 'string', scene: '' },
        { name: '$input-suffix-padding', type: 'string', scene: '' },

        //     { name: '$input-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Select
-------------------------- */
        { name: '$select-border-color-hover', type: 'color', scene: '' },
        { name: '$select-disabled-border', type: 'color', scene: '' },

        /* Checkbox
-------------------------- */
        { name: '$checkbox-bg', type: 'color', scene: '' },
        { name: '$checkbox-border', type: 'color', scene: '' },
        { name: '$checkbox-button', type: 'color', scene: '' },
        { name: '$checkbox-button-hover', type: 'color', scene: '' },

        /* Table
-------------------------- */
        { name: '$table-header-bg', type: 'color', scene: '' },
        { name: '$table-cell-bg', type: 'color', scene: '' },
        { name: '$table-sort-caret-bg', type: 'color', scene: '' },
        { name: '$table-cell-padding-sm', type: 'string', scene: '' },
        { name: '$table-cell-padding-md', type: 'string', scene: '' },
        { name: '$table-cell-padding-lg', type: 'string', scene: '' },
        { name: '$table-border-color', type: 'color', scene: '' },

        //     { name: '$table-header-fill', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$table-cell-fill', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$table-sort-caret-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Pagination
-------------------------- */
        { name: '$pagination-bg', type: 'color', scene: '' },

        //     // { name: '$pagination-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Tooltip
-------------------------- */
        { name: '$tooltip-bg', type: 'color', scene: '' },

        //     // { name: '$tooltip-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Upload
-------------------------- */
        { name: '$upload-bg', type: 'color', scene: '' },

        //     // { name: '$upload-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Card
-------------------------- */
        { name: '$card-bg', type: 'color', scene: '' },
        { name: '$card-shadow', type: 'string', scene: '' },

        /* Cascader
-------------------------- */
        { name: '$cascader-tag-bg', type: 'color', scene: '' },
        { name: '$cascader-tag-border', type: 'color', scene: '' },
        { name: '$cascader-tag-close-color', type: 'color', scene: '' },
        { name: '$cascader-tag-close-bg', type: 'color', scene: '' },
        { name: '$cascader-node-hover', type: 'color', scene: '' },
        { name: '$cascader-panel-bg', type: 'color', scene: '' },
        { name: '$cascader-panel-shadow', type: 'string', scene: '' },

        /* Collapse
-------------------------- */
        { name: '$collapse-header-bg', type: 'color', scene: '' },
        { name: '$collapse-header-height', type: 'string', scene: '' },
        { name: '$collapse-item-header-height', type: 'string', scene: '' },

        //     { name: '$collapse-header-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Datepicker
-------------------------- */
        { name: '$datepicker-shadow', type: 'string', scene: '' },

        /* Descriptions
-------------------------- */
        { name: '$descriptions-label-width', type: 'string', scene: '' },
        { name: '$descriptions-item-height', type: 'string', scene: '' },
        { name: '$descriptions-item-content-width', type: 'string', scene: '' },
        { name: '$descriptions-item-content-line-height', type: 'string', scene: '' },

        /* Dialog
-------------------------- */
        { name: '$dialog-footer-margin-top', type: 'string', scene: '' },

        /* Icon
-------------------------- */
        { name: '$icon-color', type: 'color', scene: '' },
        /* Loading
-------------------------- */
        { name: '$loading-primary-color', type: 'color', scene: '' },
        { name: '$loading-primary-border', type: 'color', scene: '' },
        { name: '$loading-default-color', type: 'color', scene: '' },
        { name: '$loading-default-border', type: 'color', scene: '' },
      ],
    },
    {
      title: '布局相关',
      list: [
        /* Layout
-------------------------- */
        /* Header */
        { name: '$header-height', type: 'string', scene: '' },
        { name: '$header-fill-1', type: 'color', scene: '' },
        { name: '$header-fill-2', type: 'color', scene: '' },
        { name: '$header-border', type: 'color', scene: '' },
        { name: '$header-text-color', type: 'color', scene: '' },
        { name: '$header-search-text-color', type: 'color', scene: '' },

        /* Sidebar */
        { name: '$sidebar-width', type: 'string', scene: '' },
        { name: '$sidebar-fill', type: 'color', scene: '' },
        { name: '$sidebar-sub-fill', type: 'color', scene: '' },
        { name: '$sidebar-sub-hover', type: 'color', scene: '' },

        /* Animation
-------------------------- */
        { name: '$transition-time', type: 'string', scene: '' },

        /* Z-Index
-------------------------- */
        { name: '$zindex-badge', type: 'string', scene: '' },
        { name: '$zindex-table-fixed', type: 'string', scene: '' },
        { name: '$zindex-affix', type: 'string', scene: '' },
        { name: '$zindex-back-top', type: 'string', scene: '' },
        { name: '$zindex-picker-panel', type: 'string', scene: '' },
        { name: '$zindex-popup-close', type: 'string', scene: '' },
        { name: '$zindex-modal', type: 'string', scene: '' },
        { name: '$zindex-modal-mask', type: 'string', scene: '' },
        { name: '$zindex-message', type: 'string', scene: '' },
        { name: '$zindex-notification', type: 'string', scene: '' },
        { name: '$zindex-popover', type: 'string', scene: '' },
        { name: '$zindex-dropdown', type: 'string', scene: '' },
        { name: '$zindex-picker', type: 'string', scene: '' },
        { name: '$zindex-popoconfirm', type: 'string', scene: '' },
        { name: '$zindex-tooltip', type: 'string', scene: '' },
        { name: '$zindex-image', type: 'string', scene: '' },

        /* 响应式断点
-------------------------- */
        { name: '$screen-lg', type: 'string', scene: '' },
      ],
    },

    /* 图表颜色(deprecated(弃用))
-------------------------- */
    // // 图表颜色
    // { name: '$chartColor1', type: 'color', scene: '' },
    // { name: '$chartColor2', type: 'color', scene: '' },
    // { name: '$chartColor3', type: 'color', scene: '' },
    // { name: '$chartColor4', type: 'color', scene: '' },
    // { name: '$chartColor5', type: 'color', scene: '' },
    // { name: '$chartColor6', type: 'color', scene: '' },
    // { name: '$chartColor7', type: 'color', scene: '' },
    // { name: '$chartColor8', type: 'color', scene: '' },
    // { name: '$chartColor9', type: 'color', scene: '' },
    // { name: '$chartColor10', type: 'color', scene: '' },
    // { name: '$chartColor11', type: 'color', scene: '' },
    // { name: '$chartColor12', type: 'color', scene: '' },

    // // 图表高亮颜色
    // { name: '$chartColorH1', type: 'color', scene: '' },
    // { name: '$chartColorH2', type: 'color', scene: '' },
    // { name: '$chartColorH3', type: 'color', scene: '' },
    // { name: '$chartColorH4', type: 'color', scene: '' },
    // { name: '$chartColorH5', type: 'color', scene: '' },
    // { name: '$chartColorH6', type: 'color', scene: '' },
    // { name: '$chartColorH7', type: 'color', scene: '' },
    // { name: '$chartColorH8', type: 'color', scene: '' },
    // { name: '$chartColorH9', type: 'color', scene: '' },
    // { name: '$chartColorH10', type: 'color', scene: '' },
    // { name: '$chartColorH11', type: 'color', scene: '' },
    // { name: '$chartColorH12', type: 'color', scene: '' },

    // // 图表light颜色
    // { name: '$chartColorL1', type: 'color', scene: '' },
    // { name: '$chartColorL2', type: 'color', scene: '' },
    // { name: '$chartColorL3', type: 'color', scene: '' },
    // { name: '$chartColorL4', type: 'color', scene: '' },
    // { name: '$chartColorL5', type: 'color', scene: '' },
    // { name: '$chartColorL6', type: 'color', scene: '' },
    // { name: '$chartColorL7', type: 'color', scene: '' },
    // { name: '$chartColorL8', type: 'color', scene: '' },
    // { name: '$chartColorL9', type: 'color', scene: '' },
    // { name: '$chartColorL10', type: 'color', scene: '' },
    // { name: '$chartColorL11', type: 'color', scene: '' },
    // { name: '$chartColorL12', type: 'color', scene: '' },
  ]

  /**
   * 复制变量名
   */
  private copyCode(content: string) {
    copy(content)
    this.$message.success(`已复制变量名${content}`)
  }

  private getValue(name: string) {
    try {
      const camelCaseKey = name
        .slice(1)
        .replaceAll(/\-[a-z0-9]/g, (value: string) => value.toUpperCase().slice(1))
      const val = Variables[camelCaseKey]
      if (val) {
        return val
      } else {
        throw new Error()
      }
    } catch (err) {
      console.log(`未找到变量${name}的值`)
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.variables-name {
  cursor: pointer;
  &:hover {
    color: $color-master;
  }
}
.variables-value,
.coloratlas {
  vertical-align: middle;
}
.coloratlas {
  display: inline-block;
  margin-right: $padding;
  width: $text-size;
  height: $text-size;
  border-radius: calc($text-size / 2);
}
</style>
