<template>
  <div>
    <p>在单表格简单场景下默认展示20条，其他情况默认展示10条。</p>
    <p>
      一般情况下，表格最左列和最右列距离表格间距24，其他列进行平均排序。在列数较少又要占满整个页面的情况下，直接进行平均排布，最右列不特意靠右。
    </p>
    <h3>基础表格</h3>
    <div class="sub-table">
      <el-table :data="data.tableData">
        <el-table-column fixed prop="name" label="主机别名"> </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址"> </el-table-column>
        <el-table-column prop="cpu" label="CUP利用率(%)"> </el-table-column>
        <el-table-column prop="memory" label="内存利用率(%)"> </el-table-column>
        <el-table-column prop="disk" label="磁盘利用率(%)"> </el-table-column>
        <el-table-column prop="healthy" label="健康状态">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot="">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">监控指标</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <h3>可多选表格(2个以内操作)</h3>
    <div class="sub-table">
      <div style="margin-bottom: 20px;">
        <el-button type="primary" disabled>主按钮</el-button>
        <el-button disabled>次按钮</el-button>
      </div>
      <el-table ref="multipleTable" :data="data.tableData" tooltip-effect="dark">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column fixed prop="name" label="主机别名"> </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址"> </el-table-column>
        <el-table-column prop="cpu" label="CUP利用率(%)"> </el-table-column>
        <el-table-column prop="memory" label="内存利用率(%)"> </el-table-column>
        <el-table-column prop="disk" label="磁盘利用率(%)"> </el-table-column>
        <el-table-column prop="healthy" label="健康状态">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot="">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">监控指标</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <h3>可多选表格(3个以上操作)</h3>
    <div class="sub-table">
      <div style="margin-bottom: 20px;">
        <el-select value="" placeholder="操作已选项" style="width: 110px; height: 32px;">
          <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option> -->
        </el-select>
      </div>

      <el-table ref="multipleTable" tooltip-effect="dark" :data="data.tableData">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column fixed prop="name" label="主机别名"> </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址"> </el-table-column>
        <el-table-column prop="cpu" label="CUP利用率(%)"> </el-table-column>
        <el-table-column prop="memory" label="内存利用率(%)"> </el-table-column>
        <el-table-column prop="disk" label="磁盘利用率(%)"> </el-table-column>
        <el-table-column prop="healthy" label="健康状态">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot="">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">监控指标</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <h3>展示不全的表格</h3>
    <div class="sub-table">
      <el-table :data="data.tableData">
        <el-table-column fixed prop="name" label="主机别名" width="180"> </el-table-column>
        <el-table-column prop="status" label="实例状态" width="300"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="300"> </el-table-column>
        <el-table-column prop="cpu" label="CUP利用率(%)" width="300"> </el-table-column>
        <el-table-column prop="memory" label="内存利用率(%)" width="300"> </el-table-column>
        <el-table-column prop="disk" label="磁盘利用率(%)" width="300"> </el-table-column>
        <el-table-column prop="healthy" label="健康状态" width="300">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="185" fixed="right">
          <template slot="">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">监控指标</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <h3>横向展示列表</h3>
    <div class="sub-table">
      <el-table :data="tableData" :span-method="row" border>
        <el-table-column prop="dataFilter" label="数据筛选" width="230" align="center"> </el-table-column>
        <el-table-column prop="dataTime" label="数据时间字段" align="center"> </el-table-column>
        <el-table-column prop="key" label="主键" align="center" width="260"> </el-table-column>
        <el-table-column label="标签" align="center">
          <el-table-column label="标签单元" prop="tag1" align="center"> </el-table-column>
          <el-table-column label="标签集名称" prop="tag2" align="center"> </el-table-column>
          <el-table-column label="标签名称" prop="tag3" align="center"> </el-table-column>
          <el-table-column label="规则描述" prop="tag4" align="center" width="230"> </el-table-column>
        </el-table-column>
      </el-table>
    </div>

    <h3>小表格</h3>
    <div>
      <el-table :data="data.smallTable">
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
              <span class="sub-small-spot" :class="`sub-small-spot--${scope.row.status}`"></span>
              <span>{{ HEALTH[scope.row.status] }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import data from '../../../utils/mock'
import { HEALTH } from '@/dics/simpleTable'
@Component({
  name: 'UiTable'
})
export default class extends Vue {
  private data = data

  private HEALTH = HEALTH

  private tableData = [
    {
      dataFilter: 'user_age>6 and user_age<=9',
      dataTime: 'update_time',
      key: 'city_name, month, user_age',
      tag1: 'user_age',
      tag2: '年龄段',
      tag3: '儿童',
      tag4: 'user_age>6 and user_age<=9'
    },
    {
      dataFilter: 'user_age>6 and user_age<=9',
      dataTime: 'update_time',
      key: 'city_name, month, user_age',
      tag1: 'user_age',
      tag2: '年龄段',
      tag3: '少年',
      tag4: 'user_age>6 and user_age<=9'
    }
  ]

  public static title = {
    zh: '表格',
    en: 'Table'
  }

  private row({ rowIndex, columnIndex }) {
    if (rowIndex === 0 && columnIndex !== 5 && columnIndex !== 6) {
      return [2, 1]
    }
    if (rowIndex === 1 && columnIndex !== 5 && columnIndex !== 6) {
      return [0, 0]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  // width: 65%;
  margin: 24px 0;

  .cell {
    span {
      font-size: 12px;
    }

    .el-button--text:last-child:before {
      content: '|';
      color: #dddd;
      margin-right: 10px;
    }
  }
}

.sub-table:not(:last-child) {
  border-bottom: 1px solid #f1f1f1;
}

.sub-table {
  ::v-deep .el-input.el-input--medium.el-input--suffix {
    width: 110px;
    font-size: 12px;
  }
}

.sub-index {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #f0f2f5;
  text-align: center;
  line-height: 20px;
  color: #000;
  border-radius: 50%;
  font-size: 12px;
}

.sub-spot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;

  &--1 {
    background: #52c41a;
  }

  &--2 {
    background: #faad15;
  }

  &--3 {
    background: #f5212d;
  }

  &--4 {
    background: #1890ff;
  }

  &--5 {
    background: rgba(0, 0, 0, 30%);
  }
}

.sub-small-spot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;

  &--6 {
    background: rgba(115, 222, 179, 85%);
  }

  &--7 {
    background: #ff4948;
  }

  &--8 {
    background: #faad15;
  }

  &--9 {
    background: rgba(0, 0, 0, 28%);
  }
}
</style>
