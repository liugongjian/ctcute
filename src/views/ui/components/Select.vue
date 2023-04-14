<template>
  <div class="ui-select">
    <!-- <p>将动作或菜单折叠到下拉菜单中</p> -->
    <div class="page-content">
      <el-radio-group v-model="itemSize" size="small">
        <el-radio-button value="medium" label="medium">默认</el-radio-button>
        <el-radio-button value="small" label="small">小</el-radio-button>
        <el-radio-button value="large" label="large">大</el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="itemDisabled" size="small">
        <el-radio-button :value="true" :label="true">禁用</el-radio-button>
        <el-radio-button :value="false" :label="false">启用</el-radio-button>
      </el-radio-group>
    </div>
    <div class="sub-down">
      <h3>常规用法</h3>
      <div class="line">
        <div class="line__left">
          <el-select v-model="value" :size="itemSize" :disabled="itemDisabled" filterable>
            <el-option label="默认选项" value="默认选项"> </el-option>
            <el-option label="已选择项" value="已选择项"> </el-option>
            <el-option label="不可用" value="不可用" disabled> </el-option>
            <el-option label="默认选项1" value="默认选项1" class="auxiliary-message"> </el-option>
          </el-select>
        </div>
        <div class="line__right">
          <el-select
            value=""
            :size="itemSize"
            :disabled="itemDisabled"
            filterable
            loading
            placeholder="加载中"
          >
            <option value=""></option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>
        带提示-使用了
        <a href="/component/base/cute-remind-select" target="_blank">CuteRemindSelect</a>
        组件
      </h3>
      <div class="line">
        <div class="line__left">
          <cute-remind-select
            v-model="value9"
            :size="itemSize"
            :disabled="itemDisabled"
            :options="options1"
            :title="name"
            :placeholder="name"
            @change="changeFun"
          />
        </div>
      </div>
    </div>

    <div class="sub-down">
      <h3>多选 - 大： 中： 小</h3>
      <div class="line">
        <div class="line__left">
          <el-select
            v-model="selectValue"
            size="large"
            :disabled="itemDisabled"
            multiple
            placeholder="请选择"
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="line__left">
          <el-select
            v-model="selectValue"
            size="medium"
            :disabled="itemDisabled"
            multiple
            placeholder="请选择"
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="line__left">
          <el-select
            v-model="selectValue"
            size="small"
            :disabled="itemDisabled"
            multiple
            placeholder="请选择"
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>多选-折叠展示tag - 大： 中： 小</h3>
      <div class="line">
        <div class="line__left">
          <el-select
            v-model="collapsedValue"
            size="large"
            :disabled="itemDisabled"
            multiple
            placeholder="请选择"
            collapse-tags
            clearable
            filterable
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              <span>{{ item.label }}</span>
              <span class="option__msg">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="line__left">
          <el-select
            v-model="collapsedValue"
            size="medium"
            :disabled="itemDisabled"
            multiple
            placeholder="请选择"
            collapse-tags
            clearable
            filterable
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              <span>{{ item.label }}</span>
              <span class="option__msg">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="line__left">
          <el-select
            v-model="collapsedValue"
            size="small"
            :disabled="itemDisabled"
            multiple
            placeholder="请选择"
            collapse-tags
            clearable
            filterable
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              <span>{{ item.label }}</span>
              <span class="option__msg">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>
        树形选择/单选-使用了
        <a href="/component/base/cute-select-tree" target="_blank">CuteSelectTree</a>
        组件
      </h3>
      <div class="line">
        <div class="line__left">
          <cute-select-tree
            v-model="treeData"
            :value="treeDataValue"
            :size="itemSize"
            :disabled="itemDisabled"
            :options="treeOptions"
          />
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>
        树形选择/多选-使用了
        <a href="/component/base/cute-select-tree" target="_blank">CuteSelectTree</a>
        组件
      </h3>
      <div class="line">
        <div class="line__left">
          <cute-select-tree
            v-model="multiTreeData"
            :size="itemSize"
            :disabled="itemDisabled"
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
      <h3>时间点选择</h3>
      <div class="page-content">
        <el-radio-group v-model="itemSize" size="small">
          <el-radio-button value="medium" label="medium">默认</el-radio-button>
          <el-radio-button value="small" label="small">小</el-radio-button>
          <el-radio-button value="large" label="large">大</el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="itemDisabled" size="small">
          <el-radio-button :value="true" :label="true">禁用</el-radio-button>
          <el-radio-button :value="false" :label="false">启用</el-radio-button>
        </el-radio-group>
      </div>
      <div class="date">
        <div class="sub-date">
          <div class="sub-date_left">
            <el-time-select
              v-model="text"
              :size="itemSize"
              :disabled="itemDisabled"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
              placeholder="选择时间"
            >
            </el-time-select>
          </div>
          <div class="sub-date_right">
            <el-date-picker
              v-model="value6"
              :size="itemSize"
              :disabled="itemDisabled"
              type="datetime"
              placeholder="选择时间"
            >
            </el-date-picker>
          </div>
        </div>
      </div>

      <h3>日期点选择</h3>
      <div class="date">
        <div class="sub-date">
          <el-date-picker
            v-model="date"
            :size="itemSize"
            :disabled="itemDisabled"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>日期点选择-带快捷键</h3>
      <div class="date">
        <div class="sub-date">
          <el-date-picker
            v-model="date4"
            :size="itemSize"
            :disabled="itemDisabled"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>日期区间选择</h3>
      <div class="date">
        <div class="sub-date">
          <el-date-picker
            v-model="value4"
            type="daterange"
            :size="itemSize"
            :disabled="itemDisabled"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>日期区间选择-带快捷键</h3>
      <div class="date">
        <div class="sub-date">
          <el-date-picker
            v-model="date6"
            type="daterange"
            :size="itemSize"
            :disabled="itemDisabled"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>日期时间区间选择</h3>
      <div class="date">
        <div class="sub-date">
          <el-date-picker
            v-model="value5"
            :size="itemSize"
            :disabled="itemDisabled"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期和时间"
            end-placeholder="结束日期和时间"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>日期时间区间选择-带快捷键</h3>
      <div class="date">
        <div class="sub-date">
          <el-date-picker
            v-model="date8"
            :size="itemSize"
            :disabled="itemDisabled"
            type="datetimerange"
            :picker-options="pickerOptions1"
            range-separator="至"
            start-placeholder="开始日期和时间"
            end-placeholder="结束日期和时间"
          >
          </el-date-picker>
        </div>
      </div>

      <h3>
        地区选择-使用了
        <a href="/component/base/cute-area" target="_blank">CuteArea</a>
        组件
      </h3>

      <div class="line">
        <div class="line__left">
          <cute-area
            v-model="areaValue"
            :size="itemSize"
            :disabled="itemDisabled"
            placeholder="请选择"
            :data="areas"
            :column="4"
            popper-width="560px"
            :format="format"
            :recent-data="recentData"
            :show-recent="showRecent"
            @change="selectCityClick"
          >
            <span slot="other" class="suffix-other"
              >其他区域<span>{{ otherCount }}</span></span
            >
          </cute-area>
        </div>
      </div>
    </div>

    <div class="sub-down">
      <h3>
        操作已选项-使用了
        <a href="/component/base/cute-selected-input" target="_blank">CuteSelectedInput</a>
        组件
      </h3>
      <p>勾选多选列表后，选择操作下拉框会显示勾选了几个选项</p>
      <el-row>
        <cute-selected-input
          :size="itemSize"
          :disabled="itemDisabled"
          :checked-list="checkedList"
          :options="optionData"
          @change="change"
        />
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
  private itemSize = 'medium'
  private itemDisabled = false
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
  private collapsedValue = [] // 多选-折叠展示tag
  private areaValue = ''

  //地区选择
  otherCount = 2
  showRecent = true
  recentData = [
    { label: '深圳', value: 'shenzhen', count: 2 },
    { label: '广州', value: 'guangzhou', count: 20 },
    { label: '西安', value: 'xian', count: 27 },
    { label: '兰州', value: 'lanzhou', count: 28 },
  ]

  areas = [
    {
      label: '华南地区',
      city: [
        { label: '深圳', value: 'shenzhen', count: 2 },
        { label: '广州', value: 'guangzhou', count: 20 },
      ],
    },
    {
      label: '华东地区',
      city: [
        { label: '上海', value: 'shanghai', count: 3 },
        { label: '南京', value: 'nanjing', count: 4 },
        { label: '苏州', value: 'suzhou', count: 5 },
      ],
    },
    {
      label: '华北地区',
      city: [
        { label: '北京', value: 'beijing', count: 21 },
        { label: '天津', value: 'tianjin', count: 22 },
      ],
    },
    {
      label: '西南地区',
      city: [
        { label: '成都', value: 'chengdu', count: 23 },
        { label: '重庆', value: 'chongqing', count: 24 },
      ],
    },
    {
      label: '华中地区',
      city: [
        { label: '武汉', value: 'wuhan', count: 25 },
        { label: '长沙', value: 'changsha', count: 26 },
      ],
    },
    {
      label: '西北地区',
      city: [
        { label: '西安', value: 'xian', count: 27 },
        { label: '兰州', value: 'lanzhou', count: 28 },
      ],
    },
  ]

  private selectCityClick(data) {
    console.log(data, 'dataaa')

    this.otherCount = data.count
    this.areaValue = data.value
  }

  private format(row) {
    return row.label + ' ' + row.count
  }

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
  border-bottom: 1px solid $border-color-light-1;

  .sub-date {
    margin-bottom: 24px;
    display: flex;
    align-items: center;

    &_left,
    &_right {
      margin-right: 48px;
    }
  }
}

.sub-down:last-child {
  border-bottom: none;

  .el-row {
    margin-top: 24px;
  }
}

.auxiliary-message:after {
  content: '辅助信息';
  margin-left: 10px;
  color: $text-color-light-2;
}

.option__msg {
  float: right;
  color: $text-color-light-1;
}

.time-size-box {
  margin-bottom: 20px;
}

.page-content {
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  .el-input {
    width: 250px;
  }
}
</style>
