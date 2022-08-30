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
Vue.use(CuteAuthenticate, {
  baseUrl: window.commonConfig.baseUrl,
  authenticateType: window.commonConfig.authenticateType,
  enableAuthorize: window.commonConfig.enableAuthorize,
  authorizeType: window.commonConfig.authorizeType,
  router,
  routes,
  http,
})

Vue.use(CuteComponent)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
