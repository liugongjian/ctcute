import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'
import { initCas } from '@/models/Cas'
import './assets/icons/components'
import './assets/css/element-variables.scss'
import './assets/css/index.scss'
import '@/permission'

Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

/**
 * 先判断用户是否登录
 */
initCas('#container').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
