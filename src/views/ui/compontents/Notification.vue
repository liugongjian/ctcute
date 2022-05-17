<template>
  <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "UiNotification",
})
export default class extends Vue {
  public static title = {
    zh: "通知提醒框",
    en: "Notification",
  }
}
</script>