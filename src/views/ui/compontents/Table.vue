<template>
  <div>
    <p>在单表格简单场景下默认展示20条，其他情况默认展示10条。</p>
    <p>
      一般情况下，表格最左列和最右列距离表格间距24，其他列进行平均排序。在列数较少又要占满整个页面的情况下，直接进行平均排布，最右列不特意靠右。
    </p>
    <h3>基础表格</h3>
    <el-table :data="data.tableData" style="width: 65%">
      <el-table-column fixed prop="name" label="主机别名" width="180"> </el-table-column>
      <el-table-column prop="status" label="实例状态" width="180"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" width="180"> </el-table-column>
      <el-table-column prop="cpu" label="CUP利用率(%)" width="180"> </el-table-column>
      <el-table-column prop="memory" label="内存利用率(%)" width="180"> </el-table-column>
      <el-table-column prop="disk" label="磁盘利用率(%)" width="180"> </el-table-column>
      <el-table-column prop="healthy" label="健康状态" width="180">
        <template slot-scope="scope">
          <div>
            <span
              :class="
                scope.row.healthy === '健康'
                  ? 'sub-spot success'
                  : scope.row.healthy === '警告'
                  ? 'sub-spot warning'
                  : scope.row.healthy === '危险'
                  ? 'sub-spot error'
                  : scope.row.healthy === '进行中'
                  ? 'sub-spot doing'
                  : 'sub-spot'
              "
            ></span>
            <span>{{ scope.row.healthy }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
          <span style="color: #dddddd; margin: 0 10px">|</span>
          <el-button type="text" size="small">监控指标</el-button>
        </template>
      </el-table-column>
    </el-table>

    <h3>可多选表格(2个以内操作)</h3>
    <div style="margin-bottom: 20px">
      <el-button type="primary" disabled>主按钮</el-button>
      <el-button disabled>次按钮</el-button>
    </div>
    <el-table ref="multipleTable" :data="data.tableData" tooltip-effect="dark" style="width: 65%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column fixed prop="name" label="主机别名" width="100"> </el-table-column>
      <el-table-column prop="status" label="实例状态" width="185"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" width="185"> </el-table-column>
      <el-table-column prop="cpu" label="CUP利用率(%)" width="185"> </el-table-column>
      <el-table-column prop="memory" label="内存利用率(%)" width="185"> </el-table-column>
      <el-table-column prop="disk" label="磁盘利用率(%)" width="185"> </el-table-column>
      <el-table-column prop="healthy" label="健康状态" width="185">
        <template slot-scope="scope">
          <div>
            <span
              :class="
                scope.row.healthy === '健康'
                  ? 'sub-spot success'
                  : scope.row.healthy === '警告'
                  ? 'sub-spot warning'
                  : scope.row.healthy === '危险'
                  ? 'sub-spot error'
                  : scope.row.healthy === '进行中'
                  ? 'sub-spot doing'
                  : 'sub-spot'
              "
            ></span>
            <span>{{ scope.row.healthy }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="165">
        <template>
          <el-button type="text" size="small">详情</el-button>
          <span style="color: #dddddd; margin: 0 10px">|</span>
          <el-button type="text" size="small">监控指标</el-button>
        </template>
      </el-table-column>
    </el-table>

    <h3>可多选表格(3个以上操作)</h3>
    <div style="margin-bottom: 20px">
      <el-select value="" placeholder="操作已选项" style="width: 110px; height: 32px">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option> -->
      </el-select>
    </div>
    <el-table ref="multipleTable" tooltip-effect="dark" style="width: 65%" :data="data.tableData">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column fixed prop="name" label="主机别名" width="175"> </el-table-column>
      <el-table-column prop="status" label="实例状态" width="175"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" width="175"> </el-table-column>
      <el-table-column prop="cpu" label="CUP利用率(%)" width="175"> </el-table-column>
      <el-table-column prop="memory" label="内存利用率(%)" width="175"> </el-table-column>
      <el-table-column prop="disk" label="磁盘利用率(%)" width="175"> </el-table-column>
      <el-table-column prop="healthy" label="健康状态" width="175">
        <template slot-scope="scope">
          <div>
            <span
              :class="
                scope.row.healthy === '健康'
                  ? 'sub-spot success'
                  : scope.row.healthy === '警告'
                  ? 'sub-spot warning'
                  : scope.row.healthy === '危险'
                  ? 'sub-spot error'
                  : scope.row.healthy === '进行中'
                  ? 'sub-spot doing'
                  : 'sub-spot'
              "
            ></span>
            <span>{{ scope.row.healthy }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="175">
        <template>
          <el-button type="text" size="small">详情</el-button>
          <span style="color: #dddddd; margin: 0 10px">|</span>
          <el-button type="text" size="small">监控指标</el-button>
        </template>
      </el-table-column>
    </el-table>

    <h3>展示不全的表格</h3>
    <el-table style="width: 65%" :data="data.tableData">
      <el-table-column fixed prop="name" label="主机别名" width="190"> </el-table-column>
      <el-table-column prop="status" label="实例状态" width="190"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" width="190"> </el-table-column>
      <el-table-column prop="cpu" label="CUP利用率(%)" width="190"> </el-table-column>
      <el-table-column prop="memory" label="内存利用率(%)" width="190"> </el-table-column>
      <el-table-column prop="disk" label="磁盘利用率(%)" width="190"> </el-table-column>
      <el-table-column prop="healthy" label="健康状态" width="190">
        <template slot-scope="scope">
          <div>
            <span
              :class="
                scope.row.healthy === '健康'
                  ? 'sub-spot success'
                  : scope.row.healthy === '警告'
                  ? 'sub-spot warning'
                  : scope.row.healthy === '危险'
                  ? 'sub-spot error'
                  : scope.row.healthy === '进行中'
                  ? 'sub-spot doing'
                  : 'sub-spot'
              "
            ></span>
            <span>{{ scope.row.healthy }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="185" fixed="right">
        <template>
          <el-button type="text" size="small">详情</el-button>
          <span style="color: #dddddd; margin: 0 10px">|</span>
          <el-button type="text" size="small">监控指标</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <h3>横向展示列表</h3>
    <el-table style="width: 100%">
      <el-table-column prop="数据筛选" label="数据筛选" width="150"> </el-table-column>
      <el-table-column prop="数据时间字段" label="数据时间字段" width="150"> </el-table-column>
      <el-table-column prop="主键" label="主键" width="150"> </el-table-column>
      <el-table-column label="标签">
        <el-table-column prop="name" label="标签单元" width="120"> </el-table-column>
        <el-table-column prop="name" label="标签集名称" width="120"> </el-table-column>
        <el-table-column prop="name" label="标签名称" width="120"> </el-table-column>
        <el-table-column prop="name" label="规则描述" width="120"> </el-table-column>
      </el-table-column>
    </el-table>
    <h3>纵向展示列表</h3> -->
    <h3>小表格</h3>
    <el-table style="width: 65%" :data="data.smallTable">
      <el-table-column label="排行">
        <template slot-scope="scope">
          <span class="sub-index">{{ scope.$index }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="工作流名称"> </el-table-column>
      <el-table-column prop="time" label="耗时"> </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <div>
            <span
              :class="
                scope.row.status === '成功'
                  ? 'sub-small-spot success'
                  : scope.row.status === '暂停'
                  ? 'sub-small-spot warning'
                  : scope.row.status === '失败'
                  ? 'sub-small-spot error'
                  : 'sub-small-spot'
              "
            ></span>
            <span>{{ scope.row.status }}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import data from "../../../utils/mock"
@Component({
  name: "UiTable",
})
export default class extends Vue {
  public data() {
    return {
      data,
    }
  }
  public static title = {
    zh: "表格",
    en: "Table",
  }
}
</script>

<style lang="scss" scoped>
.sub-index {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #f0f2f5;
  text-align: center;
  line-height: 20px;
  color: #000000;
  border-radius: 50%;
  font-size: 12px;
}
.sub-spot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
  background: rgba(0, 0, 0, 0.3);
  &.success {
    background: #52c41a;
  }
  &.warning {
    background: #faad15;
  }
  &.error {
    background: #f5212d;
  }
  &.doing {
    background: #1890ff;
  }
}
.sub-small-spot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
  background: rgba(0, 0, 0, 0.28);
  &.success {
    background: rgba(115, 222, 179, 0.85);
  }
  &.warning {
    background: #faad15;
  }
  &.error {
    background: #ff4948;
  }
}
</style>