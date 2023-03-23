/*
 * @Author: huanglulu
 * @Date: 2022-07-11 09:48:22
 * @LastEditors: 王月功
 * @LastEditTime: 2023-03-23 15:55:00
 * @Description:
 */
import { AuthInstance } from '@cutedesign/authenticate'
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'mavon-editor'
declare module 'vuex-module-decorators'

declare module 'path'

declare module 'vue-echarts'

// declare module 'echarts'
declare module '*.svg'
declare module '*.json'
declare module '@wangeditor/editor-for-vue'

declare const VueI18n: any

declare module 'vue/types/vue' {
  interface Vue {
    $auth: AuthInstance
  }
}
