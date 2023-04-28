<template>
  <div>
    <h3>{{ $t('demo.area.demo1.title') }}</h3>
    <cute-area
      v-model="value"
      placeholder="请选择"
      clearable
      :data="areas"
      :column="4"
      popper-width="560px"
      :format="format"
      :recent-data="recentData"
      :show-recent="showRecent"
      @change="selectCityClick"
      @clear="handleClearClick"
    >
      <span slot="other" class="suffix-other">
        其他区域
        <span>{{ otherCount }}</span>
      </span>
    </cute-area>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo6',
})
export default class extends Vue {
  private value = ''
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
    this.otherCount = data.count
    this.value = data.value
  }

  private format(row) {
    return row.label + ' ' + row.count
  }

  private handleClearClick() {
    console.log('clear', this.value)
  }
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }
}

.suffix-other {
  cursor: pointer;

  span {
    margin-left: 5px;
  }
}
</style>
