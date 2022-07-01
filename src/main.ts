import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import ElementUIOverride from '@/components/ElementUI'
import '@/components/ElementUI/settings'
import i18n from '@/i18n'
import mavonEditor from 'mavon-editor'
import SvgIcon from 'vue-svgicon'
import 'mavon-editor/dist/css/index.css'
import './assets/icons/components'
import './assets/css/element-variables.scss'
import './assets/css/index.scss'
import '@/permission'
import './assets/fonts/iconfont.css'

Vue.use(mavonEditor)
Vue.use(ElementUI, { size: 'medium' })
Vue.use(ElementUIOverride)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
