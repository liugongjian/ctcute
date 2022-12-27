<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:54
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-27 16:38:36
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
        :style="{ ['--color' + (index + 1)]: color[index] }"
        @change="handleCheckboxChange(item, index)"
      >
        <span class="distribution-bar__checkbox__name" @click.prevent>{{ item[propsName] }}</span>
        <el-input-number
          v-show="item.checked"
          v-model="item[propsValue]"
          :disabled="!isFree && barValueList.length === 1"
          class="distribution-bar__checkbox__value"
          :controls="false"
          :min="0"
          :precision="0"
          :max="getValueItemMax(index)"
          size="small"
          @change="handleValueChange(item, index)"
        ></el-input-number>
        <span v-show="item.checked" class="distribution-bar__checkbox__rate" @click.prevent>
          <span v-if="showValue">{{ getRate(item[propsValue]) }}</span>
          <span>%</span>
        </span>
      </el-checkbox>
    </div>
    <split-bar
      v-show="splitBarShow"
      v-model="barValueList"
      class="distribution-bar__split"
      :fix-last-button="!isFree"
      :max="barMax"
      :text-data="barTextData"
      :bar-color="barColor"
      :show-percentage="!showValue"
      @change="handleSplitBarChange"
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
  @Prop({ type: Array, default: () => [] }) data?: []
  @Prop({
    type: Array,
    default: () => ['#409eff', '#e6a23c', '#409eff', '#e6a23c', '#409eff', '#e6a23c', '#409eff', '#e6a23c'],
  })
  color: []
  @Prop({ type: Number, default: 100 }) max?: number
  @Prop({ type: Number, default: 0 }) precision?: number
  @Prop({ type: Boolean, default: true }) showValue?: boolean
  @Prop({ type: String, default: 'fixed' }) mode?: string // fixed free
  @Prop({ type: Object, default: () => ({}) }) props?: []

  public barList: Array<any> = []

  get barValueList() {
    return this.barList.filter(item => item.checked).map(item => item[this.propsValue])
  }
  set barValueList(val) {
    let index = 0
    this.barList.forEach(item => {
      if (item.checked) {
        item[this.propsValue] = val[index] || 0
        index++
      }
    })
  }
  get barWholeList() {
    return this.barList.map(item => {
      item.rate = this.getRate(item[this.propsValue])
      return item
    })
  }
  get barWholeCheckedList() {
    return this.barWholeList.filter(item => item.checked)
  }
  get barTextData() {
    return this.barWholeCheckedList.map(item => {
      return `${item[this.propsName]}：${item[this.propsValue]}（${item.rate}%）`
    })
  }
  get barColor() {
    const barColor: Array<string> = []
    this.barList.forEach((item, index) => {
      if (item.checked) {
        barColor.push(this.color[index])
      }
    })
    return barColor
  }
  get splitBarShow() {
    return this.barValueList && this.barValueList.length > 0
  }
  get barMax() {
    return this.showValue ? this.max : 100
  }
  get propsCode() {
    return this.props.code || 'code'
  }
  get propsValue() {
    return this.props.value || 'value'
  }
  get propsName() {
    return this.props.name || 'name'
  }
  get isFree() {
    return this.mode === 'free'
  }

  handleSplitBarChange() {
    this.emitChange()
  }
  handleCheckboxChange(item, index) {
    if (this.isFree) {
      this.freeCheckboxChange(item, index)
    } else {
      this.fixedCheckboxChange()
    }
  }
  private fixedCheckboxChange() {
    const checkedList = this.barList.filter(item => item.checked)
    const len = checkedList.length
    const aveValue = Math.floor(this.barMax / len)
    const aveArray = this.barList.map(item => {
      // 向下取整平均值，最后一位补齐到100
      item[this.propsValue] = item.checked ? aveValue : 0
      if (len > 0 && checkedList[len - 1][this.propsCode] === item[this.propsCode]) {
        item[this.propsValue] = this.barMax - aveValue * (len - 1)
      }
      return item
    })
    this.barList = aveArray
    this.emitChange()
  }
  private freeCheckboxChange(item, index) {
    const checkedList = this.barList.filter(item => item.checked)
    if (!item.checked) {
      item[this.propsValue] = 0
    } else {
      if (checkedList.length === 1) {
        item[this.propsValue] = Math.round(0.5 * this.barMax)
      } else {
        const total = this.barValueList.reduce((total, valueItem) => {
          return total + valueItem
        }, 0)
        item[this.propsValue] = total >= this.barMax ? 0 : Math.round(0.01 * this.barMax)
      }
    }
    this.barList.splice(index, 1, item)
    this.emitChange()
  }
  handleValueChange(item, index) {
    if (!this.isFree) {
      this.fixedValueChange(item, index)
    }
    this.emitChange()
  }
  private fixedValueChange(item, index) {
    const nearIndex = this.getNearIndex(index)
    const total = this.getValueItemMax(index)
    this.$set(this.barList[nearIndex], this.propsValue, total - item[this.propsValue])
    this.emitChange()
  }
  /**
   * free模式限制输入框不能输入最大值，fixed模式限制输入框不能输入超出相邻总和的值
   * @param index 数组序号
   */
  getValueItemMax(index) {
    let rest
    if (this.isFree) {
      rest = this.barList.reduce((total, barValueItem, barValueIndex) => {
        return barValueIndex === index || !barValueItem.checked
          ? total
          : total + barValueItem[this.propsValue]
      }, 0)
    } else {
      const nearIndex = this.getNearIndex(index)
      rest = this.barList.reduce((total, barValueItem, barValueIndex) => {
        return barValueIndex === nearIndex || barValueIndex === index || !barValueItem.checked
          ? total
          : total + barValueItem[this.propsValue]
      }, 0)
    }

    return this.barMax - rest
  }
  private getNearIndex(index) {
    let nearIndex = this.barList.findIndex(item => item.checked)
    for (const [barIndex, barItem] of this.barList.entries()) {
      if (barItem.checked && barIndex > index) {
        nearIndex = barIndex
        break
      }
    }
    return nearIndex
  }
  getRate(value) {
    const rate = (value / this.barMax) * 100
    return this.toPrecision(rate)
  }
  emitChange() {
    this.$emit('change', this.barValueList, this.barWholeList)
  }
  private toPrecision(num: number) {
    return parseFloat(Math.round(num * Math.pow(10, this.precision)) / Math.pow(10, this.precision)).toFixed(
      this.precision
    )
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
    margin-top: 25px;
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
      cursor: default;
    }

    &__name {
      cursor: default;
    }
  }

  ::v-deep {
    @for $i from 1 through 10 {
      .distribution-bar__checkbox:nth-child(#{$i}) .el-checkbox__input.is-checked .el-checkbox__inner {
        border-color: var(--color#{$i});
        background-color: var(--color#{$i});
      }
      .distribution-bar__checkbox:nth-child(#{$i}) .el-checkbox__input .el-checkbox__inner:hover,
      .distribution-bar__checkbox:nth-child(#{$i}) .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: var(--color#{$i});
      }
    }
  }
}
</style>
