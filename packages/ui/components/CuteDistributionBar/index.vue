<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:54
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-28 16:13:21
 * @Description:
-->
<template>
  <div class="distribution-bar">
    <div class="distribution-bar__wrap">
      <span v-for="(item, index) in barList" :key="item[propsCode]" class="distribution-bar__checkbox-item">
        <el-checkbox
          v-model="item[propsChecked]"
          class="distribution-bar__checkbox"
          :style="{ ['--color' + (index + 1)]: colors[index] }"
          @change="handleCheckboxChange(item, index)"
        >
          <span class="distribution-bar__checkbox__name">{{ item[propsName] }}</span>
          <el-input-number
            v-show="item[propsChecked]"
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
          <span v-show="item[propsChecked]" class="distribution-bar__checkbox__rate" @click.prevent>
            <span v-if="showValue">{{ getRate(item[propsValue], index) }}</span>
            <span>%</span>
          </span>
        </el-checkbox>
        <br v-if="showBr(index)" />
      </span>
    </div>
    <split-bar
      v-show="splitBarShow"
      v-model="barValueList"
      class="distribution-bar__split"
      :show-last-button="!isFree"
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
import variables from '@cutedesign/ui/style/themes/default/index.scss'

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
    default: () => [
      variables.chartColor1,
      variables.chartColor2,
      variables.chartColor6,
      variables.chartColor8,
      variables.chartColor10,
      variables.chartColor11,
      variables.chartColor5,
      variables.chartColor4,
      variables.chartColor7,
      variables.chartColor9,
    ],
  })
  colors: []
  @Prop({ type: Number, default: 100 }) max?: number
  @Prop({ type: Number, default: 0 }) ratePrecision?: number
  @Prop({ type: Boolean, default: true }) showValue?: boolean
  @Prop({ type: String, default: 'fixed' }) mode?: string // fixed free
  @Prop({ type: [Number, String], default: 'auto' }) rowNumber?: number | string
  @Prop({ type: Object, default: () => ({}) }) props?: {
    code: string
    value: string
    name: string
    checked: string
  }

  public barList: Array<any> = []
  public maxWidth = 'auto'

  get barValueList() {
    return this.barList.filter(item => item[this.propsChecked]).map(item => item[this.propsValue])
  }
  set barValueList(val) {
    let index = 0
    this.barList.forEach(item => {
      if (item[this.propsChecked]) {
        item[this.propsValue] = val[index] || 0
        index++
      }
    })
  }
  get barWholeList() {
    return this.barList.map((item, index) => {
      item.rate = this.getRate(item[this.propsValue], index)
      return item
    })
  }
  get barWholeCheckedList() {
    return this.barWholeList.filter(item => item[this.propsChecked])
  }
  get barTextData() {
    return this.barWholeCheckedList.map(item => {
      return `${item[this.propsName]}：${item[this.propsValue]}（${item.rate}%）`
    })
  }
  get barColor() {
    const barColor: Array<string> = []
    this.barList.forEach((item, index) => {
      if (item[this.propsChecked]) {
        barColor.push(this.colors[index])
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
  get propsChecked() {
    return this.props.checked || 'checked'
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
    const checkedList = this.barList.filter(item => item[this.propsChecked])
    const len = checkedList.length
    const aveValue = Math.floor(this.barMax / len)
    const aveArray = this.barList.map(item => {
      // 向下取整平均值，最后一位补齐到100
      item[this.propsValue] = item[this.propsChecked] ? aveValue : 0
      if (len > 0 && checkedList[len - 1][this.propsCode] === item[this.propsCode]) {
        item[this.propsValue] = this.barMax - aveValue * (len - 1)
      }
      return item
    })
    this.barList = aveArray
    this.emitChange()
  }
  /**
   * free模式勾选
   * @param item 数组项
   * @param index 数组序号
   */
  private freeCheckboxChange(item, index) {
    const checkedList = this.barList.filter(item => item[this.propsChecked])
    if (!item[this.propsChecked]) {
      item[this.propsValue] = 0
    } else {
      if (checkedList.length === 1) {
        // 第一项默认给50%
        item[this.propsValue] = Math.round(0.5 * this.barMax)
      } else {
        // 超出最大值赋值为0，没超出最大值默认赋值5%
        const total = this.barValueList.reduce((total, valueItem) => {
          return total + valueItem
        }, 0)
        item[this.propsValue] = total >= this.barMax ? 0 : Math.round(0.05 * this.barMax)
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
  }
  /**
   * free模式限制输入框不能输入最大值，fixed模式限制输入框不能输入超出相邻总和的值
   * @param index 数组序号
   */
  getValueItemMax(index) {
    let rest
    if (this.isFree) {
      rest = this.barList.reduce((total, barValueItem, barValueIndex) => {
        return barValueIndex === index || !barValueItem[this.propsChecked]
          ? total
          : total + barValueItem[this.propsValue]
      }, 0)
    } else {
      const nearIndex = this.getNearIndex(index)
      rest = this.barList.reduce((total, barValueItem, barValueIndex) => {
        return barValueIndex === nearIndex || barValueIndex === index || !barValueItem[this.propsChecked]
          ? total
          : total + barValueItem[this.propsValue]
      }, 0)
    }
    return this.barMax - rest
  }
  /**
   * 获取传入index最近一个被选中的项
   */
  private getNearIndex(index) {
    let nearIndex = this.barList.findIndex(item => item[this.propsChecked])
    for (const [barIndex, barItem] of this.barList.entries()) {
      if (barItem[this.propsChecked] && barIndex > index) {
        nearIndex = barIndex
        break
      }
    }
    return nearIndex
  }
  /**
   * 获取被选中的最后一项index
   */
  private getLastIndex() {
    let lastIndex = 0
    for (const [barIndex, barItem] of this.barList.entries()) {
      if (barItem[this.propsChecked]) {
        lastIndex = barIndex
      }
    }
    return lastIndex
  }
  getRate(value = 0, index) {
    const total = this.barValueList.reduce((total, item) => {
      return total + item
    }, 0)
    const lastIndex = this.getLastIndex()
    let rate
    // 保证最后一项数值和前面加起来是100%
    if (total === this.barMax && index === lastIndex) {
      const preTotalRate = this.barList.reduce((total, barItem, barIndex) => {
        return barIndex !== lastIndex && barItem[this.propsChecked] ? total + Number(barItem.rate) : total
      }, 0)
      rate = 100 - preTotalRate
    } else {
      rate = (value / this.barMax) * 100
    }
    return this.toPrecision(rate)
  }
  showBr(index) {
    if (this.rowNumber === 'auto') {
      return false
    } else {
      return (index + 1) % Number(this.rowNumber) === 0
    }
  }
  emitChange() {
    this.$emit('change', this.barWholeCheckedList)
  }
  private toPrecision(num) {
    if (isNaN(parseFloat(num))) {
      return ''
    }
    return (Math.round(num * Math.pow(10, this.ratePrecision)) / Math.pow(10, this.ratePrecision)).toFixed(
      this.ratePrecision
    )
  }

  getCheckedData() {
    return this.barWholeCheckedList
  }
  getAllData() {
    return this.barWholeList
  }
  setCheckByCode(code, checked = true) {
    const index = this.barList.findIndex(item => item[this.propsCode] === code)
    if (checked === this.barList[index][this.propsChecked]) return
    this.barList[index][this.propsChecked] = checked
    const item = this.barList.find(item => item[this.propsCode] === code)
    this.handleCheckboxChange(item, index)
  }
  setValueByCode(code, value = 0) {
    const index = this.barList.findIndex(item => item[this.propsCode] === code)
    if (!this.barList[index].checked) {
      this.setCheckByCode(code)
    }
    if (this.barValueList.length === 1 && !this.isFree) return
    this.barList[index][this.propsValue] = value
    const item = this.barList.find(item => item[this.propsCode] === code)
    this.handleValueChange(item, index)
  }

  @Watch('data', {
    immediate: true,
    deep: true,
  })
  dataChanged(newVal) {
    if (newVal.length > 10) {
      console.error('cute-distribution-bar暂不支持10个数据项以上的展示，请选择其它合适的组件进行展示')
      return
    }
    this.barList = cloneDeep(newVal)
  }
}
</script>
