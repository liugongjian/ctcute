<template>
  <div class="sub-timeline">
    <h3>常规样式</h3>
    <div class="timeline-content">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <h3>复杂样式</h3>
    <div class="timeline-content sub-complex">
      <el-timeline>
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
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTimeline',
})
export default class extends Vue {
  public static title = {
    zh: '时间轴',
    en: 'Timeline',
  }

  private activities = [
    {
      content: 'Create a services site 2015-09-01',
      type: 'primary',
    },
    {
      content: 'Create a services site 2015-09-01',
      type: 'primary',
    },
    {
      content: 'Create a services site 2015-09-01',
      type: 'primary',
    },
    {
      type: 'primary',
      content: 'Create a services site 2015-09-01',
    },
  ]

  private tableData = [
    {
      id: 1,
      name: '内蒙电信',
      status: 1,
      running: 2,
      start: 2,
      fail: 2,
      sale: 2,
      unavailable: 2,
      unknown: 2,
    },
  ]
}
</script>

<style lang="scss" scoped>
.timeline-content {
  margin-top: 24px;

  h4 {
    font-size: 12px;
    color: rgba(0, 0, 0, 65%);
    margin-top: 8px;
    margin-bottom: 0 !important;
  }

  p {
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 0 !important;
  }

  .table {
    margin: 8px 0 0 !important;
  }
}

.sub-complex {
  ::v-deep .el-timeline-item {
    padding-bottom: 16px;
  }
}

.sub-origin:before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #52c41a;
  margin-right: 5px;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
