import Steps from './Steps/index.vue'
import Step from './Steps/Step.vue'
import Alert from './Alert/index.vue'
import Collapse from './Collapse/index.vue'
import Rate from './Rate/index.vue'

export default {
  install(Vue) {
    Vue.component(Steps.name, Steps)
    Vue.component(Step.name, Step)
    Vue.component(Alert.name, Alert)
    Vue.component(Collapse.name, Collapse)
    Vue.component(Rate.name, Rate)
  },
}
