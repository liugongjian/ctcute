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
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteMavonEditor',
})
export default class extends Vue {
  @Prop({ type: String, required: true }) content: ''
}
</script>
<style lang="scss" scoped>
.test {
  font-size: 12px;
  color: $text-color-primary;
}
</style>
