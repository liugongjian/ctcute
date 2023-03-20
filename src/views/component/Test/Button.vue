<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: Button
-->
<template>
  <div>
    <h1>Button</h1>
    <ButtonDemo />
    <el-row>
      <h3>默认按钮</h3>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>默认按钮(禁用状态)</h3>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>默认按钮(加载中)</h3>
      <el-button loading>默认按钮</el-button>
      <el-button type="primary" loading>主要按钮</el-button>
      <el-button type="success" loading>成功按钮</el-button>
      <el-button type="info" loading>信息按钮</el-button>
      <el-button type="warning" loading>警告按钮</el-button>
      <el-button type="danger" loading>危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>默认按钮(图标)</h3>
      <el-button><svg-icon name="plus-circle" /> 默认按钮</el-button>
      <el-button type="primary"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="success"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger"><svg-icon name="plus-circle" /> 危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>大尺寸按钮(large)(图标)</h3>
      <el-button size="large"><svg-icon name="plus-circle" /> 大尺寸按钮</el-button>
      <el-button type="primary" size="large"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="success" size="large"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info" size="large"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning" size="large"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger" size="large"><svg-icon name="plus-circle" /> 危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>小尺寸按钮(small)(图标)</h3>
      <el-button size="small"><svg-icon name="plus-circle" /> 小尺寸按钮</el-button>
      <el-button type="primary" size="small"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="success" size="small"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info" size="small"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning" size="small"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger" size="small"><svg-icon name="plus-circle" /> 危险按钮</el-button>
    </el-row>

    <el-row>
      <h3>朴素按钮</h3>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>朴素按钮(禁用状态)</h3>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>朴素按钮(加载中)</h3>
      <el-button plain loading>朴素按钮</el-button>
      <el-button type="primary" plain loading>主要按钮</el-button>
      <el-button type="success" plain loading>成功按钮</el-button>
      <el-button type="info" plain loading>信息按钮</el-button>
      <el-button type="warning" plain loading>警告按钮</el-button>
      <el-button type="danger" plain loading>危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>朴素按钮(图标)</h3>
      <el-button plain><svg-icon name="plus-circle" /> 默认按钮</el-button>
      <el-button type="primary" plain><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="success" plain><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info" plain><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning" plain><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger" plain><svg-icon name="plus-circle" /> 危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>大尺寸按钮(large)(图标)</h3>
      <el-button plain size="large"><svg-icon name="plus-circle" /> 大尺寸按钮</el-button>
      <el-button type="primary" plain size="large"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="success" plain size="large"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info" plain size="large"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning" plain size="large"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger" plain size="large"><svg-icon name="plus-circle" /> 危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>小尺寸按钮(small)(图标)</h3>
      <el-button plain size="small"><svg-icon name="plus-circle" /> 小尺寸按钮</el-button>
      <el-button type="primary" plain size="small"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="success" plain size="small"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info" plain size="small"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning" plain size="small"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger" plain size="small"><svg-icon name="plus-circle" /> 危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>Dropdown Button</h3>
      <el-dropdown>
        <el-button size="small">
          <svg-icon name="select" /> 按钮2
          <svg-icon name="caret-down" />
        </el-button>
        <el-dropdown-menu slot="dropdown" class="conventional-dropdown">
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ButtonDemo from '@/views/ui/components/Button.vue'

@Component({
  name: 'Button',
  components: {
    ButtonDemo,
  },
})
export default class extends Vue {}
</script>
