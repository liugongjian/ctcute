<!-- eslint-disable vue/no-lone-template -->
<template>
  <div>
    <p>在单表格简单场景下默认展示20条，其他情况默认展示10条。</p>
    <p>
      一般情况下，表格最左列和最右列距离表格间距20，其他列进行平均排序。在列数较少又要占满整个页面的情况下，直接进行平均排布，最右列不特意靠右。
    </p>
    <h3>基础表格</h3>
    <div class="sub-table">
      <el-table v-loading="loading" :data="table1" fit border height="614px">
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
            <div class="sub-state">
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
            <el-dropdown
              trigger="click"
              :append-to-body="false"
              @visible-change="openDropdown(scope.$index, 1)"
            >
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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
        v-loading="loading"
        :data="table2"
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
            <div class="sub-state">
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
            <el-dropdown
              trigger="click"
              :append-to-body="false"
              @visible-change="openDropdown(scope.$index, 2)"
            >
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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
        v-loading="loading"
        tooltip-effect="dark"
        :data="table3"
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
            <div class="sub-state">
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
            <el-dropdown
              trigger="click"
              :append-to-body="false"
              @visible-change="openDropdown(scope.$index, 3)"
            >
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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
      <el-table v-loading="loading" :data="table4" border>
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
            <div class="sub-state">
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
            <el-dropdown
              trigger="click"
              :append-to-body="false"
              @visible-change="openDropdown(scope.$index, 4)"
            >
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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
      <el-table v-loading="loading" :data="table5" border>
        <el-table-column prop="name" label="主机别名" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis name-primary" :title="scope.row.name">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态" width="100px"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" width="100px"> </el-table-column>
        <el-table-column prop="time" label="时间" sortable width="150px"> </el-table-column>
        <el-table-column prop="label" label="标签">
          <template slot-scope="scope">
            <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
            <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
              <span class="text-ellipsis">{{ scope.row.description }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="healthy" label="健康状态" width="100px">
          <template slot-scope="scope">
            <div class="sub-state">
              <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
              <span>{{ HEALTH[scope.row.healthy] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status2" label="其他状态" width="100px">
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
            <el-dropdown
              trigger="click"
              :append-to-body="false"
              @visible-change="openDropdown(scope.$index, 5)"
            >
              <span class="el-dropdown-link">
                更多<i
                  class="el-icon-arrow-down el-icon--right"
                  :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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

    <h3>
      可移动排序的表格-使用了
      <a href="/component/base/cute-sort-table" target="_blank">CuteSortTable</a>
      组件
    </h3>
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
          <div class="sub-state">
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
          <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown(scope.$index)">
            <span class="el-dropdown-link">
              更多<i
                class="el-icon-arrow-down el-icon--right"
                :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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
        :current-page.sync="tableHook.pager.page"
        :page-size.sync="tableHook.pager.limit"
        :total="tableHook.total"
        @size-change="() => tableHook.handleSizeChange(tableHook.pager.limit)"
        @current-change="() => tableHook.handleCurrentChange(tableHook.pager.page)"
      />
    </div>
    <h3>可在表头进行筛选的表格</h3>
    <el-table v-loading="loading" :data="table6" border height="614px">
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
          <div class="sub-state">
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
          <el-dropdown
            trigger="click"
            :append-to-body="false"
            @visible-change="openDropdown(scope.$index, 6)"
          >
            <span class="el-dropdown-link">
              更多<i
                class="el-icon-arrow-down el-icon--right"
                :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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

    <h3>可展开的表格</h3>
    <div class="sub-table">
      <el-table
        v-loading="expandTableLoading"
        :data="expandTableData"
        fit
        border
        row-key="_id"
        default-expand-all
        :tree-props="{ children: 'children' }"
      >
        <el-table-column prop="name" label="名称" width="180"> </el-table-column>
        <el-table-column prop="menuType" label="其他状态" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.menuType === 0" type="info">目录</el-tag>
            <el-tag v-if="scope.row.menuType === 1" type="primary">菜单</el-tag>
            <el-tag v-if="scope.row.menuType === 2" type="success">权限</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="orderNum" label="排序"> </el-table-column>
        <el-table-column prop="url" label="路由"> </el-table-column>
        <el-table-column prop="perms" label="标识"> </el-table-column>
        <el-table-column prop="alias" label="别名" :show-overflow-tooltip="true"> </el-table-column>
        <el-table-column prop="actions" label="操作" width="250" fixed="right" class-name="actions">
          <template slot-scope="{}">
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <h3>嵌套表格</h3>
    <div class="sub-table pro-table-6">
      <el-table v-loading="nestedTableLoading" :data="nestedTableData" fit>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-table ref="multipleTable" tooltip-effect="dark" :data="scope.row.projectSpaces">
              <el-table-column width="20"></el-table-column>
              <el-table-column prop="projectSpace" label="名称">
                <template slot-scope="{ row }">
                  <el-button :disabled="row.projectSpaceState === '1' ? false : true" type="text">{{
                    row.projectSpace
                  }}</el-button>
                </template>
              </el-table-column>
              <el-table-column prop="projectSpaceState" label="其他状态">
                <template slot-scope="{ row }">
                  <span class="health-state">
                    <span class="health-dot" :class="`health-dot--${row.projectSpaceState}`" />{{
                      NESTED_TABLE_STATUS[row.projectSpaceState]
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="cu" label="已使用 / 已购买CU">
                <template slot-scope="{ row }">
                  <span class="used">{{ row.cuUsedNum }}</span> / {{ row.cuNum }}
                </template>
              </el-table-column>
              <el-table-column label="创建时间" prop="createTime">
                <template slot-scope="{ row }">
                  {{ formatDatetime(row.createTime) }}
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="{ row }">
                  <el-button
                    :disabled="row.projectSpaceState === '1' ? false : true"
                    type="text"
                    style="margin-right: 10px"
                    @click="handleDistribute('资源分配')"
                    >资源分配</el-button
                  >
                  <el-button
                    :disabled="row.projectSpaceState === '1' ? false : true"
                    type="text"
                    @click="handleDistribute('删除')"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="工作空间/实例ID" prop="workspace">
          <template slot-scope="{ row }">
            <el-button :disabled="row.workspaceState === '1' ? false : true" type="text">{{
              row.workspace
            }}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="工作空间状态" prop="workspaceState">
          <template slot-scope="{ row }">
            <span class="health-state">
              <span class="health-dot" :class="`health-dot--${row.workspaceState}`" />{{
                STATUS[row.workspaceState]
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="已使用 / 已购买CU" prop="CU">
          <template slot-scope="{ row }">
            <span class="used">{{ row.cuUsedNum }}</span> / {{ row.cuNum }}
          </template>
        </el-table-column>
        <el-table-column label="付费类型" prop="payType">
          <template slot-scope="{ row }">
            <el-tag type="warning">{{ NESTED_TABLE_TYPE[row.payType] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="createTime">
          <template slot-scope="{ row }"> {{ formatDatetime(row.createTime) }} </template>
        </el-table-column>
      </el-table>
    </div>

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
            <div class="sub-small-state">
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
    <h3>
      带列设置的表格-使用了
      <a href="/component/base/cute-table-column-settings" target="_blank">CuteTableColumnSettings</a>
      组件
    </h3>
    <div class="sub-table-settings">
      <cute-table-column-settings
        :table-data="tableComponentData && tableComponentData.tableData10"
        :table-columns="tableComponentColumns"
      >
        <template #name="{ scope }">
          <span class="text-ellipsis name-primary" style="width: 100%">{{ scope.row.name }}</span>
        </template>
        <template #label="{ scope }">
          <el-tag
            v-for="item of scope.row.label"
            :key="item"
            type="info"
            size="small"
            style="margin-right: 8px"
          >
            {{ item }}
          </el-tag>
        </template>
        <template #description="{ scope }">
          <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
            <span class="text-ellipsis">{{ scope.row.description }}</span>
          </el-tooltip>
        </template>
        <template #healthy="{ scope }">
          <div class="health-state">
            <span class="health-dot" :class="`health-dot--${scope.row.healthy}`" />
            <span>{{ HEALTH[scope.row.healthy] }}</span>
          </div>
        </template>
        <template #operation="{}">
          <div>
            <el-button type="text" size="small" class="bt-operation">卸载</el-button>
            <el-button type="text" size="small" class="bt-operation">扩容</el-button>
          </div>
        </template>
      </cute-table-column-settings>
    </div>
    <h3>滚动加载的表-默认</h3>
    <p>
      一般应用与日志类表格，表格行高较窄，一般是34px，默认展示50-100条，滚动到表格底部后加载出下一页。在页面中表格自适应到页面底部，上下间距为20。
    </p>
    <el-table
      ref="scrolledTableRef"
      v-loading="scrolledTableHook.loading"
      :data="scrolledTableHook.tableData"
      fit
      border
      size="small"
      height="614px"
    >
      <el-table-column prop="name" label="主机别名">
        <template slot-scope="{ row }">
          <router-link to="/">{{ row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="实例状态" :formatter="statusFormatter"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" />
      <el-table-column prop="cpu" label="CPU利用率(%)" />
      <el-table-column prop="memory" label="内存利用率(%)" />
      <el-table-column prop="disk" label="磁盘利用率(%)" />
      <el-table-column prop="health" label="健康状态">
        <template slot-scope="{ row }">
          <span class="health-state">
            <span class="health-dot" :class="`health-dot--${row.health}`" />{{ HEALTH[row.health] }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="actions" label="操作" width="150" class-name="actions">
        <template>
          <el-button type="text">详情</el-button>
          <el-button type="text">监控指标</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { STATUS, HEALTH, STATUS2 } from '@/dics/simpleTable'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/ui/hook/TableHook'
import CuteSortTable from '@cutedesign/sort-table'
import { getTable } from '@/api/cuteSortTable'
import * as SimpleTable from '@/types/SimpleTable'
import { getTableComponent } from '@/api/tableComponent'
import { getTable as getExpandTable } from '@/api/proTable6'
import { getTable as getNestedTable } from '@/api/proTable7'
import { STATUS as NESTED_TABLE_STATUS, TYPE as NESTED_TABLE_TYPE } from '@/dics/proTable6'
import { formatDatetime } from '@/utils/date'
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

  @Ref('scrolledTableRef')
  private scrolledTableRef: ElTable

  public tableHook = new TableHookClass()

  private scrolledTableHook = new TableHookClass()

  private tableColumns = [
    { prop: 'name', label: '主机别名', slot: 'name' },
    { prop: 'status', label: '实例状态', slot: 'status' },
    { prop: 'ip', label: 'IP地址' },
    { prop: 'cpu', label: 'CPU利用率(%)' },
    { prop: 'memory', label: '内存利用率(%)' },
    { prop: 'disk', label: '磁盘利用率(%)' },
    { prop: 'healthy', label: '健康状态', slot: 'healthy' },
    { prop: 'operation', label: '操作', slot: 'operation', props: { align: 'left', width: 190 } },
  ]

  private tableComponentColumns = [
    { prop: 'name', label: '主机别名', isSelected: true, isDisabled: true, slot: 'name' },
    { prop: 'status', label: '实例状态', isSelected: true, isDisabled: true },
    { prop: 'ip', label: 'IP地址', isSelected: true, isDisabled: false },
    { prop: 'time', label: '时间', isSelected: true, isDisabled: false, props: { width: 150 } },
    {
      prop: 'label',
      label: '标签',
      isSelected: true,
      isDisabled: false,
      slot: 'label',
      props: { width: 150 },
    },
    {
      prop: 'description',
      label: '描述',
      isSelected: false,
      isDisabled: false,
      slot: 'description',
      props: { width: 150 },
    },
    { prop: 'healthy', label: '健康状态', isSelected: true, isDisabled: false, slot: 'healthy' },
    {
      prop: 'operation',
      label: '操作',
      isSelected: true,
      isDisabled: true,
      slot: 'operation',
      props: { width: 190 },
    },
  ]

  private HEALTH = HEALTH
  private flag = false

  private tableComponentData: TableComponent.TableComponentData = null
  private expandTableData: any[] = []
  private expandTableLoading = false

  private nestedTableLoading = false
  private nestedTableData: any[] = []
  private NESTED_TABLE_STATUS = NESTED_TABLE_STATUS
  private NESTED_TABLE_TYPE = NESTED_TABLE_TYPE

  formatDatetime = formatDatetime

  /**
   * 页面Mounted
   */
  private mounted() {
    this.tableHook = new TableHookClass({}, this.getTable, this.tableRef, false)
    this.scrolledTableHook = new TableHookClass({}, this.getScrolldTable, this.scrolledTableRef, true)
    this.tableHook.query()
    this.scrolledTableHook.query()
    this.getTableComponentData()
    this.getExpandTableData()
    this.getNestedTableData()
  }

  /**
   * 获取表格数据
   */
  private async getTable(param) {
    // 接口
    const res = await getTable(param)
    const list = res.data.list.map((item: any) => {
      item.flag = false
      return item
    })
    this.tableHook.setResult(list, res.data.total)
  }
  // private tableMap = {}
  private table1 = []
  private table2 = []
  private table3 = []
  private table4 = []
  private table5 = []
  private table6 = []
  private loading = false
  /**
   * 获取表格数据
   */
  private async getTableComponentData() {
    this.loading = true
    // 接口
    const res = await getTableComponent()
    this.tableComponentData = res.data
    this.table1 = this.tableComponentData.tableData.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.table2 = this.tableComponentData.tableData10.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.table3 = this.tableComponentData.tableData10.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.table4 = this.tableComponentData.tableData10.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.table5 = this.tableComponentData.tableDataWithStatus.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.table6 = this.tableComponentData.tableData.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.loading = false
  }

  /**
   * 获取滚动加载表格数据
   */
  private async getScrolldTable(param) {
    const res = await getTable(param)
    this.scrolledTableHook.setResult(res.data.list, res.data.total)
  }

  /**
   * 获取可展开表格数据
   */
  private async getExpandTableData() {
    this.expandTableLoading = true
    try {
      const res = await getExpandTable()
      if ((res as any).code === 200) {
        const genData = (data, _id): any[] => {
          const menu = data.filter(o => o.parentId === _id)
          menu.forEach(o => {
            const children = genData(data, o._id)
            if (children && children.length > 0) {
              o.children = children
            }
          })
          return menu
        }
        const res_menus = res.data.result.map(item => {
          item.label = item.name
          item.id = item._id
          return item
        })
        if (res_menus && res_menus.length > 0) {
          this.expandTableData = genData(res_menus, '')
        } else {
          this.expandTableData = []
        }
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.expandTableLoading = false
    }
  }

  /**
   * 获取嵌套表格数据
   */
  private async getNestedTableData() {
    try {
      this.nestedTableLoading = true
      const res = await getNestedTable()
      this.nestedTableData = (res as any).data
    } catch (e) {
      console.error(e)
    } finally {
      this.nestedTableLoading = false
    }
  }

  private handleDistribute(row) {
    this.$message.success(`前往${row}`)
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

  /** * 下拉展开旋转小三角 */
  private openDropdown(index, tableIndex) {
    if (tableIndex) {
      this[`table${tableIndex}`][index] = {
        ...this[`table${tableIndex}`][index],
        flag: !this[`table${tableIndex}`][index].flag,
      }
      this[`table${tableIndex}`].splice(1, 0)
    } else {
      this.tableHook.tableData[index].flag = !this.tableHook.tableData[index].flag
    }
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

    .el-button--text:last-child:nth-child(n + 3):before {
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

.sub-state {
  display: inline-flex;
  align-items: center;
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

.sub-small-state {
  display: inline-flex;
  align-items: center;
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

  .health-state {
    display: inline-flex;
    align-items: center;
  }

  .health-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
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
