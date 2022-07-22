import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CuteComponent from '@cutedesign/base'
import i18n from '@/i18n'
import mavonEditor from 'mavon-editor'
import '@/permission'
import 'mavon-editor/dist/css/index.css'
import './assets/css/index.scss'

Vue.use(mavonEditor)
Vue.use(CuteComponent)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
