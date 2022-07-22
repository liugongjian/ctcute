import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import ElementUIOverride from '@cutedesign/base/components/ElementUI'
import CuteComponent from '@cutedesign/base/components/index'
import i18n from '@/i18n'
import mavonEditor from 'mavon-editor'
import '@/permission'
import '@cutedesign/base/components/ElementUI/settings'
import '@cutedesign/base/assets/css/element-variables.scss'
import '@cutedesign/base/assets/fonts/iconfont.css'
// svgIcon
import '@cutedesign/base/assets/icons/index'
import 'mavon-editor/dist/css/index.css'
import './assets/css/index.scss'

Vue.use(mavonEditor)
Vue.use(ElementUI, { size: 'medium' })
Vue.use(ElementUIOverride)
Vue.use(CuteComponent)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
