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
        { name: '$color-warning', type: 'color', scene: '警告色，用于表示警告状态的内容' },
        { name: '$color-warning-hover', type: 'color', scene: '警告-悬停色' },
        { name: '$color-warning-active', type: 'color', scene: '警告-触发色' },
        { name: '$color-warning-disabled', type: 'color', scene: '警告-禁用色' },
        { name: '$color-warning-bg', type: 'color', scene: '警告-背景色' },
        { name: '$color-danger', type: 'color', scene: '危险色，用于表示危险状态的内容' },
        { name: '$color-danger-hover', type: 'color', scene: '危险-悬停色' },
        { name: '$color-danger-active', type: 'color', scene: '危险-触发色' },
        { name: '$color-danger-disabled', type: 'color', scene: '危险-禁用色' },
        { name: '$color-danger-bg', type: 'color', scene: '危险-背景色' },
        { name: '$color-fatal', type: 'color', scene: '严重危险色，用于表示严重危险状态的内容' },
        { name: '$color-fatal-hover', type: 'color', scene: '严重危险-悬停色' },
        { name: '$color-fatal-active', type: 'color', scene: '严重危险-触发色' },
        { name: '$color-fatal-disabled', type: 'color', scene: '严重危险-禁用色' },
        { name: '$color-fatal-bg', type: 'color', scene: '严重危险-背景色' },

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
        { name: '$color-white', type: 'color', scene: '白色' },
        { name: '$color-black', type: 'color', scene: '黑色' },

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
        { name: '$color-form-component-bg', type: 'color', scene: '用于表单组件的背景' },
        { name: '$color-content-bg', type: 'color', scene: '用于body的背景' },
        { name: '$color-body-bg', type: 'color', scene: '用于body的背景' },

        //     { name: '$body-fill', type: 'string', scene: 'deprecated(弃用)' },
        /* Disabled Base (由于多个表单组件会用到disabled的状态，因此仍然保留以下变量)
-------------------------- */
        { name: '$disabled-bg', type: 'color', scene: '用于表单项禁用状态的背景色' },
        { name: '$disabled-border', type: 'color', scene: '用于表单项禁用状态的边框色' },
        { name: '$disabled-color', type: 'color', scene: '用于表单项禁用状态的字体色' },

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
        { name: '$font-family-cute-icons', type: 'string', scene: 'cute-icons' },
        { name: '$text-size', type: 'string', scene: '标准字体大小' },
        { name: '$text-size-sm', type: 'string', scene: '字号small' },
        { name: '$text-size-md', type: 'string', scene: '字号medium' },
        { name: '$text-size-lg', type: 'string', scene: '字号large' },
        { name: '$text-size-xl', type: 'string', scene: '字号extra large' },
        { name: '$text-color', type: 'color', scene: '强调/正文标题颜色' },
        { name: '$text-color-light', type: 'color', scene: '次强调/正文标题颜色' },
        { name: '$text-color-light-2', type: 'color', scene: '置灰信息颜色' },
        { name: '$text-color-feature', type: 'color', scene: '说明文字颜色' },
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
        { name: '$border-color', type: 'color', scene: '边框颜色' },
        { name: '$border-color-hover', type: 'color', scene: '悬停状态下的边框颜色' },
        { name: '$border-color-light', type: 'color', scene: '边框颜色-light' },
        { name: '$border-color-dark', type: 'color', scene: '边框颜色-dark' },
        { name: '$border-radius', type: 'string', scene: '边框圆角大小' },
        { name: '$border-radius-medium', type: 'string', scene: '边框圆角大小medium，用于Card圆角' },

        //     { name: '$border-color-primary', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$border-color-light-1', type: 'color', scene: 'deprecated(弃用)' },
        //     { name: '$border-color-dark-1', type: 'color', scene: 'deprecated(弃用)' },

        /* 间距: Padding & Margin
-------------------------- */
        { name: '$common-space', type: 'string', scene: '标准间距' },
        { name: '$common-space-2x', type: 'string', scene: '2倍间距' },
        { name: '$common-space-3x', type: 'string', scene: '3倍间距' },
        { name: '$common-space-4x', type: 'string', scene: '4倍间距' },
        { name: '$common-space-5x', type: 'string', scene: '5倍间距' },
        { name: '$common-space-6x', type: 'string', scene: '6倍间距' },
        { name: '$common-space-7x', type: 'string', scene: '7倍间距' },
        { name: '$common-space-8x', type: 'string', scene: '8倍间距' },
        { name: '$common-space-9x', type: 'string', scene: '9倍间距' },
        { name: '$common-space-10x', type: 'string', scene: '10倍间距' },
        { name: '$common-space-6', type: 'string', scene: '特殊场景间距使用6px' },
        { name: '$common-space-10', type: 'string', scene: '特殊场景间距使用10px' },

        { name: '$padding', type: 'string', scene: '标准padding' },
        { name: '$padding-2x', type: 'string', scene: '2倍padding' },
        { name: '$padding-3x', type: 'string', scene: '3倍padding' },
        { name: '$padding-4x', type: 'string', scene: '4倍padding' },
        { name: '$padding-5x', type: 'string', scene: '5倍padding' },
        { name: '$padding-6x', type: 'string', scene: '6倍padding' },
        { name: '$padding-7x', type: 'string', scene: '7倍padding' },
        { name: '$padding-8x', type: 'string', scene: '8倍padding' },
        { name: '$padding-9x', type: 'string', scene: '9倍padding' },
        { name: '$padding-10x', type: 'string', scene: '10倍padding' },
        { name: '$padding-6', type: 'string', scene: '特殊场景padding使用6px' },
        { name: '$padding-10', type: 'string', scene: '特殊场景padding使用10px' },

        { name: '$margin', type: 'string', scene: '标准margin' },
        { name: '$margin-2x', type: 'string', scene: '2倍margin' },
        { name: '$margin-3x', type: 'string', scene: '3倍margin' },
        { name: '$margin-4x', type: 'string', scene: '4倍margin' },
        { name: '$margin-5x', type: 'string', scene: '5倍margin' },
        { name: '$margin-6x', type: 'string', scene: '6倍margin' },
        { name: '$margin-7x', type: 'string', scene: '7倍margin' },
        { name: '$margin-8x', type: 'string', scene: '8倍margin' },
        { name: '$margin-9x', type: 'string', scene: '9倍margin' },
        { name: '$margin-10x', type: 'string', scene: '10倍margin' },
        { name: '$margin-6', type: 'string', scene: '特殊场景margin使用6px' },
        { name: '$margin-10', type: 'string', scene: '特殊场景margin使用10px' },

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
        { name: '$shadow-form-item', type: 'string', scene: '表单项阴影，组件focused状态使用' },

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
        { name: '$tag-master', type: 'color', scene: 'Tag组件-主题色标签背景' },
        { name: '$tag-master-border', type: 'color', scene: 'Tag组件-主题色标签边框' },
        { name: '$tag-info', type: 'color', scene: 'Tag组件-信息色标签背景' },
        { name: '$tag-info-border', type: 'color', scene: 'Tag组件-信息色标签边框' },
        { name: '$tag-success', type: 'color', scene: 'Tag组件-成功色标签背景' },
        { name: '$tag-success-border', type: 'color', scene: 'Tag组件-成功色标签边框' },
        { name: '$tag-warning', type: 'color', scene: 'Tag组件-警告色标签背景' },
        { name: '$tag-warning-border', type: 'color', scene: 'Tag组件-警告色标签边框' },
        { name: '$tag-danger', type: 'color', scene: 'Tag组件-危险色标签背景' },
        { name: '$tag-danger-border', type: 'color', scene: 'Tag组件-危险色标签边框' },
        { name: '$tag-fatal', type: 'color', scene: 'Tag组件-危险色标签背景' },
        { name: '$tag-fatal-border', type: 'color', scene: 'Tag组件-危险色标签边框' },
        { name: '$tag-weak', type: 'color', scene: 'Tag组件-轻微提示色标签背景' },
        { name: '$tag-weak-border', type: 'color', scene: 'Tag组件-轻微提示色标签边框' },
        { name: '$tag-ct', type: 'color', scene: 'Tag组件-天翼云特殊色标签背景' },
        { name: '$tag-ct-border', type: 'color', scene: 'Tag组件-天翼云特殊色标签边框' },

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
        { name: '$button-icon-color', type: 'color', scene: 'Button组件-按钮icon颜色' },
        { name: '$button-margin', type: 'string', scene: 'Button组件-按钮margin' },
        { name: '$button-padding-mini', type: 'string', scene: 'Button组件-mini尺寸按钮padding' },
        { name: '$button-padding-small', type: 'string', scene: 'Button组件-small尺寸按钮padding' },
        { name: '$button-padding-medium', type: 'string', scene: 'Button组件-medium尺寸按钮padding' },
        { name: '$button-padding-large', type: 'string', scene: 'Button组件-large尺寸按钮padding' },

        /* Form
-------------------------- */
        { name: '$form-item-label-line-height', type: 'string', scene: 'Form组件-表单项label行高' },
        {
          name: '$form-item-error-padding-top',
          type: 'string',
          scene: 'Form组件-表单项校验错误信息padding-top',
        },

        /* Input
-------------------------- */
        { name: '$input-bg', type: 'color', scene: 'Input组件-背景色' },
        { name: '$input-disabled-bg', type: 'color', scene: 'Input组件-禁用状态背景色' },
        { name: '$input-hover-border', type: 'color', scene: 'Input组件-悬停状态边框色' },
        { name: '$input-active-border', type: 'color', scene: 'Input组件-触发状态边框色' },
        { name: '$input-xs-height', type: 'string', scene: 'Input组件-mini尺寸height' },
        { name: '$input-sm-height', type: 'string', scene: 'Input组件-small尺寸height' },
        { name: '$input-md-height', type: 'string', scene: 'Input组件-medium尺寸height' },
        { name: '$input-lg-height', type: 'string', scene: 'Input组件-large尺寸height' },
        { name: '$input-height', type: 'string', scene: 'Input组件-标准height' },
        { name: '$input-prefix-padding', type: 'string', scene: 'Input组件-prefix的padding值' },
        { name: '$input-suffix-padding', type: 'string', scene: 'Input组件-suffix的padding值' },

        //     { name: '$input-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Select
-------------------------- */
        { name: '$select-border-color-hover', type: 'color', scene: 'Select组件-悬停状态的边框颜色' },
        { name: '$select-disabled-border', type: 'color', scene: 'Select组件-禁用状态的边框颜色' },

        /* Checkbox
-------------------------- */
        { name: '$checkbox-bg', type: 'color', scene: 'Checkbox组件-背景色' },
        { name: '$checkbox-border', type: 'color', scene: 'Checkbox组件-边框色' },
        { name: '$checkbox-button', type: 'color', scene: 'Checkbox组件-按钮色' },
        { name: '$checkbox-button-hover', type: 'color', scene: 'Checkbox组件-按钮悬停色' },

        /* Table
-------------------------- */
        { name: '$table-header-bg', type: 'color', scene: 'Table组件-header的背景色' },
        { name: '$table-cell-bg', type: 'color', scene: 'Table组件-cell的背景色' },
        { name: '$table-sort-caret-bg', type: 'color', scene: 'Table组件-表头排序箭头的背景色' },
        { name: '$table-cell-padding-sm', type: 'string', scene: 'Table组件-mini尺寸cell的padding值' },
        { name: '$table-cell-padding-md', type: 'string', scene: 'Table组件-medium尺寸cell的padding值' },
        { name: '$table-cell-padding-lg', type: 'string', scene: 'Table组件-large尺寸cell的padding值' },
        { name: '$table-border-color', type: 'color', scene: 'Table组件-边框颜色' },

        //     { name: '$table-header-fill', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$table-cell-fill', type: 'string', scene: 'deprecated(弃用)' },
        //     { name: '$table-sort-caret-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Pagination
-------------------------- */
        { name: '$pagination-bg', type: 'color', scene: 'Pagination组件-背景色' },

        //     // { name: '$pagination-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Tooltip
-------------------------- */
        { name: '$tooltip-bg', type: 'color', scene: 'Tooltip组件-背景色' },

        //     // { name: '$tooltip-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Upload
-------------------------- */
        { name: '$upload-bg', type: 'color', scene: 'Upload组件-背景色' },

        //     // { name: '$upload-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Card
-------------------------- */
        { name: '$card-bg', type: 'color', scene: 'Card组件-背景色' },
        { name: '$card-shadow', type: 'string', scene: 'Card组件-阴影' },

        /* Cascader
-------------------------- */
        { name: '$cascader-tag-bg', type: 'color', scene: 'Cascader组件-tag的背景色' },
        { name: '$cascader-tag-border', type: 'color', scene: 'Cascader组件-tag的边框色' },
        { name: '$cascader-tag-close-color', type: 'color', scene: 'Cascader组件-tag的关闭图标的字体色' },
        { name: '$cascader-tag-close-bg', type: 'color', scene: 'Cascader组件-tag的关闭图标的背景色' },
        { name: '$cascader-node-hover', type: 'color', scene: 'Cascader组件-节点悬停色' },
        { name: '$cascader-panel-bg', type: 'color', scene: 'Cascader组件-面板背景色' }, // .el-cascader-panel的背景色
        { name: '$cascader-panel-shadow', type: 'string', scene: 'Cascader组件-面板shadow' },

        /* Collapse
-------------------------- */
        { name: '$collapse-header-bg', type: 'color', scene: 'Collapse-header的背景色' },
        { name: '$collapse-header-height', type: 'string', scene: 'Collapse-header的高度' },
        { name: '$collapse-item-header-height', type: 'string', scene: 'Collapse-item的header高度' },

        //     { name: '$collapse-header-fill', type: 'string', scene: 'deprecated(弃用)' },

        /* Datepicker
-------------------------- */
        { name: '$datepicker-shadow', type: 'string', scene: 'Datepicker组件的shadow' },

        /* Descriptions
-------------------------- */
        { name: '$descriptions-label-width', type: 'string', scene: 'Descriptions组件-label宽度' },
        { name: '$descriptions-item-height', type: 'string', scene: 'Descriptions组件-item高度' },
        { name: '$descriptions-item-content-width', type: 'string', scene: 'Descriptions组件-item内容宽度' },
        {
          name: '$descriptions-item-content-line-height',
          type: 'string',
          scene: 'Descriptions组件-item内容行高',
        },

        /* Dialog
-------------------------- */
        { name: '$dialog-footer-margin-top', type: 'string', scene: 'Dialog组件-footer的margin-top值' },

        /* Icon
-------------------------- */
        { name: '$icon-color', type: 'color', scene: 'icon颜色' },
        /* LoadingButton
-------------------------- */
        { name: '$loading-primary-color', type: 'color', scene: 'Button组件-primary类型loading状态的字体色' },
        {
          name: '$loading-primary-border',
          type: 'color',
          scene: 'Button组件-primary类型loading状态的边框色',
        },
        { name: '$loading-default-color', type: 'color', scene: 'Button组件-default类型loading状态的字体色' },
        {
          name: '$loading-default-border',
          type: 'color',
          scene: 'Button组件-default类型loading状态的边框色',
        },
      ],
    },
    {
      title: '布局相关',
      list: [
        /* Layout
-------------------------- */
        /* Header */
        { name: '$header-height', type: 'string', scene: '顶部导航栏高度' },
        { name: '$header-fill-1', type: 'color', scene: '顶部导航栏背景色' },
        { name: '$header-fill-2', type: 'color', scene: '顶部导航栏下拉框、搜索框等的背景色' },
        { name: '$header-border', type: 'color', scene: '顶部导航栏边框色' },
        { name: '$header-text-color', type: 'color', scene: '顶部导航栏字体色' },
        { name: '$header-search-text-color', type: 'color', scene: '顶部导航栏搜索框字体色' },

        /* Sidebar */
        { name: '$sidebar-width', type: 'string', scene: '侧边栏宽度' },
        { name: '$sidebar-fill', type: 'color', scene: '侧边栏背景色' },
        { name: '$sidebar-sub-fill', type: 'color', scene: '侧边栏submenu的背景色' },
        { name: '$sidebar-sub-hover', type: 'color', scene: '侧边栏submenu的悬停色' },

        /* Animation
-------------------------- */
        { name: '$transition-time', type: 'string', scene: '渐变时间' },

        /* Z-Index
-------------------------- */
        { name: '$zindex-badge', type: 'string', scene: 'badge的z-index值' },
        { name: '$zindex-table-fixed', type: 'string', scene: 'Table固定行列的z-index值' },
        { name: '$zindex-affix', type: 'string', scene: '' },
        { name: '$zindex-back-top', type: 'string', scene: '' },
        { name: '$zindex-picker-panel', type: 'string', scene: '' },
        { name: '$zindex-popup-close', type: 'string', scene: '' },
        { name: '$zindex-modal', type: 'string', scene: 'modal的z-index值' },
        { name: '$zindex-modal-mask', type: 'string', scene: 'modal遮罩的z-index值' },
        { name: '$zindex-message', type: 'string', scene: 'message的z-index值' },
        { name: '$zindex-notification', type: 'string', scene: 'notification的z-index值' },
        { name: '$zindex-popover', type: 'string', scene: 'popover的z-index值' },
        { name: '$zindex-dropdown', type: 'string', scene: 'dropdown的z-index值' },
        { name: '$zindex-picker', type: 'string', scene: 'picker的z-index值' },
        { name: '$zindex-popoconfirm', type: 'string', scene: 'popoconfirm的z-index值' },
        { name: '$zindex-tooltip', type: 'string', scene: 'tooltip的z-index值' },
        { name: '$zindex-image', type: 'string', scene: 'image的z-index值' },

        /* 响应式断点
-------------------------- */
        { name: '$screen-lg', type: 'string', scene: '屏幕最小分辨率，用于布局主容器宽度计算' },
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
