<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:56:09
 * @LastEditors: 王亚振
 * @LastEditTime: 2022-07-21 11:10:10
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>CuteEditInput / 可编辑按钮</h1>
      <component-demo path="@/views/component/Base/CuteEditInput/Demo1.vue">
        <demo1 />
      </component-demo>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteTitledBlockDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {}
</script>
