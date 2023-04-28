<template>
  <md-preview :text="content" :height="height" @copy-code-success="onCopy" />
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { MdPreview } from '@feta/markdown'
import '@feta/markdown/lib/index.css'

Vue.use(MdPreview)

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  @Prop({ type: String, required: true }) content!: string
  @Prop({ type: String, default: 'calc(100vh - 130px)' }) height!: string

  // 预览区代码复制成功
  private onCopy() {
    this.$message.success('复制成功')
  }
}
</script>
