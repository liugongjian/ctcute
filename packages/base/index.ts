/*
 * @Author: huanglulu
 * @Date: 2022-07-18 15:05:01
<<<<<<< HEAD
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-07-29 14:13:49
=======
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-07-28 14:59:39
>>>>>>> e3643910015c6fbcb381c4056ab64677e6488c42
 * @Description:
 */
import ElementUI from 'element-ui'
import ElementUIOverride from './components/ElementUI'
import './components/ElementUI/settings'
import './assets/css/element-variables.scss'
import './assets/fonts/iconfont.css'
import './assets/fonts/bahnschrift.css'
import './assets/icons/index'
import './assets/css/index.scss'

/**
 * 组件清单
 */
import CuteChart from './components/CuteCharts/CuteChart.vue'
import CuteChartCard from './components/CuteCharts/CuteChartCard.vue'
import CuteButtonGroup from './components/CuteCombinationButton/CuteButtonGroup.vue'
import CuteEditInput from './components/CuteEditInput/index.vue'
import CuteFormInfo from './components/CuteFormInfo/index.vue'
import CuteRemindInput from './components/CuteInput/CuteRemindInput.vue'
import CuteSpecialRadio from './components/CuteRadio/CuteSpecialRadio.vue'
import CuteRemindSelect from './components/CuteSelect/CuteRemindSelect.vue'
import CuteSelectedInput from './components/CuteSelect/CuteSelectedInput.vue'
import CuteState from './components/CuteState/index.vue'
import CuteStepsMulti from './components/CuteSteps/CuteStepsMulti.vue'
import CuteSortTable from './components/CuteTable/CuteSortTable.vue'
import CuteTableFilter from './components/CuteTable/CuteTableFilter.vue'
import CuteTag from './components/CuteTag/index.vue'
import CuteTitledBlock from './components/CuteTitledBlock/index.vue'
import CuteTableColumnSettings from './components/CuteTable/CuteTableColumnSettings.vue'
<<<<<<< HEAD
import CuteAppendix from './components/CuteAppendix/index.vue'
=======
import CuteSelectTree from './components/CuteSelect/CuteSelectTree.vue'

>>>>>>> e3643910015c6fbcb381c4056ab64677e6488c42
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
  CuteTableColumnSettings,
<<<<<<< HEAD
  CuteAppendix,
=======
  CuteSelectTree,
>>>>>>> e3643910015c6fbcb381c4056ab64677e6488c42
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
  CuteTableColumnSettings,
  CuteSelectTree,
]

export default {
  install(Vue) {
    Vue.use(ElementUI, { size: 'medium' })
    Vue.use(ElementUIOverride)

    componentsList.map((component: any) => {
      Vue.component(component.options.name, component)
    })
  },
}
