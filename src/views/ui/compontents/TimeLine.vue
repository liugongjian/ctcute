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
    <div class="timeline-content">
      <el-timeline>
        <el-timeline-item timestamp="第一批次" placement="top">
          <h4>内蒙电信集团 编排下次发布状态：<span class="sub-origin">成功</span></h4>
          <p>2021/04/14 23:56:11</p>
        </el-timeline-item>
        <el-timeline-item timestamp="灰度发布  自动升级：一个k8s集群  | 容器组：100个" placement="top">
          <div class="sub-complex">
            <span>序号</span>
            <el-divider direction="vertical"></el-divider>
            <span>集群名称</span>
            <el-divider direction="vertical"></el-divider>
            <span>状态</span>
            <el-divider direction="vertical"></el-divider>
            <span>进行中</span>
            <el-divider direction="vertical"></el-divider>
            <span>启动中</span>
            <el-divider direction="vertical"></el-divider>
            <span>失败</span>
            <el-divider direction="vertical"></el-divider>
            <span>销售中</span>
            <el-divider direction="vertical"></el-divider>
            <span>不可用</span>
            <el-divider direction="vertical"></el-divider>
            <span>未知 </span>
          </div>
          <div class="sub-esay">
            <span>1</span>
            <span>内蒙电信</span>
            <span class="sub-origin">已完成</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="第二批次" placement="top">
          <h4>内蒙电信集团 编排下次发布状态：<span class="sub-origin">成功</span></h4>
          <p>2021/04/14 23:56:11</p>
        </el-timeline-item>
        <el-timeline-item timestamp="灰度发布  自动升级：一个k8s集群  | 容器组：100个" placement="top">
          <div class="sub-complex">
            <span>序号</span>
            <el-divider direction="vertical"></el-divider>
            <span>集群名称</span>
            <el-divider direction="vertical"></el-divider>
            <span>状态</span>
            <el-divider direction="vertical"></el-divider>
            <span>进行中</span>
            <el-divider direction="vertical"></el-divider>
            <span>启动中</span>
            <el-divider direction="vertical"></el-divider>
            <span>失败</span>
            <el-divider direction="vertical"></el-divider>
            <span>销售中</span>
            <el-divider direction="vertical"></el-divider>
            <span>不可用</span>
            <el-divider direction="vertical"></el-divider>
            <span>未知 </span>
          </div>
          <div class="sub-esay">
            <span>1</span>
            <span>内蒙电信</span>
            <span class="sub-origin">已完成</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
          </div>
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
}
</script>

<style lang="scss" scoped>
.timeline-content {
  margin-top: 24px;
  h4 {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
  }
  ::v-deep.el-divider--vertical {
    color: #dddd;
  }
}
.sub-complex {
  width: 693px;
  height: 42px;
  background: #ffffff;
  box-shadow: inset 0 1px 0 0 #eeeeee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;
  span {
    font-weight: bold;
    display: block;
    width: 90px;
    text-align: center;
  }
}
.sub-easy {
  width: 693px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    width: 70px;
    display: block;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    font-size: 12px;
    vertical-align: middle;
  }
}
.sub-origin::before {
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
