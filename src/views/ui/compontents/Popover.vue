<template>
  <div>
    <h3>常规用法</h3>
    <el-row type="flex" align="middle" justify="center" style="width: 1200px">
      <el-col :span="3">
        <el-popover placement="left" width="200" trigger="hover" content="需勾选表格项后进行批量删除">
          <el-button slot="reference" type="text">向左提示</el-button>
        </el-popover>
      </el-col>
      <el-col :span="3">
        <el-row>
          <el-popover placement="top" width="200" trigger="hover" content="需勾选表格项后进行批量删除">
            <el-button slot="reference" type="text">向上提示</el-button>
          </el-popover>
        </el-row>
        <el-row style="margin-top: 44px">
          <el-popover placement="bottom" width="200" trigger="hover" content="需勾选表格项后进行批量删除">
            <el-button slot="reference" type="text">向下提示</el-button>
          </el-popover>
        </el-row>
      </el-col>
      <el-col :span="1">
        <el-popover placement="right" width="200" trigger="hover" content="需勾选表格项后进行批量删除">
          <el-button slot="reference" type="text">向右提示</el-button>
        </el-popover>
      </el-col>
    </el-row>
    <h3>操作提示类型</h3>
    <el-row>
      <el-col :span="6">
        <el-popover placement="top-start" width="160" title="标题内容">
          <p>需勾选表格项后进行批量删除文字</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>

          <el-button slot="reference" type="text">编辑</el-button>
          <span slot="reference" class="sub-text">|</span>
        </el-popover>
        <el-popover v-model="visible" placement="top-start" width="160" title="标题内容">
          <p>需勾选表格项后进行批量删除文字</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>

          <el-button slot="reference" type="text">删除</el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover v-model="visible" placement="top-start" width="160">
          <p>需勾选表格项后进行批量删除文字</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>

          <el-button slot="reference" type="text">编辑</el-button>
          <span slot="reference" class="sub-text">|</span>
        </el-popover>
        <el-popover v-model="visible" placement="top-start" width="160">
          <p>需勾选表格项后进行批量删除文字</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
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
  name: 'UiPopover'
})
export default class extends Vue {
  public static title = {
    zh: '气泡提示',
    en: 'Popover'
  }

  public visible = false
}
</script>

<style lang="scss" scoped>
.sub-text {
  margin: 0 12px;
  color: #dddddd;
  font-size: 12px;
}
</style>
