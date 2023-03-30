<template>
  <div>
    <div class="component__container">
      <h1>CuteLayout / 布局</h1>
      <div>
        <el-button type="primary" @click="handleClick">查看布局</el-button>
      </div>
      <el-dialog
        class="large-dialog"
        :title="title"
        :visible="visible"
        :close-on-click-modal="false"
        :fullscreen="true"
        @close="close"
      >
        <demo1 />
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'

@Component({
  name: 'CuteLayoutDemo',
  components: {
    Demo1,
  },
})
export default class extends Vue {
  private title = 'cutelayout 布局'
  private visible = false
  private close() {
    this.visible = false
  }

  private handleClick() {
    this.visible = true
  }
}
</script>
