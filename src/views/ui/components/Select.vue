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
          <cute-remind-select :data="options1" :title="name" :placeholder="name" :model="value9" />
        </div>
      </div>
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
          v-model="value4"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>

        <el-date-picker
          v-model="value5"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期和时间"
          end-placeholder="结束日期和时间"
        >
        </el-date-picker>
      </div>
      <div class="sub-date">
        <el-date-picker v-model="value6" type="datetime" placeholder="选择时间" size="mini"> </el-date-picker>

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
          v-model="value8"
          type="datetimerange"
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
        <cute-selected-input :data="checkList" :option-data="optionData" @request="request" />
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
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import CuteRemindSelect from '@/components/CuteSelect/CuteRemindSelect.vue'
// import CuteSelectedInput from '@/components/CuteSelect/CuteSelectedInput.vue'

@Component({
  name: 'UiSelect',
  // components: { CuteSelectedInput },
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

  private checkList = ['已选中项']
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

.sub-down:last-child {
  border-bottom: none;

  .el-row {
    margin-top: 24px;
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

.auxiliary-message:after {
  content: '辅助信息';
  margin-left: 10px;
  color: $text-color-light-2;
}
</style>
