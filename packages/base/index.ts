/*
 * @Author: huanglulu
 * @Date: 2022-07-18 15:05:01
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-10-14 17:04:10
 * @Description:
 */
import ElementUI from 'element-ui'
import ElementUIOverride from './components/ElementUI'
import './components/ElementUI/settings'
import '@cutedesign/theme'

/**
 * 组件清单
 */
import CuteButtonGroup from './components/CuteCombinationButton/CuteButtonGroup.vue'
import CuteEditInput from './components/CuteEditInput/index.vue'
import CuteFormInfo from './components/CuteFormInfo/index.vue'
import CuteRemindInput from './components/CuteInput/CuteRemindInput.vue'
import CuteSpecialRadio from './components/CuteRadio/CuteSpecialRadio.vue'
import CuteRemindSelect from './components/CuteSelect/CuteRemindSelect.vue'
import CuteSelectedInput from './components/CuteSelect/CuteSelectedInput.vue'
import CuteState from './components/CuteState/index.vue'
import CuteStepsMulti from './components/CuteSteps/CuteStepsMulti.vue'
import CuteTableFilter from './components/CuteTable/CuteTableFilter.vue'
import CuteTag from './components/CuteTag/index.vue'
import CuteTitledBlock from './components/CuteTitledBlock/index.vue'
import CuteTableColumnSettings from './components/CuteTable/CuteTableColumnSettings.vue'
import CuteSelectTree from './components/CuteSelect/CuteSelectTree.vue'
import CuteArea from './components/CuteArea/index.vue'
import CuteSlider from './components/CuteSlider/index.vue'
export {
  CuteButtonGroup,
  CuteEditInput,
  CuteFormInfo,
  CuteRemindInput,
  CuteSpecialRadio,
  CuteRemindSelect,
  CuteSelectedInput,
  CuteState,
  CuteStepsMulti,
  CuteTableFilter,
  CuteTag,
  CuteTitledBlock,
  CuteTableColumnSettings,
  CuteSelectTree,
  CuteArea,
  CuteSlider,
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
  CuteTableColumnSettings,
  CuteSelectTree,
  CuteArea,
  CuteSlider,
]

export default {
  install(Vue) {
    Vue.use(ElementUI, { size: 'medium' })
    Vue.use(ElementUIOverride)

    componentsList.map((component: any) => {
      Vue.component(component.options ? component.options.name : component.name, component)
    })
  },
}
