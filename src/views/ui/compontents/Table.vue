<template>
  <div>
    <p>在单表格简单场景下默认展示20条，其他情况默认展示10条。</p>
    <p>
      一般情况下，表格最左列和最右列距离表格间距24，其他列进行平均排序。在列数较少又要占满整个页面的情况下，直接进行平均排布，最右列不特意靠右。
    </p>
    <h3>基础表格</h3>
    <div class="sub-table">
      <el-table :data="data.tableData" border>
        <el-table-column prop="name" label="主机别名" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis name-primary" :title="scope.row.name">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px;">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis" :title="scope.row.description">{{ scope.row.description }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="healthy" label="健康状态">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="190px">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="bt-operation" @click="handleClick(scope.$index, scope.row)">挂载</el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退订</el-dropdown-item>
                <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
                <el-dropdown-item>创建</el-dropdown-item>
                <el-dropdown-item disabled>Disabled</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        :current-page="2"
        :page-sizes="pageSizeOptions"
        background
        :page-size="20"
        layout="slot, total, prev, pager, next"
        :total="total"
      >
        <el-select v-model="value" placeholder="请选择" popper-class="custom-select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-pagination>
    </div>

    <h3>可多选表格(2个以内操作)</h3>
    <div class="sub-table">
      <div style="margin-bottom: 16px;">
        <el-button type="primary" :disabled="!multipleSelection.length" size="small">主按钮</el-button>
        <el-button :disabled="!multipleSelection.length" size="small">次按钮</el-button>
      </div>
      <el-table ref="multipleTable" :data="data.tableData10" tooltip-effect="dark" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" width="150px" label="主机别名">
          <template slot-scope="scope">
            <span class="text-ellipsis name-primary" style="width: 100%;">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px;">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis" :title="scope.row.description">{{ scope.row.description }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="healthy" label="健康状态">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="190px">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="bt-operation" @click="handleClick(scope.$index, scope.row)">挂载</el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退订</el-dropdown-item>
                <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
                <el-dropdown-item>创建</el-dropdown-item>
                <el-dropdown-item disabled>Disabled</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        :current-page="2"
        :page-sizes="pageSizeOptions"
        background
        :page-size="10"
        layout="slot, total, prev, pager, next"
        :total="100"
      >
        <el-select v-model="value" placeholder="请选择" popper-class="custom-select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-pagination>
    </div>

    <h3>可多选表格(3个以上操作)</h3>
    <div class="sub-table">
      <div style="margin-bottom: 20px;">
        <el-select v-model="selectedCount" placeholder="请选择" popper-class="select-field">
          <el-option> 续订 </el-option>
          <el-option> 退订 </el-option>
          <el-option> 创建 </el-option>
          <el-option disabled> Disabled </el-option>
        </el-select>
      </div>
      <el-table ref="multipleTable" tooltip-effect="dark" :data="data.tableData10" border @selection-change="handleSelectionChangeOver3">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="主机别名">
          <template slot-scope="scope">
            <span class="text-ellipsis name-primary" style="width: 100%;">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px">2022-05-20 18:00:05 </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px;">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis" :title="scope.row.description">{{ scope.row.description }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="healthy" label="健康状态">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="190px">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="bt-operation" @click="handleClick(scope.$index, scope.row)">挂载</el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退订</el-dropdown-item>
                <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
                <el-dropdown-item>创建</el-dropdown-item>
                <el-dropdown-item disabled>Disabled</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        :current-page="2"
        :page-sizes="pageSizeOptions"
        background
        :page-size="10"
        layout="slot, total, prev, pager, next"
        :total="100"
      >
        <el-select v-model="value" placeholder="请选择" popper-class="custom-select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-pagination>
    </div>

    <h3>展示不全的表格</h3>
    <div class="sub-table">
      <el-table :data="data.tableData10" border>
        <el-table-column type="selection" width="55" fixed> </el-table-column>
        <el-table-column prop="name" label="主机别名" width="120">
          <template slot-scope="scope">
            <span class="text-ellipsis name-primary" style="width: 100%;">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="300px"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px;">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis" :title="scope.row.description">{{ scope.row.description }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="healthy" label="健康状态">
          <template slot-scope="scope">
            <div>
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="190px" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="bt-operation" @click="handleClick(scope.$index, scope.row)">挂载</el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退订</el-dropdown-item>
                <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
                <el-dropdown-item>创建</el-dropdown-item>
                <el-dropdown-item disabled>Disabled</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        :current-page="2"
        :page-sizes="pageSizeOptions"
        background
        :page-size="10"
        layout="slot, total, prev, pager, next"
        :total="100"
      >
        <el-select v-model="value" placeholder="请选择" popper-class="custom-select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-pagination>
    </div>
    <h3>横向展示列表</h3>
    <div class="sub-table-horizon" border>
      <el-table :data="tableData" :span-method="row">
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
      <el-table :data="data.smallTable" border size="small">
        <el-table-column label="排行">
          <template slot-scope="scope">
            <span :class="scope.$index <3 ? 'sub-index sub-index-top3': 'sub-index'">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="工作流名称">
          <template slot-scope="scope">
            <span class="text-ellipsis" style="width: 100%;" :title="scope.row.name">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
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
      <el-pagination
        class="pagination"
        :current-page="2"
        :page-sizes="pageSizeOptions"
        background
        :page-size="pageSize"
        layout="slot, total, prev, pager, next"
        :total="10"
      >
        <el-select v-model="value" placeholder="请选择" popper-class="custom-select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-pagination>
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
  private multipleSelection = []
  private multipleSelectionOver3 = []
  private selectedCount = ''
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

  private pageSize = 20

  private pageNum = 3

  private pageSizeOptions = [10, 20, 30, 40]

  private total = 153

  private value = '10'

  private options = [
    {
      value: '选项1',
      label: '10',
    },
    {
      value: '选项2',
      label: '20',
    },
    {
      value: '选项3',
      label: '30',
    },
    {
      value: '选项4',
      label: '40',
    },
  ]

  private row({ rowIndex, columnIndex }) {
    if (rowIndex === 0 && columnIndex !== 5 && columnIndex !== 6) {
      return [2, 1]
    }
    if (rowIndex === 1 && columnIndex !== 5 && columnIndex !== 6) {
      return [0, 0]
    }
  }

  private handleSelectionChange(val: []) {
    this.multipleSelection = val
    console.log(this.multipleSelection)
  }

  private handleSelectionChangeOver3(val: []) {
    this.multipleSelectionOver3 = val
    console.log(this.multipleSelectionOver3)
    this.selectedCount = `已选项(${val.length})`
  }

  private handleClick(index, row) {
    console.log(index, row)
  }
}

</script>

<style lang="scss" scoped>
.el-table {
  // width: 65%;
  margin: 24px 0;

  .text-ellipsis {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    width: 100%;
  }

  .name-primary {
    color: $color-master-1;
  }

  .cell {
    span {
      font-size: 12px;
    }

    .el-button--text:last-child:before {
      content: '|';
      color: $border-color-primary;
      margin-right: 10px;
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    color: $color-master-1;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-table__fixed {
    height: 1000px;
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

.sub-table-horizon {
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 24px;
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
  margin-left: 10px;
}

.sub-index-top3 {
  color: #fff;
  background: $color-master-1;
}

.pagination {
  text-align: right;
  margin-bottom: 24px;
}

.bt-operation {
  color: $color-master-1;
}

.sub-spot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;

  &--1 {
    background: $color-status-success;
  }

  &--2 {
    background: $color-status-warning;
  }

  &--3 {
    background: $color-status-danger;
  }

  &--4 {
    background: $color-status-info;
  }

  &--5 {
    background: $disabled-color;
  }
}

.sub-small-spot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;

  &--6 {
    background: $color-status-success;
  }

  &--7 {
    background: $color-status-danger;
  }

  &--8 {
    background: $color-status-warning;
  }

  &--9 {
    background: $disabled-color;
  }
}
</style>
