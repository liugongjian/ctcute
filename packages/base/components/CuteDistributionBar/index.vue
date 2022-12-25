<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:54
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-25 18:35:54
 * @Description:
-->
<template>
  <div class="distribution-bar">
    <div>
      <el-checkbox
        v-for="(item, index) in barList"
        :key="index"
        v-model="item.checked"
        class="distribution-bar__checkbox"
        @change="handleCheckboxChange"
      >
        <span>{{ item.name }}</span>
        <el-input-number
          v-show="item.checked"
          v-model="item.value"
          class="distribution-bar__checkbox__value"
          :controls="false"
          :min="0"
          :precision="0"
          :max="getValueItemMax(item, index)"
          size="small"
          @change="handleValueChange(item, index)"
        ></el-input-number>
        <span v-show="item.checked" class="distribution-bar__checkbox__rate" @click.prevent
          >{{ getRate(item) }}%</span
        >
      </el-checkbox>
    </div>
    <split-bar
      v-show="splitBarShow"
      v-model="barValueList"
      class="distribution-bar__split"
      :fix-last-button="true"
      :max="max"
    ></split-bar>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import SplitBar from './SplitBar.vue'
import { cloneDeep } from 'lodash'

@Component({
  name: 'CuteDistributionBar',
  components: {
    SplitBar,
  },
})
export default class extends Vue {
  @Prop({ type: Array, default: () => [] }) value?: []
  @Prop({ type: Array, default: () => [] }) data?: []
  @Prop({ type: Number, default: 100 }) max?: number

  public barList: Array<any> = []

  get barValueList() {
    return this.barList.filter(item => item.checked).map(item => item.value)
  }

  set barValueList(val) {
    let index = 0
    this.barList.forEach(item => {
      if (item.checked) {
        item.value = val[index] || 0
        index++
      }
    })
  }

  get splitBarShow() {
    return this.barValueList && this.barValueList.length > 0
  }

  handleCheckboxChange() {
    const checkedList = this.barList.filter(item => item.checked)
    const len = checkedList.length
    const aveValue = Math.floor(100 / len)
    const aveArray = this.barList.map(item => {
      // 向下取整平均值，最后一位补齐到100
      item.value = item.checked ? aveValue : 0
      if (len > 0 && checkedList[len - 1].code === item.code) {
        item.value = 100 - aveValue * (len - 1)
      }
      return item
    })
    this.barList = aveArray
  }
  // handleValueChange(item, index) {
  // const maxValue = this.getValueItemMax(item, index)
  // const nextValue = this.barValueList[index]
  // }
  getValueItemMax(item, index) {
    // console.log(11, item.value)
    const nearValue =
      index === this.barValueList.length - 1 ? this.barValueList[index - 1] : this.barValueList[index + 1]
    return nearValue + item.value
  }
  getRate(item) {
    const rate = (item.value / this.max) * 100
    return this.toPrecision(rate, 2)
  }
  private toPrecision(num: number, precision = 2) {
    return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision))
  }

  @Watch('data', {
    immediate: true,
    deep: true,
  })
  dataChanged(newVal) {
    this.barList = cloneDeep(newVal)
  }
}
</script>
<style lang="scss" scoped>
.distribution-bar {
  &__split {
    margin-top: 30px;
  }

  &__checkbox {
    margin-right: 24px;
    margin-bottom: 5px;

    ::v-deep {
      .el-checkbox__label {
        padding-left: 8px;
      }

      .el-checkbox__input.is-checked + .el-checkbox__label {
        color: #333;
      }
    }

    &__value {
      display: inline-block;
      margin-left: 6px;
      width: 54px;
    }

    &__rate {
      display: inline-block;
      padding-left: 6px;
      cursor: text;
    }
  }
}
</style>
