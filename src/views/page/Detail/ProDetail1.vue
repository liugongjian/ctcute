<template>
  <el-card class="pro-detail1">
    <div class="detail-header">
      <div class="detail-header__left">
        <span class="tags-title">这是一个名称</span>
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          type="info"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="saveTagInput"
          v-model="inputValue"
          size="small"
          class="input-new-tag"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-tag v-else type="newtag" :disable-transitions="true" @click="showInput">+ 标签</el-tag>
      </div>
      <div class="detail-header__right">
        <button-group :data="buttonData" :max="2" />
      </div>
    </div>
    <el-tabs>
      <el-tab-pane label="选项一">
        <div class="header-title first-title">灰度发布升级策略</div>
        <div class="sub-table-horizon">
          <el-descriptions class="margin-top" :column="2" :size="size" border>
            <el-descriptions-item>
              <template slot="label"> 内部标识符 </template>
              Spark
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 标识符 </template>
              物理表
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 中文名称 </template>
              2018-04-24 18:00:00
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 英文名称 </template>
              2018-04-24 18:00:00 至 2019-04-24 18:00:00
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 语境</template>
              金融 科技 -T Tech Ui
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 版本 </template>
              2018-04-24 18:00:00 至 2019-04-24 18:00:00
            </el-descriptions-item>
            <el-descriptions-item :span="2">
              <template slot="label"> 同义名称 </template>
              30
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <el-card class="operate-card" shadow="never">
          <div slot="header">分批管理</div>
          <div class="operate-card__left">
            <div class="header-title second-title">第一批次</div>
            <el-table :data="tableData" border class="table">
              <el-table-column prop="id" label="可用区"></el-table-column>
              <el-table-column prop="name" label="编辑下发事件"></el-table-column>
              <el-table-column prop="status" label="状态">
                <span class="sub-origin">已完成</span>
              </el-table-column>
            </el-table>
            <div class="header-title third-title">手动第二批次</div>
            <el-table :data="tableData" border class="table">
              <el-table-column prop="id" label="可用区"></el-table-column>
              <el-table-column prop="name" label="编辑下发事件"></el-table-column>
              <el-table-column prop="status" label="状态">
                <span class="sub-origin">已完成</span>
              </el-table-column>
            </el-table>
            <el-button type="primary">手动执行升级</el-button>
            <el-button>版本回退</el-button>
          </div>
          <div class="operate-card__right">
            <div class="header-title forth-title">升级策略展览</div>
            <el-timeline class="sub-timeline">
              <el-timeline-item timestamp="第一批次" placement="top">
                <h4>内蒙电信集团 编排下次发布状态：<span class="sub-origin">成功</span></h4>
                <p>2021/04/14 23:56:11</p>
              </el-timeline-item>
              <el-timeline-item timestamp="灰度发布  自动升级：一个k8s集群  | 容器组：100个" placement="top">
                <el-table :data="tableData" border class="table">
                  <el-table-column prop="id" label="序号"></el-table-column>
                  <el-table-column prop="name" label="集群名称"></el-table-column>
                  <el-table-column prop="status" label="状态">
                    <span class="sub-origin">已完成</span>
                  </el-table-column>
                  <el-table-column prop="running" label="运行中"></el-table-column>
                  <el-table-column prop="start" label="启动中"></el-table-column>
                  <el-table-column prop="fail" label="失败"></el-table-column>
                  <el-table-column prop="sale" label="销售中"></el-table-column>
                  <el-table-column prop="unavailable" label="不可用"></el-table-column>
                  <el-table-column prop="unknown" label="未知"></el-table-column>
                </el-table>
              </el-timeline-item>
              <el-timeline-item timestamp="第二批次" placement="top">
                <h4>内蒙电信集团 编排下次发布状态：<span class="sub-origin">成功</span></h4>
                <p>2021/04/14 23:56:11</p>
              </el-timeline-item>
              <el-timeline-item timestamp="灰度发布  自动升级：一个k8s集群  | 容器组：100个" placement="top">
                <el-table :data="tableData" border class="table">
                  <el-table-column prop="id" label="序号"></el-table-column>
                  <el-table-column prop="name" label="集群名称"></el-table-column>
                  <el-table-column prop="status" label="状态">
                    <span class="sub-origin">已完成</span>
                  </el-table-column>
                  <el-table-column prop="running" label="运行中"></el-table-column>
                  <el-table-column prop="start" label="启动中"></el-table-column>
                  <el-table-column prop="fail" label="失败"></el-table-column>
                  <el-table-column prop="sale" label="销售中"></el-table-column>
                  <el-table-column prop="unavailable" label="不可用"></el-table-column>
                  <el-table-column prop="unknown" label="未知"></el-table-column>
                </el-table>
              </el-timeline-item>
              <el-timeline-item timestamp="升级结束" placement="top">
                <p>2021/04/14 23:56:11</p>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
      <el-tab-pane label="默认项">默认项</el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ButtonGroup from '@/components/CombinationButton/ButtonGroup.vue'
@Component({
  name: 'ProDetail1',
  components: { ButtonGroup },
})
export default class extends Vue {
  // 动态标签
  private dynamicTags = ['标签', '标签', '标签']
  // 按钮组名称
  private buttonData = ['操作一', '操作二', '操作三']
  // 新增标签input框是否可见
  private inputVisible = false
  // 新增标签input框输入值
  private inputValue = ''
  /**
   * 输入确认后添加标签
   */
  private handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.dynamicTags.push(inputValue)
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  /**
   * 点击新增标签 显示输入框
   */
  private showInput() {
    this.inputVisible = true
    this.$nextTick(() => {
      const saveTagInput: any = this.$refs.saveTagInput
      const saveTagInputRefs: any = saveTagInput.$refs
      saveTagInputRefs.input.focus()
    })
  }

  /**
   * 关闭标签
   */
  private handleClose(tag) {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
  }
}
</script>
