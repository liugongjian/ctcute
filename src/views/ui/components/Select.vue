<template>
  <div class="ui-select">
    <p>将动作或菜单折叠到下拉菜单中</p>
    <div class="sub-down">
      <h3>常规用法</h3>
      <div class="line">
        <div class="line__left">
          <el-select v-model="value" filterable>
            <el-option label="默认选项" value="默认选项"> </el-option>
            <el-option label="已选择项" value="已选择项"> </el-option>
            <el-option label="不可用" value="不可用" disabled> </el-option>
            <el-option label="默认选项1" value="默认选项1" class="auxiliary-message"> </el-option>
          </el-select>
        </div>
        <div class="line__right">
          <el-select value="" filterable loading placeholder="加载中">
            <option value=""></option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>禁用状态</h3>
      <div class="line">
        <div class="line__left">
          <el-select v-model="value2" disabled placeholder="请选择">
            <el-option label="选项一" value="选项一"> </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>多选</h3>
      <div class="line">
        <div class="line__left">
          <el-select v-model="selectValue" multiple placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="line__right">
          <el-select v-model="value1" multiple placeholder="请选择" disabled class="disabled-select">
            <el-option> <svg-icon name="save"> </svg-icon></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>带提示</h3>
      <div class="line">
        <div class="line__left">
          <cute-remind-select
            v-model="value9"
            :options="options1"
            :title="name"
            :placeholder="name"
            @change="changeFun"
          />
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>树形选择/单选</h3>
      <div class="line">
        <div class="line__left">
          <cute-select-tree v-model="treeData" :value="treeDataValue" :options="treeOptions" />
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>树形选择/多选</h3>
      <div class="line">
        <div class="line__left">
          <cute-select-tree
            v-model="multiTreeData"
            :value="multiTsreeDataValue"
            :options="treeOptions"
            multiple
            @remove-tag="handelRemove"
            @change="changeTree"
          />
        </div>
      </div>
    </div>

    <div class="sub-down">
      <h3>日期选择</h3>
      <div class="date">
        <div class="sub-date_titles">
          <p>默认</p>
          <p>带快捷选项</p>
        </div>
        <div class="sub-date">
          <el-date-picker v-model="date" type="date" placeholder="选择日期"> </el-date-picker>
          <el-date-picker v-model="date4" type="date" placeholder="选择日期" :picker-options="pickerOptions">
          </el-date-picker>
        </div>
        <div class="sub-date">
          <el-date-picker v-model="date1" size="mini" type="date" placeholder="选择日期"> </el-date-picker>
          <el-date-picker
            v-model="date5"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
            size="mini"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>时间选择/日期和时间点选择</h3>
      <div class="date">
        <div class="sub-date_title">
          <p>默认时间选择</p>
          <p>默认日期和时间点选择</p>
        </div>
        <div class="sub-date">
          <el-time-select
            v-model="text"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="选择时间"
          >
          </el-time-select>
          <el-date-picker v-model="value6" type="datetime" placeholder="选择时间"> </el-date-picker>
        </div>
        <div class="sub-date">
          <el-time-select
            v-model="text"
            size="mini"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="选择时间"
          >
          </el-time-select>
          <el-date-picker
            v-model="value6"
            type="datetime"
            placeholder="选择时间"
            size="mini"
          ></el-date-picker>
        </div>
      </div>

      <h3>日期范围选择</h3>
      <div class="date">
        <div class="sub-date_titles">
          <p>默认</p>
          <p>带快捷选项</p>
        </div>

        <div class="sub-date1">
          <el-date-picker
            v-model="value4"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <el-date-picker
            v-model="date6"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
        </div>

        <div class="sub-date1">
          <el-date-picker
            v-model="value7"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
          >
          </el-date-picker>

          <el-date-picker
            v-model="date7"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions1"
            size="mini"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>日期和时间范围选择</h3>
      <div class="sub-date_titles">
        <p>默认</p>
        <p>带快捷选项</p>
      </div>
      <div class="sub-date2">
        <el-date-picker
          v-model="value5"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期和时间"
          end-placeholder="结束日期和时间"
        >
        </el-date-picker>

        <el-date-picker
          v-model="date8"
          type="datetimerange"
          :picker-options="pickerOptions1"
          range-separator="至"
          start-placeholder="开始日期和时间"
          end-placeholder="结束日期和时间"
        >
        </el-date-picker>
      </div>

      <div class="sub-date2">
        <el-date-picker
          v-model="value8"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期和时间"
          end-placeholder="结束日期和时间"
          size="mini"
        >
        </el-date-picker>
        <el-date-picker
          v-model="date8"
          type="datetimerange"
          :picker-options="pickerOptions1"
          range-separator="至"
          start-placeholder="开始日期和时间"
          end-placeholder="结束日期和时间"
          size="mini"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="sub-down">
      <h3>操作已选项</h3>
      <p>勾选多选列表后，选择操作下拉框会显示勾选了几个选项</p>
      <el-row>
        <cute-selected-input :checked-list="checkedList" :options="optionData" @change="change" />
      </el-row>
      <el-checkbox-group v-model="checkedList">
        <el-row>
          <el-checkbox label="未选中项"></el-checkbox>
        </el-row>
        <el-row>
          <el-checkbox label="已选中项"></el-checkbox>
        </el-row>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSelect',
})
export default class extends Vue {
  public static title = {
    zh: '选择器',
    en: 'Select',
  }
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }

  private checkedList = ['已选中项']
  private name = '数据资源名称'
  private selectValue = []
  private value = []
  private value1 = ['不可用']
  private value2 = '选项一'
  private value3 = ['不可用', '选项']
  private value4 = ''
  private value5 = ''
  private value6 = ''
  private value7 = ''
  private value8 = ''
  private value9 = ''
  private text = ''
  private treeData = '' //单选树形
  private treeDataValue = '' //单选树形value
  private multiTreeData = [] //多选树形
  private multiTsreeDataValue = '' //多选树形value
  private date = ''
  private date1 = ''
  private date4 = ''
  private date5 = ''
  private date6 = ''
  private date7 = ''
  private date8 = ''
  private date9 = ''
  //日期点带快捷键
  private pickerOptions = {
    shortcuts: [
      {
        text: '昨天',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          picker.$emit('pick', date)
        },
      },
      {
        text: '今天',
        onClick(picker) {
          picker.$emit('pick', new Date())
        },
      },
      {
        text: '一周前',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', date)
        },
      },
    ],
  }
  //日期区间带快捷键
  private pickerOptions1 = {
    shortcuts: [
      {
        text: '最近一周',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', [start, end])
        },
      },
      {
        text: '最近一个月',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          picker.$emit('pick', [start, end])
        },
      },
      {
        text: '最近三个月',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          picker.$emit('pick', [start, end])
        },
      },
    ],
  }

  private options = [
    {
      value: '选项1',
      label: '选项A',
    },
    {
      value: '选项2',
      label: '选项B',
    },
    {
      value: '选项3',
      label: '选项C',
    },
    {
      value: '选项4',
      label: '选项D',
    },
    {
      value: '选项5',
      label: '选项E',
    },
  ]

  private options1 = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ]

  private optionData = [
    {
      label: '退订',
      value: '1',
    },
    {
      label: '续订',
      value: '2',
    },
  ]
  //单选树形option
  treeOptions = [
    {
      id: 1,
      label: '一级 1',
      children: [
        {
          id: 4,
          label: '二级 1-1',
        },
      ],
    },
    {
      id: 2,
      label: '一级 2',
      children: [
        {
          id: 5,
          label: '二级 2-1',
        },
        {
          id: 6,
          label: '二级 2-2',
          children: [
            {
              id: 9,
              label: '三级 2-2-1',
            },
            {
              id: 10,
              label: '三级 2-2-2',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: '一级 3',
      children: [
        {
          id: 7,
          label: '二级 3-1',
        },
        {
          id: 8,
          label: '二级 3-2',
        },
      ],
    },
  ]

  //选中数据
  private change(data) {
    console.log(data)
  }
  //子组件修改父组件的值
  private changeFun(key) {
    this.value9 = key
  }
  private changeTree(e) {
    console.log(e)
  }
  //删除tag

  private handelRemove(e, value) {
    value.forEach(item => {
      if (e === item) {
        value.splice(item, 1)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.line {
  display: flex;
  align-items: center;
  margin: 24px 0;

  &__left,
  &__right {
    width: 300px;
    margin-right: 47px;
  }

  .el-select {
    width: 100%;
  }
}

.sub-down {
  border-bottom: 1px solid $border-color-light-1;

  .el-row {
    margin: 24px 0;
  }
}

.date {
  border-bottom: 1px solid #ddd;
}

.sub-down:last-child {
  border-bottom: none;

  .el-row {
    margin-top: 24px;
  }
}

.sub-date_titles {
  display: flex;
  justify-content: space-between;
  width: 562px;
}

.sub-date_title {
  width: 621px;
  display: flex;
  justify-content: space-between;
}

.sub-date,
.sub-date1,
.sub-date2 {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
}

.sub-date {
  width: 720px;
}

.sub-date1 {
  width: 850px;
}

.sub-date2 {
  width: 900px;
}

.auxiliary-message:after {
  content: '辅助信息';
  margin-left: 10px;
  color: $text-color-light-2;
}
</style>
