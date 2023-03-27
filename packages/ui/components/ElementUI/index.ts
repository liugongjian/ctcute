import Steps from './Steps/index.vue'
import Step from './Steps/Step.vue'
import Alert from './Alert/index.vue'
import Collapse from './Collapse/index.vue'
import Rate from './Rate/index.vue'
import ColorPicker from './ColorPicker/index.vue'
import Tabs from './Tabs/tabs.vue'
import Button from './Button/index.vue'
import MessageBox from './MessageBox/index.js'

export default {
  install(Vue) {
    Vue.component(Steps.name, Steps)
    Vue.component(Step.name, Step)
    Vue.component(Alert.name, Alert)
    Vue.component(Collapse.name, Collapse)
    Vue.component(Rate.name, Rate)
    Vue.component(ColorPicker.name, ColorPicker)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Button.name, Button)
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
  },
}
export { Steps, Step, Alert, Collapse, Rate, ColorPicker, Button, MessageBox }
