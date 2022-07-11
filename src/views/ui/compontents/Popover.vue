<template>
  <div class="ui-popover">
    <h3>常规用法</h3>
    <div class="popover-top">
      <el-popover placement="top" trigger="hover">
        <div class="popover-top-prompt">
          <span class="popover-top-text">需勾选表格项后删除</span><el-link type="primary">链接文本</el-link>
        </div>
        <el-button slot="reference" type="text">向上提示带链接</el-button>
      </el-popover>
      <el-popover placement="top" trigger="hover" content="需勾选表格项后进行批量删除">
        <el-button slot="reference" type="text">向上提示</el-button>
      </el-popover>
    </div>
    <div class="popover-left">
      <el-popover placement="left" trigger="hover" content="需勾选表格项后进行批量删除">
        <el-button slot="reference" type="text">向左提示</el-button>
      </el-popover>
      <el-popover placement="right" trigger="hover" content="需勾选表格项后进行批量删除">
        <el-button slot="reference" type="text">向右提示</el-button>
      </el-popover>
    </div>
    <div class="popover-bottom">
      <el-popover placement="bottom" trigger="hover" content="需勾选表格项后进行批量删除">
        <el-button slot="reference" type="text">向下提示</el-button>
      </el-popover>
    </div>
    <h3>操作提示类型</h3>
    <el-row class="operation-popover">
      <el-col :span="6">
        <el-popover v-model="visible" placement="top-start" title="标题内容" popper-class="operation-content">
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button class="cancel-popover" size="small" @click="visible = false"> 取 消 </el-button>
            <el-button type="primary" class="determine-popover" size="small" @click="visible = false">
              确 定
            </el-button>
          </div>

          <el-button slot="reference" type="text" class="sub-edit" size="small">编辑</el-button>
        </el-popover>

        <el-popover
          v-model="visible1"
          placement="top-start"
          title="标题内容"
          popper-class="operation-content"
        >
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button class="cancel-popover" size="small" @click="visible1 = false"> 取 消 </el-button>
            <el-button type="primary" class="determine-popover" size="small" @click="visible1 = false">
              确 定
            </el-button>
          </div>
          <el-button slot="reference" type="text" size="small">删除</el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover v-model="visible2" placement="top">
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button class="cancel-popover" size="small" @click="visible2 = false"> 取 消 </el-button>
            <el-button type="primary" class="determine-popover" size="small" @click="visible2 = false">
              确 定
            </el-button>
          </div>
          <el-button slot="reference" type="text" class="sub-edit" size="small">编辑</el-button>
        </el-popover>
        <el-popover v-model="visible3" placement="top-start">
          <p>需勾选表格项后进行批量删除文字</p>
          <div class="operation-button">
            <el-button class="cancel-popover" size="small" @click="visible3 = false"> 取 消 </el-button>
            <el-button type="primary" class="determine-popover" size="small" @click="visible3 = false">
              确 定
            </el-button>
          </div>

          <el-button slot="reference" type="text" size="small">删除</el-button>
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

  private visible = false
  private visible1 = false
  private visible2 = false
  private visible3 = false
}
</script>

<style lang="scss" scoped>
.popover-top-text {
  margin-right: 24px;
}

p {
  font-size: $text-size-primary;
  margin-top: 15px;
}

.operation-button {
  text-align: right;
  margin: 0;

  .el-button + .el-button {
    margin-left: 12px;
  }
}

.cancel-popover {
  border: 1px solid $border-color-primary;
}

.determine-popover {
  padding: 8px 20px;
}

.sub-edit:after {
  content: '|';
  color: $border-color-primary;
  font-size: 16px;
  margin: 0 10px;
}

.popover-top {
  width: 306px;
  display: flex;
  justify-content: space-between;
  margin-left: 360px;
}

.popover-left {
  width: 574px;
  display: flex;
  justify-content: space-between;
  margin: 24px 0 24px 220px;
}

.popover-bottom {
  margin-left: 474px;
}

.el-popover.el-popper.operation-content {
  padding: 24px 16px !important;
}
</style>
