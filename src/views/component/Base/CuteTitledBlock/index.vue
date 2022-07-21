<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-21 09:23:09
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-21 10:27:13
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteTitledBlock / 带标题的内容块</h1>
      <component-demo path="@/views/component/Base/CuteTitledBlock/Demo1.vue">
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
