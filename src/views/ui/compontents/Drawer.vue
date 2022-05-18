<template>
  <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiDrawer'
})
export default class extends Vue {
  public static title = {
    zh: '抽屉',
    en: 'Drawer'
  }
}
</script>
