<template>
  <el-card>
    <h1>测试页面create</h1>
    {{ $route.params.type }}
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Page3Create',
})
export default class extends Vue {
  private mounted() {
    this.$route.meta.activeMenu = `/component/test/layout2/page3b/page3b-${this.$route.params.type}`
  }
}
</script>
