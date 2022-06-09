<template>
  <div class="sub-collapse">
    <h3>折叠面板</h3>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="标题" name="1">
        <div>
          我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容，我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容
        </div>
      </el-collapse-item>
      <el-collapse-item title="标题" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="失效标题" name="3" disabled>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
    </el-collapse>
    <h3>折叠标题（展开后内容不包括在面板里）</h3>
    <div class="collapse-notcontent">
      <el-collapse v-model="activeNames1">
        <el-collapse-item title="小标题" name="1">
          <div>
            我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容，我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容
          </div>
        </el-collapse-item>
        <el-collapse-item title="小标题" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="失效标题" name="3" disabled>
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiCollapse'
})
export default class extends Vue {
  public static title = {
    zh: '折叠',
    en: 'Collapse'
  }

  private activeNames = ['1']
  private activeNames1 = ['1']
}
</script>

<style lang="scss" scoped>
.sub-collapse {
  .el-collapse {
    width: 638px;
    border: none;
    ::v-deep.el-collapse-item.is-disabled .el-collapse-item__header {
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
    ::v-deep.el-collapse-item__header {
      height: 36px;
      font-family: PingFangSC-Medium;
      background: #fafafa;
      border: 1px solid #eeeeee;
      color: rgba(0, 0, 0, 0.9);
      font-weight: bold;
      font-size: 12px;
      margin-top: 24px;
      padding-left: 36px;
      position: relative;
      .el-collapse-item__arrow {
        position: absolute;
        left: 16px;
        color: #000000;
      }
    }
    ::v-deep.el-collapse-item__content {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 20px;
      padding: 10px;
      border: 1px solid #f1f1f1;
      border-top: none;
    }
  }
  .collapse-notcontent {
    ::v-deep.el-collapse-item__content {
      display: none;
    }
  }
}
</style>
