<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-27 16:40:53
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-01-06 18:14:59
 * @Description:
-->
<template>
  <div class="mavon-box">
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
  </div>
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
.mavon-box {
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
}
</style>
