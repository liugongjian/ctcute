<template>
  <div class="ui-popover">
    <h3>常规用法</h3>
    <el-row class="popover-top">
      <el-col :span="5">
        <el-popover placement="top" trigger="hover" :open-delay="1000">
          <div class="popover-top-prompt">
            <span class="popover-top-text">需勾选表格项后删除</span><el-button type="text">链接文本</el-button>
          </div>
          <el-button slot="reference" type="text">向上提示带链接</el-button>
        </el-popover>
      </el-col>
      <el-col :span="3">
        <el-popover placement="top" trigger="hover" content="需勾选表格项后进行批量删除">
          <el-button slot="reference" type="text">向上提示</el-button>
        </el-popover>
      </el-col>
    </el-row>
    <el-row class="popover-left">
      <el-col :span="11">
        <el-popover placement="left" trigger="hover" content="需勾选表格项后进行批量删除">
          <el-button slot="reference" type="text">向左提示</el-button>
        </el-popover>
      </el-col>
      <el-col :span="3">
        <el-popover placement="right" trigger="hover" content="需勾选表格项后进行批量删除">
          <el-button slot="reference" type="text">向右提示</el-button>
        </el-popover>
      </el-col>
    </el-row>
    <el-row class="popover-bottom">
      <el-popover placement="bottom" trigger="hover" content="需勾选表格项后进行批量删除">
        <el-button slot="reference" type="text">向下提示</el-button>
      </el-popover>
    </el-row>
    <h3>操作提示类型</h3>
    <el-row class="operation-popover">
      <el-col :span="6">
        <el-popover placement="top-start" title="标题内容" popper-class="operation-content">
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button size="mini" type="text">取消</el-button>
            <el-button type="primary" size="mini">确定</el-button>
          </div>

          <el-button slot="reference" type="text" class="sub-edit">编辑</el-button>
        </el-popover>

        <el-popover placement="top-start" title="标题内容" popper-class="operation-content">
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button size="mini" type="text">取消</el-button>
            <el-button type="primary" size="mini">确定</el-button>
          </div>
          <el-button slot="reference" type="text">删除</el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover placement="top-start" popper-class="operation-content">
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button size="mini" type="text">取消</el-button>
            <el-button type="primary" size="mini">确定</el-button>
          </div>

          <el-button slot="reference" type="text" class="sub-edit">编辑</el-button>
        </el-popover>
        <el-popover placement="top-start" popper-class="operation-content">
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button size="mini" type="text">取消</el-button>
            <el-button type="primary" size="mini">确定</el-button>
          </div>

          <el-button slot="reference" type="text">删除</el-button>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiPopover',
})
export default class extends Vue {
  public static title = {
    zh: '气泡提示',
    en: 'Popover',
  }
}
</script>

<style lang="scss" scoped>
.operation-content.el-popover.el-popper {
  ::v-deep.el-popover__title {
    font-size: 12px !important;
  }
  p {
    font-size: 12px;
  }
}
.popover-top-text {
  margin-right: 24px;
}
.operation-button {
  text-align: right;
  margin: 0;
}

.sub-edit::after {
  content: '|';
  color: #dddddd;
  font-size: 16px;
  margin: 0 10px;
}
.popover-top {
  margin-left: 360px;
}
.popover-left {
  margin-left: 220px;
}
.popover-bottom {
  margin-left: 474px;
}
</style>
