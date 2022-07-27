/*
 * @Author: huanglulu
 * @Date: 2022-07-26 18:46:54
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-27 13:56:20
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CuteComponent from '@cutedesign/base'
import i18n from '@/i18n'
import 'mavon-editor/dist/css/index.css'
import '@/permission'
import '@/assets/icons'

Vue.use(CuteComponent)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
