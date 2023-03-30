<!--
 * @Author: 李志伟
 * @Date: 2023-03-27 16:31:09
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-03-30 18:06:53
 * @Description: Popover 气泡提示
-->
<template>
  <div>
    <h1>Popover 气泡提示</h1>
    <el-row>
      <h3>组件类型</h3>
      <!-- 文字型气泡 -->
      <h4>文字型气泡</h4>
      <p>气泡内容为纯文字，多用于消息提示或名称解释</p>
      <el-popover placement="top" trigger="hover" title="标题" popper-class="popover-test">
        这里显示内容这里显示内容这里显示内容这里显示内容
        <el-button slot="reference" class="reference">文字型气泡</el-button>
      </el-popover>
      <!-- 操作型气泡 -->
      <h4>操作型气泡</h4>
      <p>气泡内容包含按钮或链接，用于对用户干扰较少的操作流程，多用于二次确认或操作提示等</p>
      <el-popover placement="top" trigger="hover" title="标题" popper-class="popover-operate">
        这里显示内容这里显示内容这里显示内容这里显示内容
        <div class="btns">
          <el-button size="small">取消</el-button>
          <el-button type="primary" size="small">确认</el-button>
        </div>
        <el-button slot="reference" class="reference">包含按钮</el-button>
      </el-popover>
      <el-popover placement="top" trigger="hover" title="标题" popper-class="popover-operate">
        这里显示内容这里显示内容这里显示内容这里显示内容
        <el-link type="primary">链接文本</el-link>
        <el-button slot="reference" class="reference">包含链接</el-button>
      </el-popover>
      <!-- 带图标气泡 -->
      <h4>带图标气泡</h4>
      <p>气泡标题可携带图标，通过slot=title自定义标题内容实现</p>
      <el-popover placement="top" trigger="hover" title="标题" popper-class="popover-icon">
        <template slot="title"><svg-icon name="check-circle-fill"></svg-icon>标题</template>
        这里显示内容这里显示内容这里显示内容这里显示内容
        <el-button slot="reference" class="reference">带图标气泡</el-button>
      </el-popover>
    </el-row>
    <el-row>
      <h3>组件大小</h3>
      <p>Popover组件最小宽度为160px，最大宽度不限制（建议不超过360px）</p>
      <el-popover placement="top" trigger="hover" title="标题">
        内容很少
        <el-button slot="reference" class="reference">最小宽度</el-button>
      </el-popover>
      <el-popover placement="top" trigger="hover" title="标题" popper-class="popover-max-width">
        这里显示内容这里显示内容这里显示内容这里显示内容这里显示内容这里显示内容这里显示内容这里显示内容
        <el-button slot="reference" class="reference">最大宽度</el-button>
      </el-popover>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Popover',
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.reference {
  margin-right: 16px;
}
</style>

<style lang="scss">
.popover-test {
  width: 224px;
}

.popover-operate {
  width: 224px;
  .btns {
    margin-top: 16px;
    text-align: right;
  }
  .el-link {
    position: relative;
    bottom: 1px;
  }
}

.popover-icon {
  .svg-icon {
    font-size: $text-size-md;
    margin-right: $margin-2x;
    color: $color-success;
  }
}

.popover-max-width {
  max-width: 360px;
}
</style>
