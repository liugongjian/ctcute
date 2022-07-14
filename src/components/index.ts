/**
 * 仅注册使用频率高的，轻量级的组件
 */
const componentsList = [
  require('./CuteFormInfo/index.vue'),
  require('./CuteEditInput/index.vue'),
  require('./CuteTag/index.vue'),
  require('./CuteInput/CuteRemindInput.vue'),
  require('./CuteSelect/CuteRemindSelect'),
  require('./CuteSelect/CuteSelectedInput.vue')
]

export default {
  install(Vue) {
    componentsList.map((component: any) => {
      const _component = component.default
      Vue.component(_component.options.name, _component)
    })
  },
}
