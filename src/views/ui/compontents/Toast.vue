<template>
  <div>
    <p>可提供成功、警告和错误等反馈信息；字段区域最长显示文案内容20个字段以内</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiToast'
})
export default class extends Vue {
  public static title = {
    zh: '轻提示',
    en: 'Toast'
  }
}
</script>
