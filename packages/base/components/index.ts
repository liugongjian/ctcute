/*
 * @Author: huanglulu
 * @Date: 2022-07-18 15:05:01
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-21 17:22:27
 * @Description:
 */
import CuteChart from './CuteCharts/CuteChart.vue'
import CuteChartCard from './CuteCharts/CuteChartCard.vue'
import CuteButtonGroup from './CuteCombinationButton/CuteButtonGroup.vue'
import CuteEditInput from './CuteEditInput/index.vue'
import CuteFormInfo from './CuteFormInfo/index.vue'
import CuteRemindInput from './CuteInput/CuteRemindInput.vue'
import CuteSpecialRadio from './CuteRadio/CuteSpecialRadio.vue'
import CuteRemindSelect from './CuteSelect/CuteRemindSelect.vue'
import CuteSelectedInput from './CuteSelect/CuteSelectedInput.vue'
import CuteState from './CuteState/index.vue'
import CuteStepsMulti from './CuteSteps/CuteStepsMulti.vue'
import CuteSortTable from './CuteTable/CuteSortTable.vue'
import CuteTableFilter from './CuteTable/CuteTableFilter.vue'
import CuteTag from './CuteTag/index.vue'
import CuteTitledBlock from './CuteTitledBlock/index.vue'

export {
  CuteChart,
  CuteChartCard,
  CuteButtonGroup,
  CuteEditInput,
  CuteFormInfo,
  CuteRemindInput,
  CuteSpecialRadio,
  CuteRemindSelect,
  CuteSelectedInput,
  CuteState,
  CuteStepsMulti,
  CuteSortTable,
  CuteTableFilter,
  CuteTag,
  CuteTitledBlock,
}

/**
 * 仅注册使用频率高的，轻量级的组件
 */
const componentsList = [
  CuteFormInfo,
  CuteEditInput,
  CuteTag,
  CuteRemindInput,
  CuteRemindSelect,
  CuteSelectedInput,
  CuteSortTable,
]

export default {
  install(Vue) {
    componentsList.map((component: any) => {
      Vue.component(component.options.name, component)
    })
  },
}
