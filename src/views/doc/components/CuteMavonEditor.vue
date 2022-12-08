<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-27 16:40:53
 * @LastEditors: 马妍
 * @LastEditTime: 2022-11-16 17:18:46
 * @Description:
-->
<template>
  <mavon-editor
    ref="md"
    :value="content"
    :subfield="false"
    default-open="preview"
    :toolbars-flag="false"
    :ishljs="true"
    :code-style="'atom-one-dark'"
    class="test"
  />
</template>
<script lang="ts">
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteMavonEditor',
  components: { mavonEditor },
})
export default class extends Vue {
  @Prop({ type: String, required: true }) content: ''
}
</script>
<style lang="scss" scoped>
.test {
  font-size: 12px;
  color: $text-color-primary;
  z-index: auto;

  ::v-deep.v-show-content.scroll-style.scroll-style-border-radius {
    background: $color-bg-2 !important;
  }
}

::v-deep.markdown-body h2 {
  border-bottom: 1px solid $border-color-light-1;
}

::v-deep.markdown-body pre {
  background: $color-bg-2 !important;
}
</style>
