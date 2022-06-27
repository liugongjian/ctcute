<template>
  <div class="ui-select">
    <p>将动作或菜单折叠到下拉菜单中</p>
    <div class="sub-down">
      <h3>常规用法</h3>
      <el-row>
        <el-col :span="7">
          <el-select v-model="value" popper-class="select-radio" filterable>
            <el-option label="默认选项" value="默认选项"> </el-option>
            <el-option label="已选择项" value="已选择项"> </el-option>
            <el-option label="不可用" value="不可用" disabled> </el-option>
            <el-option label="默认选项1" value="默认选项1" class="auxiliary-message"> </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="loading-select">
          <el-select value="" popper-class="select-radio" filterable loading placeholder="加载中">
            <option value=""></option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="sub-down">
      <h3>禁用状态</h3>
      <el-row>
        <el-select v-model="value2" disabled placeholder="请选择">
          <el-option label="选项一" value="选项一"> </el-option>
        </el-select>
      </el-row>
    </div>
    <div class="sub-down">
      <h3>多选</h3>
      <el-row>
        <el-col :span="7">
          <el-select v-model="selectValue" multiple placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="disabled-select">
          <el-select v-model="value1" multiple placeholder="请选择" disabled>
            <span slot="prefix">11</span>
            <el-option label="不可用" value=""> <svg-icon name="save"> </svg-icon></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="sub-down">
      <h3>带提示</h3>
      <el-row>
        <remind-input :data="options1" :placeholder="name" />
      </el-row>
    </div>
    <div class="sub-down">
      <h3>日期/时间选择</h3>
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

        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>

        <el-date-picker
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期和时间"
          end-placeholder="结束日期和时间"
        >
        </el-date-picker>
      </div>
      <div class="sub-date">
        <el-date-picker type="datetime" placeholder="选择时间" size="mini"> </el-date-picker>

        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
        >
        </el-date-picker>

        <el-date-picker
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期和时间"
          end-placeholder="结束日期和时间"
          size="mini"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      <h3>操作已选项</h3>
      <p>勾选多选列表后，选择操作下拉框会显示勾选了几个选项</p>
      <el-row>
        <selected-input :data="checkList" :option-data="optionData" @request="request" />
      </el-row>
      <el-checkbox-group v-model="checkList">
        <el-row>
          <el-checkbox label="未选中项"></el-checkbox>
        </el-row>
        <el-row>
          <el-checkbox label="已选中项"></el-checkbox>
        </el-row>
      </el-checkbox-group>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RemindInput from '@/components/Select/RemindSelect.vue'
import SelectedInput from '@/components/Select/SelectedInput.vue'

@Component({
  name: 'UiSelect',
  components: { RemindInput, SelectedInput },
})
export default class extends Vue {
  public static title = {
    zh: '选择器',
    en: 'Select',
  }

  private checkList = ['已选中项']
  private name = '数据资源名称'
  private selectValue = []
  private value = []
  private value1 = ['不可用']
  private value2 = '选项一'
  private value3 = ['不可用', '选项']
  private text = ''
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

  optionData = [
    {
      label: '退订',
      value: '1',
    },
    {
      label: '续订',
      value: '2',
    },
  ]

  private request(data) {
    console.log(data)
  }
}
</script>

<style lang="scss" scoped>
.default-select {
  .el-button {
    padding: 0;
  }

  .el-row {
    margin-top: 0;
  }
}

.sub-down {
  border-bottom: 1px solid $border-color-light-1;

  .el-row {
    margin: 24px 0;
  }
}

.sub-date {
  width: 908px;
  display: flex;
  margin-bottom: 24px;
}

.el-date-editor + .el-date-editor {
  margin-left: 48px;
}
</style>
