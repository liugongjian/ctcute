import Steps from './Steps/steps.vue'
import Step from './Steps/step.vue'
import Alert from './Alert/Alert.vue'
import Collapse from './Collapse/collapse.vue'

export default {
  install(Vue) {
    Vue.component(Steps.name, Steps)
    Vue.component(Step.name, Step)
    Vue.component(Alert.name, Alert)
    Vue.component(Collapse.name, Collapse)
  },
}
