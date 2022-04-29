<template>
  <div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiDropdown'
})
export default class extends Vue {
  public static title = {
    zh: '下拉菜单',
    en: 'Dropdown'
  }
}
</script>
