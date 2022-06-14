import Steps from './Steps/steps.vue'
// import Step from './Steps/Step.vue'

export default {
  install(Vue) {
    Vue.component(Steps.name, Steps)
    // Vue.component(Step.name, Step)
  },
}
