/*
 * @Author: huanglulu
 * @Date: 2022-07-26 18:46:54
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-27 13:56:20
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router, { routes } from './router'
import store from './store'
import CuteComponent from '@cutedesign/base'
import i18n from '@/i18n'
import '@/assets/icons'
import http from '@/utils/request'
import CuteAuthenticate from '@cutedesign/authenticate'
import SvgTopology from 'svg-topology'
import 'svg-topology/dist/svg-topology.css'
Vue.use(CuteAuthenticate, {
  baseUrl: window.commonConfig.baseUrl,
  authenticateType: window.commonConfig.authenticateType,
  enableAuthorize: window.commonConfig.enableAuthorize,
  router,
  routes,
  http,
  beforeEachStartHook: async (to, from, next) => {
    if (to.path === '/500') {
      return next()
    }
  },
})

Vue.use(CuteComponent)
Vue.use(SvgTopology)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
