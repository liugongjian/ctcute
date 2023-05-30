/*
 * @Author: huanglulu
 * @Date: 2022-07-26 18:46:54
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-31 06:31:06
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router, { routes } from './router'
import store from './store'
// import '@cutedesign/ui/lib/index.css'
// 本地开发为方便实时调试引用源码样式，不使用构建样式
import '@cutedesign/ui/index.scss'
import CuteComponent, { VXETable } from '@cutedesign/ui'
import i18n from '@/i18n'
import '@/assets/icons'
import http from '@/utils/request'
import CuteAuthenticate from '@cutedesign/authenticate'
import SvgTopology from 'svg-topology'
import 'svg-topology/dist/svg-topology.css'
import ECharts from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { use } from 'echarts/core'
import { BarChart, PieChart, LineChart } from 'echarts/charts'
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
} from 'echarts/components'
use([
  CanvasRenderer,
  PieChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  BarChart,
  LineChart,
])
Vue.component('VChart', ECharts)

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
Vue.use(VXETable)
Vue.use(SvgTopology)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
