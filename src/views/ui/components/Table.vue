<!-- eslint-disable vue/no-lone-template -->
<template>
  <div>
    <p>在单表格简单场景下默认展示20条，其他情况默认展示10条。</p>
    <p>
      一般情况下，表格最左列和最右列距离表格间距20，其他列进行平均排序。在列数较少又要占满整个页面的情况下，直接进行平均排布，最右列不特意靠右。
    </p>
    <h3>基础表格</h3>
    <div class="sub-table">
      <el-table :data="tableComponentData && tableComponentData.tableData" border height="614px">
        <el-table-column prop="name" label="主机别名" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis name-primary" :title="scope.row.name">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="100px"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
              <span class="text-ellipsis">{{ scope.row.description }}</span>
            </el-tooltip>
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
            <el-button
              type="text"
              size="small"
              class="bt-operation"
              @click="handleClick(scope.$index, scope.row)"
            >
              挂载
            </el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
                ></i>
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
        :current-page="currentPage4"
        :total="153"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <h3>可多选表格(2个以内操作)</h3>
    <div class="sub-table">
      <div style="margin-bottom: 16px">
        <el-button type="primary" :disabled="!multipleSelection.length" size="small">主按钮</el-button>
        <el-button :disabled="!multipleSelection.length" size="small">次按钮</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableComponentData && tableComponentData.tableData10"
        tooltip-effect="dark"
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" width="150px" label="主机别名">
          <template slot-scope="scope">
            <span class="text-ellipsis name-primary" style="width: 100%">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="100px"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
              <span class="text-ellipsis">{{ scope.row.description }}</span>
            </el-tooltip>
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
            <el-button
              type="text"
              size="small"
              class="bt-operation"
              @click="handleClick(scope.$index, scope.row)"
            >
              挂载
            </el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
                ></i>
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
        :current-page="currentPage4"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <h3>可多选表格(3个以上操作)</h3>
    <div class="sub-table">
      <div style="margin-bottom: 20px">
        <cute-selected-input
          :checked-list="multipleSelectionOver3"
          placeholder="请选择"
          :options="optionData"
        >
        </cute-selected-input>
      </div>
      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :data="tableComponentData && tableComponentData.tableData10"
        border
        @selection-change="handleSelectionChangeOver3"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="主机别名">
          <template slot-scope="scope">
            <span class="text-ellipsis name-primary" style="width: 100%">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="100px"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px">
          2022-05-20 18:00:05
        </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
              <span class="text-ellipsis">{{ scope.row.description }}</span>
            </el-tooltip>
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
            <el-button
              type="text"
              size="small"
              class="bt-operation"
              @click="handleClick(scope.$index, scope.row)"
            >
              挂载
            </el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
                ></i>
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
        :current-page="currentPage4"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <h3>展示不全的表格</h3>
    <div class="sub-table">
      <el-table :data="tableComponentData && tableComponentData.tableData10" border>
        <el-table-column type="selection" width="55" fixed> </el-table-column>
        <el-table-column prop="name" label="主机别名" width="120">
          <template slot-scope="scope">
            <span class="text-ellipsis name-primary" style="width: 100%">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="300px"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
              <span class="text-ellipsis">{{ scope.row.description }}</span>
            </el-tooltip>
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
            <el-button
              type="text"
              size="small"
              class="bt-operation"
              @click="handleClick(scope.$index, scope.row)"
            >
              挂载
            </el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
                ></i>
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
        :current-page="currentPage4"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <h3>列表中同时存在两列状态栏</h3>
    <div class="sub-table">
      <el-table :data="tableComponentData && tableComponentData.tableDataWithStatus" border>
        <el-table-column prop="name" label="主机别名" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis name-primary" :title="scope.row.name">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="100px"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150px">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="150px">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
              <span class="text-ellipsis">{{ scope.row.description }}</span>
            </el-tooltip>
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
        <el-table-column prop="status2" label="其他状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status2 && STATUS2[scope.row.status2].color" size="small">{{
              scope.row.status2 && STATUS2[scope.row.status2].text
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="190px">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              class="bt-operation"
              @click="handleClick(scope.$index, scope.row)"
            >
              挂载
            </el-button>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
                ></i>
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
        :current-page="currentPage4"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <h3>可移动排序的表格</h3>
    <div class="sub-table">
      <cute-sort-table
        :loading="tableHook.loading"
        :table-data="tableHook.tableData"
        :table-columns="tableColumns"
        @sort="handleSort"
      >
        <template #name="{ scope }">
          <span class="text-ellipsis name-primary" style="width: 100%">{{ scope.row.name }}</span>
        </template>
        <template #status="{ scope }">
          <span>{{ statusFormatter(scope.row) }}</span>
        </template>
        <template #healthy="{ scope }">
          <div>
            <span class="sub-spot" :class="`sub-spot--${scope.row.health}`"></span>
            <span>{{ HEALTH[scope.row.health] }}</span>
          </div>
        </template>
        <template #operation="{ scope }">
          <el-button
            type="text"
            size="small"
            class="bt-operation"
            @click="handleClick(scope.$index, scope.row)"
          >
            挂载
          </el-button>
          <el-button type="text" size="small" class="bt-operation">卸载</el-button>
          <el-button type="text" size="small" class="bt-operation">扩容</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
            <span class="el-dropdown-link">
              更多<i
                class="el-icon-arrow-down el-icon--right"
                :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退订</el-dropdown-item>
              <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
              <el-dropdown-item>创建</el-dropdown-item>
              <el-dropdown-item disabled>Disabled</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </cute-sort-table>
      <el-pagination
        class="pagination"
        :current-page="tableHook.pager.page"
        :page-size="tableHook.pager.limit"
        :total="tableHook.total"
        @size-change="tableHook.handleSizeChange"
        @current-change="tableHook.handleCurrentChange"
      />
    </div>
    <h3>可在表头进行筛选的表格</h3>
    <el-table :data="tableComponentData && tableComponentData.tableData" border height="614px">
      <el-table-column prop="name" label="主机别名" width="150px">
        <template slot-scope="scope">
          <div>
            <span class="text-ellipsis name-primary" :title="scope.row.name">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="实例状态"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" width="100px"> </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="150"
        sortable
        :filters="[
          { text: '2022-08-14', value: '1' },
          { text: '2022-08-15', value: '2' },
          { text: '2022-08-16', value: '3' },
          { text: '2022-08-17', value: '4' },
          { text: '2022-08-18', value: '5' },
          { text: '2022-08-19', value: '6' },
        ]"
        filter-placement="bottom-start"
      >
      </el-table-column>

      <el-table-column prop="label" label="标签" width="150px">
        <template slot-scope="scope">
          <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
          <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述" width="150px">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
            <span class="text-ellipsis">{{ scope.row.description }}</span>
          </el-tooltip>
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
          <el-button
            type="text"
            size="small"
            class="bt-operation"
            @click="handleClick(scope.$index, scope.row)"
          >
            挂载
          </el-button>
          <el-button type="text" size="small" class="bt-operation">卸载</el-button>
          <el-button type="text" size="small" class="bt-operation">扩容</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
            <span class="el-dropdown-link">
              更多<i
                class="el-icon-arrow-down el-icon--right"
                :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
              ></i>
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

    <div></div>
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
    <h3>纵向展示列表</h3>
    <div class="sub-table-horizon">
      <el-descriptions :column="2" border>
        <el-descriptions-item>
          <template slot="label"> 数据库类型 </template>
          Spark
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label"> 表类型 </template>
          物理表
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 配置时间 </template>
          2018-04-24 18:00:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 使用时间 </template>
          2018-04-24 18:00:00 至 2019-04-24 18:00:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 所属业务</template>
          金融 科技 -T Tech Ui
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 数据位点 </template>
          2018-04-24 18:00:00 至 2019-04-24 18:00:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 储存量(GB) </template>
          50
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 数据负责人 </template>
          王小明
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template slot="label"> 生命周期（天） </template>
          30
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template slot="label"> 配置信息 </template>
          <div>数据盘类型：<span>MongoDB </span></div>
          <div>数据库版本：<span>3.4 </span></div>
          <div>套餐：<span>dds.mongo.mid </span></div>
          <div>存储空间：<span>10 GB </span></div>
          <div>地域：<span>华东 1 </span></div>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <h3>小表格</h3>
    <div>
      <el-table :data="tableComponentData && tableComponentData.smallTable" border size="small">
        <el-table-column label="排行">
          <template slot-scope="scope">
            <span :class="scope.$index < 3 ? 'sub-index sub-index-top3' : 'sub-index'">{{
              scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="工作流名称">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.name" placement="top">
              <span class="text-ellipsis">{{ scope.row.name }}</span>
            </el-tooltip>
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
        :current-page="currentPage4"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <h3>详情页基本信息展示列表</h3>
    <div>
      <div class="sub-table-message">
        <el-descriptions :column="3" border>
          <el-descriptions-item>
            <template slot="label"> 内部标识符 </template>
            DE34237632363
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label"> 标识符 </template>
            GMSFZ
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 标识符 </template>
            GMSFZ
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 中文名称 </template>
            公民身份证
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 英文名称 </template>
            gong-min-shen-fen-zheng
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 英文名称</template>
            gong-min-shen-fen-zheng
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 语境 </template>
            天翼云公司
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 版本 </template>
            1.0
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 版本 </template>
            1.0
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 同义名称 </template>
            BB
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="sub-table-message">
        <el-descriptions :column="2" border>
          <el-descriptions-item>
            <template slot="label"> 内部标识符 </template>
            DE34237632363
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label"> 标识符 </template>
            GMSFZ
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 中文名称 </template>
            公民身份证
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 英文名称 </template>
            gong-min-shen-fen-zheng
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 语境 </template>
            天翼云公司
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 版本 </template>
            1.0
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 同义名称 </template>
            BB
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
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
    <h3>带列设置的表格</h3>
    <div class="sub-table-settings">
      <!-- 列设置选择表单 -->
      <el-popover
        placement="bottom-end"
        trigger="click"
        class="sub-table-settings__popover"
        @show="handlePopverShow"
        @hide="handlePopverhide"
      >
        <!-- 固定的，用来全选 -->
        <el-checkbox v-model="allSelected" label="全选" @change="handleSelectedChange"></el-checkbox>
        <!-- 分割线 -->
        <el-divider class="sub-table-settings__divider"></el-divider>
        <!-- 列出全部选项 -->
        <el-checkbox-group v-model="selectedOptions" class="sub-table-settings__label-group">
          <el-checkbox v-for="v in allOptions" :key="v.label" :label="v.label" :disabled="v.disabled">
          </el-checkbox>
        </el-checkbox-group>

        <!-- 列设置图标 -->
        <div slot="reference" :class="['head-title', { 'sub-table-settings__svg--active': popverShow }]">
          <svg-icon name="setting" width="14" height="14" style="margin-right: 6px" />
          <span>列设置</span>
        </div>
      </el-popover>

      <!-- 表格 -->
      <el-table :data="tableComponentData && tableComponentData.tableData10" fit border>
        <el-table-column v-for="v in selectedOptionsWithProp" :key="v.prop" :prop="v.prop" :label="v.label">
          <template slot-scope="{ row }">
            <span v-if="v.prop === 'healthy'">
              <span class="health-dot" :class="`health-dot--${row.healthy}`" />{{ HEALTH[row.healthy] }}
            </span>

            <span v-else-if="v.prop === 'name'">
              <span class="text-ellipsis name-primary" style="width: 100%">{{ row.name }}</span>
            </span>

            <span v-else-if="v.prop === 'label'">
              <el-tag type="info" size="small" style="margin-right: 8px">{{ row.label[0] }}</el-tag>
              <el-tag type="info" size="small">{{ row.label[1] }}</el-tag>
            </span>

            <span v-else>{{ row[v.prop] }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        class="pagination"
        :current-page="currentPage4"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Ref } from 'vue-property-decorator'
import { STATUS, HEALTH, STATUS2 } from '@/dics/simpleTable'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/base/hook/TableHook'
import CuteSortTable from '@cutedesign/sort-table'
import { getTable } from '@/api/cuteSortTable'
import * as SimpleTable from '@/types/SimpleTable'
import { getTableComponent } from '@/api/tableComponent'
import * as TableComponent from '@/types/TableComponent'
@Component({
  name: 'UiTable',
  components: {
    CuteSortTable,
  },
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable

  public tableHook = new TableHookClass()

  private tableColumns = [
    { prop: 'name', label: '主机别名', slot: 'name' },
    { prop: 'status', label: '实例状态', slot: 'status' },
    { prop: 'ip', label: 'IP地址' },
    { prop: 'cpu', label: 'CPU利用率(%)' },
    { prop: 'memory', label: '内存利用率(%)' },
    { prop: 'disk', label: '磁盘利用率(%)' },
    { prop: 'healthy', label: '健康状态', slot: 'healthy' },
    { prop: 'operation', label: '操作', width: 190, slot: 'operation' },
  ]
  private HEALTH = HEALTH
  private flag = false

  private tableComponentData: TableComponent.TableComponentData = null
  /**
   * 页面Mounted
   */
  private mounted() {
    this.tableHook = new TableHookClass({}, this.getTable, this.tableRef, false)
    this.tableHook.query()
    this.getTableComponentData()
  }

  /**
   * 获取表格数据
   */
  private async getTable(param) {
    // 接口
    const res = await getTable(param)
    this.tableHook.setResult(res.data.list, res.data.total)
  }

  /**
   * 获取表格数据
   */
  private async getTableComponentData() {
    // 接口
    const res = await getTableComponent()
    this.tableComponentData = res.data
  }

  /**
   * 使用字典格式化实例状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  private statusFormatter(data: SimpleTable.Host) {
    return STATUS[data.status]
  }

  private handleSort(val) {
    const currRow = this.tableHook.tableData.splice(val.oldIndex, 1)[0]
    this.tableHook.tableData.splice(val.newIndex, 0, currRow)
    const newArray = this.tableHook.tableData.slice(0)
    this.tableHook.tableData = []
    this.$nextTick(function () {
      this.tableHook.tableData = newArray
    })
  }

  private openDropdown(e) {
    e ? (this.flag = true) : (this.flag = false)
  }

  private STATUS2 = STATUS2
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
      tag4: 'user_age>6 and user_age<=9',
    },
    {
      dataFilter: 'user_age>6 and user_age<=9',
      dataTime: 'update_time',
      key: 'city_name, month, user_age',
      tag1: 'user_age',
      tag2: '年龄段',
      tag3: '少年',
      tag4: 'user_age>6 and user_age<=9',
    },
  ]

  public static title = {
    zh: '表格',
    en: 'Table',
  }
  public static description = {
    maintainer: '朱玉豆',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private pageSize = 20

  private pageNum = 3

  private pageSizeOptions = [10, 20, 30, 40]

  private total = 153

  private optionSize = '10'
  private currentPage4 = 4

  options = [
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

  optionData = [
    {
      label: '退订',
      value: '1',
    },
    {
      label: '续订',
      value: '2',
    },
    {
      label: '创建',
      value: '3',
    },
    {
      label: 'Disabled',
      value: '4',
      disabled: true,
    },
  ]

  private handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
  }

  private handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
  }

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

  // popver 状态变量
  private popverShow = false

  public handlePopverShow() {
    this.popverShow = true
  }

  public handlePopverhide() {
    this.popverShow = false
  }

  // 全选状态变量
  private allSelected = false

  // 判断是否已全选
  public isAllSelected() {
    if (this.selectedOptions.length === this.allOptions.length) {
      this.allSelected = true
    } else {
      this.allSelected = false
    }
  }

  // 全选按钮 全选事件
  // 根据全选状态变量，来判断将要做什么
  public handleSelectedChange() {
    const data = []
    if (!this.allSelected) {
      this.allOptions.forEach((v: any) => {
        if (this.disabledOptions.some(item => item === v.label)) {
          data.push(v.label)
        }
      })
    } else {
      this.allOptions.forEach((v: any) => {
        data.push(v.label)
      })
    }
    this.selectedOptions = data
  }

  private allOptions = [
    {
      label: '主机别名',
      prop: 'name',
      disabled: true,
    },
    {
      label: '实例状态',
      prop: 'status',
      disabled: true,
    },
    {
      label: 'IP地址',
      prop: 'ip',
      disabled: false,
    },
    {
      label: '时间',
      prop: 'time',
      disabled: false,
    },
    {
      label: '标签',
      prop: 'label',
      disabled: false,
    },
    {
      label: '描述',
      prop: 'description',
      disabled: false,
    },
    {
      label: '健康状态',
      prop: 'healthy',
      disabled: false,
    },
  ]
  private selectedOptions = ['主机别名', '实例状态', 'IP地址', '时间', '健康状态']
  private selectedOptionsWithProp = [
    {
      label: '主机别名',
      prop: 'name',
    },
    {
      label: '实例状态',
      prop: 'status',
    },
    {
      label: 'IP地址',
      prop: 'ip',
    },
    {
      label: '时间',
      prop: 'time',
    },
    {
      label: '健康状态',
      prop: 'healthy',
    },
  ]

  // 监听selectedOptions，判断是否需要修改全选按钮
  @Watch('selectedOptions')
  onChangeValue() {
    this.isAllSelected() // 判断是否已全选
    this.syncSelectedOptions() // 同步
  }

  private syncSelectedOptions() {
    const data = []
    this.allOptions.forEach((v: { label: string; prop: string }) => {
      if (this.selectedOptions.some(item => item === v.label)) {
        data.push({ label: v.label, prop: v.prop })
      }
    })
    this.selectedOptionsWithProp = data
  }

  private disabledOptions = ['主机别名', '实例状态']

  private STATUS = STATUS
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
  border-bottom: 1px solid $color-grey-7;
  padding-bottom: 24px;
}

.sub-table-horizon {
  border-bottom: 1px solid $color-grey-7;
  padding-bottom: 24px;
}

.sub-table-message {
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 8px;
  }

  ::v-deep .is-group {
    line-height: 40px;
  }
}

.sub-index {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: $color-grey-7;
  text-align: center;
  line-height: 20px;
  color: $color-grey-1;
  border-radius: 50%;
  font-size: 12px;
}

.sub-index-top3 {
  color: $color-white;
  background: $color-master-1;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bt-operation {
  color: $color-master-1;
}

.sub-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
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
  width: 6px;
  height: 6px;
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

.top-fill {
  transform: rotate(180deg);
}

.sub-table-settings {
  &__popover {
    float: right;
    cursor: pointer;

    .head-title {
      margin-bottom: 13px;
      color: $color-grey-1;

      &:hover {
        color: $color-master-1;
      }

      &.sub-table-settings__svg--active {
        color: $color-master-3;
      }
    }
  }

  &__divider {
    margin: 10px 0 !important;
  }

  &__label-group {
    // 设置高度，超出滚动
    max-height: 300px;
    overflow: auto;

    label {
      margin-bottom: 10px;
      display: block;
    }
  }

  .health-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 100%;

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
}

.sort-icon {
  cursor: pointer;
  color: $color-grey-3;

  &:hover {
    color: $color-master-1;
  }
}
</style>
