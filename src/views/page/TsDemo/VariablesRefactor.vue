<!--
 * @Author: 朱凌浩
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2022-07-18 14:09:19
 * @Description: TsDemo
-->
<template>
  <div>
    <el-card>
      <Table />
    </el-card>
    <el-card>
      <div class="sub-notification">
        <p>全局展示通知提醒信息</p>
        <h3>普通通知提醒</h3>
        <p>常规状态通常出现在页面的右上角</p>
        <el-row>
          <el-button
            @click="
              $notify({
                title: '通知',
                duration: 0,
                message:
                  '通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容',
                customClass: 'routine-tips',
              })
            "
          >
            常规信息
          </el-button>
        </el-row>
        <h3>带图标的通知提醒</h3>
        <p>有普通信息、成功信息、失败信息、警告信息四种icon</p>
        <el-row>
          <el-col :span="2">
            <el-button
              @click="
                $notify.info({
                  title: '通知的标题十个字以内',
                  duration: 0,
                  message:
                    '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
                  customClass: 'ordinary-tips',
                })
              "
            >
              普通信息
            </el-button>
          </el-col>
          <el-col :span="2">
            <el-button
              @click="
                $notify.success({
                  title: '通知的标题十个字以内',
                  duration: 0,
                  message:
                    '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
                  customClass: 'success-tips',
                })
              "
            >
              成功信息
            </el-button>
          </el-col>
          <el-col :span="2">
            <el-button
              @click="
                $notify.error({
                  title: '通知的标题十个字以内',
                  duration: 0,
                  message:
                    '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
                  customClass: 'error-tips',
                })
              "
            >
              失败信息
            </el-button>
          </el-col>
          <el-col :span="2">
            <el-button
              @click="
                $notify({
                  title: '通知的标题十个字以内',
                  duration: 0,
                  message:
                    '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
                  type: 'warning',
                  customClass: 'warning-tips',
                })
              "
            >
              警告信息
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card>
      <h1>MessageBox</h1>
      <el-button type="text" @click="openMessageBox">点击打开 Message Box</el-button>
    </el-card>
    <el-card>
      <h1>Link</h1>
      <div>
        <h2>基础用法</h2>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </div>
      <div>
        <h2>禁用状态</h2>
        <el-link disabled>默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" disabled>警告链接</el-link>
        <el-link type="danger" disabled>危险链接</el-link>
        <el-link type="info" disabled>信息链接</el-link>
      </div>
      <div>
        <h2>下划线</h2>
        <el-link :underline="false">无下划线</el-link>
        <el-link>有下划线</el-link>
      </div>
      <div>
        <h2>图标</h2>
        <el-link icon="el-icon-edit">编辑</el-link>
        <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
      </div>
    </el-card>
    <el-card>
      <h1>Tag</h1>
      <div class="tag-group">
        <h2>尺寸</h2>
        <el-tag closable>默认标签</el-tag>
        <el-tag size="large" closable>大标签</el-tag>
        <el-tag size="medium" closable>中等标签</el-tag>
        <el-tag size="small" closable>小型标签</el-tag>
        <el-tag size="mini" closable>超小标签</el-tag>
      </div>
      <div class="tag-group">
        <h2>Default</h2>
        <el-tag v-for="item in items" :key="item.label" :type="item.type" closable>
          {{ item.label }}
        </el-tag>
      </div>
      <div class="tag-group">
        <h2>Dark</h2>
        <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark" closable>
          {{ item.label }}
        </el-tag>
      </div>
      <div class="tag-group">
        <h2>Light</h2>
        <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="light" closable>
          {{ item.label }}
        </el-tag>
      </div>
      <div class="tag-group">
        <h2>Plain</h2>
        <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain" closable>
          {{ item.label }}
        </el-tag>
      </div>
    </el-card>
    <el-card>
      <el-select v-model="selectVal" size="large" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-select v-model="selectVal" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-select v-model="selectVal" size="small" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>

      <el-select v-model="selectVal" size="mini" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
    </el-card>
    <!-- <el-card class="demo-input">
      <div class="demo-input-suffix">
        <el-input v-model="input1" disabled placeholder="请选择日期" suffix-icon="el-icon-date"> </el-input>
        <el-input v-model="input2" placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input>
      </div>
      <div class="demo-input-suffix">
        <el-input v-model="input3" placeholder="请选择日期">
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <el-input v-model="input4" placeholder="请输入内容">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div>
        <el-input v-model="input1" placeholder="请输入内容">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div style="margin-top: 15px">
        <el-input v-model="input2" placeholder="请输入内容">
          <template slot="append">.com</template>
        </el-input>
      </div>
      <div style="margin-top: 15px">
        <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
          <el-select slot="prepend" v-model="select" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-input v-model="input1" size="large" placeholder="请输入内容" suffix-icon="el-icon-date"> </el-input>
      <el-input v-model="input2" size="medium" placeholder="请输入内容" suffix-icon="el-icon-date">
      </el-input>
      <el-input v-model="input3" size="small" placeholder="请输入内容" suffix-icon="el-icon-date"> </el-input>
      <el-input v-model="input4" size="mini" placeholder="请输入内容" suffix-icon="el-icon-date"> </el-input>
    </el-card> -->
    <el-card>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card>
      <h1>Button</h1>
      <el-row>
        <h2>默认按钮</h2>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>默认按钮(禁用状态)</h2>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>默认按钮(加载中)</h2>
        <el-button loading>默认按钮</el-button>
        <el-button type="primary" loading>主要按钮</el-button>
        <el-button type="success" loading>成功按钮</el-button>
        <el-button type="info" loading>信息按钮</el-button>
        <el-button type="warning" loading>警告按钮</el-button>
        <el-button type="danger" loading>危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>默认按钮(图标)</h2>
        <el-button><svg-icon name="plus-circle" /> 默认按钮</el-button>
        <el-button type="primary"><svg-icon name="plus-circle" /> 主要按钮</el-button>
        <el-button type="success"><svg-icon name="plus-circle" /> 成功按钮</el-button>
        <el-button type="info"><svg-icon name="plus-circle" /> 信息按钮</el-button>
        <el-button type="warning"><svg-icon name="plus-circle" /> 警告按钮</el-button>
        <el-button type="danger"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>大尺寸按钮(large)(图标)</h2>
        <el-button size="large"><svg-icon name="plus-circle" /> 大尺寸按钮</el-button>
        <el-button type="primary" size="large"><svg-icon name="plus-circle" /> 主要按钮</el-button>
        <el-button type="success" size="large"><svg-icon name="plus-circle" /> 成功按钮</el-button>
        <el-button type="info" size="large"><svg-icon name="plus-circle" /> 信息按钮</el-button>
        <el-button type="warning" size="large"><svg-icon name="plus-circle" /> 警告按钮</el-button>
        <el-button type="danger" size="large"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>小尺寸按钮(small)(图标)</h2>
        <el-button size="small"><svg-icon name="plus-circle" /> 小尺寸按钮</el-button>
        <el-button type="primary" size="small"><svg-icon name="plus-circle" /> 主要按钮</el-button>
        <el-button type="success" size="small"><svg-icon name="plus-circle" /> 成功按钮</el-button>
        <el-button type="info" size="small"><svg-icon name="plus-circle" /> 信息按钮</el-button>
        <el-button type="warning" size="small"><svg-icon name="plus-circle" /> 警告按钮</el-button>
        <el-button type="danger" size="small"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      </el-row>

      <el-row>
        <h2>朴素按钮</h2>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>朴素按钮(禁用状态)</h2>
        <el-button plain disabled>朴素按钮</el-button>
        <el-button type="primary" plain disabled>主要按钮</el-button>
        <el-button type="success" plain disabled>成功按钮</el-button>
        <el-button type="info" plain disabled>信息按钮</el-button>
        <el-button type="warning" plain disabled>警告按钮</el-button>
        <el-button type="danger" plain disabled>危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>朴素按钮(加载中)</h2>
        <el-button plain loading>朴素按钮</el-button>
        <el-button type="primary" plain loading>主要按钮</el-button>
        <el-button type="success" plain loading>成功按钮</el-button>
        <el-button type="info" plain loading>信息按钮</el-button>
        <el-button type="warning" plain loading>警告按钮</el-button>
        <el-button type="danger" plain loading>危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>朴素按钮(图标)</h2>
        <el-button plain><svg-icon name="plus-circle" /> 默认按钮</el-button>
        <el-button type="primary" plain><svg-icon name="plus-circle" /> 主要按钮</el-button>
        <el-button type="success" plain><svg-icon name="plus-circle" /> 成功按钮</el-button>
        <el-button type="info" plain><svg-icon name="plus-circle" /> 信息按钮</el-button>
        <el-button type="warning" plain><svg-icon name="plus-circle" /> 警告按钮</el-button>
        <el-button type="danger" plain><svg-icon name="plus-circle" /> 危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>大尺寸按钮(large)(图标)</h2>
        <el-button plain size="large"><svg-icon name="plus-circle" /> 大尺寸按钮</el-button>
        <el-button type="primary" plain size="large"><svg-icon name="plus-circle" /> 主要按钮</el-button>
        <el-button type="success" plain size="large"><svg-icon name="plus-circle" /> 成功按钮</el-button>
        <el-button type="info" plain size="large"><svg-icon name="plus-circle" /> 信息按钮</el-button>
        <el-button type="warning" plain size="large"><svg-icon name="plus-circle" /> 警告按钮</el-button>
        <el-button type="danger" plain size="large"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>小尺寸按钮(small)(图标)</h2>
        <el-button plain size="small"><svg-icon name="plus-circle" /> 小尺寸按钮</el-button>
        <el-button type="primary" plain size="small"><svg-icon name="plus-circle" /> 主要按钮</el-button>
        <el-button type="success" plain size="small"><svg-icon name="plus-circle" /> 成功按钮</el-button>
        <el-button type="info" plain size="small"><svg-icon name="plus-circle" /> 信息按钮</el-button>
        <el-button type="warning" plain size="small"><svg-icon name="plus-circle" /> 警告按钮</el-button>
        <el-button type="danger" plain size="small"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      </el-row>
      <el-row>
        <h2>Dropdown Button</h2>
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
    </el-card>
  </div>
</template>
<script lang="ts">
/**
 * TypeScript + Vue 开发示例
 * 本示例涉及到Data, Props, VModel, Computed Property, Methods, Lifecycle Hooks, Watcher, Emit, Mixins, Provide/Inject, Refs, Vuex的用法
 * 详细文档：https://github.com/kaorun343/vue-property-decorator
 */
// 引入Vue TypeScript组件包
import { Component, Vue } from 'vue-property-decorator'
import Table from '@/views/ui/components/Table.vue'

@Component({
  name: 'TypeScriptDemo',
  components: {
    Table,
  },
})
export default class extends Vue {
  private activeName = '1'
  private cities = ['上海', '北京', '广州', '深圳']
  private checkboxGroup1 = ['上海']
  private selectVal = '1'
  private items = [
    { type: '', label: '标签一' },
    { type: 'success', label: '标签二' },
    { type: 'info', label: '标签三' },
    { type: 'danger', label: '标签四' },
    { type: 'warning', label: '标签五' },
  ]

  private openMessageBox() {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        })
      })
  }
}
</script>
<style lang="scss" scoped>
.demo-input {
  .el-input {
    width: 800px;
    margin: 10px;
  }
}
</style>
